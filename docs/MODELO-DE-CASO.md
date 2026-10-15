# Como é um caso por dentro

Cada arquivo em `js/casos/` faz `CASES.push({...})` com os campos abaixo. Use um caso existente como molde.

| Campo | O que é |
|---|---|
| `id`, `n`, `title`, `card` | Identificador, "Caso 4", título curto do menu e frase do cartão inicial |
| `look`, `pname` | Personagem (chave de `LOOKS` em `js/dados.js`) e como o paciente é chamado |
| `briefing` | O que a enfermeira fala ao começar |
| `vitals` | Texto dos sinais vitais, entregue quando o aluno pede |
| `answers` | Resposta em linguagem leiga para **cada** pergunta de `QUESTIONS` |
| `keyQ` | Perguntas que valem ponto. Cada item: `{ids:[...], l:'rótulo'}`; qualquer id da lista conta |
| `geral` | Resultado da inspeção geral |
| `effSides` | Lados com derrame: `['D']`, `['E']` ou `['D','E']`. Gera macicez e murmúrio abolido na base |
| `exam` | Achados diferentes do padrão, com chave `manobra:região` (ex.: `"auscultar:coracao"`) |
| `keyExam` | Manobras que valem ponto (`vitals` = pedir sinais vitais) |
| `res` | Resultados de exames diferentes do padrão (`DEF_RES` em `js/jogo.js`) |
| `keyEx` | Exames que valem ponto |
| `neutral` | Exames que não dão nem tiram ponto. Qualquer exame fora de `keyEx` e de `neutral` tira 2 pontos |
| `rx` | Desenho da radiografia: `eff` (tamanho do derrame por lado, 0 a 0,5), `cardio` (cardiomegalia), `consol` (consolidação) |
| `tap` | Onde a punção dá líquido: lados e espaços (1 a 9, contados de cima; o 9 é baixo demais) |
| `fluidColor`, `fluidLook` | Cor na seringa e aspecto descrito |
| `fluid` | Resultado de cada análise do líquido pedida |
| `keyFluid` | Análises do líquido que valem ponto |
| `light` | Números para conferir Light: `protL`, `protS`, `ldhL`, `ldhS`, `albL`, `albS` |
| `diuretico` | `true` se o paciente usa diurético (aí os gradientes valem) |
| `correctClass`, `clsNote` | Transudato ou exsudato, e explicação extra se houver pegadinha |
| `correctDx`, `dxWhy` | Diagnóstico (id de `DX`) e o porquê |
| `conduta` | Opções do final: `{id, t, ok, why}`. Misture certas e erradas plausíveis |
| `teaching` | 3 a 5 pontos para levar, cada um `{t, p}` |

## Coerência que o teste cobra

- Toda pergunta tem resposta.
- Light (e gradientes, se `diuretico`) batem com `correctClass`.
- Jogada perfeita = 100. Jogada ruim = nota baixa.
- Os valores em `fluid` e no texto de `res.sprot`/`res.sdhl` precisam bater com `light`.
