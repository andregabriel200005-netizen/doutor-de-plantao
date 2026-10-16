# Como é um caso por dentro

Cada arquivo em `js/casos/` faz `CASES.push({...})` com os campos abaixo. Use um caso existente como molde.

Há dois tipos de caso:
- **Com derrame** (`caso-0*.js`): têm `light`, toracocentese e análise do líquido. Nota pelos pesos `MAX`.
- **Semiologia** (`resp-*.js`): sem `light`; a nota vale mais pelo exame físico e pela síndrome (`MAX_SEMIO`). Os campos do líquido (`fluid`, `keyFluid`, `light`, `correctClass`, `fluidColor`, `fluidLook`) ficam de fora, e `tap` fica `{sides:[],spaces:[]}` (punção seca, que desconta).

| Campo | O que é |
|---|---|
| `id`, `n`, `title`, `card` | Identificador único, "Caso 4", título curto do menu e frase do cartão inicial |
| `modulo`, `fonte` | Assunto (agrupa o menu, ex.: "Semiologia respiratória") e a referência mostrada no resultado |
| `look`, `pname` | Personagem (chave de `LOOKS` em `js/dados.js`) e como o paciente é chamado |
| `briefing` | O que a enfermeira fala ao começar |
| `vitals` | Texto dos sinais vitais, entregue quando o aluno pede |
| `answers` | Resposta em linguagem leiga para **cada** pergunta de `QUESTIONS`. `respostas({...})` completa as não citadas com respostas neutras (`RESP_PADRAO`) |
| `keyQ` | Perguntas que valem ponto. Cada item: `{ids:[...], l:'rótulo'}`; qualquer id da lista conta |
| `geral` | Resultado da inspeção geral |
| `effSides` | Lados com derrame: `['D']`, `['E']` ou `['D','E']`. Gera macicez e murmúrio abolido na base |
| `exam` | Achados diferentes do padrão, com chave `manobra:região` (ex.: `"auscultar:coracao"`). Regiões: tórax (`apiceE`...`baseD`), `boca`, `pescoco`, `coracao` (precórdio/ictus), `abdome`, `maos`, `pernas`, focos (`focoAo`, `focoP`, `focoAc`, `focoT`, `focoM`) pulsos (`pulsoCar`, `pulsoRad`, `pulsoFem`, `pulsoPed`), abdome em 9 regiões (`REGIOES`: hcd, epi, hce, fld, meso, fle, fid, hipo, fie) e lombar (`lombD`, `lombE`). No abdome, auscultar antes de palpar ou percutir gera `ordem:abdome`, que pode valer ponto em `keyExam`. Manobras especiais usam `manobra:id` (lista `MANOBRAS`: coração e PA, e do abdome: murphy, blumberg, rovsing, psoas, obturador, lemos, hepatimetria, schuster, traube, skoda, macicezmovel, piparote, rechaco, jobert, vascolejo, gersuny, doisdedos). Escreva o efeito de cada manobra que mudaria a ausculta; a que não estiver no caso responde "Nenhuma mudança". Para várias regiões de uma vez: `achados(TORAX,{percutir:'...'})` |
| `keyExam` | Manobras que valem ponto (`vitals` = pedir sinais vitais) |
| `res` | Resultados de exames diferentes do padrão (`DEF_RES` em `js/jogo.js`) |
| `keyEx` | Exames que valem ponto. Pode ficar vazio: aí a nota de exames é cheia se o aluno não pedir nada à toa |
| `neutral` | Exames que não dão nem tiram ponto. Qualquer exame fora de `keyEx` e de `neutral` tira 2 pontos |
| `rx` | Desenho da radiografia: `eff` (derrame por lado, 0 a 0,5), `cardio`, `consol`/`consolAp` (consolidação na base/ápice), `ptx:{lado,tam}`, `hiper` (hiperinsuflação), `atel` + `shift` (atelectasia e lado para onde o mediastino foi), `congest`, `cav` (caverna no ápice), `bronq` |
| `tap` | Onde a punção dá líquido: lados e espaços (1 a 9, contados de cima; o 9 é baixo demais) |
| `fluidColor`, `fluidLook` | Cor na seringa e aspecto descrito |
| `fluid` | Resultado de cada análise do líquido pedida |
| `keyFluid` | Análises do líquido que valem ponto |
| `light` | Números para conferir Light: `protL`, `protS`, `ldhL`, `ldhS`, `albL`, `albS` |
| `diuretico` | `true` se o paciente usa diurético (aí os gradientes valem) |
| `correctSind`, `sindWhy` | Síndrome principal (id de `SINDROMES`, ou lista de ids aceitos, a primeira é a principal) e o porquê. Todo caso tem |
| `correctClass`, `clsNote` | Só com derrame: transudato ou exsudato, e explicação extra se houver pegadinha |
| `correctDx`, `dxWhy` | Diagnóstico (id de `DX`) e o porquê |
| `conduta` | Opções do final: `{id, t, ok, why}`. Misture certas e erradas plausíveis |
| `teaching` | 3 a 5 pontos para levar, cada um `{t, p}` |

## Coerência que o teste cobra

- Toda pergunta tem resposta.
- Light (e gradientes, se `diuretico`) batem com `correctClass`.
- Jogada perfeita = 100. Jogada ruim = nota baixa.
- Os valores em `fluid` e no texto de `res.sprot`/`res.sdhl` precisam bater com `light`.
