/* Casos criados por IA a partir do material do aluno.
   Funciona só na versão publicada no Claude: usa o Claude da própria pessoa (claude.use("sample")).
   Nesta etapa a IA só monta casos de derrame pleural, usando as mesmas perguntas, exames,
   análises e diagnósticos de js/dados.js. Tudo o que ela devolve passa por iaValidar antes de entrar no jogo.
   Os casos ficam guardados no navegador de quem criou. */
const IA_CHAVE='plantao-pleural-ia';
const IA_LOOKS={carlos:'homem adulto, bigode',maria:'mulher idosa, óculos, cabelo grisalho',joao:'homem jovem, cabelo cacheado',severino:'homem idoso, calvo',ana:'mulher jovem, cabelo longo',bruno:'homem jovem, magro',lucia:'mulher adulta, cabelo longo',pedro:'homem de meia-idade, calvo, óculos',tonho:'homem idoso, cabelo branco, bigode',raimundo:'homem idoso, calvo',carla:'mulher jovem, ruiva',davi:'rapaz, cabelo cacheado',marcos:'homem adulto'};
const IA_ZONAS=Object.keys(ZNAME).filter(z=>z!=='geral');

function iaLer(){try{return JSON.parse(localStorage.getItem(IA_CHAVE)||'[]');}catch(e){return [];}}
function iaGravar(lista){try{localStorage.setItem(IA_CHAVE,JSON.stringify(lista));}catch(e){}}
function iaRenumerar(){let k=0;CASES.forEach(c=>{if(c.ia)c.n='IA '+(++k);});}
iaLer().forEach(c=>{c.modulo='Feitos pela IA';c.correctSind=c.correctSind||'derrame';CASES.push(c);});iaRenumerar();

// Classificação que os números de Light (e gradientes, se usa diurético) mandam.
function iaClasse(L,diuretico){
 const light=L.protL/L.protS>.5||L.ldhL/L.ldhS>.6||L.ldhL>200*2/3;
 const grad=(L.protS-L.protL)>3.1||(L.albS-L.albL)>1.2;
 return light&&!(diuretico&&grad)?'exsudato':'transudato';
}

