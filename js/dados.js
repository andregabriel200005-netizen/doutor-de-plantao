/* Dados compartilhados por todos os casos: perguntas, exames, análises do líquido, diagnósticos e personagens. */
const QUESTIONS=[
 {id:'queixa',cat:'História atual',t:'O que trouxe você aqui hoje?'},
 {id:'tempo',cat:'História atual',t:'Desde quando está assim?'},
 {id:'dor',cat:'História atual',t:'Sente alguma dor? Como ela é?'},
 {id:'febre',cat:'História atual',t:'Teve febre? Em que horário?'},
 {id:'inicio',cat:'História atual',t:'Começou de repente ou foi aos poucos?'},
 {id:'tosse',cat:'História atual',t:'Tem tosse? Sai catarro?'},
 {id:'escarro',cat:'História atual',t:'O catarro tem alguma cor? Já saiu sangue?'},
 {id:'chiado',cat:'História atual',t:'Sente chiado no peito?'},
 {id:'dispneia',cat:'História atual',t:'Tem falta de ar? Piora quando deita?'},
 {id:'esforco',cat:'História atual',t:'Os sintomas vêm com esforço? Melhoram com repouso?'},
 {id:'palpitacao',cat:'História atual',t:'Sente o coração disparar ou bater falhando?'},
 {id:'sincope',cat:'História atual',t:'Já desmaiou ou quase desmaiou?'},
 {id:'posicao',cat:'História atual',t:'Tem alguma posição que alivia ou piora a falta de ar?'},
 {id:'edema',cat:'História atual',t:'As pernas incham?'},
 {id:'urina',cat:'História atual',t:'Tem sentido muita sede ou urinado muito?'},
 {id:'peso',cat:'História atual',t:'Perdeu peso? Sua à noite?'},
 {id:'tratou',cat:'Medicamentos',t:'Já tomou algum remédio para isso?'},
 {id:'meds',cat:'Medicamentos',t:'Que remédios usa todo dia?'},
 {id:'doencas',cat:'Antecedentes',t:'Tem alguma doença? Coração, fígado, rim?'},
 {id:'alergia',cat:'Antecedentes',t:'Tem rinite, alergia ou asma desde criança?'},
 {id:'passado',cat:'Antecedentes',t:'Já teve pneumonia ou tuberculose antes?'},
 {id:'infancia',cat:'Antecedentes',t:'Teve alguma doença séria quando era criança?'},
 {id:'habitos',cat:'Antecedentes',t:'Bebe ou fuma?'},
 {id:'contato',cat:'Antecedentes',t:'Alguém perto de você está doente ou tossindo?'},
 {id:'imob',cat:'Antecedentes',t:'Fez cirurgia, viagem longa ou ficou muito tempo de cama?'},
 {id:'familia',cat:'Antecedentes',t:'Tem alguma doença na família?'},
 {id:'trabalho',cat:'Vida e hábitos',t:'Trabalha com quê?'},
 {id:'moradia',cat:'Vida e hábitos',t:'Onde você mora? Quantas pessoas moram com você?'},
 {id:'sal',cat:'Vida e hábitos',t:'Como anda a alimentação?'},
 {id:'emocional',cat:'Vida e hábitos',t:'Tem passado por estresse? Anda ansioso(a)?'},
 {id:'estimulantes',cat:'Vida e hábitos',t:'Toma café, energético ou algum remédio estimulante ou para emagrecer?'},
 {id:'hiv',cat:'Vida e hábitos',t:'Já fez teste de HIV? Usa preservativo?'}
];
const EXAMS=[
 {id:'hemo',t:'Hemograma',d:30},{id:'pcr',t:'Proteína C reativa',d:30},
 {id:'renal',t:'Ureia e creatinina',d:30},{id:'hep',t:'TGO, TGP e bilirrubinas',d:30},
 {id:'sprot',t:'Proteínas totais e albumina séricas',d:30},{id:'sdhl',t:'DHL sérico',d:30},
 {id:'glic',t:'Glicemia',d:20},{id:'bnp',t:'NT-proBNP sérico',d:45},
 {id:'eas',t:'Urina tipo 1 (EAS)',d:40},{id:'hiv',t:'Teste rápido anti-HIV',d:20},
 {id:'hemoc',t:'Hemoculturas',d:30},{id:'ddim',t:'D-dímero',d:30},
 {id:'rx',t:'Radiografia de tórax PA',d:20},{id:'laurell',t:'Radiografia em decúbito lateral (Laurell)',d:25},
 {id:'usg',t:'Ultrassonografia de tórax',d:30},{id:'tc',t:'Tomografia de tórax',d:60},
 {id:'angio',t:'Angiotomografia de tórax',d:60},{id:'eco',t:'Ecocardiograma',d:90},
 {id:'escarro',t:'Escarro: BAAR e teste molecular',d:90},
 {id:'gaso',t:'Gasometria arterial',d:20},{id:'ecg',t:'Eletrocardiograma',d:15},
 {id:'trop',t:'Troponina',d:60},{id:'tsh',t:'TSH e T4 livre',d:60}
];
const DEF_RES={hemo:'Hb 13,4 g/dL · Leucócitos 7.600/mm³ · Plaquetas 245.000/mm³',pcr:'PCR 6 mg/L (ref. < 5)',renal:'Ureia 32 mg/dL · Creatinina 0,9 mg/dL',hep:'TGO 24 U/L · TGP 21 U/L · Bilirrubina total 0,7 mg/dL',glic:'Glicemia 96 mg/dL',bnp:'NT-proBNP 110 pg/mL',eas:'Proteínas: negativo · Sedimento sem alterações',hiv:'Não reagente',hemoc:'Sem crescimento até o momento (parcial)',ddim:'D-dímero 420 ng/mL (ref. < 500)',eco:'FE 63%. Câmaras e valvas sem alterações.',escarro:'BAAR negativo · Teste molecular para TB: não detectado',gaso:'pH 7,41 · PaO₂ 94 mmHg · PaCO₂ 39 mmHg · HCO₃ 24 mEq/L · SatO₂ 97%',ecg:'Ritmo sinusal, FC 82 bpm. Sem alterações de ST ou T.',trop:'Troponina abaixo do limite de detecção',tsh:'TSH 1,8 mUI/L · T4 livre 1,2 ng/dL',rx:'Imagem no negatoscópio. Sem laudo: a leitura é sua.',sprot:'Proteínas totais 7,1 g/dL · Albumina 4,1 g/dL',sdhl:'DHL 176 UI/L (ref. até 200)',laurell:'Sem lâmina de líquido livre.',usg:'Sem líquido pleural. Deslizamento pleural presente dos dois lados.',tc:'Parênquima, pleura e mediastino sem alterações.',angio:'Sem falhas de enchimento nas artérias pulmonares.'};
const FLUID_TESTS=[
 {id:'ph',t:'pH'},{id:'gli',t:'Glicose'},{id:'dhl',t:'DHL'},{id:'prot',t:'Proteínas totais'},{id:'alb',t:'Albumina'},
 {id:'cel',t:'Celularidade total e diferencial'},{id:'cito',t:'Citologia oncótica'},{id:'ada',t:'ADA'},
 {id:'gram',t:'Gram e cultura'},{id:'baar',t:'BAAR e cultura para micobactérias'},{id:'tg',t:'Triglicerídeos'},
 {id:'bnp',t:'NT-proBNP'},{id:'amil',t:'Amilase'},{id:'ht',t:'Hematócrito'}
];
const FLUID_DEF={tg:'Triglicerídeos 28 mg/dL',amil:'Amilase 45 U/L',ht:'Hematócrito < 1%',cito:'Negativa para células neoplásicas'};
const TOOLS=[{id:'inspecionar',t:'Inspecionar'},{id:'palpar',t:'Palpar'},{id:'percutir',t:'Percutir'},{id:'auscultar',t:'Auscultar'}];
const ZNAME={apiceE:'ápice esquerdo',apiceD:'ápice direito',medioE:'terço médio esquerdo',medioD:'terço médio direito',baseE:'base esquerda',baseD:'base direita',pescoco:'pescoço',coracao:'precórdio (ictus)',boca:'boca e língua',maos:'mãos e unhas',
 focoAo:'foco aórtico (2º EIC direito)',focoP:'foco pulmonar (2º EIC esquerdo)',focoAc:'foco aórtico acessório (3º EIC esquerdo)',focoT:'foco tricúspide (4º–5º EIC paraesternal esquerdo)',focoM:'foco mitral (5º EIC, linha hemiclavicular)',
 pulsoCar:'pulso carotídeo',pulsoRad:'pulso radial',pulsoFem:'pulso femoral',pulsoPed:'pulso pedioso',abdome:'abdome',pernas:'pernas',geral:'paciente (geral)'};
