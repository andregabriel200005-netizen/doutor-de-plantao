// Digestório 12: Amarelo e pálido. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// metabolismo da bilirrubina, icterícia pré-hepática, anemia falciforme e hemólise (4.7).
CASES.push({
 id:'d-hemol',modulo:'Semiologia do digestório',n:'Caso 12',title:'Amarelo e pálido',look:'marcos',pname:'Kelvin',fonte:FONTE_DIG,
 card:'Kelvin, 19 anos. Dor nos ossos, cansaço e olhos amarelos.',
 briefing:'Doutor, leito 3: Kelvin, 19 anos. Tem anemia falciforme. Está com dor no corpo e os olhos amarelos.',
 vitals:'PA 112/64 mmHg · FC 108 bpm · FR 20 irpm · T 37,4 °C · SpO₂ 96% em ar ambiente',
 answers:respostas({
  queixa:'Dor nos ossos, cansaço e os olhos ficaram amarelos.',
  tempo:'Três dias.',
  inicio:'Começou depois de uns dias de calor forte, bebendo pouca água.',
  dor:'Dor nas pernas, nos braços e nas costas, nos ossos. E nas juntas.',
  urinacor:'Normal. Não escureceu.',
  fezes:'Normais, cor de sempre.',
  esforco:'Qualquer esforço cansa.',
  doencas:'Anemia falciforme desde bebê.',
  transfusao:'Já recebi sangue umas três vezes.',
  meds:'Ácido fólico.',
  emocional:'Cansado dessas crises.',
  trabalho:'Estudo, terceiro ano.'
 }),
 keyQ:[{ids:['doencas'],l:'Anemia falciforme'},{ids:['urinacor'],l:'Urina sem colúria'},{ids:['fezes'],l:'Fezes normais'},{ids:['dor'],l:'Dor óssea e nas juntas'},{ids:['transfusao'],l:'Transfusões'}],
 geral:'Jovem pálido, com escleras amarelas. Sem marcas de coceira, sem aranhas vasculares.',
 effSides:[],
 exam:{
  'inspecionar:boca':'Mucosas pálidas. Embaixo da língua, leve cor amarelada.',
  'inspecionar:maos':'Palmas pálidas.',
  'auscultar:focoP':'Sopro sistólico suave, 2+/6, sem frêmito.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (palidez, icterícia)'},
  {ids:['inspecionar:boca','inspecionar:maos'],l:'Mucosas e palmas (anemia)'},{ids:['manobra:lemos','palpar:hcd'],l:'Avaliar o fígado'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 6,9 g/dL · Leucócitos 13.200/mm³ · Plaquetas 410.000/mm³ · Reticulócitos aumentados',
  hep:'Bilirrubina total 4,8 mg/dL (direta 0,6 · indireta 4,2) · TGO 52 U/L · TGP 30 U/L',
  eas:'Bilirrubina negativa · Urobilinogênio aumentado',
  fagt:'Fosfatase alcalina 96 U/L · GGT 28 U/L',
  usgabd:'Vesícula com microcálculos. Vias biliares sem dilatação. Baço pequeno.'
 },
 keyEx:[{ids:['hemo'],l:'Hemograma'},{ids:['hep'],l:'Bilirrubinas (predomina a indireta)'}],
 neutral:['eas','fagt','usgabd','coag','renal'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ictericia',
 sindWhy:'Icterícia sem colúria e com fezes normais: síndrome ictérica pré-hepática.',
 correctDx:'hemolise',
 dxWhy:'Anemia falciforme com dor óssea e nas juntas, anemia importante e icterícia "pura": bilirrubina indireta alta (insolúvel, não sai na urina), sem colúria e com fezes normais. Hemácias destruídas liberam mais bilirrubina do que o fígado consegue conjugar.',
 conduta:[
  // CONFERIR: o tratamento da crise falciforme não está no material.
  {id:'c1',t:'Tratar a crise da anemia falciforme',ok:1,why:'A icterícia vem da hemólise.'},
  {id:'c2',t:'CPRE',ok:0,why:'Sem colúria nem acolia, vias biliares normais: não há obstrução.'},
  {id:'c3',t:'Tratar como hepatite',ok:0,why:'Transaminases quase normais e bilirrubina indireta predominando.'}
 ],
 teaching:[
  {t:'Caminho da bilirrubina',p:'Hemácia destruída → bilirrubina indireta (insolúvel) → fígado conjuga → direta (solúvel) → bile → intestino (estercobilina, cor das fezes). Se a direta vai para o sangue, sai na urina: colúria.'},
  {t:'Pré-hepática',p:'Bilirrubina indireta alta, sem colúria, fezes normais, anemia. Hemólise, esferocitose, malária, reação transfusional.'},
  {t:'Anemia falciforme',p:'Artralgia e dor óssea, com icterícia e anemia.'}
 ]
});
