// Digestório 15: Melhora no jejum. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// hábito intestinal e Bristol (1.7), ausculta (2.3), diarreia: duração e mecanismos (4.3).
CASES.push({
 id:'d-lact',modulo:'Semiologia do digestório',n:'Caso 15',title:'Melhora no jejum',look:'joao',pname:'Felipe',fonte:FONTE_DIG,
 card:'Felipe, 30 anos. Diarreia e gases há dois meses.',
 briefing:'Doutor, leito 3: Felipe, 30 anos. Diarreia e cólica que não passam.',
 vitals:'PA 120/76 mmHg · FC 76 bpm · FR 14 irpm · T 36,5 °C · SpO₂ 99% em ar ambiente',
 answers:respostas({
  queixa:'Diarreia, gases e cólica que não passam.',
  tempo:'Uns dois meses.',
  inicio:'Começou quando passei a tomar um copo grande de leite com café toda manhã.',
  dor:'Cólica na barriga toda, e ela estufa.',
  refeicao:'Piora depois do café com leite, da pizza e do sorvete.',
  fezes:'Moles, quase líquidas, umas 4 vezes por dia. Sem sangue, sem catarro. Muitos gases.',
  vomito:'Não.',
  peso:'Não emagreci.',
  febre:'Não.',
  emocional:'Normal. Só incomodado.',
  tratou:'Fiquei um dia só no soro e chá, sem comer, e a diarreia parou. Voltei a comer, voltou.',
  trabalho:'Analista de sistemas.'
 }),
 keyQ:[{ids:['tratou'],l:'Melhora com jejum'},{ids:['refeicao','inicio'],l:'Relação com leite e derivados'},{ids:['fezes'],l:'Caracterizar as fezes (sem sangue)'},{ids:['tempo'],l:'Duração'},{ids:['peso','febre'],l:'Sinais de alarme (peso, febre)'}],
 geral:'Bom estado geral, hidratado, corado.',
 effSides:[],
 exam:achados(REGIOES,{auscultar:'Ruídos hidroaéreos aumentados, com borborigmos.',palpar:'Indolor, sem massas, levemente distendido.'}),
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:REGIOES.map(z=>'palpar:'+z),l:'Palpar o abdome'},
  {ids:['inspecionar:geral'],l:'Inspeção geral (hidratação)'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 14,6 g/dL · Leucócitos 6.900/mm³ · Plaquetas 230.000/mm³'
 },
 keyEx:[],
 neutral:['hemo','pcr','glic','tsh','eas'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'diarreica',
 sindWhy:'Fezes moles várias vezes ao dia há dois meses: síndrome diarreica, crônica (> 30 dias).',
 correctDx:'lactose',
 dxWhy:'Diarreia que melhora com jejum (osmótica), piora com leite e derivados, com gases, distensão e borborigmos, sem sangue, febre ou emagrecimento: intolerância à lactose.',
 conduta:[
  // CONFERIR: a retirada da lactose não está escrita como conduta no material.
  {id:'c1',t:'Tirar leite e derivados e reavaliar',ok:1,why:'Na diarreia osmótica o soluto não absorvido puxa água; sem ele, melhora.'},
  {id:'c2',t:'Antibiótico',ok:0,why:'Sem febre, sem sangue, dois meses: não é diarreia infecciosa aguda.'},
  {id:'c3',t:'Tratar como disenteria',ok:0,why:'Disenteria tem sangue, muco ou pus.'},
  {id:'c4',t:'Tratar como diarreia secretora',ok:0,why:'A secretora persiste no jejum. Esta melhora.'}
 ],
 teaching:[
  {t:'Diarreia',p:'3 ou mais evacuações amolecidas em 24 h. Aguda até 14 dias; crônica mais de 30 dias.'},
  {t:'Osmótica × secretora',p:'Osmótica melhora com jejum (lactose, adoçantes, laxantes). Secretora persiste no jejum (cólera).'},
  {t:'Bristol',p:'1–2: constipação. 3–4: ideal. 5–7: diarreia.'}
 ]
});
