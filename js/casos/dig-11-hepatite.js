// Digestório 11: A febre que sumiu. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// icterícia (1.8), síndrome ictérica e pistas da história (4.7), questão 5 da monitoria (6).
CASES.push({
 id:'d-hep',modulo:'Semiologia do digestório',n:'Caso 11',title:'A febre que sumiu',look:'carla',pname:'Bianca',fonte:FONTE_DIG,
 card:'Bianca, 24 anos. Ficou amarela depois de uma semana de febre.',
 briefing:'Doutor, leito 3: Bianca, 24 anos. Está amarela e enjoada.',
 vitals:'PA 112/72 mmHg · FC 84 bpm · FR 16 irpm · T 36,9 °C · SpO₂ 99% em ar ambiente',
 answers:respostas({
  queixa:'Fiquei amarela e tô muito enjoada.',
  tempo:'Uns dez dias de mal-estar. O amarelo apareceu faz 3 dias.',
  inicio:'Começou como uma gripe: febre, cansaço, dor no corpo.',
  dor:'Um peso do lado direito, mas dor mesmo não.',
  febre:'Tive febre a semana toda. Quando fiquei amarela, a febre passou.',
  vomito:'Enjoo o tempo todo. Vomitei duas vezes.',
  refeicao:'Não tenho fome. O cheiro de comida me enjoa.',
  urinacor:'Tá escura, cor de chá preto.',
  fezes:'Normais. Talvez um pouco mais claras num dia.',
  emocional:'Muito cansada.',
  contato:'Duas amigas que viajaram comigo pra praia, e comeram no mesmo quiosque, também ficaram doentes.',
  transfusao:'Não.',
  habitos:'Não fumo. Bebo pouco.',
  meds:'Só dipirona na febre.',
  trabalho:'Estudante de enfermagem.'
 }),
 keyQ:[{ids:['febre'],l:'Febre que sumiu quando veio a icterícia'},{ids:['contato'],l:'Amigas com o mesmo quadro'},{ids:['urinacor'],l:'Colúria'},{ids:['fezes'],l:'Fezes (sem acolia)'},{ids:['meds','habitos'],l:'Remédios e álcool'},{ids:['transfusao'],l:'Transfusão'}],
 geral:'Jovem abatida, escleras e pele amarelas. Sem marcas de coceira, sem aranhas vasculares.',
 effSides:[],
 exam:{
  'palpar:hcd':'Fígado palpável a 2 cm do rebordo, de borda fina, um pouco doloroso.',
  'manobra:lemos':'Fígado a 2 cm do rebordo, borda fina e lisa, um pouco doloroso.',
  'manobra:hepatimetria':'Lobo direito 13 cm na linha hemiclavicular.',
  'manobra:murphy':'Inspiração completa, sem dor.',
  'inspecionar:boca':'Embaixo da língua, cor amarelada.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral'},
  {ids:['manobra:lemos','palpar:hcd','manobra:hepatimetria'],l:'Avaliar o fígado'},{ids:['manobra:murphy'],l:'Murphy'},{ids:['manobra:traube','manobra:schuster'],l:'Avaliar o baço'}],
 res:{
  hep:'Bilirrubina total 6,4 mg/dL (direta 3,9 · indireta 2,5) · TGO 1.240 U/L · TGP 1.860 U/L',
  fagt:'Fosfatase alcalina 160 U/L · GGT 140 U/L',
  usgabd:'Fígado um pouco aumentado, homogêneo. Vias biliares sem dilatação. Vesícula normal.',
  coag:'TP 13 s (controle 12 s)',
  hemo:'Hb 13,0 g/dL · Leucócitos 5.200/mm³ (48% linfócitos) · Plaquetas 210.000/mm³'
 },
 keyEx:[{ids:['hep'],l:'Bilirrubinas e transaminases'},{ids:['usgabd'],l:'USG (afastar obstrução)'}],
 neutral:['fagt','coag','hemo','eas'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ictericia',
 sindWhy:'Icterícia com colúria e fezes quase normais: síndrome ictérica de causa hepática (lesão do hepatócito).',
 correctDx:'hepviral',
 dxWhy:'Pródromo de gripe com febre que desapareceu quando a icterícia chegou, sem dor, náusea e enjoo de comida, colúria sem acolia, transaminases acima de mil, vias biliares normais, e amigas com o mesmo quadro depois de comer no mesmo lugar: hepatite viral aguda.',
 conduta:[
  // CONFERIR: o material não traz a conduta da hepatite viral.
  {id:'c1',t:'Acompanhar com repouso e repetir os exames',ok:1,why:'Hepatite viral aguda sem sinais de gravidade (TP normal).'},
  {id:'c2',t:'CPRE para desobstruir a via biliar',ok:0,why:'Vias biliares normais: não há obstrução.'},
  {id:'c3',t:'Investigar hemólise',ok:0,why:'Transaminases muito altas e colúria: o problema é o hepatócito.'},
  {id:'c4',t:'Cirurgia da vesícula',ok:0,why:'Vesícula normal e Murphy negativo.'}
 ],
 teaching:[
  {t:'Icterícia hepática',p:'Lesão do hepatócito: sobe bilirrubina direta e indireta, há colúria e as fezes variam. Náusea, vômito, prurido variável.'},
  {t:'Pista da hepatite viral',p:'A febre desaparece quando a icterícia chega, sem dor.'},
  {t:'Associações da monitoria',p:'Náusea e vômito: hepática. Colúria: bilirrubina direta alta. Acolia: pós-hepática. Hemólise: bilirrubina indireta.'}
 ]
});