// Confere e arruma o que a IA mandou. Devolve {caso, graves, avisos}. Com algum problema grave o caso não entra.
function iaValidar(bruto,fonte){
 const graves=[],avisos=[];
 const limpa=v=>typeof v==='string'?v.replace(/<(?=[A-Za-z\/!?])/g,'‹').trim():Array.isArray(v)?v.map(limpa):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,limpa(x)])):v;
 const r=limpa(bruto||{}),txt=v=>typeof v==='string'&&v.length>0;
 const num=v=>{const n=typeof v==='string'?parseFloat(v.replace(',','.')):v;return typeof n==='number'&&isFinite(n)&&n>0?n:null;};
 const ids=lista=>new Set(lista.map(x=>x.id));
 const qIds=ids(QUESTIONS),exIds=ids(EXAMS),flIds=ids(FLUID_TESTS),dxIds=ids(DX);
 const manobra=id=>id==='vitals'||id==='inspecionar:geral'||(()=>{const[t,z]=String(id).split(':');return TOOLS.some(x=>x.id===t)&&IA_ZONAS.includes(z);})();
 const grupos=(lista,valido,nome)=>{const out=(Array.isArray(lista)?lista:[]).map(g=>({ids:(Array.isArray(g&&g.ids)?g.ids:[]).map(String).filter(valido),l:txt(g&&g.l)?g.l:''})).filter(g=>g.ids.length&&g.l);
  if(!out.length)graves.push('nenhum item que vale ponto em '+nome);return out;};
 const so=(obj,valido)=>Object.fromEntries(Object.entries(obj&&typeof obj==='object'?obj:{}).filter(([k,v])=>valido(k)&&txt(v)));

 const c={id:'ia-'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),n:'IA',ia:true,modulo:'Feitos pela IA',correctSind:'derrame',sindWhy:'Macicez, frêmito e murmúrio abolidos onde há líquido: síndrome de derrame pleural.',fonte:txt(fonte)?limpa(fonte).slice(0,120):'material do aluno'};
 ['title','card','pname','briefing','vitals','geral','fluidLook','dxWhy'].forEach(k=>{if(txt(r[k]))c[k]=r[k];else graves.push('faltou '+k);});
 c.look=IA_LOOKS[r.look]?r.look:'carlos';
 c.answers={};QUESTIONS.forEach(q=>{const a=r.answers&&r.answers[q.id];if(txt(a))c.answers[q.id]=a;else{c.answers[q.id]='Não sei dizer, doutor.';avisos.push('sem resposta para '+q.id);}});
 c.keyQ=grupos(r.keyQ,id=>qIds.has(id),'anamnese');
 c.effSides=(Array.isArray(r.effSides)?r.effSides:[]).filter(s=>s==='D'||s==='E');c.effSides=[...new Set(c.effSides)];
 if(!c.effSides.length)graves.push('não disse o lado do derrame');
 c.exam=so(r.exam,manobra);
 c.keyExam=grupos(r.keyExam,manobra,'exame físico');
 c.res=so(r.res,id=>exIds.has(id)&&id!=='sprot'&&id!=='sdhl');
 c.keyEx=grupos(r.keyEx,id=>exIds.has(id),'exames');
 const chave=c.keyEx.flatMap(g=>g.ids);
 c.neutral=[...new Set((Array.isArray(r.neutral)?r.neutral:[]).map(String))].filter(id=>exIds.has(id)&&!chave.includes(id));
 const rx=r.rx&&typeof r.rx==='object'?r.rx:{},eff={};
 c.effSides.forEach(s=>{const v=num(rx.eff&&rx.eff[s]);eff[s]=v?Math.min(.5,Math.max(.1,v)):.35;});
 c.rx={eff};if(rx.cardio)c.rx.cardio=1;if(rx.consol==='D'||rx.consol==='E')c.rx.consol=rx.consol;
 const tap=r.tap&&typeof r.tap==='object'?r.tap:{};
 c.tap={sides:(Array.isArray(tap.sides)?tap.sides:[]).filter(s=>c.effSides.includes(s)),spaces:[...new Set((Array.isArray(tap.spaces)?tap.spaces:[]).map(Number))].filter(n=>Number.isInteger(n)&&n>=1&&n<=8).sort((a,b)=>a-b)};
 if(!c.tap.sides.length)c.tap.sides=c.effSides.slice();
 if(!c.tap.spaces.length){c.tap.spaces=[6,7,8];avisos.push('espaços da punção ajustados');}
 c.fluidColor=/^#[0-9a-fA-F]{6}$/.test(r.fluidColor||'')?r.fluidColor:'#e8cd5e';
 const L=r.light&&typeof r.light==='object'?r.light:{};
 c.light={};['protL','protS','ldhL','ldhS','albL','albS'].forEach(k=>{const v=num(L[k]);if(v)c.light[k]=v;else graves.push('faltou o valor '+k+' de Light');});
 c.fluid=so(r.fluid,id=>flIds.has(id));
 if(Object.keys(c.light).length===6){ // o texto do líquido precisa bater com os números de Light
  c.fluid.prot='Proteínas totais '+nf(c.light.protL)+' g/dL';c.fluid.dhl='DHL '+c.light.ldhL+' UI/L';c.fluid.alb='Albumina '+nf(c.light.albL)+' g/dL';}
 c.keyFluid=grupos(r.keyFluid,id=>flIds.has(id),'análise do líquido');
 if(r.diuretico===true)c.diuretico=true;
 c.correctClass=r.correctClass==='transudato'?'transudato':r.correctClass==='exsudato'?'exsudato':null;
 if(!c.correctClass)graves.push('não disse se é transudato ou exsudato');
 else if(Object.keys(c.light).length===6&&iaClasse(c.light,c.diuretico)!==c.correctClass)graves.push(`os números de Light dão ${iaClasse(c.light,c.diuretico)}, mas o caso diz ${c.correctClass}`);
 if(txt(r.clsNote))c.clsNote=r.clsNote;
 c.correctDx=dxIds.has(r.correctDx)?r.correctDx:null;if(!c.correctDx)graves.push('diagnóstico fora da lista do jogo');
 c.conduta=(Array.isArray(r.conduta)?r.conduta:[]).filter(x=>x&&txt(x.t)&&txt(x.why)).slice(0,10).map((x,i)=>({id:'c'+(i+1),t:x.t,ok:x.ok===true||x.ok===1?1:0,why:x.why}));
 if(!c.conduta.some(x=>x.ok))graves.push('nenhuma conduta certa');
 if(!c.conduta.some(x=>!x.ok))graves.push('nenhuma conduta errada para o aluno descartar');
 c.teaching=(Array.isArray(r.teaching)?r.teaching:[]).filter(x=>x&&txt(x.t)&&txt(x.p)).slice(0,6);
 if(!c.teaching.length)graves.push('faltaram os pontos para levar');
 return {caso:c,graves,avisos};
}

