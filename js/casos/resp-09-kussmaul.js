// Respiratório 9: Respiração de peixe fora d'água. Fonte: Semiologia Respiratória — Material de Estudo (André, UNINASSAU, 2026):
// por que a respiração muda e ritmo de Kussmaul (4).
CASES.push({
 id:'r-kuss',modulo:'Semiologia respiratória',n:'Caso 9',title:"Peixe fora d'água",look:'davi',pname:'Davi',
 fonte:'Semiologia Respiratória: material de estudo do André (apostila de Semiologia Especializada p. 13–22, aulas e monitoria)',
 card:'Davi, 19 anos. Respirando diferente e vomitando.',
 briefing:'Doutor, leito 3: Davi, 19 anos. A mãe trouxe porque ele está respirando estranho e vomitando.',
 vitals:'PA 104/62 mmHg · FC 118 bpm · FR 30 irpm · T 36,8 °C · SpO₂ 99% em ar ambiente',
 answers:{
  esforco:"Não.",
  palpitacao:"Tá batendo rápido.",
  sincope:"Fiquei tonto quando levantei, mas não desmaiei.",
  infancia:"Não, só a diabetes.",
  estimulantes:"Refrigerante normal, não diet.",
  queixa:'Tô respirando esquisito, cansado e vomitando.',
  tempo:'Dois dias.',
  inicio:'Foi piorando.',
  dor:'Uma dor na barriga.',
  febre:'Não.',
  tosse:'Não.',
  escarro:'Não.',
  chiado:'Não.',
  dispneia:'Parece que preciso puxar muito ar.',
  posicao:'Não.',
  edema:'Não.',
  urina:'Tô com uma sede que não passa e urinando toda hora.',
  peso:'Emagreci nesses dias.',
  tratou:'Nada.',
  meds:'Insulina. Mas acabou faz três dias e não consegui pegar no posto.',
  doencas:'Diabetes, desde os 12 anos.',
  alergia:'Não.',
  passado:'Não.',
  habitos:'Não fumo, não bebo.',
  contato:'Não.',
  imob:'Não.',
  familia:'Minha avó tem diabetes.',
  trabalho:'Tô no terceiro ano da escola.',
  moradia:'Moro com minha mãe e minha irmã.',
  sal:'Não consigo comer. Vomito tudo.',
  emocional:'Normal.',
  hiv:'Nunca fiz.'
 },
 keyQ:[{ids:['meds'],l:'Insulina suspensa'},{ids:['urina'],l:'Sede e urina em excesso'},{ids:['doencas'],l:'Diabetes'},{ids:['sal','queixa'],l:'Vômitos'},{ids:['dispneia'],l:'Caracterizar a dispneia'}],
 geral:'Jovem abatido. Respira fundo, faz uma pausa, solta o ar rápido, faz outra pausa e recomeça.',
 effSides:[],
 exam:{
  'inspecionar:boca':'Mucosas secas. Língua rósea.',
  'palpar:abdome':'Dor difusa leve à palpação, sem endurecimento da parede.'
 },
 keyExam:[{ids:['vitals'],l:'Pedir sinais vitais'},{ids:['inspecionar:geral'],l:'Inspeção geral (ritmo respiratório)'},
  {ids:TORAX.map(z=>'auscultar:'+z),l:'Auscultar o tórax (pulmões limpos)'},{ids:TORAX.map(z=>'percutir:'+z),l:'Percutir o tórax'},
  {ids:['inspecionar:boca'],l:'Olhar a boca (hidratação)'}],
 res:{
  glic:'Glicemia 486 mg/dL',
  gaso:'pH 7,12 · PaO₂ 104 mmHg · PaCO₂ 18 mmHg · HCO₃ 6 mEq/L · SatO₂ 99%',
  eas:'Glicose ++++ · Corpos cetônicos +++ · Proteínas: negativo',
  renal:'Ureia 48 mg/dL · Creatinina 1,3 mg/dL',
  hemo:'Hb 15,2 g/dL · Leucócitos 14.000/mm³ · Plaquetas 290.000/mm³'
 },
 keyEx:[{ids:['glic'],l:'Glicemia'},{ids:['gaso'],l:'Gasometria (acidose)'},{ids:['eas'],l:'Urina (cetonas)'}],
 neutral:['hemo','renal','rx','ecg','pcr'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'normal',
 sindWhy:'Pulmões limpos em todas as manobras. A falta de ar não vem de uma síndrome pulmonar ou pleural.',
 correctDx:'cad',
 dxWhy:'Ritmo de Kussmaul (inspiração profunda, pausa, expiração rápida, pausa) em diabético sem insulina há 3 dias, com sede, muita urina e vômitos. Glicemia alta, cetonas na urina e acidose metabólica (pH e bicarbonato baixos, PaCO₂ baixa para compensar): cetoacidose diabética.',
 conduta:[
  // CONFERIR: o tratamento da cetoacidose não está no material de semiologia respiratória.
  {id:'c1',t:'Tratar a causa: a cetoacidose',ok:1,why:'O Kussmaul é o pulmão compensando uma acidose metabólica. Quem precisa de tratamento é a acidose.'},
  {id:'c2',t:'Oxigênio',ok:0,why:'SatO₂ 99% e PaO₂ normal: não há hipoxemia.'},
  {id:'c3',t:'Broncodilatador',ok:0,why:'Sem sibilos.'},
  {id:'c4',t:'Intubar pelo esforço respiratório',ok:0,why:'Consciente e sem choque. A respiração rápida e profunda é compensação.'},
  {id:'c5',t:'Ansiolítico: é dispneia suspirosa',ok:0,why:'Na suspirosa a gasometria é normal. Aqui há acidose.'},
  {id:'c6',t:'Antibiótico para pneumonia',ok:0,why:'Pulmões limpos e sem febre.'}
 ],
 teaching:[
  {t:'Kussmaul',p:'Quatro tempos: inspiração profunda, pausa, expiração rápida, pausa ("peixe fora d’água"). Causas: cetoacidose diabética, insuficiência renal urêmica e outras acidoses metabólicas.'},
  {t:'Nem toda falta de ar é do pulmão',p:'O estímulo respiratório aumenta com febre, acidose, hipóxia, exercício e ansiedade. Pulmão limpo com respiração alterada: procure fora do tórax.'},
  {t:'Leia a gasometria',p:'pH baixo com bicarbonato baixo e PaCO₂ baixa: acidose metabólica com o pulmão tentando compensar.'}
 ]
});
