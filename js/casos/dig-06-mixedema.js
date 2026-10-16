// Digestório 6: Parou o remédio da tireoide. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// ascite e o caso real da professora (mixedema), pesquisa de ascite (4.1), questão 2 da monitoria (6). IC direita e refluxo hepatojugular: Semiologia Cardiovascular (7.3).
CASES.push({
 id:'d-mix',modulo:'Semiologia do digestório',n:'Caso 6',title:'Parou o remédio da tireoide',look:'ines',pname:'Dona Glória',fonte:FONTE_DIG+'; Semiologia Cardiovascular (IC direita)',
 card:'Glória, 73 anos. A barriga inchou e ela anda muito cansada.',
 briefing:'Doutor, leito 3: Dona Glória, 73 anos. Barriga inchada e muito cansaço.',
 vitals:'PA 136/88 mmHg · FC 54 bpm · FR 16 irpm · T 35,8 °C · SpO₂ 96% em ar ambiente',
 answers:respostas({
  queixa:'A barriga inchou e tô muito cansada.',
  tempo:'Uns três meses.',
  inicio:'Aos poucos.',
  meds:'Tomava remédio da tireoide, levotiroxina. Parei faz uns seis meses porque acabou.',
  doencas:'Tireoide. Mais nada.',
  edema:'Inchada toda, até o rosto.',
  fezes:'Presas. Passo dias sem ir.',
  peso:'Engordei, mesmo comendo pouco.',
  emocional:'Desanimada, com sono o dia todo. Sinto muito frio.',
  dispneia:'Cansaço, mas deitada não piora.',
  posicao:'Não.',
  habitos:'Não bebo, não fumo.',
  trabalho:'Aposentada, era costureira.',
  moradia:'Moro sozinha.'
 }),
 keyQ:[{ids:['meds'],l:'Levotiroxina suspensa'},{ids:['emocional'],l:'Sono, desânimo e frio'},{ids:['habitos'],l:'Álcool (afastar cirrose)'},{ids:['posicao','dispneia'],l:'Ortopneia (afastar IC)'},{ids:['fezes'],l:'Constipação'}],
 geral:'Idosa lenta, de fala arrastada e rouca. Rosto inchado e sem expressão. Pele seca e áspera, cabelo ralo e quebradiço. Sem icterícia, sem aranhas vasculares.',
 effSides:[],
 exam:{
  'inspecionar:meso':'Abdome globoso, sem veias visíveis.',
  'percutir:fld':'Som maciço.','percutir:fle':'Som maciço.','percutir:meso':'Som timpânico.',
  'manobra:piparote':'Com a mão de um ajudante na linha média, o peteleco num flanco faz uma onda que chega ao outro flanco.',
  'manobra:macicezmovel':'A macicez dos flancos muda de lugar com o decúbito.',
  'manobra:skoda':'Timpanismo no centro e macicez na periferia, em semicírculo com a concavidade para cima.',
  'inspecionar:pescoco':'Jugulares sem turgência a 45°.',
  'palpar:pescoco':'Comprimindo o hipocôndrio direito, a jugular não sobe.',
  'palpar:pernas':'Pernas inchadas dos dois lados.',
  'manobra:traube':'Espaço de Traube timpânico.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (fácies, pele, cabelo)'},
  {ids:['manobra:piparote','manobra:macicezmovel','manobra:skoda'],l:'Pesquisar ascite'},{ids:['inspecionar:pescoco','palpar:pescoco'],l:'Jugular e refluxo hepatojugular (afastar IC)'},
  {ids:['vitals'],l:'Pedir sinais vitais (bradicardia, temperatura baixa)'}],
 res:{
  tsh:'TSH 86 mUI/L · T4 livre 0,2 ng/dL',
  bnp:'NT-proBNP 140 pg/mL',
  // CONFERIR: o material não traz o GASA do mixedema; o líquido vem sem números.
  paracent:'Líquido citrino, límpido. Citologia sem células malignas.',
  renal:'Ureia 38 mg/dL · Creatinina 0,9 mg/dL',
  sprot:'Proteínas totais 6,6 g/dL · Albumina 3,7 g/dL'
 },
 keyEx:[{ids:['tsh'],l:'TSH e T4 livre'}],
 neutral:['paracent','eco','bnp','hep','sprot','renal','usgabd','ecg'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ascite',
 sindWhy:'Ascite de grande volume (piparote positivo), sem circulação colateral nem esplenomegalia.',
 correctDx:'mixedema',
 dxWhy:'Levotiroxina parada há seis meses, sono, frio, constipação, fala arrastada, fácies inchada e sem expressão, pele seca, cabelo ralo, bradicardia e temperatura baixa. TSH muito alto. Jugulares normais e refluxo hepatojugular negativo afastam IC direita; sem álcool nem estigmas, não é cirrose. É o caso da professora: pense em mixedema na ascite.',
 conduta:[
  {id:'c1',t:'Repor o hormônio da tireoide',ok:1,why:'No caso da professora, com a reposição a paciente melhorou em 2 dias.'},
  {id:'c2',t:'Furosemida em dose alta para secar a barriga',ok:0,why:'No caso real, a furosemida em dose alta levou à insuficiência renal pré-renal. A causa era o mixedema.'},
  {id:'c3',t:'Tratar como insuficiência cardíaca direita',ok:0,why:'Jugulares sem turgência e refluxo hepatojugular negativo.'},
  {id:'c4',t:'Tratar como cirrose',ok:0,why:'Sem álcool, sem estigmas, baço normal.'}
 ],
 teaching:[
  {t:'Causas de ascite',p:'Hepáticas (cirrose, esquistossomose), cardíacas (IC), renais (síndrome nefrótica), infecciosas (TB peritoneal), neoplásicas e hipotireoidismo (mixedema).'},
  {t:'Lição da professora',p:'Ascite com anasarca, fácies inchada, fala arrastada: dose o TSH antes de encher de diurético.'},
  {t:'IC direita × outras causas',p:'Na IC direita há jugular túrgida e refluxo hepatojugular positivo, com fígado aumentado.'}
 ]
});
