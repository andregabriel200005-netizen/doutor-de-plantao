// Digestório 3: Urina cor de café. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// icterícia, colúria e acolia (1.8), síndrome ictérica (4.7), caso clínico 1 do professor (5). Paciente inventada, inspirada no caso.
CASES.push({
 id:'d-coled',modulo:'Semiologia do digestório',n:'Caso 3',title:'Urina cor de café',look:'sueli',pname:'Dona Sueli',fonte:FONTE_DIG,
 card:'Sueli, 52 anos. Olhos amarelos e dor na barriga.',
 briefing:'Doutor, leito 3: Dona Sueli, 52 anos. Ficou amarela e está com dor na barriga.',
 vitals:'PA 120/80 mmHg · FC 80 bpm · FR 24 irpm · T 36,6 °C · SpO₂ 98% em ar ambiente',
 answers:respostas({
  queixa:'Os olhos e a pele ficaram amarelos, e tô com dor na barriga.',
  tempo:'A dor começou faz 5 dias. O amarelo, faz 3.',
  inicio:'Começou com uma cólica do lado direito.',
  dor:'Cólica embaixo das costelas do lado direito, que vai pro meio da barriga.',
  vomito:'Enjoo. Vomitei duas vezes, comida.',
  urinacor:'Ficou escura, cor de café.',
  fezes:'Tão bem claras, parecendo massa de vidraceiro.',
  passado:'Ano passado tive uma dor parecida depois de uma comida gordurosa, mais fraca.',
  refeicao:'Piora depois de comida gordurosa.',
  rio:'Não. Sempre morei na cidade.',
  meds:'Nenhum.',
  trabalho:'Professora.'
 }),
 keyQ:[{ids:['urinacor'],l:'Colúria'},{ids:['fezes'],l:'Acolia fecal'},{ids:['passado'],l:'Cólica biliar anterior'},{ids:['dor'],l:'Caracterizar a dor'},{ids:['meds'],l:'Remédios que agridem o fígado'},{ids:['habitos','transfusao'],l:'Álcool e fatores de risco para hepatite'}],
 geral:'Bom estado geral, fácies de dor. Pele e escleras bem amarelas. Sem marcas de coceira. Sem aranhas vasculares.',
 effSides:[],
 exam:{
  'inspecionar:boca':'Mucosa embaixo da língua amarelada.',
  'palpar:hcd':'Dor à palpação, sem defesa. Fígado no rebordo.',
  'palpar:epi':'Dor leve.',
  'manobra:murphy':'Incomoda, mas ela completa a inspiração.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (icterícia, estigmas)'},
  {ids:['inspecionar:boca'],l:'Olhar o frênulo da língua'},{ids:['palpar:hcd'],l:'Palpar o hipocôndrio direito'},
  {ids:['manobra:murphy'],l:'Murphy'},{ids:['manobra:lemos','manobra:hepatimetria'],l:'Avaliar o fígado e a vesícula'},{ids:['manobra:traube','manobra:schuster'],l:'Avaliar o baço'}],
 res:{
  hep:'Bilirrubina total 8,5 mg/dL (direta 7,2 · indireta 1,3) · TGO 74 U/L · TGP 92 U/L',
  fagt:'Fosfatase alcalina e GGT 3 vezes o limite superior',
  hemo:'Hb 13,1 g/dL · Leucócitos 8.200/mm³ · Plaquetas 240.000/mm³',
  usgabd:'Vesícula de paredes finas com microcálculos. Colédoco dilatado, com uma imagem que brilha e faz sombra acústica na parte final.',
  eas:'Bilirrubina +++ · Sem outras alterações'
 },
 keyEx:[{ids:['hep'],l:'Bilirrubinas e transaminases'},{ids:['fagt'],l:'FA e GGT'},{ids:['usgabd'],l:'Ultrassonografia de abdome'}],
 neutral:['hemo','eas','amil','coag'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ictericia',
 sindWhy:'Icterícia com colúria e acolia: síndrome ictérica, do tipo obstrutivo (pós-hepática).',
 correctDx:'coledoco',
 dxWhy:'Cólica no hipocôndrio direito, episódio parecido depois de comida gordurosa, icterícia com colúria e acolia (juntas confirmam fluxo de bile interrompido). Bilirrubina direta alta, FA e GGT altas e transaminases pouco alteradas. Hemograma normal e sem febre: sem colangite.',
 conduta:[
  {id:'c1',t:'Internar, hidratar e analgesia',ok:1,why:'Conduta inicial do caso do professor.'},
  {id:'c2',t:'CPRE com papilotomia e retirada do cálculo',ok:1,why:'Desobstrui o colédoco.'},
  {id:'c3',t:'Depois, colecistectomia por videolaparoscopia',ok:1,why:'Tira a fonte dos cálculos.'},
  {id:'c4',t:'Tratar como hepatite viral e só acompanhar',ok:0,why:'Colúria com acolia e FA/GGT altas indicam obstrução, não lesão do hepatócito.'},
  {id:'c5',t:'Investigar hemólise',ok:0,why:'Na hemólise sobe a bilirrubina indireta, sem colúria e com fezes normais.'}
 ],
 teaching:[
  {t:'Colúria e acolia',p:'Colúria: urina cor de Coca-Cola, pela bilirrubina direta no sangue. Acolia: fezes cor de massa de vidraceiro, sem estercobilina. Juntas: obstrução biliar.'},
  {t:'Três tipos de icterícia',p:'Pré-hepática: BI alta, sem colúria, fezes normais (hemólise). Hepática: lesão do hepatócito, colúria. Pós-hepática: BD muito alta, FA e GGT altas, colúria, acolia e prurido.'},
  {t:'Onde procurar',p:'Frênulo da língua é o local mais sensível; depois a esclera. A icterícia aparece nas escleras com BT de 2,0–2,5 mg/dL e na pele acima de 3–4.'},
  {t:'O que não pode faltar',p:'Caracterizar o vômito, o que melhora e piora a dor, remédios que agridem o fígado e perda de peso.'}
 ]
});
