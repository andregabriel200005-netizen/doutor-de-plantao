/* Dados compartilhados por todos os casos: perguntas, exames, análises do líquido, diagnósticos e personagens. */
const QUESTIONS=[
 {id:'queixa',cat:'História atual',t:'O que trouxe você aqui hoje?'},
 {id:'tempo',cat:'História atual',t:'Desde quando está assim?'},
 {id:'dor',cat:'História atual',t:'Sente alguma dor? Como ela é?'},
 {id:'febre',cat:'História atual',t:'Teve febre? Em que horário?'},
 {id:'tosse',cat:'História atual',t:'Tem tosse? Sai catarro?'},
 {id:'dispneia',cat:'História atual',t:'Tem falta de ar? Piora quando deita?'},
 {id:'edema',cat:'História atual',t:'As pernas incham?'},
 {id:'peso',cat:'História atual',t:'Perdeu peso? Sua à noite?'},
 {id:'tratou',cat:'Medicamentos',t:'Já tomou algum remédio para isso?'},
 {id:'meds',cat:'Medicamentos',t:'Que remédios usa todo dia?'},
 {id:'doencas',cat:'Antecedentes',t:'Tem alguma doença? Coração, fígado, rim?'},
 {id:'habitos',cat:'Antecedentes',t:'Bebe ou fuma?'},
 {id:'contato',cat:'Antecedentes',t:'Alguém perto de você está doente ou tossindo?'},
 {id:'imob',cat:'Antecedentes',t:'Fez cirurgia, viagem longa ou ficou muito tempo de cama?'},
 {id:'familia',cat:'Antecedentes',t:'Tem alguma doença na família?'},
 {id:'trabalho',cat:'Vida e hábitos',t:'Trabalha com quê?'},
 {id:'sal',cat:'Vida e hábitos',t:'Como anda a alimentação?'},
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
 {id:'escarro',t:'Escarro: BAAR e teste molecular',d:90}
];
const DEF_RES={hemo:'Hb 13,4 g/dL · Leucócitos 7.600/mm³ · Plaquetas 245.000/mm³',pcr:'PCR 6 mg/L (ref. < 5)',renal:'Ureia 32 mg/dL · Creatinina 0,9 mg/dL',hep:'TGO 24 U/L · TGP 21 U/L · Bilirrubina total 0,7 mg/dL',glic:'Glicemia 96 mg/dL',bnp:'NT-proBNP 110 pg/mL',eas:'Proteínas: negativo · Sedimento sem alterações',hiv:'Não reagente',hemoc:'Sem crescimento até o momento (parcial)',ddim:'D-dímero 420 ng/mL (ref. < 500)',eco:'FE 63%. Câmaras e valvas sem alterações.',escarro:'BAAR negativo · Teste molecular para TB: não detectado',rx:'Imagem no negatoscópio. Sem laudo: a leitura é sua.'};
const FLUID_TESTS=[
 {id:'ph',t:'pH'},{id:'gli',t:'Glicose'},{id:'dhl',t:'DHL'},{id:'prot',t:'Proteínas totais'},{id:'alb',t:'Albumina'},
 {id:'cel',t:'Celularidade total e diferencial'},{id:'cito',t:'Citologia oncótica'},{id:'ada',t:'ADA'},
 {id:'gram',t:'Gram e cultura'},{id:'baar',t:'BAAR e cultura para micobactérias'},{id:'tg',t:'Triglicerídeos'},
 {id:'bnp',t:'NT-proBNP'},{id:'amil',t:'Amilase'},{id:'ht',t:'Hematócrito'}
];
const FLUID_DEF={tg:'Triglicerídeos 28 mg/dL',amil:'Amilase 45 U/L',ht:'Hematócrito < 1%',cito:'Negativa para células neoplásicas'};
const TOOLS=[{id:'inspecionar',t:'Inspecionar'},{id:'palpar',t:'Palpar'},{id:'percutir',t:'Percutir'},{id:'auscultar',t:'Auscultar'}];
const ZNAME={apiceE:'ápice esquerdo',apiceD:'ápice direito',medioE:'terço médio esquerdo',medioD:'terço médio direito',baseE:'base esquerda',baseD:'base direita',pescoco:'pescoço',coracao:'precórdio',abdome:'abdome',pernas:'pernas',geral:'paciente (geral)'};
const DX=[
 {id:'empiema',t:'Derrame parapneumônico complicado / empiema'},
 {id:'simples',t:'Derrame parapneumônico não complicado'},
 {id:'icc',t:'Derrame por insuficiência cardíaca'},
 {id:'tb',t:'Tuberculose pleural'},
 {id:'neo',t:'Derrame pleural neoplásico'},
 {id:'tep',t:'Tromboembolismo pulmonar'},
 {id:'cirrose',t:'Hidrotórax hepático'},
 {id:'nefro',t:'Síndrome nefrótica'},
 {id:'quilo',t:'Quilotórax'}
];
const LOOKS={
 doctor:{skin:'#d9a27a',hair:'#3a2618',style:'short',top:'#eef3f4',pants:'#2c3f63',steth:1},
 nurse:{skin:'#a86f4c',hair:'#2b1a12',style:'bun',top:'#3fa9a0',pants:'#2f8a83',cap:1},
 carlos:{skin:'#c68a5e',hair:'#2a1d17',style:'short',top:'#7aa0c4',must:1},
 maria:{skin:'#e6b896',hair:'#cfcac4',style:'bun',top:'#b9a3d0',glasses:1},
 joao:{skin:'#8a5a3c',hair:'#1b1310',style:'curly',top:'#d9cf6b'}
};

// Cada arquivo em js/casos/ adiciona um paciente a esta lista.
const CASES=[];