function iaPrompt(material,feitos,temFotos){
 const exemplo=Object.assign({},CASES.find(c=>c.id==='tb')||CASES[0]);
 ['id','n','ia','fonte','modulo','correctSind','sindWhy'].forEach(k=>delete exemplo[k]);
 return `Você é um professor de medicina que escreve casos clínicos para um jogo de estudo. O aluno é o médico de plantão: conversa com o paciente, examina, pede exames, faz toracocentese e decide classificação, diagnóstico e conduta.

TAREFA: crie UM caso clínico de derrame pleural baseado SOMENTE no material de estudo do aluno abaixo${temFotos?' (e nas fotos das páginas enviadas junto)':''}.

REGRAS
1. Conteúdo médico só do material: critérios, valores de corte, achados e condutas precisam estar no material. Não invente o que o material não diz. O "dxWhy", a "conduta" e o "teaching" devem citar os critérios do material.
2. Se o material não tratar de derrame pleural, responda só {"erro":"explique em uma frase"}.
3. Paciente fictício: nome e história inventados, brasileiro, linguagem leiga nas respostas, em português do Brasil.
4. Nada mastigado: o briefing, as respostas e os resultados não dizem o que é importante nem chamam valor de alterado. Resultados crus, com unidade e referência quando fizer sentido.
5. Coerência dos números: os 6 valores de "light" (proteína e DHL do líquido e do soro, albumina do líquido e do soro) precisam levar à "correctClass" pelos critérios de Light (proteína líquido/soro > 0,5; DHL líquido/soro > 0,6; DHL do líquido > 2/3 do limite superior do soro, que no jogo é 200, ou seja > 133). Se o paciente usa diurético ("diuretico": true), gradiente de proteína soro−líquido > 3,1 g/dL ou de albumina > 1,2 g/dL torna transudato.
6. Use SÓ os ids das listas abaixo. Responda TODAS as perguntas.
7. Escolha um diagnóstico diferente destes já criados: ${feitos.length?feitos.join(', '):'(nenhum ainda)'}. Varie idade, sexo e lado do derrame.
8. Misture condutas certas e erradas plausíveis (5 a 8 no total), cada uma com o porquê.

LISTAS DO JOGO
Perguntas (answers e keyQ): ${QUESTIONS.map(q=>q.id+' = "'+q.t+'"').join('; ')}
Manobras do exame físico (exam e keyExam): "vitals" (pedir sinais vitais), "inspecionar:geral", ou "ferramenta:região" com ferramenta em ${TOOLS.map(t=>t.id).join(', ')} e região em ${IA_ZONAS.join(', ')}. Bases com derrame já mostram macicez e murmúrio abolido sozinhas; use "exam" só para achados diferentes disso.
Exames (res, keyEx, neutral): ${EXAMS.map(e=>e.id+' = '+e.t).join('; ')}. Proteínas e DHL séricos saem de "light", não escreva em "res". Exame que não estiver em "res" mostra este padrão normal: ${JSON.stringify(DEF_RES)}. Exame fora de keyEx e neutral tira ponto do aluno.
Análises do líquido (fluid e keyFluid): ${FLUID_TESTS.map(f=>f.id+' = '+f.t).join('; ')}
Diagnósticos (correctDx): ${DX.map(d=>d.id+' = '+d.t).join('; ')}
Aparência do paciente (look): ${Object.entries(IA_LOOKS).map(([k,v])=>k+' = '+v).join('; ')}
Radiografia (rx): eff = tamanho do derrame por lado de 0,1 a 0,5; cardio: 1 se cardiomegalia; consol: "D" ou "E" se consolidação. Toracocentese (tap): lados com líquido e espaços intercostais de 1 a 8 contados de cima onde a agulha acha líquido.

FORMATO: responda só com um objeto JSON no mesmo formato deste caso de exemplo (é só o molde, não copie o conteúdo):
${JSON.stringify(exemplo)}

MATERIAL DO ALUNO
"""
${material||'(o material está nas fotos enviadas)'}
"""`;
}

