// Caso 2: Dormindo sentada. Fonte: Resumos Estratégicos, Derrame Pleural (Estratégia MED).
CASES.push({
 "id": "icc",
 "modulo": "Derrame pleural",
 "fonte": "Resumos Estratégicos: Derrame Pleural (Estratégia MED)",
 "correctSind": "derrame",
 "sindWhy": "Macicez, frêmito e murmúrio abolidos na base, com egofonia na borda superior: líquido entre o pulmão e a parede.",
 "n": "Caso 2",
 "title": "Dormindo sentada",
 "look": "maria",
 "pname": "Dona Maria",
 "card": "Maria, 72 anos. Falta de ar e pernas inchadas.",
 "briefing": "Doutor, leito 3: Dona Maria, 72 anos. Diz que tá com falta de ar faz uns dias.",
 "vitals": "PA 150/90 mmHg · FC 96 bpm · FR 24 irpm · T 36,4 °C · SpO₂ 91% em ar ambiente",
 "answers": {
  "refeicao": "Não.",
  "engolir": "Não.",
  "vomito": "Não.",
  "fezes": "Normais, uma vez por dia.",
  "urinacor": "Normal, mas urino pouco.",
  "transfusao": "Não.",
  "rio": "Não.",
  "esforco": "Qualquer esforço me cansa. Parada eu melhoro um pouco.",
  "palpitacao": "Às vezes, de noite.",
  "sincope": "Não.",
  "infancia": "Que eu lembre, não.",
  "estimulantes": "Um cafezinho por dia.",
  "inicio": "Foi piorando aos poucos, nas últimas duas semanas.",
  "escarro": "Quase não tenho catarro. Sangue nunca.",
  "chiado": "Às vezes, de noite, um chiadinho.",
  "posicao": "Deitada piora muito. Durmo sentada com três travesseiros.",
  "urina": "Não. Até urino pouco desde que piorou.",
  "alergia": "Não.",
  "passado": "Não.",
  "moradia": "Moro com minha filha, aqui no bairro.",
  "emocional": "Preocupada, mas é pela falta de ar.",
  "queixa": "Ai, doutor... essa falta de ar que não me deixa. E as pernas inchadas.",
  "tempo": "Vem piorando faz umas três semanas.",
  "dor": "Dor não. É mais um aperto, um cansaço.",
  "febre": "Febre não tive, não.",
  "tosse": "Uma tossezinha seca, mais de noite.",
  "dispneia": "Muita. Só durmo sentada, com três travesseiros. Às vezes acordo sufocada.",
  "edema": "Incham sim, até o joelho. E engordei uns 4 quilos.",
  "peso": "Perder não, só ganhei. Suor de noite, não.",
  "tratou": "Só os meus remédios de sempre.",
  "meds": "Furosemida, enalapril e carvedilol. Do coração.",
  "doencas": "O cardiologista diz que meu coração é fraco. Fígado e rim, que eu saiba, bons.",
  "habitos": "Nunca bebi nem fumei.",
  "contato": "Ninguém doente lá em casa.",
  "imob": "Não viajei nem operei. Ando pouco por causa do cansaço.",
  "familia": "Minha mãe também era do coração.",
  "trabalho": "Sou aposentada. Era costureira.",
  "sal": "Ai... confesso que ando comendo umas coisas salgadas. Charque, feijão bem temperado.",
  "hiv": "Nunca fiz, mas não tenho risco, não."
 },
 "keyQ": [
  {
   "ids": [
    "dispneia"
   ],
   "l": "Ortopneia e dispneia paroxística noturna"
  },
  {
   "ids": [
    "edema"
   ],
   "l": "Edema e ganho de peso"
  },
  {
   "ids": [
    "meds"
   ],
   "l": "Descobrir o uso de diurético"
  },
  {
   "ids": [
    "doencas"
   ],
   "l": "Doença cardíaca prévia"
  },
  {
   "ids": [
    "sal"
   ],
   "l": "Transgressão alimentar (sal)"
  },
  {
   "ids": [
    "febre",
    "tosse"
   ],
   "l": "Excluir infecção"
  }
 ],
 "geral": "Sentada na maca, ofegante, sem conseguir deitar. Afebril ao toque.",
 "effSides": [
  "D",
  "E"
 ],
 "exam": {
  "inspecionar:pescoco": "Turgência jugular patológica a 45°.",
  "palpar:pescoco": "Refluxo hepatojugular positivo.",
  "auscultar:coracao": "Terceira bulha (B3) e sopro sistólico suave no foco mitral.",
  "palpar:coracao": "Ictus desviado para baixo e para a esquerda, no 6º espaço intercostal.",
  "inspecionar:pernas": "Pernas visivelmente inchadas, simétricas.",
  "palpar:pernas": "Edema 3+/4+ com cacifo, simétrico, até os joelhos.",
  "auscultar:medioD": "Estertores finos.",
  "auscultar:medioE": "Estertores finos.",
  "palpar:abdome": "Fígado palpável a 3 cm do rebordo costal, levemente doloroso.",
  "palpar:hcd": "Fígado palpável a 3 cm do rebordo costal, levemente doloroso.",
  "manobra:lemos": "Fígado a 3 cm do rebordo costal, borda lisa, levemente doloroso."
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
    "percutir:baseD",
    "percutir:baseE"
   ],
   "l": "Percutir as bases"
  },
  {
   "ids": [
    "auscultar:baseD",
    "auscultar:baseE"
   ],
   "l": "Auscultar as bases"
  },
  {
   "ids": [
    "inspecionar:pescoco",
    "palpar:pescoco"
   ],
   "l": "Jugular e refluxo hepatojugular"
  },
  {
   "ids": [
    "auscultar:coracao"
   ],
   "l": "Auscultar o coração (B3)"
  },
  {
   "ids": [
    "inspecionar:pernas",
    "palpar:pernas"
   ],
   "l": "Avaliar edema de membros inferiores"
  }
 ],
 "res": {
  "espiro": "Feita após estabilizar. CVF 72% do previsto · VEF1 74% do previsto · VEF1/CVF 0,82 · Após broncodilatador: VEF1 +3% (+70 mL)",
  "hemo": "Hb 12,1 g/dL · Leucócitos 7.900/mm³ · Plaquetas 230.000/mm³",
  "renal": "Ureia 58 mg/dL · Creatinina 1,3 mg/dL",
  "bnp": "NT-proBNP 6.400 pg/mL",
  "eco": "FE 35%. Átrio esquerdo aumentado. Hipocinesia difusa do ventrículo esquerdo.",
  "ddim": "D-dímero 610 ng/mL (ref. < 500)",
  "laurell": "Lâmina de líquido livre medindo 25 mm à direita.",
  "usg": "Derrame bilateral livre, anecoico, sem septações, maior à direita. Ponto de punção marcado.",
  "tc": "Derrame bilateral, maior à direita. Cardiomegalia. Sem massas.",
  "angio": "Sem falhas de enchimento. Derrame bilateral e cardiomegalia."
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
   "l": "Proteínas e albumina séricas (Light e gradiente)"
  },
  {
   "ids": [
    "sdhl"
   ],
   "l": "DHL sérico (para Light)"
  },
  {
   "ids": [
    "bnp",
    "eco"
   ],
   "l": "NT-proBNP sérico ou ecocardiograma"
  }
 ],
 "neutral": [
  "ecg",
  "renal",
  "glic",
  "hemo",
  "pcr",
  "hep",
  "eas",
  "eco",
  "bnp"
 ],
 "rx": {
  "eff": {
   "D": 0.36,
   "E": 0.24
  },
  "cardio": 1
 },
 "tap": {
  "sides": [
   "D",
   "E"
  ],
  "spaces": [
   7,
   8
  ]
 },
 "fluidColor": "#f1e08a",
 "fluidLook": "Amarelo-claro, límpido.",
 "fluid": {
  "ph": "pH 7,42",
  "gli": "Glicose 98 mg/dL",
  "dhl": "DHL 150 UI/L",
  "prot": "Proteínas totais 3,8 g/dL",
  "alb": "Albumina 2,4 g/dL",
  "cel": "450 células/mm³ · predomínio de mononucleares",
  "ada": "ADA 12 UI/L",
  "gram": "Gram sem bactérias. Cultura em andamento.",
  "baar": "BAAR negativo. Cultura em andamento.",
  "bnp": "NT-proBNP 2.800 pg/mL",
  "cito": "Células mesoteliais reativas. Negativa para células neoplásicas."
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
    "alb"
   ],
   "l": "Albumina do líquido (gradiente)"
  },
  {
   "ids": [
    "bnp"
   ],
   "l": "NT-proBNP no líquido"
  },
  {
   "ids": [
    "cel"
   ],
   "l": "Celularidade e diferencial"
  }
 ],
 "light": {
  "protL": 3.8,
  "protS": 7,
  "ldhL": 150,
  "ldhS": 210,
  "albL": 2.4,
  "albS": 3.8
 },
 "diuretico": true,
 "correctClass": "transudato",
 "correctDx": "icc",
 "clsNote": "Pegadinha: por Light parece exsudato, mas a paciente usa furosemida, que concentra o líquido (pseudoexsudato). Gradiente de proteínas 7,0 - 3,8 = 3,2 g/dL (> 3,1) e de albumina 3,8 - 2,4 = 1,4 g/dL (> 1,2): é transudato.",
 "dxWhy": "Insuficiência cardíaca conhecida e descompensada (transgressão de sal), derrame bilateral com cardiomegalia, B3, turgência jugular, gradientes de transudato e NT-proBNP pleural de 2.800 pg/mL (> 1500).",
 "conduta": [
  {
   "id": "c1",
   "t": "Otimizar o tratamento da insuficiência cardíaca (diurético, restrição de sódio)",
   "ok": 1,
   "why": "Tratar a causa resolve o derrame na maioria dos casos."
  },
  {
   "id": "c2",
   "t": "Toracocentese de alívio só se dispneia intensa, retirando menos de 1500 mL",
   "ok": 1,
   "why": "Acima de 1500 mL há risco de edema de reexpansão."
  },
  {
   "id": "c3",
   "t": "Reavaliar clínica e radiografia após compensar",
   "ok": 1,
   "why": "Se persistir ou ficar assimétrico, investigar outra causa."
  },
  {
   "id": "c4",
   "t": "Drenagem torácica e pleurodese",
   "ok": 0,
   "why": "Derrame cardiogênico responde ao tratamento da insuficiência cardíaca."
  },
  {
   "id": "c5",
   "t": "Esquema RIPE",
   "ok": 0,
   "why": "Nada sugere TB (ADA 12, líquido não linfocítico)."
  },
  {
   "id": "c6",
   "t": "Antibiótico por 3 a 4 semanas",
   "ok": 0,
   "why": "Sem febre, sem pus, pH normal: não há infecção pleural."
  },
  {
   "id": "c7",
   "t": "Biópsia pleural por agulha",
   "ok": 0,
   "why": "Não há suspeita de doença pleural primária."
  },
  {
   "id": "c8",
   "t": "Suspender a furosemida porque ela causou o exsudato",
   "ok": 0,
   "why": "O diurético só concentra o líquido. Suspender piora a congestão."
  }
 ],
 "teaching": [
  {
   "t": "Pseudoexsudato do diurético",
   "p": "Com diurético, Light pode chamar um transudato de exsudato. Use o gradiente de proteínas (> 3,1 g/dL) ou de albumina (> 1,2 g/dL)."
  },
  {
   "t": "NT-proBNP pleural",
   "p": "Acima de 1500 pg/mL apoia insuficiência cardíaca."
  },
  {
   "t": "Volume retirado",
   "p": "Acima de 1500 mL há risco de edema de reexpansão."
  },
  {
   "t": "Puncionar com segurança",
   "p": "Laurell com lâmina maior que 10 mm permite a punção. Entre rente à borda superior da costela de baixo."
  }
 ]
});
