// Respiratório 8: O ar não completa. Fonte: Semiologia Respiratória — Material de Estudo (André, UNINASSAU, 2026):
// ritmos respiratórios e dispneia suspirosa (4), questão da monitoria (17).
CASES.push({
 id:'r-susp',modulo:'Semiologia respiratória',n:'Caso 8',title:'O ar não completa',look:'carla',pname:'Carla',
 fonte:'Semiologia Respiratória: material de estudo do André (apostila de Semiologia Especializada p. 13–22, aulas e monitoria)',
 card:'Carla, 24 anos. Sente que o ar não entra direito.',
 briefing:'Doutor, leito 3: Carla, 24 anos. Diz que está com falta de ar desde a tarde.',
 vitals:'PA 116/74 mmHg · FC 92 bpm · FR 18 irpm · T 36,5 °C · SpO₂ 99% em ar ambiente',
 answers:{
  queixa:'Sinto que o ar não entra direito. Tenho que puxar fundo toda hora.',
  tempo:'Umas duas semanas, mas hoje veio forte.',
  inicio:'Hoje veio de repente, depois de uma discussão no trabalho.',
  dor:'Não dói. É uma agonia.',
  febre:'Não.',
  tosse:'Não.',
  escarro:'Não tenho catarro.',
  chiado:'Não.',
  dispneia:'Parece que o ar não completa, aí eu suspiro.',
  posicao:'Não muda. Deitada é igual.',
  edema:'Não.',
  urina:'Não.',
  peso:'Não.',
  tratou:'Tomei meu remédio de ansiedade.',
  meds:'Uso um ansiolítico que a psiquiatra passou.',
  doencas:'Ansiedade. Faço tratamento.',
  alergia:'Não.',
  passado:'Não.',
  habitos:'Não fumo. Bebo de vez em quando.',
  contato:'Não.',
  imob:'Não. E não tomo anticoncepcional.',
  familia:'Minha mãe tem depressão.',
  trabalho:'Atendente de telemarketing. Tá bem puxado.',
  moradia:'Moro sozinha.',
  sal:'Comendo mal, sem horário.',
  emocional:'Muito. Tô com medo de perder o emprego e não durmo direito.',
  hiv:'Fiz, deu negativo.'
 },
 keyQ:[{ids:['emocional'],l:'Ansiedade e estresse'},{ids:['meds','doencas'],l:'Tratamento para ansiedade'},{ids:['inicio'],l:'Gatilho (discussão)'},{ids:['imob'],l:'Risco para TEP (afastar)'},{ids:['dispneia'],l:'Caracterizar a dispneia'}],
 geral:'Jovem inquieta, falando frases completas. A respiração é normal, mas de tempos em tempos ela dá um suspiro profundo. Corada, sem esforço para respirar.',
 effSides:[],
 exam:{},
 keyExam:[{ids:['vitals'],l:'Pedir sinais vitais'},{ids:['inspecionar:geral'],l:'Inspeção geral (padrão da respiração)'},
  {ids:TORAX.map(z=>'auscultar:'+z),l:'Auscultar o tórax'},{ids:TORAX.map(z=>'percutir:'+z),l:'Percutir o tórax'},
  {ids:TORAX.map(z=>'palpar:'+z),l:'Palpar expansibilidade e frêmito'},{ids:['inspecionar:boca','inspecionar:maos'],l:'Procurar cianose'}],
 res:{
  gaso:'pH 7,41 · PaO₂ 96 mmHg · PaCO₂ 39 mmHg · HCO₃ 24 mEq/L · SatO₂ 99%'
 },
 keyEx:[{ids:['gaso'],l:'Gasometria (normal)'}],
 neutral:['hemo','rx','ecg'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'normal',
 sindWhy:'O tórax está normal em todas as manobras: nenhuma síndrome pulmonar ou pleural.',
 correctDx:'ansiedade',
 dxWhy:'Jovem ansiosa, em uso de ansiolítico e sob estresse: respiração normal interrompida por suspiros profundos, exame normal e gasometria sem alteração. É dispneia suspirosa.',
 conduta:[
  // CONFERIR: o material identifica a dispneia suspirosa, mas não traz a conduta.
  {id:'c1',t:'Explicar que o exame está normal e acolher',ok:1,why:'Na dispneia suspirosa não há alteração no exame nem na gasometria. A causa é a ansiedade.'},
  {id:'c2',t:'Manter o acompanhamento com a psiquiatra',ok:1,why:'A ansiedade é a causa e já está em tratamento.'},
  {id:'c3',t:'Angiotomografia para TEP',ok:0,why:'Sem fator de risco (não usa anticoncepcional, sem imobilização), saturação e exame normais.'},
  {id:'c4',t:'Oxigênio',ok:0,why:'SatO₂ 99% e PaO₂ normal: não há hipoxemia.'},
  {id:'c5',t:'Broncodilatador',ok:0,why:'Sem sibilos nem expiração prolongada.'},
  {id:'c6',t:'Internar para investigar',ok:0,why:'Exame, saturação e gasometria normais.'}
 ],
 teaching:[
  {t:'Dispneia suspirosa',p:'Respiração normal interrompida por suspiros profundos, sem alteração gasométrica. Causa: ansiedade.'},
  {t:'Os outros ritmos',p:'Cheyne-Stokes: cresce, decresce e para (IC grave, AVC). Biot: anárquico (lesão do tronco, hipertensão intracraniana). Kussmaul: inspiração profunda, pausa, expiração rápida, pausa (cetoacidose, uremia).'},
  {t:'Peça pouco',p:'Com exame normal e boa saturação, exame demais só custa tempo e ponto.'}
 ]
});
