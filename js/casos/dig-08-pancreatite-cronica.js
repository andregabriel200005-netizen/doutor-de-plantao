// Digestório 8: As fezes que boiam. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// hábito intestinal (1.7), pancreatite crônica (4.6), diarreia crônica (4.3), questão 3 da monitoria (6).
CASES.push({
 id:'d-pancron',modulo:'Semiologia do digestório',n:'Caso 8',title:'As fezes que boiam',look:'raimundo',pname:'Seu Ivo',fonte:FONTE_DIG,
 card:'Ivo, 52 anos. Emagrecendo e com diarreia diferente.',
 briefing:'Doutor, leito 3: Seu Ivo, 52 anos. Emagreceu muito e está com dor na barriga.',
 vitals:'PA 118/74 mmHg · FC 86 bpm · FR 16 irpm · T 36,5 °C · SpO₂ 98% em ar ambiente',
 answers:respostas({
  queixa:'Emagreci muito e tenho dor na boca do estômago.',
  tempo:'A dor vai e volta há uns três anos. A diarreia, há uns seis meses.',
  inicio:'Aos poucos.',
  dor:'Dor no alto da barriga que vai pras costas. Vem em crises, principalmente depois de beber.',
  refeicao:'Comer gordura piora a dor e a diarreia.',
  fezes:'Amareladas, brilhantes, muito volumosas. Boiam no vaso e fedem muito. Duas ou três vezes por dia.',
  peso:'Perdi 12 quilos em um ano.',
  urina:'Tenho sentido muita sede e urino muito.',
  doencas:'O posto disse que fiquei diabético esse ano.',
  habitos:'Bebo há 25 anos, todo dia. Fumo.',
  emocional:'Fraco, sem ânimo.',
  trabalho:'Porteiro.'
 }),
 keyQ:[{ids:['fezes'],l:'Esteatorreia'},{ids:['habitos'],l:'Etilismo crônico'},{ids:['peso'],l:'Emagrecimento'},{ids:['urina','doencas'],l:'Diabetes recente'},{ids:['tempo','dor'],l:'Dor em crises há anos'}],
 geral:'Homem emagrecido, com manchas roxas nos braços e pernas que aparecem fácil. Escleras brancas.',
 effSides:[],
 exam:{
  'inspecionar:meso':'Abdome escavado: arcos das costelas e ossos da bacia aparecendo.',
  'palpar:epi':'Dor leve à palpação profunda.',
  'auscultar:meso':'Ruídos hidroaéreos um pouco aumentados.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (emagrecimento, equimoses)'},
  {ids:['inspecionar:meso'],l:'Tipo de abdome'},{ids:['palpar:epi'],l:'Palpar o epigástrio'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  glic:'Glicemia 248 mg/dL',
  amil:'Amilase 70 U/L · Lipase 42 U/L',
  usgabd:'Pâncreas pequeno, com várias calcificações.',
  hemo:'Hb 11,0 g/dL · Leucócitos 6.800/mm³ · Plaquetas 210.000/mm³',
  sprot:'Proteínas totais 5,8 g/dL · Albumina 3,0 g/dL',
  coag:'TP 15 s (controle 12 s)'
 },
 keyEx:[{ids:['glic'],l:'Glicemia'},{ids:['usgabd'],l:'Imagem do pâncreas'}],
 neutral:['amil','hemo','hep','sprot','eas','coag','fagt'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:['pancreatica','diarreica'],
 sindWhy:'Falta das funções do pâncreas: exócrina (esteatorreia, emagrecimento, carências) e endócrina (diabetes).',
 correctDx:'pancrcron',
 dxWhy:'Etilismo crônico, dor epigástrica em crises há anos, esteatorreia (fezes amareladas, brilhantes, volumosas, fétidas, que boiam), emagrecimento, diabetes recente e equimoses fáceis (falta de vitamina K). Amilase e lipase normais não afastam: o pâncreas já está destruído.',
 conduta:[
  // CONFERIR: o material aponta o álcool como fator de risco, mas não traz o tratamento.
  {id:'c1',t:'Parar de beber',ok:1,why:'Etilismo crônico é o principal fator de risco.'},
  // CONFERIR: tratamento da diabetes e da má absorção não está no material.
  {id:'c2',t:'Tratar a diabetes e a má absorção',ok:1,why:'Função endócrina e exócrina perdidas.'},
  {id:'c3',t:'Tratar como pancreatite aguda',ok:0,why:'Sem dor aguda em cinturão, febre, hipotensão ou Cullen.'},
  {id:'c4',t:'Diarreia infecciosa: antibiótico',ok:0,why:'Diarreia de seis meses (crônica, > 30 dias), sem febre: não é infecção aguda.'}
 ],
 teaching:[
  {t:'Pancreatite crônica',p:'Álcool. Dor em crises ou contínua. Insuficiência exócrina: esteatorreia, emagrecimento, carências de A, D, E e K. Endócrina: diabetes.'},
  {t:'Esteatorreia',p:'Fezes amareladas, brilhantes, volumosas, fétidas, que boiam. Falta de lipase.'},
  {t:'Diarreia crônica',p:'Mais de 30 dias: pense em má absorção, parasitoses, doença inflamatória, intestino irritável e neoplasia.'}
 ]
});
