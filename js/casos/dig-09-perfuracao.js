// Digestório 9: Barriga de tábua. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// fármacos e AINEs (1.9), ausculta e silêncio abdominal (2.3), defesa (2.7), sinal de Jobert (3.1), abdome agudo perfurativo (4.5).
CASES.push({
 id:'d-perf',modulo:'Semiologia do digestório',n:'Caso 9',title:'Barriga de tábua',look:'tonho',pname:'Seu Aurélio',fonte:FONTE_DIG,
 card:'Aurélio, 63 anos. Dor súbita como uma facada na barriga.',
 briefing:'Doutor, leito 3: Seu Aurélio, 63 anos. Dor de repente na barriga, muito forte, há três horas.',
 vitals:'PA 108/70 mmHg · FC 112 bpm · FR 24 irpm · T 37,8 °C · SpO₂ 96% em ar ambiente',
 answers:respostas({
  queixa:'Uma dor horrível na barriga.',
  tempo:'Faz umas três horas.',
  inicio:'De repente, como uma facada na boca do estômago. Depois espalhou pra barriga toda.',
  dor:'A barriga toda dói. Não consigo me mexer nem respirar fundo.',
  refeicao:'Faz meses que tinha uma queimação no estômago que melhorava quando eu comia.',
  vomito:'Vomitei uma vez, comida.',
  fezes:'Normais. Nunca vi fezes pretas.',
  meds:'Diclofenaco todo dia há dois meses, pro joelho.',
  passado:'Queimação no estômago há meses.',
  habitos:'Fumo um maço por dia. Bebo no fim de semana.',
  trabalho:'Aposentado, era motorista.'
 }),
 keyQ:[{ids:['inicio'],l:'Início súbito, como facada'},{ids:['meds'],l:'Uso de anti-inflamatório (AINE)'},{ids:['refeicao','passado'],l:'Queimação epigástrica anterior'},{ids:['dor'],l:'Dor que se espalhou'},{ids:['fezes','vomito'],l:'Sangramento (afastar)'}],
 geral:'Deitado imóvel, com os joelhos dobrados, respirando curto. A barriga não se mexe com a respiração.',
 effSides:[],
 exam:Object.assign(achados(REGIOES,{auscultar:'Nenhum ruído hidroaéreo depois de vários minutos de ausculta.',palpar:'Abdome duro como tábua, com dor intensa.'}),{
  'percutir:hcd':'Som hipertimpânico.',
  'manobra:jobert':'Na linha hemiclavicular direita, sobre a loja do fígado, o som é hipertimpânico, onde deveria ser maciço.',
  'manobra:blumberg':'Dor à descompressão em todo o abdome.',
  'manobra:murphy':'Não dá para fazer: dor em todo o abdome.'
 }),
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (imóvel, sem movimento abdominal)'},
  {ids:REGIOES.map(z=>'palpar:'+z),l:'Palpar (defesa, abdome em tábua)'},{ids:['manobra:jobert','percutir:hcd'],l:'Percutir a loja hepática (Jobert)'},
  {ids:['manobra:blumberg'],l:'Irritação peritoneal'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 14,1 g/dL · Leucócitos 16.400/mm³ · Plaquetas 250.000/mm³',
  rx:'Imagem no negatoscópio. Radiografia de tórax em pé. Sem laudo: a leitura é sua.',
  usgabd:'Exame dificultado por muito gás. Pouco líquido livre.'
 },
 keyEx:[{ids:['rx'],l:'Radiografia em pé (ar embaixo do diafragma)'}],
 neutral:['hemo','amil','usgabd','ecg','renal','coag'],
 rx:{pneumop:1},
 tap:{sides:[],spaces:[]},
 correctSind:'abdagudo',
 sindWhy:'Dor súbita difusa, abdome em tábua, silêncio abdominal e descompressão dolorosa em todo o abdome: peritonite difusa, abdome agudo perfurativo.',
 correctDx:'perfuracao',
 dxWhy:'Usuário de diclofenaco (AINE causa úlcera), com queimação epigástrica que melhorava com comida, e dor súbita como facada que se espalhou. Abdome em tábua, sem ruídos (peritonite), Jobert positivo: ar livre na cavidade. A radiografia em pé mostra ar embaixo do diafragma.',
 conduta:[
  {id:'c1',t:'Cirurgia de urgência',ok:1,why:'Abdome agudo perfurativo: diagnóstico rápido e cirurgia de emergência.'},
  {id:'c2',t:'Confirmar o ar livre na radiografia em pé',ok:1,why:'Jobert positivo se confirma com ar embaixo do diafragma.'},
  {id:'c3',t:'Antiácido e observação',ok:0,why:'Há peritonite e ar livre na cavidade.'},
  {id:'c4',t:'Tratar como pancreatite',ok:0,why:'Início em facada, Jobert positivo e ar livre: perfuração.'},
  {id:'c5',t:'Continuar o diclofenaco',ok:0,why:'AINEs causam úlcera, gastrite erosiva e sangramento.'}
 ],
 teaching:[
  {t:'Sinal de Jobert',p:'Timpanismo onde deveria haver a macicez do fígado (linha hemiclavicular direita): pneumoperitônio, perfuração de víscera oca. Confirma-se com ar embaixo do diafragma na radiografia.'},
  {t:'Silêncio abdominal',p:'Ausência de ruídos: íleo paralítico, peritonite difusa, obstrução avançada. Para afirmar, ausculte por tempo prolongado.'},
  {t:'Tipos de abdome agudo',p:'Inflamatório, perfurativo, obstrutivo, vascular e hemorrágico.'},
  {t:'Remédios',p:'AINEs: úlcera, gastrite erosiva, sangramento. Opioides: constipação e íleo paralítico.'}
 ]
});
