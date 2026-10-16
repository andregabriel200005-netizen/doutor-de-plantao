// Teste automático: abre o jogo num navegador de verdade e confere se tudo funciona.
// Uso: npm test   (rode "npm run build" antes, o teste usa dist/plantao-pleural.html)
//
// O que ele verifica em CADA caso de js/casos/:
//  1. Jogada perfeita (todas as perguntas, manobras, exames e condutas-chave) precisa dar 100.
//  2. Jogada ruim (nada investigado, diagnóstico errado) precisa dar nota baixa.
//  3. Os dados do caso são coerentes (Light bate com a classificação, campos obrigatórios existem).
//  4. Nenhum erro de JavaScript na página.
// Também joga o caso 1 clicando na interface e tira prints em tests/prints/.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARQ = 'file://' + path.join(__dirname, '..', 'dist', 'plantao-pleural.html');
const PRINTS = path.join(__dirname, 'prints');
const CAMINHOS = [process.env.CHROMIUM_PATH, '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'].filter(p => p && fs.existsSync(p));

let falhas = 0;
const ok = (cond, msg) => { console.log((cond ? '  ✔ ' : '  ✘ ') + msg); if (!cond) falhas++; };

(async () => {
  fs.mkdirSync(PRINTS, { recursive: true });
  const browser = await chromium.launch(CAMINHOS.length ? { executablePath: CAMINHOS[0] } : {});
  const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
  const erros = [];
  page.on('pageerror', e => erros.push(e.message));
  await page.goto(ARQ);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(PRINTS, '00-inicio.png') });

  const n = await page.evaluate(() => CASES.length);
  console.log(`\n${n} caso(s) encontrados\n`);

  for (let i = 0; i < n; i++) {
    const r = await page.evaluate(i => {
      const c = CASES[i], prob = [];
      const pleural = !!c.light;
      const obrig = ['id', 'modulo', 'fonte', 'n', 'title', 'look', 'pname', 'briefing', 'vitals', 'answers', 'keyQ', 'geral', 'effSides', 'exam', 'keyExam', 'res', 'keyEx', 'neutral', 'rx', 'tap', 'correctSind', 'sindWhy', 'correctDx', 'dxWhy', 'conduta', 'teaching']
        .concat(pleural ? ['fluidColor', 'fluidLook', 'fluid', 'keyFluid', 'light', 'correctClass'] : []);
      obrig.forEach(k => { if (c[k] === undefined) prob.push('falta o campo ' + k); });
      if (CASES.some(o => o !== c && o.id === c.id)) prob.push('id repetido: ' + c.id);
      sindLista(c).forEach(id => { if (!SINDROMES.some(d => d.id === id)) prob.push('síndrome inexistente: ' + id); });
      // ids que não existem viram itens impossíveis de pontuar
      const manobra = id => id === 'vitals' || id === 'inspecionar:geral' || id === 'ordem:abdome' || (String(id).startsWith('manobra:') && MANOBRAS.some(x => 'manobra:' + x.id === id)) || (() => { const [t, z] = String(id).split(':'); return TOOLS.some(x => x.id === t) && ZNAME[z] && z !== 'geral'; })();
      const exame = id => EXAMS.some(e => e.id === id);
      (c.keyQ || []).forEach(g => g.ids.forEach(id => { if (!QUESTIONS.some(q => q.id === id)) prob.push('pergunta inexistente em keyQ: ' + id); }));
      (c.keyExam || []).forEach(g => g.ids.forEach(id => { if (!manobra(id)) prob.push('manobra inexistente em keyExam: ' + id); }));
      Object.keys(c.exam || {}).forEach(id => { if (!manobra(id)) prob.push('manobra inexistente em exam: ' + id); });
      (c.keyEx || []).forEach(g => g.ids.forEach(id => { if (!exame(id)) prob.push('exame inexistente em keyEx: ' + id); }));
      (c.neutral || []).forEach(id => { if (!exame(id)) prob.push('exame inexistente em neutral: ' + id); });
      Object.keys(c.res || {}).forEach(id => { if (!exame(id)) prob.push('exame inexistente em res: ' + id); });
      Object.keys(c.answers || {}).forEach(id => { if (!QUESTIONS.some(q => q.id === id)) prob.push('resposta para pergunta inexistente: ' + id); });
      QUESTIONS.forEach(q => { if (!c.answers || !c.answers[q.id]) prob.push('sem resposta para a pergunta ' + q.id); });
      if (!LOOKS[c.look]) prob.push('personagem inexistente: ' + c.look);
      if (!DX.some(d => d.id === c.correctDx)) prob.push('diagnóstico correto não está na lista DX');
      if (pleural) {
        const L = c.light, light = L.protL / L.protS > .5 || L.ldhL / L.ldhS > .6 || L.ldhL > 200 * 2 / 3;
        const grad = (L.protS - L.protL) > 3.1 || (L.albS - L.albL) > 1.2;
        const esperado = light && !(c.diuretico && grad) ? 'exsudato' : 'transudato';
        if (esperado !== c.correctClass) prob.push(`Light/gradiente dá ${esperado}, mas o caso diz ${c.correctClass}`);
      }
      if (!c.conduta.some(x => x.ok)) prob.push('nenhuma conduta correta');

      // jogada perfeita
      newGame(i);
      G.asked = c.keyQ.map(g => g.ids[0]);
      G.examined = c.keyExam.map(g => g.ids[0]);
      c.keyEx.forEach(g => G.orders[g.ids[0]] = 0);
      G.clock = 300;
      if (pleural) {
        G.tap = { space: { s: c.tap.sides[0], i: c.tap.spaces[0] }, pos: 'sup', vol: '60' };
        doTap();
        c.keyFluid.forEach(g => G.fluid[g.ids[0]] = 0);
      }
      G.final = { cls: c.correctClass, sind: sindLista(c)[0], dx: c.correctDx, cond: c.conduta.filter(x => x.ok).map(x => x.id) };
      const perfeita = score().total;

      // jogada ruim
      newGame(i);
      G.final = { cls: c.correctClass === 'exsudato' ? 'transudato' : 'exsudato', sind: SINDROMES.find(d => !sindLista(c).includes(d.id)).id, dx: DX.find(d => d.id !== c.correctDx).id, cond: c.conduta.filter(x => !x.ok).map(x => x.id) };
      const ruim = score().total;
      // puncionar quem não tem derrame custa ponto
      let seca = null;
      if (!pleural) {
        newGame(i);
        G.asked = c.keyQ.map(g => g.ids[0]); G.examined = c.keyExam.map(g => g.ids[0]); c.keyEx.forEach(g => G.orders[g.ids[0]] = 0); G.clock = 300;
        G.tap = { space: { s: 'D', i: 7 }, pos: 'sup', vol: '60' }; doTap();
        G.final = { sind: sindLista(c)[0], dx: c.correctDx, cond: c.conduta.filter(x => x.ok).map(x => x.id) };
        seca = { nota: score().total, colheu: G.tapped };
      }
      return { nome: c.modulo + ' · ' + c.n + ' · ' + c.title, prob, perfeita, ruim, seca };
    }, i);
    console.log(r.nome);
    ok(r.prob.length === 0, r.prob.length ? 'dados com problema: ' + r.prob.join('; ') : 'dados do caso coerentes');
    ok(r.perfeita === 100, `jogada perfeita = ${r.perfeita}/100`);
    ok(r.ruim <= 10, `jogada ruim = ${r.ruim}/100`);
    if (r.seca) ok(!r.seca.colheu && r.seca.nota < 100, `punção sem derrame não colhe nada e desconta (${r.seca.nota}/100)`);

    await page.evaluate(i => { newGame(i); G.orders.rx = 0; openM('xray'); show('game'); }, i);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(PRINTS, `rx-caso-${i + 1}.png`) });
    await page.evaluate(() => { closeM(); G = null; renderHome(); show('home'); });
  }

  // jogada pela interface, clicando como um aluno
  console.log('\nJogando o caso 1 pela interface');
  await page.click('.ccard >> nth=0');
  await page.waitForTimeout(400);
  await page.click('[data-m="vitals"]');
  await page.click('[data-m="close"]');
  const box = await page.locator('#cv').boundingBox();
  await page.mouse.click(box.x + 80 / 480 * box.width, box.y + 80 / 288 * box.height);
  await page.waitForSelector('[data-m="ask"]', { timeout: 8000 });
  ok(true, 'andou até o leito e abriu a conversa');
  await page.click('[data-m="ask"][data-v="dor"]');
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(PRINTS, '01-conversa.png') });
  await page.click('[data-m="tab"][data-v="exam"]');
  await page.click('[data-m="tool"][data-v="percutir"]');
  await page.click('[data-m="ex"][data-v="baseD"]');
  ok((await page.textContent('.flog')).includes('maciço'), 'percussão da base direita mostra macicez');
  await page.screenshot({ path: path.join(PRINTS, '02-exame.png') });
  await page.click('[data-m="tab"][data-v="tap"]');
  await page.screenshot({ path: path.join(PRINTS, '03-toracocentese.png') });
  await page.click('[data-m="close"]');
  await page.evaluate(() => { G.tapped = true; openM('close'); });
  await page.check('input[name=sind][value=derrame]');
  await page.check('input[name=cls][value=exsudato]');
  await page.check('input[name=dx][value=empiema]');
  await page.check('[data-m="fcond"][value="c1"]');
  await page.click('[data-m="sign"]');
  await page.waitForTimeout(200);
  ok(await page.isVisible('#debrief'), 'tela de resultado apareceu');
  await page.screenshot({ path: path.join(PRINTS, '04-resultado.png'), fullPage: true });

  // celular
  const cel = await browser.newPage({ viewport: { width: 390, height: 800 } });
  cel.on('pageerror', e => erros.push(e.message));
  await cel.goto(ARQ);
  await cel.click('.ccard >> nth=0');
  await cel.waitForTimeout(300);
  const larg = await cel.evaluate(() => document.documentElement.scrollWidth);
  ok(larg <= 390, `celular sem rolagem lateral (largura ${larg}px)`);
  await cel.screenshot({ path: path.join(PRINTS, '05-celular.png') });

  // abdome: palpar antes de auscultar perde o ponto da ordem e a ausculta avisa
  const ordem = await page.evaluate(() => {
    const i = CASES.findIndex(c => c.id === 'd-apend'); newGame(i); show('game'); openM('patient', { tab: 'exam' });
    const clicar = (m, v) => document.querySelector(`[data-m="${m}"][data-v="${v}"]`).dispatchEvent(new MouseEvent("click", { bubbles: true }));
    clicar('tool', 'palpar'); clicar('ex', 'fie'); clicar('tool', 'auscultar'); clicar('ex', 'meso');
    const errado = { ponto: G.examined.includes('ordem:abdome'), aviso: G.examLog.at(-1).v.includes('já tinha sido palpado') };
    closeM(); newGame(i); show('game'); openM('patient', { tab: 'exam' });
    clicar('tool', 'auscultar'); clicar('ex', 'meso');
    const certo = G.examined.includes('ordem:abdome');
    closeM(); G = null; renderHome(); show('home');
    return { errado, certo };
  });
  ok(!ordem.errado.ponto && ordem.errado.aviso && ordem.certo, 'abdome: auscultar antes de palpar vale ponto; o contrário avisa e não pontua');

  // sons de ausculta: toda ausculta de todo caso gera som, e os achados principais viram o som certo
  const sons = await page.evaluate(() => {
    const prob = [];
    const zonas = [...TORAX, ...FOCOS, ...PULSOS, ...REGIOES, 'coracao', 'abdome'];
    let tocados = 0;
    CASES.forEach((c, i) => {
      newGame(i);
      zonas.forEach(z => {
        const som = somDoAchado(findExam('auscultar', z), z, c);
        if (!som) prob.push(`${c.id}: ausculta sem som em ${z}`);
        else if (tocados < 60) { try { tocarSom(som); tocados++; } catch (e) { prob.push(`${c.id} ${z}: ${e.message}`); } }
      });
      MANOBRAS.forEach(m => { try { const s = somDoAchado(findExam('manobra', m.id), 'manobra:' + m.id, c); if (s) tocarSom(s); } catch (e) { prob.push(`${c.id} ${m.id}: ${e.message}`); } });
    });
    const som = (id, tool, z) => { newGame(CASES.findIndex(c => c.id === id)); return somDoAchado(findExam(tool, z), tool === 'manobra' ? 'manobra:' + z : z, G.c); };
    const casos = {
      'pneumonia: sopro tubárico e finos': (s => s.tubario && s.finos)(som('r-pneumo', 'auscultar', 'baseD')),
      'asma: sibilos e expiração prolongada': (s => s.sib && s.expProl)(som('r-asma', 'auscultar', 'baseE')),
      'derrame: murmúrio abolido': som('tb', 'auscultar', 'baseE').mv === 0,
      'estenose mitral: ruflar com reforço': (s => s.sopros.some(p => p.t === 'ruflar' && p.pres))(som('c-em', 'manobra', 'pachon')),
      'estenose aórtica: ejetivo e clique': (s => s.clique && s.sopros.some(p => p.t === 'ejetivo'))(som('c-eao', 'auscultar', 'focoAo')),
      'insuficiência mitral: holossistólico e B3': (s => s.b3 && s.sopros.some(p => p.t === 'holo'))(som('c-im', 'auscultar', 'focoM')),
      'insuficiência aórtica: diastólico aspirativo': som('c-iao', 'auscultar', 'focoAo').sopros.some(p => p.t === 'diastAsp'),
      'pericardite: atrito': !!som('c-peric', 'auscultar', 'focoT').atrito,
      'perfuração: silêncio abdominal': som('d-perf', 'auscultar', 'meso').rha === 'ausente',
      'obstrução: ruídos metálicos': som('d-obst', 'auscultar', 'meso').rha === 'metalico',
      'normal: coração sem sopro': som('r-susp', 'auscultar', 'focoM').sopros.length === 0
    };
    G = null;
    Object.entries(casos).forEach(([k, v]) => { if (!v) prob.push('som errado: ' + k); });
    return { prob, tocados };
  });
  ok(sons.prob.length === 0, sons.prob.length ? 'sons com problema: ' + sons.prob.slice(0, 8).join(' | ') : `sons de ausculta gerados para todos os casos (${sons.tocados} tocados no teste)`);

  // sons de percussão: tórax e abdome sempre tocam, e cada achado vira o som certo
  const perc = await page.evaluate(() => {
    const prob = [];
    CASES.forEach((c, i) => {
      newGame(i);
      [...TORAX, ...REGIOES].forEach(z => {
        const s = somPercussao(findExam('percutir', z), z);
        if (!s) prob.push(`${c.id}: percussão sem som em ${z}`); else { try { tocarSom(s); } catch (e) { prob.push(`${c.id} ${z}: ${e.message}`); } }
      });
    });
    const som = (id, tool, z) => { newGame(CASES.findIndex(c => c.id === id)); return somPercussao(findExam(tool, z), tool === 'manobra' ? 'manobra:' + z : z); };
    const casos = {
      'derrame: maciço': som('tb', 'percutir', 'baseE').seq[0] === 'macico',
      'normal: claro pulmonar': som('r-susp', 'percutir', 'baseD').seq[0] === 'claro',
      'pneumotórax: hipertimpânico': som('r-ptx', 'percutir', 'baseE').seq[0] === 'hipertimp',
      'asma: hipersonoro': som('r-asma', 'percutir', 'baseD').seq[0] === 'hipersonoro',
      'pneumonia: submaciço': som('r-pneumo', 'percutir', 'baseD').seq[0] === 'submacico',
      'abdome normal: timpânico': som('d-apend', 'percutir', 'meso').seq[0] === 'timp',
      'fígado: maciço': som('d-apend', 'percutir', 'hcd').seq[0] === 'macico',
      'Jobert: hipertimpânico': som('d-perf', 'manobra', 'jobert').seq[0] === 'hipertimp',
      'Traube maciço na esquistossomose': som('d-esq', 'manobra', 'traube').seq[0] === 'macico',
      'Skoda: timpânico e depois maciço': som('d-cirr', 'manobra', 'skoda').seq.join() === 'timp,timp,macico,macico',
      'macicez móvel: maciço vira timpânico': som('d-cirr', 'manobra', 'macicezmovel').seq.join() === 'macico,macico,timp,timp',
      'coração: percussão não toca': som('c-eao', 'percutir', 'focoAo') === null
    };
    G = null;
    Object.entries(casos).forEach(([k, v]) => { if (!v) prob.push('som errado: ' + k); });
    return prob;
  });
  ok(perc.length === 0, perc.length ? 'percussão com problema: ' + perc.slice(0, 8).join(' | ') : 'sons de percussão gerados para tórax e abdome de todos os casos');

  // casos da IA: fora do Claude, só um aviso
  ok((await page.textContent('#iaBox')).includes('só funciona'), 'fora do Claude, a área da IA avisa que não está disponível');

  // validação do que a IA manda
  const val = await page.evaluate(() => {
    const base = JSON.parse(JSON.stringify(CASES.find(c => c.id === 'tb')));
    const bom = iaValidar(base, 'teste');
    const errado = JSON.parse(JSON.stringify(base)); errado.light.protL = 1; errado.light.ldhL = 50;
    const ruim = iaValidar(errado, 'teste');
    const tag = JSON.parse(JSON.stringify(base)); tag.title = '<img src=x onerror=alert(1)>Oi'; tag.res.pcr = 'PCR < 5';
    const lim = iaValidar(tag, 'teste').caso;
    return { bom: bom.graves, ruim: ruim.graves, titulo: lim.title, pcr: lim.res.pcr };
  });
  ok(val.bom.length === 0, 'caso bem formado da IA é aceito' + (val.bom.length ? ': ' + val.bom.join('; ') : ''));
  ok(val.ruim.some(g => g.includes('Light')), 'caso da IA com Light incoerente é barrado');
  ok(!val.titulo.includes('<img') && val.pcr === 'PCR < 5', 'texto da IA é limpo sem estragar o sinal de menor');

  // dentro do Claude (IA de mentira que devolve um caso pronto)
  console.log('\nCriando um caso pela IA (simulada)');
  const ia = await browser.newPage({ viewport: { width: 1000, height: 900 } });
  ia.on('pageerror', e => erros.push(e.message));
  await ia.addInitScript(() => {
    const fake = async () => '';
    fake.limits = async () => ({ maxPromptBytes: 262144, images: { maxCount: 5, maxInputBytes: 2e7, mediaTypes: ['image/png', 'image/jpeg'] } });
    fake.json = async prompt => {
      window.__prompt = prompt;
      const c = JSON.parse(JSON.stringify(CASES.find(x => x.id === 'tb')));
      c.title = 'Caso da IA'; c.pname = 'Rita'; c.look = 'maria';
      return c;
    };
    window.claude = { use: async n => (n === 'sample' ? fake : null) };
  });
  await ia.goto(ARQ);
  await ia.waitForSelector('#iaGerar', { timeout: 5000 });
  await ia.fill('#iaTexto', 'Derrame pleural: critérios de Light, ADA acima de 40 sugere tuberculose...');
  await ia.selectOption('#iaQtd', '1');
  await ia.screenshot({ path: path.join(PRINTS, '06-ia-formulario.png'), fullPage: true });
  await ia.click('#iaGerar');
  await ia.waitForSelector('.ccard:has-text("Caso da IA")', { timeout: 5000 });
  ok(true, 'caso criado pela IA apareceu no menu');
  const r2 = await ia.evaluate(() => {
    const i = CASES.findIndex(c => c.ia), c = CASES[i];
    newGame(i);
    G.asked = c.keyQ.map(g => g.ids[0]); G.examined = c.keyExam.map(g => g.ids[0]);
    c.keyEx.forEach(g => G.orders[g.ids[0]] = 0); G.clock = 300;
    G.tap = { space: { s: c.tap.sides[0], i: c.tap.spaces[0] }, pos: 'sup', vol: '60' }; doTap();
    c.keyFluid.forEach(g => G.fluid[g.ids[0]] = 0);
    G.final = { cls: c.correctClass, sind: sindLista(c)[0], dx: c.correctDx, cond: c.conduta.filter(x => x.ok).map(x => x.id) };
    const nota = score().total; G = null;
    return { nota, guardado: JSON.parse(localStorage.getItem('plantao-pleural-ia') || '[]').length, prompt: window.__prompt.includes('ADA acima de 40') };
  });
  ok(r2.prompt, 'o material colado foi enviado para a IA');
  ok(r2.nota === 100, `jogada perfeita no caso da IA = ${r2.nota}/100`);
  ok(r2.guardado === 1, 'caso da IA fica guardado no navegador');
  await ia.screenshot({ path: path.join(PRINTS, '07-ia-pronto.png'), fullPage: true });
  await ia.reload();
  await ia.waitForTimeout(300);
  ok(await ia.isVisible('.ccard:has-text("Caso da IA")'), 'caso da IA continua no menu depois de recarregar');
  await ia.click('.ccard:has-text("Caso da IA")');
  await ia.waitForTimeout(300);
  await ia.evaluate(() => { G.final = { cls: 'exsudato', dx: 'tb', cond: [] }; finish(); });
  ok((await ia.textContent('#debrief')).includes('criado pela IA'), 'resultado do caso da IA avisa que foi feito pela IA');

  ok(erros.length === 0, erros.length ? 'erros de JavaScript: ' + erros.join(' | ') : 'nenhum erro de JavaScript');
  await browser.close();
  console.log(falhas ? `\n${falhas} problema(s) encontrado(s).` : '\nTudo certo. Prints em tests/prints/');
  process.exit(falhas ? 1 : 0);
})();
