// Digestório 1: A dor que mudou de lugar. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// dor visceral × somática e migração (1.4), ordem do exame (2.2), palpação e defesa (2.7), apêndice (3.4), abdome agudo (4.5).
CASES.push({
 id:'d-apend',modulo:'Semiologia do digestório',n:'Caso 1',title:'A dor que mudou de lugar',look:'joao',pname:'Lucas',fonte:FONTE_DIG,
 card:'Lucas, 21 anos. Dor na barriga desde ontem.',
 briefing:'Doutor, leito 3: Lucas, 21 anos. Dor na barriga desde ontem à tarde.',
 vitals:'PA 122/76 mmHg · FC 104 bpm · FR 20 irpm · T 38,1 °C · SpO₂ 98% em ar ambiente',
 answers:respostas({
  queixa:'Dor na barriga, do lado direito, embaixo.',
  tempo:'Desde ontem à tarde.',
  inicio:'Começou em volta do umbigo, uma dor chata, difícil de dizer onde. De madrugada foi pro lado direito, embaixo, e ficou num ponto só.',
  dor:'Agora é forte, aqui (aponta com o dedo a fossa ilíaca direita). Piora quando ando, quando tusso e no buraco da rua.',
  febre:'Uma febrinha desde a madrugada.',
  vomito:'Enjoei e vomitei uma vez, comida.',
  refeicao:'Não tenho fome nenhuma desde ontem.',
  fezes:'Normais. A última foi ontem de manhã.',
  urinacor:'Normal. Sem ardor pra urinar.',
  habitos:'Não fumo. Bebo no fim de semana.',
  trabalho:'Estudo e trabalho de garçom.',
  sal:'Não consigo comer nada.'
 }),
 keyQ:[{ids:['inicio'],l:'Migração da dor (umbigo → fossa ilíaca direita)'},{ids:['dor'],l:'Localizar a dor e o que piora'},{ids:['refeicao','sal'],l:'Falta de apetite'},{ids:['vomito'],l:'Náusea e vômito'},{ids:['febre'],l:'Febre'},{ids:['urinacor','fezes'],l:'Urina e fezes (diferenciais)'}],
 geral:'Jovem deitado quieto, evitando se mexer. Andou curvado, segurando o lado direito da barriga.',
 effSides:[],
 exam:{
  'palpar:fid':'Dor forte. A parede fica dura nessa região, mesmo quando ele tenta relaxar.',
  'palpar:hipo':'Dor leve.','palpar:meso':'Dor leve.',
  'percutir:fid':'Som timpânico. A percussão dói.',
  'manobra:blumberg':'Dor intensa quando a mão é retirada de repente no ponto de McBurney.',
  'manobra:rovsing':'Comprimindo a fossa ilíaca esquerda, ele sente dor na fossa ilíaca direita.',
  'manobra:psoas':'Deitado sobre o lado esquerdo, a extensão da coxa direita causa dor na fossa ilíaca direita.',
  'manobra:obturador':'Sem dor no hipogástrio.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['vitals'],l:'Pedir sinais vitais'},
  {ids:['palpar:fid'],l:'Palpar a fossa ilíaca direita (defesa)'},{ids:['manobra:blumberg'],l:'Blumberg'},{ids:['manobra:rovsing'],l:'Rovsing'},
  {ids:['manobra:psoas','manobra:obturador'],l:'Psoas ou obturador'},{ids:['percutir:lombD','palpar:lombD'],l:'Afastar dor renal (lombar direita)'}],
 res:{
  hemo:'Hb 14,9 g/dL · Leucócitos 15.800/mm³ (84% neutrófilos) · Plaquetas 260.000/mm³',
  pcr:'PCR 86 mg/L (ref. < 5)',
  usgabd:'Apêndice com 9 mm, que não se deixa comprimir, com gordura inflamada em volta.'
 },
 keyEx:[],
 neutral:['hemo','pcr','usgabd','eas','amil'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'abdagudo',
 sindWhy:'Dor de início recente que exige decisão rápida, com irritação peritoneal (defesa, Blumberg): abdome agudo inflamatório.',
 correctDx:'apendicite',
 dxWhy:'Dor visceral em volta do umbigo, com náusea e falta de apetite, que migrou para a fossa ilíaca direita e virou somática (ele aponta com o dedo). Febre, defesa, Blumberg, Rovsing e psoas positivos (o psoas aponta apêndice retrocecal).',
 conduta:[
  {id:'c1',t:'Avaliação cirúrgica de urgência',ok:1,why:'Abdome agudo exige diagnóstico rápido e muitas vezes cirurgia de emergência.'},
  {id:'c2',t:'Analgésico e alta, voltando se piorar',ok:0,why:'Há irritação peritoneal: não é caso de alta.'},
  {id:'c3',t:'Laxante: deve ser intestino preso',ok:0,why:'As fezes estão normais, e há defesa e Blumberg.'},
  {id:'c4',t:'Tratar como pielonefrite',ok:0,why:'Urina normal, sem dor lombar. A dor é na fossa ilíaca, com Blumberg.'}
 ],
 teaching:[
  {t:'A dor que migra',p:'Começa visceral (difusa, em volta do umbigo, com náusea) e vira somática quando inflama o peritônio parietal: o paciente aponta com o dedo o ponto de McBurney.'},
  {t:'Manobras do apêndice',p:'Blumberg: dor à descompressão brusca em McBurney. Rovsing: comprimir a fossa ilíaca esquerda dói na direita. Psoas: apêndice retrocecal. Obturador: apêndice pélvico.'},
  {t:'Defesa',p:'Contratura involuntária, abdome em tábua: peritonite.'},
  {t:'Ordem do exame do abdome',p:'Inspeção, ausculta, percussão e palpação. Palpe a região que dói por último, começando pelo lado oposto.'}
 ]
});
