// Digestório 13: Sem soltar gases. Fonte: Semiologia do Aparelho Digestório — Material de Estudo (André, UNINASSAU, 2026):
// vômitos e obstrução (1.5), ausculta: peristaltismo de luta (2.3), inspeção: cicatrizes e peristaltismo visível (2.4), percussão (2.8), abdome agudo obstrutivo (4.5).
CASES.push({
 id:'d-obst',modulo:'Semiologia do digestório',n:'Caso 13',title:'Sem soltar gases',look:'maria',pname:'Dona Nair',fonte:FONTE_DIG,
 card:'Nair, 66 anos. Barriga estufada, cólica e vômitos.',
 briefing:'Doutor, leito 3: Dona Nair, 66 anos. Barriga muito estufada e vômitos.',
 vitals:'PA 110/70 mmHg · FC 108 bpm · FR 22 irpm · T 36,9 °C · SpO₂ 96% em ar ambiente',
 answers:respostas({
  queixa:'A barriga tá estufada, dói em cólica e não paro de vomitar.',
  tempo:'Dois dias.',
  inicio:'Começou com cólica no meio da barriga, que vem e vai.',
  dor:'Cólica forte no meio da barriga, vem em ondas.',
  vomito:'Vomitei muito. Primeiro comida, depois amarelo, e hoje veio com cheiro de fezes.',
  fezes:'Não evacuo nem solto gases faz dois dias.',
  passado:'Tirei o útero há 10 anos.',
  meds:'Remédio de pressão.',
  doencas:'Pressão alta.',
  urinacor:'Escura e pouca.',
  trabalho:'Dona de casa.'
 }),
 keyQ:[{ids:['fezes'],l:'Parada de gases e fezes'},{ids:['vomito'],l:'Caracterizar o vômito (fecaloide)'},{ids:['passado'],l:'Cirurgia abdominal prévia'},{ids:['dor'],l:'Dor em cólica'},{ids:['tempo'],l:'Evolução'}],
 geral:'Idosa desidratada, com o abdome muito distendido, contorcendo-se nas cólicas.',
 effSides:[],
 exam:Object.assign(achados(REGIOES,{
   auscultar:'Ruídos hidroaéreos aumentados, em salvas, com timbre metálico.',
   percutir:'Som hipertimpânico.',
   palpar:'Abdome distendido e tenso, com dor difusa em cólica, sem endurecimento da parede.'}),{
  'inspecionar:hipo':'Cicatriz cirúrgica antiga na linha média, abaixo do umbigo.',
  'inspecionar:meso':'Abdome globoso, distendido. Ondas de movimento das alças visíveis sob a pele.',
  'manobra:blumberg':'Descompressão sem dor.',
  'manobra:gersuny':'Sem crepitação.',
  'inspecionar:boca':'Mucosas secas.'
 }),
 keyExam:[{ids:['ordem:abdome'],l:'Auscultar o abdome antes de palpar e percutir'},{ids:['inspecionar:hipo','inspecionar:meso'],l:'Inspecionar (cicatriz, peristaltismo visível)'},
  {ids:REGIOES.map(z=>'auscultar:'+z),l:'Auscultar o abdome'},{ids:REGIOES.map(z=>'percutir:'+z),l:'Percutir o abdome'},
  {ids:['manobra:blumberg'],l:'Irritação peritoneal'},{ids:['vitals'],l:'Pedir sinais vitais'}],
 res:{
  hemo:'Hb 14,8 g/dL · Leucócitos 11.800/mm³ · Plaquetas 300.000/mm³',
  renal:'Ureia 68 mg/dL · Creatinina 1,4 mg/dL',
  usgabd:'Alças de delgado dilatadas, cheias de líquido, com movimento de vai e vem.'
 },
 keyEx:[],
 neutral:['hemo','renal','usgabd','rx','amil','eas'],
 rx:{},
 tap:{sides:[],spaces:[]},
 correctSind:'abdagudo',
 sindWhy:'Dor em cólica, distensão, vômitos e parada de gases e fezes: abdome agudo obstrutivo.',
 correctDx:'obstrucao',
 dxWhy:'Cirurgia abdominal antiga (bridas), cólica, distensão, vômito que virou fecaloide e parada de gases e fezes. Ruídos aumentados e metálicos (peristaltismo de luta), ondas das alças visíveis e hipertimpanismo.',
 conduta:[
  {id:'c1',t:'Avaliação cirúrgica de urgência',ok:1,why:'Abdome agudo obstrutivo: diagnóstico rápido e muitas vezes cirurgia.'},
  // CONFERIR: hidratação na obstrução não está escrita no material.
  {id:'c2',t:'Hidratar',ok:1,why:'Desidratada, com ureia e creatinina subindo.'},
  {id:'c3',t:'Laxante',ok:0,why:'Não é constipação simples: há obstrução mecânica, com vômito fecaloide.'},
  {id:'c4',t:'Antiemético e alta',ok:0,why:'Obstrução com desidratação.'}
 ],
 teaching:[
  {t:'Vômito + dor = obstrução',p:'Alta: vômitos precoces, volumosos, biliosos. Baixa: vômitos tardios, muita distensão, parada de gases e fezes. Fecaloide: estase no delgado ou fístula gastrocólica.'},
  {t:'Peristaltismo de luta',p:'No início da obstrução mecânica o intestino contrai mais forte: ruídos aumentados e metálicos, ondas visíveis.'},
  {t:'Bridas',p:'Cicatriz cirúrgica antiga é pista de aderências, causa clássica de obstrução.'}
 ]
});
