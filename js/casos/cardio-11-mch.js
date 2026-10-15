// Cardiovascular 11: Caiu na quadra. Fonte: Semiologia Cardiovascular — Material de Estudo (André, UNINASSAU, 2026):
// miocardiopatia hipertrófica e morte súbita (2.3), síncope de esforço (2.4), ictus sistólico apical duplo (4.2), Valsalva (6).
CASES.push({
 id:'c-mch',modulo:'Semiologia cardiovascular',n:'Caso 11',title:'Caiu na quadra',look:'davi',pname:'Caio',
 fonte:'Semiologia Cardiovascular: material de estudo do André (apostila de Semiologia Especializada p. 64–78, aulas e monitoria)',
 card:'Caio, 17 anos. Desmaiou jogando futsal.',
 briefing:'Doutor, leito 3: Caio, 17 anos. Desmaiou no meio do jogo de futsal. O técnico trouxe.',
 vitals:'PA 118/72 mmHg · FC 78 bpm · FR 16 irpm · T 36,5 °C · SpO₂ 99% em ar ambiente',
 answers:{
  queixa:'Desmaiei no jogo.',
  tempo:'Hoje, faz uma hora.',
  inicio:'Tava correndo no contra-ataque e apaguei.',
  dor:'Senti um aperto no peito antes de cair.',
  febre:'Não.',
  tosse:'Não.',
  escarro:'Não.',
  chiado:'Não.',
  dispneia:'Ultimamente canso mais que os outros no treino.',
  esforco:'Sim. O cansaço, o aperto e o desmaio foram correndo.',
  palpitacao:'Senti o coração disparar antes de apagar.',
  sincope:'Hoje, jogando. O técnico disse que fiquei uns segundos desacordado e voltei sozinho.',
  posicao:'Não.',
  edema:'Não.',
  urina:'Não.',
  peso:'Não.',
  tratou:'Nada.',
  meds:'Nenhum.',
  doencas:'Nenhuma.',
  alergia:'Não.',
  passado:'Não.',
  infancia:'Não.',
  habitos:'Não fumo, não bebo.',
  contato:'Não.',
  imob:'Não.',
  familia:'Um tio, irmão do meu pai, morreu de repente com 30 anos, jogando bola.',
  trabalho:'Estudo e treino no time da escola.',
  moradia:'Moro com meus pais.',
  sal:'Normal.',
  emocional:'Assustado.',
  estimulantes:'Não. Nem energético.',
  hiv:'Nunca fiz.'
 },
 keyQ:[{ids:['esforco'],l:'Síncope durante esforço'},{ids:['familia'],l:'Morte súbita na família'},{ids:['estimulantes'],l:'Estimulantes (afastar)'},{ids:['dor'],l:'Dor torácica no esforço'},{ids:['palpitacao'],l:'Palpitação antes do desmaio'}],
 geral:'Adolescente atlético, lúcido, corado.',
 effSides:[],
 exam:{
  'auscultar:focoAc':'Sopro sistólico rude, em crescendo e decrescendo, 3+/6, mais forte entre a borda esternal e a ponta.',
  'auscultar:focoM':'Sopro sistólico rude. Som grave logo antes de B1.',
  'auscultar:focoAo':'Sopro sistólico mais fraco. Não se transmite às carótidas.',
  'palpar:coracao':'Ictus com dois impulsos a cada sístole.',
  'manobra:valsalva':'O sopro aumenta bastante.',
  // CONFERIR: o material não diz o efeito das cócoras na miocardiopatia hipertrófica.
  'manobra:cocoras':'O sopro diminui.',
  // CONFERIR: o material também não diz o efeito do handgrip na miocardiopatia hipertrófica.
  'manobra:handgrip':'O sopro diminui.'
 },
 keyExam:[{ids:['vitals'],l:'Pedir sinais vitais'},{ids:['auscultar:focoAc','auscultar:focoM'],l:'Auscultar a borda esternal e a ponta'},
  {ids:['palpar:coracao'],l:'Palpar o ictus (sistólico duplo)'},{ids:['manobra:valsalva'],l:'Valsalva'},
  {ids:['auscultar:pulsoCar','auscultar:focoAo'],l:'Separar da estenose aórtica (carótidas, foco aórtico)'}],
 res:{
  ecg:'Ritmo sinusal, FC 78 bpm. Sobrecarga ventricular esquerda importante.',
  eco:'Septo interventricular muito espesso (24 mm), com obstrução da saída do VE. FE 70%.',
  tsh:'TSH 1,6 mUI/L · T4 livre 1,2 ng/dL'
 },
 keyEx:[{ids:['ecg'],l:'ECG'},{ids:['eco'],l:'Ecocardiograma'}],
 neutral:['hemo','glic','tsh','trop','renal'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'miocardio',
 sindWhy:'Sopro sistólico que aumenta com Valsalva e ictus sistólico apical duplo: doença do músculo cardíaco (miocardiopatia hipertrófica), não da valva.',
 correctDx:'mch',
 dxWhy:'Jovem atleta com síncope durante esforço, tio com morte súbita aos 30 anos, sopro sistólico que aumenta com Valsalva (uma das duas exceções) e ictus sistólico apical duplo. A miocardiopatia hipertrófica tem forte componente genético e é uma das principais causas de morte súbita em jovens e atletas.',
 conduta:[
  {id:'c1',t:'Ecocardiograma',ok:1,why:'Mostra o septo espessado e a obstrução.'},
  // CONFERIR: afastamento do esporte e rastreio familiar não estão escritos no material.
  {id:'c2',t:'Não liberar para treinar até o cardiologista avaliar',ok:1,why:'Síncope de esforço com miocardiopatia hipertrófica: risco de morte súbita.'},
  {id:'c3',t:'Avaliar a família',ok:1,why:'A doença tem forte componente genético.'},
  {id:'c4',t:'Síncope vasovagal do esforço: alta',ok:0,why:'Síncope durante esforço é cardíaca, a de maior risco.'},
  {id:'c5',t:'Sopro inocente de atleta',ok:0,why:'Sopro inocente tem 1 a 2+. Este tem 3+ e aumenta com Valsalva.'}
 ],
 teaching:[
  {t:'Valsalva',p:'Diminui quase todos os sopros. Aumenta só os da miocardiopatia hipertrófica obstrutiva e do prolapso mitral.'},
  {t:'Ictus',p:'Sistólico apical duplo: miocardiopatia hipertrófica. Pré-sistólico proeminente: HAS, estenose aórtica, miocardiopatia hipertrófica.'},
  {t:'Morte súbita no jovem',p:'Miocardiopatia hipertrófica é uma das principais causas em jovens e atletas.'},
  {t:'Síncope de esforço',p:'É cardíaca até prova em contrário e tem o maior risco de morte.'}
 ]
});
