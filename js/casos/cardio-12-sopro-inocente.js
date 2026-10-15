// Cardiovascular 12: Sopro com febre. Fonte: Semiologia Cardiovascular — Material de Estudo (André, UNINASSAU, 2026):
// sopro funcional (inocente) × orgânico e hipercinese (5.7).
CASES.push({
 id:'c-inoc',modulo:'Semiologia cardiovascular',n:'Caso 12',title:'Sopro com febre',look:'joao',pname:'Gabriel',
 fonte:'Semiologia Cardiovascular: material de estudo do André (apostila de Semiologia Especializada p. 64–78, aulas e monitoria)',
 card:'Gabriel, 18 anos. Febre e dor de garganta.',
 briefing:'Doutor, leito 3: Gabriel, 18 anos. Febre alta e dor de garganta. Na UPA disseram que ele tem um sopro.',
 vitals:'PA 116/68 mmHg · FC 112 bpm · FR 18 irpm · T 38,9 °C · SpO₂ 99% em ar ambiente',
 answers:{
  queixa:'Febre e uma dor de garganta que não deixa engolir. E falaram que eu tenho sopro.',
  tempo:'Dois dias.',
  inicio:'Começou com dor de garganta e depois a febre.',
  dor:'Na garganta.',
  febre:'Febre alta, de dia e de noite.',
  tosse:'Não.',
  escarro:'Não.',
  chiado:'Não.',
  dispneia:'Não.',
  esforco:'Não. Jogo bola normal.',
  palpitacao:'Com a febre o coração fica rápido.',
  sincope:'Não.',
  posicao:'Não.',
  edema:'Não.',
  urina:'Não.',
  peso:'Não.',
  tratou:'Dipirona.',
  meds:'Nenhum.',
  doencas:'Nenhuma. Nunca ninguém falou de sopro antes.',
  alergia:'Não.',
  passado:'Não.',
  infancia:'Não.',
  habitos:'Não fumo. Bebo nas festas.',
  contato:'Meu irmão teve dor de garganta semana passada.',
  imob:'Não.',
  familia:'Nada.',
  trabalho:'Estudante.',
  moradia:'Moro com meus pais e meu irmão.',
  sal:'Não consigo comer por causa da garganta.',
  emocional:'Preocupado com o sopro.',
  estimulantes:'Não.',
  hiv:'Nunca fiz.'
 },
 keyQ:[{ids:['febre'],l:'Febre'},{ids:['doencas'],l:'Sopro nunca ouvido antes'},{ids:['esforco','dispneia'],l:'Sem sintomas cardíacos'},{ids:['infancia'],l:'Febre reumática (afastar)'}],
 geral:'Jovem febril, corado, sem esforço para respirar.',
 effSides:[],
 exam:{
  'auscultar:focoP':'Sopro sistólico suave, 2+/6, curto, no meio da sístole. B1 e B2 normais.',
  'auscultar:focoAc':'Sopro sistólico suave, mais fraco.',
  'palpar:focoP':'Sem frêmito.',
  'manobra:pachon':'Deitado de lado, o sopro quase desaparece.',
  'inspecionar:boca':'Amígdalas aumentadas e vermelhas, com placas brancas.',
  'palpar:pescoco':'Linfonodos doloridos abaixo da mandíbula.'
 },
 keyExam:[{ids:['vitals'],l:'Pedir sinais vitais (febre, FC)'},{ids:FOCOS.map(z=>'auscultar:'+z),l:'Auscultar o coração'},
  {ids:FOCOS.map(z=>'palpar:'+z),l:'Procurar frêmito'},{ids:MANOBRAS.filter(x=>['pachon','frente','valsalva','cocoras','handgrip','rivero'].includes(x.id)).map(x=>'manobra:'+x.id),l:'Ver se o sopro muda com posição ou manobra'},
  {ids:['inspecionar:boca'],l:'Examinar a garganta'}],
 res:{
  hemo:'Hb 14,8 g/dL · Leucócitos 16.200/mm³ (82% neutrófilos) · Plaquetas 280.000/mm³',
  pcr:'PCR 118 mg/L (ref. < 5)'
 },
 keyEx:[],
 neutral:['hemo','pcr'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'normal',
 sindWhy:'O sopro é funcional: não indica doença do coração. Nenhuma síndrome cardíaca, pulmonar ou pleural.',
 correctDx:'inocente',
 dxWhy:'Sopro sistólico 2+/6, sem frêmito, sem foco definido, que não engole B1 e muda com a posição, em jovem com febre alta e taquicardia: sopro funcional por hipercinese. A febre da amigdalite é a causa.',
 conduta:[
  {id:'c1',t:'Explicar que o sopro é funcional, da febre',ok:1,why:'Sopro inocente não tem alteração estrutural. Hipercinese (febre, anemia, gestação, tireotoxicose) causa sopro funcional.'},
  // CONFERIR: o tratamento da amigdalite não está no material de semiologia.
  {id:'c2',t:'Tratar a infecção da garganta',ok:1,why:'É a causa da febre. (O tratamento não está no seu material de semiologia.)'},
  // CONFERIR: reauscultar depois da febre não está escrito no material.
  {id:'c3',t:'Reauscultar quando a febre passar',ok:1,why:'Sem a hipercinese, o sopro funcional tende a sumir.'},
  {id:'c4',t:'Ecocardiograma urgente',ok:0,why:'Todos os sinais são de sopro funcional. Pedir exame sem necessidade custa tempo e ponto.'},
  {id:'c5',t:'Proibir esporte',ok:0,why:'Sopro inocente não tem doença do coração.'}
 ],
 teaching:[
  {t:'Sopro inocente',p:'Comum em crianças e jovens (até 80%). Intensidade 1 a 2+/6, nunca engole B1, nunca tem frêmito, muda com a posição, sempre sistólico.'},
  {t:'Funcional × orgânico',p:'Funcional: sem alteração estrutural, hipercinese, sem frêmito, sem foco definido, sempre sistólico. Orgânico: com lesão, pode ter frêmito, foco específico, sistólico ou diastólico.'},
  {t:'Nunca inocente',p:'Sopro diastólico jamais é inocente. Frêmito é sempre patológico (sopro a partir de 4+/6).'}
 ]
});
