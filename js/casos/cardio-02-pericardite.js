// Cardiovascular 2: Andar na neve. Fonte: Semiologia Cardiovascular — Material de Estudo (André, UNINASSAU, 2026):
// diagnóstico diferencial da dor torácica (2.1), atrito pericárdico (5.7). Atrito pleural × pericárdico: Semiologia Respiratória (9).
CASES.push({
 id:'c-peric',modulo:'Semiologia cardiovascular',n:'Caso 2',title:'Andar na neve',look:'joao',pname:'Rafael',
 fonte:'Semiologia Cardiovascular e Respiratória: material de estudo do André (apostilas de Semiologia Especializada, aulas e monitoria)',
 card:'Rafael, 26 anos. Dor no peito depois de uma gripe.',
 briefing:'Doutor, leito 3: Rafael, 26 anos. Dor no peito desde ontem.',
 vitals:'PA 124/78 mmHg · FC 104 bpm · FR 20 irpm · T 37,9 °C · SpO₂ 98% em ar ambiente',
 answers:{
  queixa:'Uma dor no meio do peito que não me deixa deitar.',
  tempo:'Desde ontem.',
  inicio:'Começou uns dias depois de uma gripe forte.',
  dor:'Pontada no meio do peito, às vezes vai pro ombro. Piora quando respiro fundo e quando deito de costas.',
  febre:'Febrezinha desde ontem.',
  tosse:'Uma tosse seca que ficou da gripe.',
  escarro:'Não.',
  chiado:'Não.',
  dispneia:'Respiro curto por causa da dor.',
  esforco:'Não tem a ver com esforço.',
  palpitacao:'Sinto o coração meio rápido.',
  sincope:'Não.',
  posicao:'Sentado e inclinado pra frente melhora muito. Deitado piora.',
  edema:'Não.',
  urina:'Não.',
  peso:'Não.',
  tratou:'Dipirona. Melhora um pouco.',
  meds:'Nenhum.',
  doencas:'Nenhuma.',
  alergia:'Não.',
  passado:'Não.',
  infancia:'Não.',
  habitos:'Não fumo. Bebo no fim de semana.',
  contato:'Minha namorada também teve gripe.',
  imob:'Não.',
  familia:'Nada.',
  trabalho:'Designer.',
  moradia:'Moro com minha namorada.',
  sal:'Normal.',
  emocional:'Fiquei assustado com dor no peito.',
  estimulantes:'Café de manhã.',
  hiv:'Fiz ano passado, negativo.'
 },
 keyQ:[{ids:['dor'],l:'Dor que piora ao respirar e deitar'},{ids:['posicao'],l:'Alívio ao inclinar para a frente'},{ids:['inicio'],l:'Depois de quadro viral'},{ids:['esforco'],l:'Sem relação com esforço'},{ids:['febre'],l:'Febre'}],
 geral:'Jovem sentado na maca, inclinado para a frente. Evita deitar.',
 effSides:[],
 exam:{
  'auscultar:focoT':'Bulhas rítmicas. Junto, um ruído áspero, como couro novo ou passos na neve, com três componentes a cada batimento.',
  'auscultar:focoAc':'Ruído áspero, como couro novo, acompanhando o batimento.',
  'auscultar:focoM':'Bulhas rítmicas, normofonéticas. Ruído áspero discreto ao fundo.',
  'manobra:frente':'Com o tronco inclinado para a frente, o ruído áspero fica mais alto.',
  'manobra:apneia':'Com a respiração presa, o ruído áspero continua, acompanhando cada batimento.'
 },
 keyExam:[{ids:['vitals'],l:'Pedir sinais vitais'},{ids:['inspecionar:geral'],l:'Inspeção geral (posição)'},
  {ids:['auscultar:focoT','auscultar:focoAc'],l:'Auscultar a borda esternal esquerda'},
  {ids:['manobra:apneia'],l:'Apneia (pleural × pericárdico)'},{ids:['manobra:frente'],l:'Tronco para a frente'},
  {ids:TORAX.map(z=>'auscultar:'+z),l:'Auscultar os pulmões'}],
 res:{
  // CONFERIR: o material não descreve o ECG da pericardite; resultado construído como dado cru.
  ecg:'Ritmo sinusal, FC 104 bpm. Supradesnivelamento de ST discreto e difuso, em quase todas as derivações.',
  hemo:'Hb 14,2 g/dL · Leucócitos 10.900/mm³ (40% linfócitos) · Plaquetas 260.000/mm³',
  pcr:'PCR 64 mg/L (ref. < 5)',
  eco:'Lâmina mínima de líquido no pericárdio. Contração normal, FE 62%.'
 },
 keyEx:[{ids:['ecg'],l:'ECG (dor torácica aguda)'}],
 neutral:['trop','hemo','pcr','rx','eco'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'pericardica',
 sindWhy:'Atrito pericárdico: ruído áspero, de couro novo, com três componentes, que aumenta com o tronco para a frente e continua na apneia. É patognomônico de pericardite aguda.',
 correctDx:'pericardite',
 dxWhy:'Jovem sem fatores de risco, depois de gripe, com dor que piora ao respirar e ao deitar e alivia inclinando o tronco para a frente (prece maometana), febre e atrito pericárdico.',
 conduta:[
  {id:'c1',t:'ECG para afastar isquemia',ok:1,why:'Toda dor torácica aguda é cardiovascular até que se prove o contrário.'},
  // CONFERIR: o tratamento da pericardite não está no material de semiologia.
  {id:'c2',t:'Tratar a inflamação do pericárdio e reavaliar',ok:1,why:'Pericardite aguda, provavelmente viral. (O tratamento não está no seu material de semiologia.)'},
  {id:'c3',t:'Cateterismo e revascularização',ok:0,why:'A dor não é anginosa: piora ao respirar, alivia ao inclinar para a frente e vem com atrito pericárdico.'},
  {id:'c4',t:'Tratar como pleurite',ok:0,why:'O atrito continua com a respiração presa e segue o batimento: é pericárdico. O pleural para na apneia.'},
  {id:'c5',t:'Toracocentese',ok:0,why:'Pulmões normais, sem derrame pleural.'}
 ],
 teaching:[
  {t:'Dor da pericardite',p:'Piora com a inspiração profunda e ao deitar; alivia inclinando o tronco para a frente. Atinge jovens sem fatores de risco.'},
  {t:'Atrito pericárdico',p:'Som áspero ("couro novo", "andar na neve"), com até três componentes, que aumenta com o tronco para a frente. Patognomônico de pericardite aguda.'},
  {t:'Prenda a respiração',p:'Se o atrito para, é pleural. Se continua, acompanhando o batimento, é pericárdico.'}
 ]
});
