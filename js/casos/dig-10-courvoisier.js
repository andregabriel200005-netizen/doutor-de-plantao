// Digestório 10: Amarelo sem dor. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// vesícula e regra de Courvoisier (3.3), síndrome ictérica e pistas da história (4.7).
CASES.push({
 id:'d-courv',modulo:'Semiologia do digestório',n:'Caso 10',title:'Amarelo sem dor',look:'severino',pname:'Seu Armando',fonte:FONTE_DIG,
 card:'Armando, 68 anos. Cada vez mais amarelo, e coçando muito.',
 briefing:'Doutor, leito 3: Seu Armando, 68 anos. A família diz que ele está cada vez mais amarelo.',
 vitals:'PA 128/80 mmHg · FC 78 bpm · FR 16 irpm · T 36,4 °C · SpO₂ 97% em ar ambiente',
 answers:respostas({
  queixa:'Tô ficando amarelo e o corpo coça demais.',
  tempo:'Uns dois meses. Só piora.',
  inicio:'Foi aos poucos, sem dor nenhuma.',
  dor:'Não dói nada.',
  urinacor:'Escura, cor de Coca-Cola.',
  fezes:'Bem claras, quase brancas.',
  peso:'Perdi 9 quilos sem querer.',
  refeicao:'Ando sem fome.',
  febre:'Não.',
  passado:'Nunca tive cólica de vesícula.',
  habitos:'Fumei 40 anos. Bebo pouco.',
  familia:'Meu irmão teve câncer de pâncreas.',
  trabalho:'Aposentado, fui bancário.'
 }),
 keyQ:[{ids:['dor','inicio'],l:'Icterícia sem dor, progressiva'},{ids:['peso'],l:'Perda de peso'},{ids:['urinacor'],l:'Colúria'},{ids:['fezes'],l:'Acolia'},{ids:['familia'],l:'Câncer na família'},{ids:['passado'],l:'Cólica biliar (afastar litíase)'}],
 geral:'Emagrecido, pele e escleras amarelo-esverdeadas, marcas de coceira nos braços e nas costas.',
 effSides:[],
 exam:{
  'palpar:hcd':'Massa arredondada, lisa e indolor abaixo do rebordo costal direito, que desce com a respiração.',
  'manobra:murphy':'Inspiração completa, sem dor.',
  'manobra:lemos':'Borda do fígado lisa, no rebordo. Abaixo dela, uma massa arredondada, lisa e indolor.',
  'inspecionar:boca':'Embaixo da língua, cor amarelada.'
 },
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:geral'],l:'Inspeção geral (icterícia, coceira)'},
  {ids:['palpar:hcd','manobra:lemos'],l:'Palpar o hipocôndrio direito (vesícula)'},{ids:['manobra:murphy'],l:'Murphy'},{ids:['inspecionar:boca'],l:'Frênulo da língua'}],
 res:{
  hep:'Bilirrubina total 14,2 mg/dL (direta 12,1 · indireta 2,1) · TGO 88 U/L · TGP 104 U/L',
  fagt:'Fosfatase alcalina 5 vezes e GGT 6 vezes o limite superior',
  usgabd:'Vesícula muito distendida, sem cálculos. Vias biliares dilatadas. Massa na cabeça do pâncreas.',
  glic:'Glicemia 142 mg/dL',
  hemo:'Hb 11,8 g/dL · Leucócitos 7.400/mm³ · Plaquetas 260.000/mm³'
 },
 keyEx:[{ids:['hep'],l:'Bilirrubinas'},{ids:['fagt'],l:'FA e GGT'},{ids:['usgabd'],l:'Ultrassonografia de abdome'}],
 neutral:['hemo','amil','coag','eas','glic'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'ictericia',
 sindWhy:'Icterícia com colúria, acolia e prurido intenso: síndrome ictérica obstrutiva.',
 correctDx:'neopanc',
 dxWhy:'Icterícia progressiva e indolor, com vesícula palpável, distendida e indolor (Courvoisier-Terrier), prurido intenso, colúria, acolia e emagrecimento: obstrução lenta do colédoco por neoplasia da cabeça do pâncreas, sem inflamação.',
 conduta:[
  // CONFERIR: o material aponta neoplasia, mas não diz como investigar.
  {id:'c1',t:'Investigar neoplasia da cabeça do pâncreas',ok:1,why:'Courvoisier-Terrier: icterícia progressiva + vesícula palpável e indolor.'},
  {id:'c2',t:'Tratar como colecistite',ok:0,why:'Vesícula indolor e Murphy negativo, sem febre.'},
  {id:'c3',t:'Tratar como hepatite viral',ok:0,why:'Acolia, prurido intenso e FA/GGT muito altas: obstrução.'},
  {id:'c4',t:'Tratar como cálculo no colédoco',ok:0,why:'Cálculo dá icterícia que vai e volta, com cólica. Aqui é progressiva e indolor.'}
 ],
 teaching:[
  {t:'Courvoisier-Terrier',p:'Icterícia + vesícula palpável e indolor, sem irritação peritoneal: neoplasia (cabeça de pâncreas, ampola, vias biliares).'},
  {t:'Tríade de Charcot',p:'Icterícia + dor no hipocôndrio direito + febre com calafrios: colangite.'},
  {t:'Pistas da história',p:'Litíase: icterícia que vai e volta, com cólica. Obstrução: acolia e urina escura. Hepatite viral: a febre some quando a icterícia chega. Ampola de Vater: icterícia recorrente.'}
 ]
});
