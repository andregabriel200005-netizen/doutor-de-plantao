// Digestório 14: Dor nas costas e febre. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// dor referida (1.4), pontos ureterais (2.7), rins e sinal de Giordano (3.5), apêndice (3.4, para o diferencial).
CASES.push({
 id:'d-pielo',modulo:'Semiologia do digestório',n:'Caso 14',title:'Dor nas costas e febre',look:'ana',pname:'Tainá',fonte:FONTE_DIG,
 card:'Tainá, 27 anos. Febre com calafrio e dor do lado direito.',
 briefing:'Doutor, leito 3: Tainá, 27 anos. Febre alta e dor do lado direito.',
 vitals:'PA 116/72 mmHg · FC 110 bpm · FR 20 irpm · T 39,0 °C · SpO₂ 98% em ar ambiente',
 answers:respostas({
  queixa:'Febre com calafrio e dor do lado direito.',
  tempo:'Dois dias.',
  inicio:'Começou com ardor pra urinar, depois veio a febre e a dor.',
  dor:'Dor nas costas, do lado direito, embaixo das costelas. Às vezes vai pra frente.',
  febre:'Febre alta com calafrio, de tremer.',
  vomito:'Enjoei, vomitei uma vez.',
  urina:'Ardendo pra urinar e indo toda hora ao banheiro.',
  urinacor:'Tá turva e com cheiro forte.',
  fezes:'Normais.',
  refeicao:'Sem fome.',
  passado:'Já tive infecção de urina antes.',
  trabalho:'Recepcionista.'
 }),
 keyQ:[{ids:['urina'],l:'Ardor e urgência urinária'},{ids:['urinacor'],l:'Urina turva'},{ids:['febre'],l:'Febre com calafrios'},{ids:['dor'],l:'Localizar a dor (lombar)'},{ids:['fezes','vomito'],l:'Sintomas digestivos (diferencial)'}],
 geral:'Jovem febril, com calafrios, desconfortável.',
 effSides:[],
 exam:{
  'percutir:lombD':'Punho-percussão com dor forte.',
  'palpar:lombD':'Dor à palpação.',
  'palpar:fld':'Dor leve à palpação profunda, sem endurecimento da parede.',
  'manobra:blumberg':'Descompressão sem dor.',
  'manobra:rovsing':'Sem dor na fossa ilíaca direita.',
  'manobra:psoas':'Sem dor.',
  'manobra:murphy':'Inspiração completa, sem dor.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['percutir:lombD'],l:'Giordano à direita'},{ids:['percutir:lombE'],l:'Comparar com o lado esquerdo'},
  {ids:['manobra:blumberg','manobra:rovsing','manobra:psoas'],l:'Afastar apendicite'},{ids:['manobra:murphy'],l:'Afastar colecistite'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  eas:'Leucócitos incontáveis · Nitrito positivo · Muitas bactérias · Hemácias 10 por campo',
  hemo:'Hb 13,2 g/dL · Leucócitos 17.600/mm³ (88% neutrófilos) · Plaquetas 240.000/mm³',
  pcr:'PCR 160 mg/L (ref. < 5)',
  usgabd:'Rim direito um pouco aumentado. Sem dilatação das vias urinárias, sem cálculos. Apêndice não visto.'
 },
 keyEx:[{ids:['eas'],l:'Urina tipo 1'}],
 neutral:['hemo','pcr','usgabd','renal','hemoc'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'normal',
 sindWhy:'Abdome sem defesa nem descompressão dolorosa: nenhuma das síndromes digestivas da lista. O achado é lombar e urinário.',
 correctDx:'pielo',
 dxWhy:'Ardor para urinar, urina turva, febre alta com calafrios e dor lombar direita com Giordano positivo. Blumberg, Rovsing, psoas e Murphy negativos afastam apendicite e colecistite.',
 conduta:[
  // CONFERIR: o tratamento da pielonefrite não está no material.
  {id:'c1',t:'Tratar a infecção urinária alta',ok:1,why:'Pielonefrite aguda.'},
  {id:'c2',t:'Apendicectomia',ok:0,why:'Sem irritação peritoneal; a dor é lombar, com Giordano e urina infectada.'},
  {id:'c3',t:'Tratar como colecistite',ok:0,why:'Murphy negativo.'}
 ],
 teaching:[
  {t:'Sinal de Giordano',p:'Punho-percussão das regiões lombares com a borda ulnar da mão. Dor: pielonefrite, obstrução urinária ou litíase.'},
  {t:'Rins',p:'Normalmente não são palpáveis. Palpação bimanual e balotamento com as mãos em oposição.'},
  {t:'Dor referida',p:'Cólica renal pode doer na região genital.'}
 ]
});