const DX=[
 {id:'empiema',t:'Derrame parapneumônico complicado / empiema'},
 {id:'simples',t:'Derrame parapneumônico não complicado'},
 {id:'icc',t:'Derrame por insuficiência cardíaca'},
 {id:'tb',t:'Tuberculose pleural'},
 {id:'neo',t:'Derrame pleural neoplásico'},
 {id:'tep',t:'Tromboembolismo pulmonar'},
 {id:'cirrose',t:'Hidrotórax hepático'},
 {id:'nefro',t:'Síndrome nefrótica'},
 {id:'quilo',t:'Quilotórax'},
 {id:'pneumo',t:'Pneumonia lobar (pneumocócica)'},
 {id:'ptx',t:'Pneumotórax espontâneo primário'},
 {id:'asma',t:'Crise de asma'},
 {id:'dpoc',t:'DPOC (bronquite crônica / enfisema)'},
 {id:'bronqx',t:'Bronquiectasias'},
 {id:'neoatel',t:'Neoplasia pulmonar com atelectasia'},
 {id:'icc_cong',t:'Insuficiência cardíaca descompensada (congestão pulmonar)'},
 {id:'tbpulm',t:'Tuberculose pulmonar cavitária'},
 {id:'pleurite',t:'Pleurite aguda'},
 {id:'ansiedade',t:'Dispneia suspirosa (ansiedade)'},
 {id:'cad',t:'Cetoacidose diabética'},
 {id:'broncopn',t:'Broncopneumonia'},
 {id:'sca',t:'Síndrome coronariana aguda (infarto)'},
 {id:'pericardite',t:'Pericardite aguda'},
 {id:'eao',t:'Estenose aórtica'},
 {id:'iao',t:'Insuficiência aórtica'},
 {id:'em',t:'Estenose mitral'},
 {id:'im',t:'Insuficiência mitral'},
 {id:'ep',t:'Estenose pulmonar'},
 {id:'it',t:'Insuficiência tricúspide'},
 {id:'ic_b',t:'Insuficiência cardíaca descompensada, perfil quente e úmido'},
 {id:'ic_c',t:'Insuficiência cardíaca descompensada, perfil frio e úmido'},
 {id:'has',t:'Hipertensão arterial (a confirmar)'},
 {id:'ortostatica',t:'Síncope por hipotensão ortostática (medicamentosa)'},
 {id:'estimulantes',t:'Palpitações por uso de estimulantes'},
 {id:'mch',t:'Miocardiopatia hipertrófica'},
 {id:'inocente',t:'Sopro funcional (inocente)'}
];
// Síndrome que o exame do tórax mostra (pergunta do prontuário em todos os casos).
const SINDROMES=[
 {id:'normal',t:'Sem síndrome pulmonar, pleural ou cardíaca ao exame'},
 {id:'broncoesp',t:'Brônquica obstrutiva (broncoespasmo)'},
 {id:'bronqcron',t:'Brônquica crônica com hiperaeração'},
 {id:'bronqx',t:'Bronquiectasia'},
 {id:'broncopn',t:'Broncopneumonia (estertores localizados, sem consolidação)'},
 {id:'consol',t:'Consolidação'},
 {id:'atel',t:'Atelectasia'},
 {id:'congest',t:'Congestão pulmonar'},
 {id:'caverna',t:'Caverna'},
 {id:'pleurite',t:'Pleurite'},
 {id:'derrame',t:'Derrame pleural'},
 {id:'ptx',t:'Pneumotórax'},
 {id:'isquemica',t:'Cardíaca isquêmica'},
 {id:'valvar',t:'Cardíaca valvar'},
 {id:'ic',t:'Insuficiência cardíaca'},
 {id:'has',t:'Hipertensiva'},
 {id:'pericardica',t:'Pericárdica'},
 {id:'miocardio',t:'Miocardiopatia'}
];
// Manobras especiais (exame do coração e da pressão). Ficam em G.examined como 'manobra:id'.
const MANOBRAS=[
 {id:'pachon',t:'Decúbito lateral esquerdo (Pachon)'},
 {id:'frente',t:'Tronco inclinado para a frente'},
 {id:'apneia',t:'Prender a respiração'},
 {id:'handgrip',t:'Handgrip'},
 {id:'rivero',t:'Rivero-Carvallo (inspiração profunda)'},
 {id:'valsalva',t:'Valsalva'},
 {id:'cocoras',t:'Cócoras / elevar as pernas'},
 {id:'ortostase',t:'PA deitado e em pé'},
 {id:'pa3',t:'PA com técnica completa'}
];
const LOOKS={
 doctor:{skin:'#d9a27a',hair:'#3a2618',style:'short',top:'#eef3f4',pants:'#2c3f63',steth:1},
 nurse:{skin:'#a86f4c',hair:'#2b1a12',style:'bun',top:'#3fa9a0',pants:'#2f8a83',cap:1},
 carlos:{skin:'#c68a5e',hair:'#2a1d17',style:'short',top:'#7aa0c4',must:1},
 maria:{skin:'#e6b896',hair:'#cfcac4',style:'bun',top:'#b9a3d0',glasses:1},
 joao:{skin:'#8a5a3c',hair:'#1b1310',style:'curly',top:'#d9cf6b'},
 severino:{skin:'#b07a52',hair:'#d8d4cf',style:'bald',top:'#a89a6c'},
 ana:{skin:'#e0b090',hair:'#4a2a1a',style:'long',top:'#e48aa8'},
 bruno:{skin:'#f0c8a0',hair:'#8a5a2a',style:'short',top:'#6fbf8f'},
 lucia:{skin:'#7a4a30',hair:'#140c08',style:'long',top:'#f2a65a'},
 pedro:{skin:'#e2b48c',hair:'#6a5a4a',style:'bald',top:'#8aa6d6',glasses:1},
 tonho:{skin:'#9a6640',hair:'#d8d4cf',style:'short',top:'#7d8f5a',must:1},
 raimundo:{skin:'#c68a5e',hair:'#9b958e',style:'bald',top:'#6b7f99'},
 carla:{skin:'#f0c8a0',hair:'#b5652e',style:'long',top:'#9ad0e6'},
 davi:{skin:'#5a3a28',hair:'#0e0a08',style:'curly',top:'#e05a5a'},
 marcos:{skin:'#a8744e',hair:'#1b1310',style:'short',top:'#c9b38a'},
 theo:{skin:'#e8b890',hair:'#5a3a1a',style:'short',top:'#f2d24a'},
 ines:{skin:'#d9a27a',hair:'#d8d4cf',style:'bun',top:'#7fb39a'},
 jose:{skin:'#c99a76',hair:'#d8d4cf',style:'bald',top:'#b98a8a',glasses:1}
};
const FOCOS=['focoAo','focoP','focoAc','focoT','focoM'],PULSOS=['pulsoCar','pulsoRad','pulsoFem','pulsoPed'];

// Achados do exame para várias regiões de uma vez: achados(TORAX,{palpar:'...',auscultar:'...'})
const TORAX=['apiceE','apiceD','medioE','medioD','baseE','baseD'];
function achados(zonas,porManobra){const o={};zonas.forEach(z=>Object.entries(porManobra).forEach(([t,v])=>{o[t+':'+z]=v;}));return o;}

// Cada arquivo em js/casos/ adiciona um paciente a esta lista.
const CASES=[];
