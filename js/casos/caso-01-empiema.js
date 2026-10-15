// Caso 1: A febre que voltou. Fonte: Resumos Estratégicos, Derrame Pleural (Estratégia MED).
CASES.push({
 "id": "empiema",
 "n": "Caso 1",
 "title": "A febre que voltou",
 "look": "carlos",
 "pname": "Seu Carlos",
 "card": "Carlos, 45 anos. Febre e dor no peito.",
 "briefing": "Doutor, leito 3: seu Carlos, 45 anos. Chegou com febre e dor no peito. Tá cansadinho.",
 "vitals": "PA 118/72 mmHg · FC 112 bpm · FR 28 irpm · T 38,9 °C · SpO₂ 92% em ar ambiente",
 "answers": {
  "queixa": "Doutor, é essa febre que não passa e uma fisgada aqui do lado quando eu puxo o ar.",
  "tempo": "Começou faz uma semana. Achei que era gripe.",
  "dor": "É uma pontada aqui do lado direito, embaixo. Quando respiro fundo ou tusso, parece uma faca.",
  "febre": "Febre todo dia, alta, com tremedeira. Medi 39 ontem.",
  "tosse": "Tusso muito. Sai um catarro amarelo-esverdeado, grosso.",
  "dispneia": "Tô cansado, puxando o ar. Deitado não muda muito, não.",
  "edema": "Não, as pernas tão normais.",
  "peso": "Acho que emagreci um pouquinho essa semana, tô comendo pouco. Suor só quando a febre baixa.",
  "tratou": "O rapaz da farmácia me deu amoxicilina. Tomei 3 dias, melhorei um pouco e parei.",
  "meds": "Não tomo nada todo dia.",
  "doencas": "Nunca fui de médico. Que eu saiba, não tenho nada.",
  "habitos": "Fumo não. Bebo... todo dia uma cachacinha, fim de semana mais. Às vezes me engasgo quando tô bebendo.",
  "contato": "Que eu saiba, ninguém. Lá em casa tá todo mundo bem.",
  "imob": "Nada disso. Trabalho em pé o dia inteiro.",
  "familia": "Meu pai teve câncer na próstata, já velhinho.",
  "trabalho": "Sou pedreiro.",
  "sal": "Como de tudo. Essa semana quase nada, sem fome.",
  "hiv": "Nunca fiz, não. Sou casado há 20 anos."
 },
 "keyQ": [
  {
   "ids": [
    "dor"
   ],
   "l": "Caracterizar a dor (pleurítica, à direita)"
  },
  {
   "ids": [
    "febre"
   ],
   "l": "Investigar a febre"
  },
  {
   "ids": [
    "tosse"
   ],
   "l": "Perguntar sobre tosse e escarro"
  },
  {
   "ids": [
    "tratou"
   ],
   "l": "Descobrir o antibiótico tomado de forma irregular"
  },
  {
   "ids": [
    "habitos"
   ],
   "l": "Etilismo e engasgos (risco de aspiração)"
  },
  {
   "ids": [
    "dispneia",
    "edema"
   ],
   "l": "Excluir sinais de insuficiência cardíaca"
  },
  {
   "ids": [
    "peso",
    "contato"
   ],
   "l": "Rastrear tuberculose"
  }
 ],
 "geral": "Sudoreico, quente ao toque, respirando rápido e curto para evitar a dor.",
 "effSides": [
  "D"
 ],
 "exam": {
  "auscultar:medioD": "Estertores crepitantes e egofonia logo acima da área silenciosa.",
  "palpar:medioD": "Frêmito toracovocal aumentado."
 },
 "keyExam": [
  {
   "ids": [
    "vitals"
   ],
   "l": "Pedir sinais vitais"
  },
  {
   "ids": [
    "inspecionar:geral"
   ],
   "l": "Inspeção geral"
  },
  {
   "ids": [
    "percutir:baseD"
   ],
   "l": "Percutir a base direita (macicez)"
  },
  {
   "ids": [
    "auscultar:baseD"
   ],
   "l": "Auscultar a base direita"
  },
  {
   "ids": [
    "palpar:baseD"
   ],
   "l": "Palpar frêmito na base direita"
  },
  {
   "ids": [
    "percutir:baseE",
    "auscultar:baseE",
    "palpar:baseE"
   ],
   "l": "Comparar com o lado esquerdo"
  },
  {
   "ids": [
    "inspecionar:pescoco",
    "palpar:pescoco",
    "inspecionar:pernas",
    "palpar:pernas"
   ],
   "l": "Procurar congestão (jugular, edema)"
  }
 ],
 "res": {
  "hemo": "Hb 12,8 g/dL · Leucócitos 19.500/mm³ (12% bastões) · Plaquetas 410.000/mm³",
  "pcr": "PCR 220 mg/L (ref. < 5)",
  "glic": "Glicemia 112 mg/dL",
  "ddim": "D-dímero 1.300 ng/mL (ref. < 500)",
  "laurell": "Lâmina de líquido livre medindo 18 mm.",
  "usg": "Derrame à direita com debris ecogênicos e septações finas. Ponto de punção marcado na pele.",
  "tc": "Consolidação no lobo inferior direito. Derrame à direita, parcialmente loculado, com realce pleural.",
  "angio": "Sem falhas de enchimento. Consolidação no lobo inferior direito e derrame à direita."
 },
 "keyEx": [
  {
   "ids": [
    "rx"
   ],
   "l": "Radiografia de tórax"
  },
  {
   "ids": [
    "laurell",
    "usg"
   ],
   "l": "Laurell ou USG antes de puncionar"
  },
  {
   "ids": [
    "sprot"
   ],
   "l": "Proteínas séricas (para Light)"
  },
  {
   "ids": [
    "sdhl"
   ],
   "l": "DHL sérico (para Light)"
  },
  {
   "ids": [
    "hemo",
    "pcr"
   ],
   "l": "Hemograma ou PCR"
  }
 ],
 "neutral": [
  "renal",
  "hep",
  "glic",
  "hiv",
  "hemoc",
  "escarro",
  "tc"
 ],
 "rx": {
  "eff": {
   "D": 0.42
  },
  "consol": "D"
 },
 "tap": {
  "sides": [
   "D"
  ],
  "spaces": [
   6,
   7,
   8
  ]
 },
 "fluidColor": "#e6d8aa",
 "fluidLook": "Turvo, espesso, cor de creme, com cheiro forte.",
 "fluid": {
  "ph": "pH 7,05",
  "gli": "Glicose 28 mg/dL",
  "dhl": "DHL 2.400 UI/L",
  "prot": "Proteínas totais 5,2 g/dL",
  "alb": "Albumina 2,4 g/dL",
  "cel": "18.000 células/mm³ · 92% neutrófilos",
  "ada": "ADA 62 UI/L",
  "gram": "Gram: cocos Gram positivos. Cultura em andamento.",
  "baar": "BAAR negativo. Cultura para micobactérias em andamento.",
  "bnp": "NT-proBNP 310 pg/mL"
 },
 "keyFluid": [
  {
   "ids": [
    "prot"
   ],
   "l": "Proteínas do líquido"
  },
  {
   "ids": [
    "dhl"
   ],
   "l": "DHL do líquido"
  },
  {
   "ids": [
    "ph"
   ],
   "l": "pH"
  },
  {
   "ids": [
    "gli"
   ],
   "l": "Glicose"
  },
  {
   "ids": [
    "cel"
   ],
   "l": "Celularidade e diferencial"
  },
  {
   "ids": [
    "gram"
   ],
   "l": "Gram e cultura"
  }
 ],
 "light": {
  "protL": 5.2,
  "protS": 6.8,
  "ldhL": 2400,
  "ldhS": 190,
  "albL": 2.4,
  "albS": 3.4
 },
 "correctClass": "exsudato",
 "correctDx": "empiema",
 "dxWhy": "Pneumonia mal tratada, líquido purulento com pH < 7,2, glicose < 40 mg/dL, DHL > 1000 UI/L e Gram positivo. O ADA de 62 não muda nada: exsudato neutrofílico com ADA alto sugere empiema, não TB.",
 "conduta": [
  {
   "id": "c1",
   "t": "Drenagem torácica imediata",
   "ok": 1,
   "why": "pH < 7,2, glicose < 40, DHL > 1000, pus ou bactéria no líquido indicam drenagem imediata."
  },
  {
   "id": "c2",
   "t": "Antibiótico venoso por 3 a 4 semanas",
   "ok": 1,
   "why": "Empiema exige tratamento prolongado, cobrindo pneumonia comunitária e aspirativa."
  },
  {
   "id": "c3",
   "t": "Internação",
   "ok": 1,
   "why": "Derrame complicado precisa de drenagem e antibiótico venoso no hospital."
  },
  {
   "id": "c4",
   "t": "Só toracocentese de alívio e amoxicilina oral",
   "ok": 0,
   "why": "Sem drenagem contínua o pus reacumula e o pulmão pode encarcerar."
  },
  {
   "id": "c5",
   "t": "Antibiótico intrapleural",
   "ok": 0,
   "why": "Não é indicado."
  },
  {
   "id": "c6",
   "t": "Biópsia pleural por agulha",
   "ok": 0,
   "why": "Contraindicada em empiema."
  },
  {
   "id": "c7",
   "t": "Esquema RIPE empírico",
   "ok": 0,
   "why": "Exsudato neutrofílico com ADA alto sugere empiema, não TB."
  },
  {
   "id": "c8",
   "t": "Incluir aminoglicosídeo no esquema",
   "ok": 0,
   "why": "Aminoglicosídeos devem ser evitados no empiema."
  },
  {
   "id": "c9",
   "t": "Furosemida para secar o derrame",
   "ok": 0,
   "why": "Diurético não trata empiema."
  }
 ],
 "teaching": [
  {
   "t": "Um critério de Light basta",
   "p": "Proteína líquido/soro > 0,5, DHL líquido/soro > 0,6 ou DHL do líquido > 2/3 do limite superior sérico (cerca de 133 UI/L se o limite for 200)."
  },
  {
   "t": "Quando drenar",
   "p": "pH < 7,2, glicose < 40 mg/dL (alguns usam < 60), DHL > 1000 UI/L, pus ou bactéria no líquido: drenagem imediata."
  },
  {
   "t": "Antibiótico",
   "p": "3 a 4 semanas, sem aminoglicosídeos e sem antibiótico intrapleural."
  },
  {
   "t": "ADA alto nem sempre é TB",
   "p": "Exsudato neutrofílico com ADA alto sugere empiema. Na TB o exsudato é linfocítico."
  }
 ]
});
