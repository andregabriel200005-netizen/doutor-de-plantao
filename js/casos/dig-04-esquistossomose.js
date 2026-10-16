// Digestório 4: Banho de rio. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// hemorragia digestiva e gravidade (1.6, 4.4), anamnese dirigida (1.9), baço e Traube (3.2), ascite, hipertensão portal e circulação colateral (4.1),
// caso clínico 2 do professor (5). Paciente inventado, inspirado no caso.
CASES.push({
 id:'d-esq',modulo:'Semiologia do digestório',n:'Caso 4',title:'Banho de rio',look:'josue',pname:'Seu Josué',fonte:FONTE_DIG,
 card:'Josué, 52 anos. Barriga crescendo e fezes pretas.',
 briefing:'Doutor, leito 3: Seu Josué, 52 anos. Fezes pretas, fraqueza e a barriga crescendo.',
 vitals:'PA 105/65 mmHg (deitado) · FC 104 bpm · FR 20 irpm · T 36,4 °C · SpO₂ 97% em ar ambiente',
 answers:respostas({
  queixa:'A barriga cresceu, tô fraco e as fezes ficaram pretas.',
  tempo:'A barriga vem crescendo faz umas 3 semanas. As fezes pretas foram 2 vezes nos últimos 4 dias.',
  inicio:'Foi aos poucos, sem dor.',
  dor:'Não dói.',
  edema:'Os tornozelos incham no fim do dia.',
  fezes:'Duas vezes vieram pretas, grudentas, igual piche, com um cheiro muito forte.',
  vomito:'Não vomitei sangue.',
  sincope:'Fico tonto quando levanto.',
  peso:'Emagreci.',
  rio:'Quando menino, no interior de Alagoas, vivia no rio. Tive xistose e tomei remédio, mas não terminei.',
  habitos:'Bebo só em festa. Não fumo.',
  trabalho:'Pedreiro.',
  moradia:'Moro em Recife faz 15 anos, com minha esposa.'
 }),
 keyQ:[{ids:['rio'],l:'Banho de rio e esquistossomose'},{ids:['fezes'],l:'Melena'},{ids:['sincope'],l:'Tontura ao levantar'},{ids:['habitos'],l:'Quantificar o álcool'},{ids:['vomito'],l:'Hematêmese'},{ids:['tempo'],l:'Evolução do aumento do abdome'}],
 geral:'Regular estado geral, desidratado e descorado. Escleras brancas. Sem tremor nas mãos.',
 effSides:[],
 exam:{
  'inspecionar:meso':'Abdome globoso. Veias saltadas que saem do umbigo como raios.',
  'inspecionar:epi':'Veias saltadas partindo do umbigo para cima.',
  'inspecionar:hipo':'Veias saltadas partindo do umbigo para baixo.',
  'manobra:doisdedos':'Esvaziando a veia e soltando um dedo de cada vez: o sangue corre do umbigo para fora, para cima e para baixo.',
  'percutir:fld':'Som maciço.','percutir:fle':'Som maciço.','percutir:meso':'Som timpânico.',
  'manobra:skoda':'Timpanismo no centro e macicez na periferia, em semicírculo com a concavidade para cima.',
  'manobra:macicezmovel':'A macicez dos flancos muda de lugar quando ele vira de lado.',
  'manobra:lemos':'Fígado a 2 cm do rebordo, firme, de borda romba.',
  'palpar:hcd':'Fígado a 2 cm do rebordo, firme.',
  'palpar:hce':'Massa firme descendo do rebordo esquerdo em direção ao umbigo.',
  'manobra:schuster':'Baço palpável a 7 cm do rebordo costal esquerdo.',
  'manobra:traube':'Espaço de Traube maciço.',
  'manobra:ortostase':'Deitado: 105/65 mmHg, FC 104 bpm. Em pé: 95/60 mmHg, FC 116 bpm, e ele fica tonto.',
  'palpar:pernas':'Edema de tornozelos (+/4+), mole, deixa marca.',
  'inspecionar:maos':'Palmas pálidas, sem vermelhidão.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['vitals'],l:'Pedir sinais vitais'},
  {ids:['inspecionar:meso','inspecionar:epi','inspecionar:hipo'],l:'Inspecionar o abdome (circulação colateral)'},{ids:['manobra:doisdedos'],l:'Direção do fluxo das veias'},
  {ids:['manobra:schuster','palpar:hce'],l:'Palpar o baço'},{ids:['manobra:traube'],l:'Percutir o espaço de Traube'},
  {ids:['manobra:macicezmovel','manobra:skoda','manobra:piparote'],l:'Pesquisar ascite'},{ids:['manobra:ortostase'],l:'PA deitado e em pé (gravidade do sangramento)'}],
 res:{
  hemo:'Hb 8,4 g/dL · Leucócitos 2.900/mm³ · Plaquetas 48.000/mm³',
  hep:'Bilirrubina total 1,1 mg/dL · TGO 30 U/L · TGP 28 U/L',
  sprot:'Proteínas totais 6,8 g/dL · Albumina 3,4 g/dL',
  coag:'TP 13 s (controle 12 s)',
  usgabd:'Espessamento fibroso em volta dos ramos portais do fígado. Baço de 21 cm. Veia porta dilatada, com fluxo saindo do fígado. Trombose parcial da veia esplênica. Ascite.',
  eda:'Varizes de esôfago de grosso calibre, com pontos vermelhos. Varizes no fundo gástrico.',
  // CONFERIR: o material não dá o GASA da esquistossomose (a tabela só traz a hipertensão portal sinusoidal); por isso o líquido vem sem números.
  paracent:'Líquido citrino, límpido.'
 },
 keyEx:[{ids:['hemo'],l:'Hemograma'},{ids:['eda'],l:'Endoscopia digestiva alta'},{ids:['usgabd'],l:'Ultrassonografia de abdome'}],
 neutral:['hep','sprot','coag','paracent','renal'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:['hemorragica','ascite'],
 sindWhy:'Melena (hemorragia digestiva alta) em paciente com hipertensão portal: cabeça de medusa, esplenomegalia com Traube maciço e ascite.',
 correctDx:'esquisto',
 dxWhy:'Banho de rio na infância e esquistossomose mal tratada. Hipertensão portal com varizes que sangraram (melena), esplenomegalia com pancitopenia (hiperesplenismo) e ascite. Bilirrubina, albumina, TP e transaminases normais: função do fígado preservada, porque a fibrose é periportal, antes do sinusoide (diferente da cirrose). Queda da PA em pé e FC > 100: sangramento moderado (grau 3).',
 conduta:[
  {id:'c1',t:'Estabilizar: internar e repor volume',ok:1,why:'FC > 100 e variação postural da PA: sangramento grau 3, internar e repor ou transfundir.'},
  {id:'c2',t:'Ligadura elástica ou escleroterapia das varizes',ok:1,why:'Trata a fonte do sangramento.'},
  {id:'c3',t:'Propranolol, restrição de sal e diurético',ok:1,why:'Conduta do caso do professor para a hipertensão portal e a ascite.'},
  {id:'c4',t:'Praziquantel',ok:1,why:'Trata a esquistossomose.'},
  {id:'c5',t:'Tratar como cirrose alcoólica',ok:0,why:'Função do fígado preservada e álcool só social: é a fibrose de Symmers da esquistossomose.'},
  {id:'c6',t:'Alta com sulfato ferroso',ok:0,why:'Sangramento por varizes com instabilidade postural.'}
 ],
 teaching:[
  {t:'Melena',p:'Fezes pretas, pegajosas, como piche, muito fétidas: sangue digerido, sangramento acima do ângulo de Treitz.'},
  {t:'Gravidade',p:'Grau 3: FC > 100, variação postural da PA, queda de Hb: internar e repor. Grau 4: choque.'},
  {t:'Circulação colateral',p:'Tipo portal (cabeça de medusa): radiada a partir do umbigo. Cava inferior: de baixo para cima. Cava superior: de cima para baixo. Descubra com a técnica dos dois dedos.'},
  {t:'Baço',p:'Só é palpável quando dobra de tamanho. Traube maciço: esplenomegalia.'},
  {t:'Hipertensão portal',p:'Pré-hepática (trombose), intra-hepática pré-sinusoidal (esquistossomose), sinusoidal (cirrose), pós-sinusoidal e pós-hepática (IC direita, Budd-Chiari).'}
 ]
});
