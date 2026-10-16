// Digestório 5: A barriga enorme. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// ascite, paracentese e GASA, pesquisa de ascite, estigmas da cirrose, Child-Pugh (4.1), fígado (3.1), questão 4 da monitoria (6).
CASES.push({
 id:'d-cirr',modulo:'Semiologia do digestório',n:'Caso 5',title:'A barriga enorme',look:'mario',pname:'Seu Mário',fonte:FONTE_DIG,
 card:'Mário, 58 anos. A barriga cresceu e aperta a respiração.',
 briefing:'Doutor, leito 3: Seu Mário, 58 anos. A barriga está enorme e ele está com falta de ar.',
 vitals:'PA 104/62 mmHg · FC 92 bpm · FR 22 irpm · T 36,8 °C · SpO₂ 95% em ar ambiente',
 answers:respostas({
  queixa:'A barriga tá enorme e tô sem ar por causa dela.',
  tempo:'Vem crescendo faz uns dois meses.',
  inicio:'Aos poucos.',
  dispneia:'A barriga aperta e falta o ar.',
  habitos:'Bebo cachaça todo dia, meio litro, há uns 20 anos. Fumo também.',
  urinacor:'Tá escura.',
  edema:'As pernas incham.',
  peso:'Perdi músculo, mas a barriga cresceu.',
  emocional:'A esposa diz que ando esquecido e dormindo de dia.',
  trabalho:'Era mecânico. Parei faz um ano.',
  sal:'Como mal.'
 }),
 keyQ:[{ids:['habitos'],l:'Quantificar o álcool'},{ids:['emocional'],l:'Sonolência e esquecimento (encefalopatia)'},{ids:['tempo'],l:'Evolução da ascite'},{ids:['fezes','vomito'],l:'Sangramento digestivo (afastar)'},{ids:['transfusao','rio'],l:'Outras causas de hepatopatia (transfusão, rio)'}],
 geral:'Emagrecido nos braços, com o abdome muito grande. Escleras amareladas. Pequenas aranhas vermelhas no tórax e no rosto. Mamas aumentadas. Sonolento, mas responde.',
 effSides:[],
 exam:{
  'inspecionar:meso':'Abdome globoso, tenso. Umbigo saltado (hérnia). Veias saltadas saindo do umbigo como raios.',
  'percutir:fld':'Som maciço.','percutir:fle':'Som maciço.','percutir:meso':'Som timpânico.',
  'manobra:piparote':'Com a mão de um ajudante na linha média, o peteleco num flanco faz uma onda que chega ao outro flanco.',
  'manobra:macicezmovel':'A macicez dos flancos muda de lugar quando ele vira de lado.',
  'manobra:skoda':'Timpanismo no centro e macicez na periferia, em semicírculo com a concavidade para cima.',
  'manobra:lemos':'Fígado não palpável.',
  'manobra:rechaco':'Não se sente o fígado voltar.',
  'manobra:hepatimetria':'Lobo direito 5 cm na linha hemiclavicular.',
  'manobra:schuster':'Baço palpável a 3 cm do rebordo costal esquerdo.',
  'manobra:traube':'Espaço de Traube maciço.',
  'manobra:doisdedos':'O sangue corre do umbigo para fora.',
  'inspecionar:maos':'Palmas vermelhas nas eminências tenar e hipotenar. Unhas esbranquiçadas. Com os braços estendidos e as mãos para cima, as mãos caem e voltam em batidas rápidas.',
  'inspecionar:boca':'Hálito adocicado. Embaixo da língua, cor amarelada.',
  'palpar:pernas':'Edema mole nas duas pernas, até o meio da perna.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (estigmas)'},
  {ids:['inspecionar:maos'],l:'Mãos (eritema palmar, flapping)'},{ids:['manobra:piparote'],l:'Piparote'},
  {ids:['manobra:traube','manobra:schuster'],l:'Baço (Traube, Schuster)'},{ids:['manobra:lemos','manobra:hepatimetria','manobra:rechaco'],l:'Tamanho do fígado'},
  {ids:['inspecionar:meso','manobra:doisdedos'],l:'Circulação colateral'}],
 res:{
  // CONFERIR: espirometria com critérios da literatura (não está no material do André).
  espiro:'Feita após estabilizar. CVF 72% do previsto · VEF1 74% do previsto · VEF1/CVF 0,82 · Após broncodilatador: VEF1 +3% (+70 mL)',
  hep:'Bilirrubina total 2,6 mg/dL (direta 1,5 · indireta 1,1) · TGO 96 U/L · TGP 48 U/L',
  sprot:'Proteínas totais 6,0 g/dL · Albumina 2,6 g/dL',
  coag:'TP 17 s (controle 12 s)',
  hemo:'Hb 10,8 g/dL · Leucócitos 4.100/mm³ · Plaquetas 82.000/mm³',
  paracent:'Líquido citrino, límpido. Albumina 0,9 g/dL · Proteínas 1,2 g/dL',
  usgabd:'Fígado pequeno, de contornos irregulares. Baço de 15 cm. Ascite volumosa.',
  eda:'Varizes de esôfago de médio calibre.'
 },
 keyEx:[{ids:['paracent'],l:'Paracentese diagnóstica'},{ids:['sprot'],l:'Albumina sérica (para o GASA e o Child)'},{ids:['hep'],l:'Bilirrubinas'},{ids:['coag'],l:'TP'}],
 neutral:['hemo','usgabd','eda','renal','glic','fagt'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ascite',
 sindWhy:'Ascite de grande volume (piparote positivo) com circulação colateral tipo portal e esplenomegalia: síndrome de ascite com hipertensão portal.',
 correctDx:'cirrose',
 dxWhy:'Etilista pesado com estigmas de cirrose: aranhas vasculares, ginecomastia, eritema palmar, unhas brancas, flapping, hálito hepático, icterícia, cabeça de medusa, fígado pequeno e Traube maciço. GASA = 2,6 − 0,9 = 1,7 g/dL (> 1,1) com proteína de 1,2 g/dL (< 3,0): hipertensão portal sinusoidal, cirrose. Child-Pugh: bilirrubina 2,6 (2) + albumina 2,6 (3) + TP 5 s prolongado (2) + ascite moderada a grande (3) + encefalopatia grau 1–2 (2) = 12 pontos, Child C.',
 conduta:[
  {id:'c1',t:'Paracentese diagnóstica e cálculo do GASA',ok:1,why:'Diz de onde vem a ascite.'},
  {id:'c2',t:'Endoscopia para procurar varizes',ok:1,why:'GASA > 1,1 com proteína < 3: hipertensão portal sinusoidal, segue com USG ou endoscopia.'},
  {id:'c3',t:'Classificar como Child-Pugh C',ok:1,why:'12 pontos (10 a 15 = C).'},
  {id:'c4',t:'Classificar como Child-Pugh A',ok:0,why:'Child A é 5 a 6 pontos. Ele tem 12.'},
  {id:'c5',t:'Investigar doença do peritônio (TB, carcinomatose)',ok:0,why:'Doença peritoneal dá GASA < 1,1 com proteína > 3.'},
  {id:'c6',t:'Procurar fígado grande: é o esperado',ok:0,why:'No cirrótico avançado o fígado é pequeno (atrófico).'}
 ],
 teaching:[
  {t:'Estigmas da cirrose',p:'Aranhas vasculares, eritema palmar, ginecomastia e atrofia testicular, unhas brancas, baqueteamento, flapping, hálito hepático, circulação colateral, esplenomegalia, ascite, icterícia e hérnia umbilical.'},
  {t:'GASA',p:'Albumina do soro − albumina da ascite. > 1,1 com proteína < 3,0: hipertensão portal sinusoidal (cirrose). > 1,1 com proteína > 3,0: pós-sinusoidal ou IC. < 1,1 com proteína > 3,0: peritônio (carcinomatose, TB).'},
  {t:'Achar a ascite',p:'Pequena: só na USG. Média: semicírculo de Skoda e macicez móvel (~1–1,5 L). Grande: piparote (> 3–5 L).'},
  {t:'Child-Pugh',p:'Bilirrubina, albumina, TP, ascite e encefalopatia. A 5–6, B 7–9, C 10–15.'}
 ]
});
