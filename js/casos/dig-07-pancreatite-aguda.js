// Digestório 7: A dor em faixa. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// pancreatite aguda, sinais de Cullen, Grey-Turner e Gobiet (4.6), questão 3 da monitoria (6).
CASES.push({
 id:'d-pancag',modulo:'Semiologia do digestório',n:'Caso 7',title:'A dor em faixa',look:'pedro',pname:'Seu Edson',fonte:FONTE_DIG,
 card:'Edson, 44 anos. Dor fortíssima no alto da barriga depois de uma festa.',
 briefing:'Doutor, leito 3: Seu Edson, 44 anos. Dor muito forte na barriga desde ontem à noite.',
 vitals:'PA 96/58 mmHg · FC 118 bpm · FR 26 irpm · T 38,2 °C · SpO₂ 94% em ar ambiente',
 answers:respostas({
  queixa:'Uma dor muito forte no alto da barriga.',
  tempo:'Desde ontem à noite.',
  inicio:'Começou umas horas depois de beber muito e comer churrasco numa festa.',
  dor:'Forte, contínua, no meio de cima da barriga. Dá a volta como uma faixa e vai pras costas.',
  vomito:'Vomitei várias vezes. Não alivia.',
  refeicao:'Piorou depois de comer.',
  febre:'Tô quente.',
  habitos:'Bebo muito todo fim de semana. Fumo.',
  passado:'Nunca tive isso.',
  trabalho:'Vendedor.'
 }),
 keyQ:[{ids:['dor'],l:'Dor em faixa irradiando para o dorso'},{ids:['habitos'],l:'Álcool'},{ids:['inicio','refeicao'],l:'Depois de bebida e comida'},{ids:['vomito'],l:'Vômitos'},{ids:['passado'],l:'Crises anteriores (aguda × crônica)'}],
 geral:'Agitado de dor, suado, desidratado, com mãos frias. Um pouco confuso.',
 effSides:[],
 exam:Object.assign(achados(REGIOES,{auscultar:'Ruídos hidroaéreos diminuídos.'}),{
  'inspecionar:meso':'Mancha arroxeada em volta do umbigo.',
  'inspecionar:fld':'Mancha arroxeada no flanco.','inspecionar:fle':'Mancha arroxeada no flanco.',
  'palpar:epi':'Dor forte, com a parede dura.','palpar:hcd':'Dor à palpação.','palpar:hce':'Dor à palpação.','palpar:meso':'Dor à palpação.',
  'percutir:epi':'Som timpânico aumentado, com o abdome superior distendido.','percutir:hce':'Som timpânico aumentado.',
  'manobra:blumberg':'Dor à descompressão em quase todo o abdome.',
  'manobra:murphy':'Dói, mas ele completa a inspiração.',
  'inspecionar:lombD':'Manchas arroxeadas na região lombar.','inspecionar:lombE':'Manchas arroxeadas na região lombar.'
 }),
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['vitals'],l:'Pedir sinais vitais (gravidade)'},
  {ids:['inspecionar:meso'],l:'Inspecionar o umbigo (Cullen)'},{ids:['inspecionar:fld','inspecionar:fle','inspecionar:lombD','inspecionar:lombE'],l:'Inspecionar flancos e lombar (Grey-Turner)'},
  {ids:['palpar:epi'],l:'Palpar o epigástrio'},{ids:['manobra:blumberg'],l:'Irritação peritoneal'},{ids:['manobra:jobert'],l:'Afastar perfuração (Jobert)'}],
 res:{
  // CONFERIR: o material não traz valores de amilase e lipase; os números foram construídos.
  amil:'Amilase 1.850 U/L · Lipase 3.400 U/L',
  hemo:'Hb 16,2 g/dL · Leucócitos 17.000/mm³ · Plaquetas 280.000/mm³',
  glic:'Glicemia 186 mg/dL',
  usgabd:'Pâncreas aumentado, com líquido em volta. Vesícula sem cálculos.',
  hep:'Bilirrubina total 1,0 mg/dL · TGO 60 U/L · TGP 48 U/L'
 },
 keyEx:[{ids:['amil'],l:'Amilase e lipase'},{ids:['usgabd'],l:'Imagem (USG)'}],
 neutral:['hemo','glic','hep','fagt','renal','gaso','rx','coag'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:['pancreatica','abdagudo'],
 sindWhy:'Dor epigástrica em faixa com irritação peritoneal, Cullen, Grey-Turner e timpanismo do abdome superior (Gobiet): pancreatite aguda grave.',
 correctDx:'pancreatite',
 dxWhy:'Dor em faixa no epigástrio irradiando para os flancos e o dorso, depois de álcool e comida, com vômitos e febre. Hipotensão, taquipneia e confusão indicam gravidade; Cullen (umbigo) e Grey-Turner (flancos) mostram a forma hemorrágica. Jobert negativo afasta perfuração.',
 conduta:[
  // CONFERIR: o material não traz o tratamento da pancreatite; ficou a conduta geral do abdome agudo.
  {id:'c1',t:'Internar, hidratar e analgesia',ok:1,why:'Desidratado, hipotenso e com dor intensa.'},
  {id:'c2',t:'Tratar como forma grave e vigiar de perto',ok:1,why:'Hipotensão, confusão, Cullen e Grey-Turner: pancreatite necro-hemorrágica.'},
  {id:'c3',t:'Cirurgia por úlcera perfurada',ok:0,why:'Jobert negativo: a macicez do fígado está preservada, sem ar livre.'},
  {id:'c4',t:'Tratar como pancreatite crônica',ok:0,why:'Esteatorreia, diabetes e carências são da crônica. Cullen, febre, hipotensão e confusão são da aguda.'},
  {id:'c5',t:'Alta com antiácido',ok:0,why:'Instável e com sinais de gravidade.'}
 ],
 teaching:[
  {t:'Dor da pancreatite',p:'Epigástrica, em faixa ou cinturão, irradiando para flancos e dorso, contínua, com náusea, vômito e febre.'},
  {t:'Sinais',p:'Cullen: equimose em volta do umbigo. Grey-Turner: equimose nos flancos e na lombar. Gobiet: timpanismo do abdome superior pela distensão do transverso.'},
  {t:'Aguda × crônica',p:'Aguda: dor em cinturão com irritação, Cullen, febre, hipotensão, confusão. Crônica: esteatorreia, diabetes, carências vitamínicas.'},
  {t:'Causas principais',p:'Cálculo biliar bloqueando a ampola de Vater e álcool.'}
 ]
});