/* ================= TELA ================= */
const IA={sample:null,pronto:false,fotos:false,ctl:null,status:'',erro:''};
function iaHome(){
 const box=document.getElementById('iaBox');if(!box)return;
 const meus=CASES.filter(c=>c.ia).length;
 if(!IA.sample){
  box.innerHTML=`<h2>Casos do seu material</h2><p class="muted">${IA.pronto?'A IA que monta casos a partir do seu resumo só funciona na versão do jogo aberta pelo Claude (claude.ai).':'Procurando a IA...'}</p>`;return;}
 box.innerHTML=`<h2>Casos do seu material</h2>
  <p class="muted">Cole um trecho do resumo ou da aula${IA.fotos?', ou mande fotos das páginas,':''} e a IA monta pacientes novos de derrame pleural com base nele. Usa o seu Claude e pode levar alguns minutos por caso.</p>
  <label class="lbl" for="iaTexto">Texto do material</label>
  <textarea id="iaTexto" rows="6" placeholder="Ex.: copie aqui a parte do resumo sobre derrame pleural..."></textarea>
  <div class="row">
   <label class="btn ghost small filebtn">${IA.fotos?'Fotos ou arquivo .txt':'Arquivo .txt'}<input type="file" id="iaArq" multiple accept="${IA.fotos?'image/*,':''}.txt,.md,text/plain"></label>
   <span class="muted" id="iaArqNome" style="font-size:.85rem">Nenhum arquivo</span>
  </div>
  <div class="row">
   <label for="iaQtd" class="muted" style="font-size:.9rem">Quantos casos</label>
   <select id="iaQtd"><option>1</option><option selected>2</option><option>3</option></select>
   <button class="btn" id="iaGerar">Criar casos</button>
   <button class="btn ghost" id="iaParar" hidden>Parar</button>
  </div>
  <div id="iaStatus" class="iastatus" aria-live="polite"></div>
  ${meus?`<p class="muted" style="font-size:.85rem;margin-top:10px">Você tem ${meus} caso(s) feito(s) pela IA. <button class="linkbtn" id="iaApagar">Apagar todos</button></p>`:''}
  <p class="foot" style="margin-top:10px">A IA pode errar. Casos da IA aparecem como "IA" no menu: confira o que ela escreveu com o seu material.</p>`;
 document.getElementById('iaGerar').onclick=iaGerar;
 document.getElementById('iaParar').onclick=()=>IA.ctl&&IA.ctl.abort();
 document.getElementById('iaArq').onchange=e=>{const f=[...e.target.files];document.getElementById('iaArqNome').textContent=f.length?f.map(x=>x.name).join(', '):'Nenhum arquivo';};
 const ap=document.getElementById('iaApagar');
 if(ap)ap.onclick=()=>{if(!confirm('Apagar todos os casos feitos pela IA?'))return;for(let i=CASES.length-1;i>=0;i--)if(CASES[i].ia)CASES.splice(i,1);iaGravar([]);renderHome();};
}
function iaMsg(html){const s=document.getElementById('iaStatus');if(s)s.innerHTML=html;}
const IA_ERROS={not_granted:'Você não autorizou o jogo a usar o Claude.',sampling_disabled:'O Claude não está disponível nesta conta.',rate_limited:'Muitos pedidos seguidos ou limite de uso atingido. Tente de novo mais tarde.',session_expired:'Sua sessão expirou. Entre de novo no Claude.',image_rejected:'Uma das fotos não foi aceita. Tente outra foto ou menos fotos.',images_unavailable:'Fotos não estão disponíveis aqui. Use o texto.',prompt_too_large:'O material é grande demais. Mande um trecho menor.',invalid_json:'A IA respondeu fora do formato. Tente de novo.',refused:'A IA recusou esse material. Tente outro trecho.'};

