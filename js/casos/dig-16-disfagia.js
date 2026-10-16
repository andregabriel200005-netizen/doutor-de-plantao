// Digestório 16: A comida parada no peito. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// odinofagia e disfagia: alta × baixa, progressiva × intermitente, alerta de neoplasia (1.2), sinais de alarme (1.3), tipos de abdome (2.5).
CASES.push({
 id:'d-disf',modulo:'Semiologia do digestório',n:'Caso 16',title:'A comida parada no peito',look:'pedro',pname:'Seu Cícero',fonte:FONTE_DIG,
 card:'Cícero, 64 anos. A comida não desce.',
 briefing:'Doutor, leito 3: Seu Cícero, 64 anos. Diz que a comida não desce mais.',
 vitals:'PA 118/72 mmHg · FC 92 bpm · FR 16 irpm · T 36,4 °C · SpO₂ 97% em ar ambiente',
 answers:respostas({
  queixa:'A comida não desce. Fica parada aqui no peito (aponta o meio do peito).',
  tempo:'Uns três meses, e piorando rápido.',
  inicio:'Primeiro era carne e pão. Depois arroz, feijão. Agora até sopa e água custam a descer.',
  engolir:'Engulo, mas a comida para no meio do peito. Às vezes volta, um tempo depois de comer. Não engasgo nem tusso ao engolir.',
  dor:'Às vezes dói quando a comida para.',
  vomito:'Volta a comida que não desceu, sem esforço, sem vômito de verdade.',
  peso:'Perdi uns 10 quilos.',
  fezes:'Normais, mas pouca coisa.',
  habitos:'Fumo desde os 12 anos. Cachaça todo dia.',
  emocional:'Fraco, sem forças.',
  trabalho:'Pescador.',
  sal:'Só tomo líquido agora.'
 }),
 keyQ:[{ids:['inicio'],l:'Progressão: sólidos → pastosos → líquidos'},{ids:['engolir'],l:'Onde para (baixa) e sem engasgo'},{ids:['peso'],l:'Perda de peso'},{ids:['habitos'],l:'Tabaco e álcool'},{ids:['tempo'],l:'Rápida progressão'}],
 geral:'Homem emagrecido, descorado, com a pele frouxa. Fala normal, sem engasgos.',
 effSides:[],
 exam:{
  'inspecionar:meso':'Abdome escavado: costelas e ossos da bacia aparecendo.',
  'inspecionar:boca':'Mucosas pálidas.',
  'inspecionar:maos':'Palmas pálidas.'
 },
 keyExam:[{ids:['inspecionar:geral'],l:'Inspeção geral (emagrecimento, palidez)'},{ids:['inspecionar:meso'],l:'Tipo de abdome'},
  {ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['palpar:epi'],l:'Palpar o epigástrio (massa)'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 9,6 g/dL · Leucócitos 6.400/mm³ · Plaquetas 320.000/mm³',
  eda:'Lesão vegetante no esôfago distal, estreitando bastante a luz.',
  sprot:'Proteínas totais 5,6 g/dL · Albumina 2,9 g/dL'
 },
 keyEx:[{ids:['eda'],l:'Endoscopia digestiva alta'}],
 neutral:['hemo','sprot','rx','hep','renal'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'disfagica',
 sindWhy:'Dificuldade para engolir, com a comida parando no peito: disfagia baixa (esofágica).',
 correctDx:'neoesof',
 dxWhy:'Disfagia baixa ("comida parada no peito", regurgitação tardia), progressiva de sólidos para pastosos e líquidos, de rápida progressão, com perda de peso e anemia, em fumante e etilista: neoplasia de esôfago.',
 conduta:[
  // CONFERIR: o material diz "pensar em neoplasia", mas não como investigar.
  {id:'c1',t:'Endoscopia para ver e biopsiar a lesão',ok:1,why:'Disfagia progressiva com perda de peso é sinal de alarme: investigar neoplasia.'},
  {id:'c2',t:'Tratar como refluxo com omeprazol e alta',ok:0,why:'Disfagia progressiva, perda de peso e anemia são sinais de alarme.'},
  {id:'c3',t:'Investigar causa neurológica (AVC, Parkinson)',ok:0,why:'Isso é da disfagia alta: engasgo, tosse ao engolir, voz molhada. Aqui a comida para no peito.'}
 ],
 teaching:[
  {t:'Disfagia alta × baixa',p:'Alta (orofaríngea): engasgo imediato, tosse ao engolir, voz molhada, regurgitação nasal, causas neurológicas. Baixa (esofágica): comida parada no peito, regurgitação tardia.'},
  {t:'Progressiva × intermitente',p:'Progressiva (sólidos → pastosos → líquidos): neoplasia, estenose. Intermitente: distúrbios motores.'},
  {t:'Alarme',p:'Disfagia de rápida progressão + perda de peso: neoplasia de esôfago. Odinofagia com perda de peso, anemia e hematêmese: investigar neoplasia do TGI alto.'}
 ]
});
