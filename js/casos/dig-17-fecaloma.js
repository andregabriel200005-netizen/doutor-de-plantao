// Digestório 17: Oito dias sem evacuar. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// fármacos e opioides (1.9), ausculta (2.3), sinal de Gersuny (3.6), constipação (4.2).
CASES.push({
 id:'d-fecal',modulo:'Semiologia do digestório',n:'Caso 17',title:'Oito dias sem evacuar',look:'maria',pname:'Dona Zuleide',fonte:FONTE_DIG,
 card:'Zuleide, 84 anos, acamada. Barriga dura e sem evacuar.',
 briefing:'Doutor, leito 3: Dona Zuleide, 84 anos, acamada desde um AVC. A filha diz que ela não evacua há oito dias.',
 vitals:'PA 132/78 mmHg · FC 88 bpm · FR 18 irpm · T 36,6 °C · SpO₂ 96% em ar ambiente',
 answers:respostas({
  queixa:'(A filha responde) Ela tá com a barriga dura e não evacua há oito dias.',
  tempo:'(A filha) Oito dias sem evacuar. Antes já ia pouco, a cada três ou quatro dias.',
  inicio:'(A filha) Piorou depois que começaram a morfina pra dor no quadril.',
  dor:'(A filha) Ela geme quando mexe na barriga.',
  fezes:'(A filha) As últimas vieram em bolinhas duras, com muito esforço. Agora às vezes sai um líquido sujando a fralda.',
  vomito:'(A filha) Não.',
  meds:'(A filha) Morfina, há duas semanas, e o remédio de pressão.',
  doencas:'(A filha) AVC há dois anos. Pressão alta.',
  imob:'(A filha) Acamada desde o AVC.',
  refeicao:'(A filha) Come pouco, papinha.',
  habitos:'(A filha) Nada.',
  trabalho:'(A filha) Aposentada.',
  moradia:'(A filha) Mora comigo.',
  sal:'(A filha) Bebe pouca água.'
 }),
 keyQ:[{ids:['meds'],l:'Uso de opioide'},{ids:['fezes'],l:'Caracterizar as fezes (cíbalos, líquido em volta)'},{ids:['imob'],l:'Acamada'},{ids:['tempo'],l:'Ritmo intestinal de antes'},{ids:['vomito'],l:'Vômitos (afastar obstrução)'}],
 geral:'Idosa acamada, emagrecida, sem febre, gemendo quando mexem na barriga.',
 effSides:[],
 exam:Object.assign(achados(REGIOES,{auscultar:'Ruídos hidroaéreos diminuídos.'}),{
  'inspecionar:meso':'Abdome um pouco distendido.',
  'palpar:fie':'Massa endurecida, como massa de modelar, na fossa ilíaca esquerda.',
  'palpar:fle':'Massa endurecida que continua pelo flanco.',
  'percutir:fie':'Som maciço.',
  'manobra:gersuny':'Comprimindo a massa e soltando, sente-se uma crepitação, como velcro.',
  'manobra:blumberg':'Descompressão sem dor.'
 }),
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['palpar:fie','palpar:fle'],l:'Palpar o lado esquerdo (massa)'},
  {ids:['manobra:gersuny'],l:'Gersuny'},{ids:['manobra:blumberg'],l:'Irritação peritoneal (afastar)'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 12,1 g/dL · Leucócitos 8.300/mm³ · Plaquetas 260.000/mm³',
  renal:'Ureia 52 mg/dL · Creatinina 1,0 mg/dL',
  usgabd:'Grande quantidade de fezes endurecidas no cólon esquerdo.'
 },
 keyEx:[],
 neutral:['hemo','renal','usgabd','rx','eas'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'constipacao',
 sindWhy:'Menos de 3 evacuações por semana, fezes em cíbalos e esforço: constipação, agora com fecaloma.',
 correctDx:'fecaloma',
 dxWhy:'Idosa acamada, com pouca água e em uso de morfina (opioide constipa), oito dias sem evacuar, líquido sujando a fralda em volta das fezes duras, massa empastada à esquerda e Gersuny positivo (a mucosa descola do fecaloma).',
 conduta:[
  // CONFERIR: a retirada do fecaloma não está descrita no material.
  {id:'c1',t:'Desfazer o fecaloma',ok:1,why:'É a causa da obstrução das fezes.'},
  {id:'c2',t:'Rever o opioide e prevenir a constipação',ok:1,why:'Opioides causam constipação e íleo paralítico.'},
  {id:'c3',t:'Antidiarreico pelo líquido na fralda',ok:0,why:'O líquido escapa em volta do fecaloma. Antidiarreico piora.'},
  {id:'c4',t:'Cirurgia de urgência por tumor',ok:0,why:'Massa empastada que crepita (Gersuny) em idosa acamada: fecaloma.'}
 ],
 teaching:[
  {t:'Constipação',p:'Menos de 3 evacuações por semana, fezes endurecidas (cíbalos), esforço, sensação de evacuação incompleta, manobras digitais. Compare com o padrão do próprio paciente.'},
  {t:'Sinal de Gersuny',p:'Crepitação como velcro ao descomprimir o cólon: a mucosa descola do fecaloma. Acamados, UTI, mais à esquerda.'},
  {t:'Remédios',p:'Opioides: constipação e íleo paralítico.'}
 ]
});