async function iaGerar(){
 const texto=document.getElementById('iaTexto').value.trim().slice(0,60000);
 const arqs=[...document.getElementById('iaArq').files];
 const fotos=arqs.filter(f=>f.type.startsWith('image/'));
 let extra='';for(const f of arqs.filter(f=>!f.type.startsWith('image/')))extra+='\n\n'+(await f.text()).slice(0,60000);
 const material=(texto+extra).trim().slice(0,80000);
 if(!material&&!fotos.length){iaMsg('<div class="note">Cole um trecho do material ou escolha um arquivo.</div>');return;}
 if(fotos.length&&!IA.fotos){iaMsg('<div class="note">Fotos não estão disponíveis aqui. Use o texto.</div>');return;}
 const fonte=arqs.length?arqs.map(f=>f.name).join(', '):(material.split('\n').find(l=>l.trim())||'texto colado').slice(0,60);
 const qtd=+document.getElementById('iaQtd').value;
 const btn=document.getElementById('iaGerar'),parar=document.getElementById('iaParar');
 btn.disabled=true;parar.hidden=false;
 const feitos=[],novos=[],log=[];
 const mostra=atual=>iaMsg(log.map(l=>`<div class="${l.k}">${l.t}</div>`).join('')+(atual?`<div class="iawait">${atual}</div>`:''));
 try{
  for(let i=0;i<qtd;i++){
   IA.ctl=new AbortController();
   mostra(`Montando o caso ${i+1} de ${qtd}... (a IA pensa antes de escrever, pode levar 1 a 3 minutos)`);
   const opts={signal:IA.ctl.signal,modelTier:'complex',cache:false};if(fotos.length)opts.images=fotos;
   let resp=await IA.sample.json(iaPrompt(material,feitos,fotos.length>0),opts);
   if(resp&&resp.erro){log.push({k:'note',t:'A IA não montou o caso: '+String(resp.erro).replace(/</g,'‹')});break;}
   let v=iaValidar(resp,fonte);
   if(v.graves.length){ // uma chance de corrigir
    mostra(`O caso ${i+1} veio com problemas (${v.graves.join('; ')}). Pedindo correção...`);
    IA.ctl=new AbortController();
    resp=await IA.sample.json(iaPrompt(material,feitos,fotos.length>0)+`\n\nVOCÊ JÁ ENVIOU ESTE CASO:\n${JSON.stringify(resp)}\n\nELE TEM ESTES PROBLEMAS: ${v.graves.join('; ')}.\nDevolva o caso inteiro corrigido, só o JSON.`,Object.assign({},opts,{signal:IA.ctl.signal}));
    v=iaValidar(resp,fonte);
   }
   if(v.graves.length){log.push({k:'event',t:`Caso ${i+1} descartado: ${v.graves.join('; ')}.`});continue;}
   CASES.push(v.caso);novos.push(v.caso);feitos.push(DX.find(d=>d.id===v.caso.correctDx).t);
   iaGravar(CASES.filter(c=>c.ia));iaRenumerar();
   log.push({k:'okmsg',t:`Pronto: <b>${v.caso.title}</b> (${v.caso.pname}).`});
  }
 }catch(e){
  if(e&&e.code!=='cancelled')log.push({k:'event',t:IA_ERROS[e&&e.code]||'Não deu certo agora. Tente de novo em instantes.'});
  else log.push({k:'note',t:'Parado.'});
 }
 IA.ctl=null;
 if(novos.length){renderHome();iaMsg(log.map(l=>`<div class="${l.k}">${l.t}</div>`).join('')+'<p class="muted" style="margin-top:8px">Os casos novos estão no menu acima, marcados como IA.</p>');}
 else{mostra('');const b=document.getElementById('iaGerar'),p=document.getElementById('iaParar');if(b)b.disabled=false;if(p)p.hidden=true;}
}

(async()=>{
 try{
  if(window.claude&&claude.use){
   IA.sample=await claude.use('sample');
   if(IA.sample){const lim=await IA.sample.limits().catch(()=>null);IA.fotos=!!(lim&&lim.images);}
  }
 }catch(e){IA.sample=null;}
 IA.pronto=true;iaHome();
})();
