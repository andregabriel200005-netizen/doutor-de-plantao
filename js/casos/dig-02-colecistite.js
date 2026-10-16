// Digestório 2: Depois da feijoada. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// dor referida (1.4), pontos dolorosos (2.7), vesícula e Murphy (3.3), colecistite aguda (4.5), caso clínico 1 (5).
CASES.push({
 id:'d-colec',modulo:'Semiologia do digestório',n:'Caso 2',title:'Depois da feijoada',look:'lucia',pname:'Dona Rita',fonte:FONTE_DIG,
 card:'Rita, 46 anos. Dor embaixo das costelas do lado direito.',
 briefing:'Doutor, leito 3: Dona Rita, 46 anos. Dor do lado direito da barriga desde ontem.',
 vitals:'PA 132/84 mmHg · FC 100 bpm · FR 20 irpm · T 38,3 °C · SpO₂ 97% em ar ambiente',
 answers:respostas({
  queixa:'Dor do lado direito, embaixo das costelas.',
  tempo:'Desde ontem à noite.',
  inicio:'Começou umas duas horas depois da feijoada.',
  dor:'Forte e constante, embaixo da costela direita. Vai pras costas, pro ombro direito.',
  refeicao:'Sempre que como gordura sinto um incômodo aí. Ontem foi forte.',
  vomito:'Vomitei duas vezes, comida.',
  febre:'Febre desde a madrugada.',
  passado:'Já tive essas dores antes, mais fracas, que passavam sozinhas.',
  familia:'Minha mãe tirou a vesícula.',
  habitos:'Não fumo. Não bebo.',
  trabalho:'Cozinheira de restaurante.',
  sal:'Como muita comida gordurosa.'
 }),
 keyQ:[{ids:['refeicao','inicio'],l:'Relação com comida gordurosa'},{ids:['dor'],l:'Caracterizar a dor e a irradiação (ombro direito)'},{ids:['passado'],l:'Episódios anteriores'},{ids:['febre'],l:'Febre'},{ids:['urinacor','fezes'],l:'Urina e fezes (afastar obstrução)'}],
 geral:'Mulher com sobrepeso, febril, com fácies de dor. Escleras brancas.',
 effSides:[],
 exam:{
  'palpar:hcd':'Dor forte no ponto entre o rebordo costal direito e a borda do músculo reto, com defesa.',
  'palpar:epi':'Dor leve.',
  'manobra:murphy':'Com os dedos no ponto cístico, na inspiração profunda ela sente dor forte e para de respirar de repente.',
  'manobra:lemos':'Borda do fígado fina, lisa, no rebordo. Dor na região da vesícula.',
  'inspecionar:boca':'Embaixo da língua, sem cor amarelada.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['vitals'],l:'Pedir sinais vitais'},
  {ids:['palpar:hcd'],l:'Palpar o hipocôndrio direito'},{ids:['manobra:murphy'],l:'Murphy'},
  {ids:['inspecionar:geral','inspecionar:boca'],l:'Procurar icterícia (escleras, frênulo)'},{ids:['manobra:blumberg','palpar:fid'],l:'Afastar apendicite'}],
 res:{
  hemo:'Hb 13,4 g/dL · Leucócitos 14.200/mm³ (80% neutrófilos) · Plaquetas 300.000/mm³',
  hep:'TGO 38 U/L · TGP 42 U/L · Bilirrubina total 1,0 mg/dL',
  usgabd:'Vesícula com parede espessada (6 mm) e vários cálculos. Colédoco de calibre normal. Pâncreas normal.'
 },
 keyEx:[{ids:['usgabd'],l:'Ultrassonografia de abdome'}],
 neutral:['hemo','hep','fagt','amil','pcr','eas'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'abdagudo',
 sindWhy:'Dor aguda no hipocôndrio direito com febre e Murphy positivo: abdome agudo inflamatório.',
 correctDx:'colecistite',
 dxWhy:'Dor no hipocôndrio direito depois de comida gordurosa, irradiando para o ombro direito (dor referida), febre, náusea, episódios anteriores e Murphy positivo (parada inspiratória). Sem icterícia e com colédoco normal.',
 conduta:[
  // CONFERIR: o material classifica a colecistite como abdome agudo inflamatório, mas não detalha o tratamento.
  {id:'c1',t:'Internar, hidratar e analgesia',ok:1,why:'É o início do cuidado no abdome agudo de origem biliar (como no caso do professor).'},
  {id:'c2',t:'Avaliação cirúrgica',ok:1,why:'Abdome agudo inflamatório da vesícula.'},
  {id:'c3',t:'CPRE para retirar cálculo do colédoco',ok:0,why:'Sem icterícia e com colédoco normal: não há cálculo no colédoco.'},
  {id:'c4',t:'Alta com antiácido: é gastrite',ok:0,why:'Febre, dor no hipocôndrio direito e Murphy positivo apontam colecistite.'}
 ],
 teaching:[
  {t:'Sinal de Murphy',p:'Dedos no ponto cístico; na inspiração profunda o diafragma empurra a vesícula contra os dedos. Positivo: dor com parada inspiratória (colecistite aguda).'},
  {t:'Dor referida',p:'Colecistite dói no ombro e na escápula direita.'},
  {t:'Murphy × Courvoisier',p:'Vesícula inflamada dói (Murphy). Vesícula palpável, indolor, com icterícia progressiva: Courvoisier, neoplasia.'}
 ]
});
