# Plantão Pleural

Jogo 2D em pixel art para estudar medicina: o aluno é o médico de plantão, anda pela sala, conversa com o paciente, examina, pede exames, faz procedimentos e decide diagnóstico e conduta. Começou com derrame pleural e vai crescer para outros assuntos.

## Quem é o dono

André, estudante de medicina (UNINASSAU, Recife), sem formação em programação. Ele pede mudanças em português, do jeito que imagina o jogo.

- Responda sempre em português do Brasil, em linguagem simples. Explique o que mudou no jogo, não no código.
- Quando ele descrever uma ideia grande, divida em etapas pequenas, mostre a primeira funcionando e só depois siga.
- Se uma ideia for difícil ou arriscada (3D, multiplayer, login), diga o custo com honestidade e proponha uma versão menor que já dê para jogar.
- Ideias que ainda não serão feitas vão para `IDEIAS.md`.

## Regras do jogo (não quebrar)

1. **Conteúdo médico vem do material do André.** Cada caso cita a fonte no topo do arquivo. Não invente critérios, valores de corte ou condutas que não estejam no material. Se faltar algo, pergunte ou marque como `// CONFERIR:` no caso e avise.
2. **Nada mastigado.** O jogo não diz o que é relevante:
   - perguntas e exames são os mesmos para todos os casos, sem destacar os importantes;
   - resultados vêm crus, sem cor ou alerta de alterado;
   - imagens vêm sem laudo;
   - cálculos (Light, gradientes) são do aluno; a caderneta tem só uma calculadora comum.
3. **Tom didático no final.** A tela de resultado explica o porquê de cada acerto e erro e traz os pontos para levar do caso.
4. **Pacientes fictícios.** Nomes e histórias inventados. Os valores de exame são construídos para bater com os limiares do material.
5. **Ações têm custo.** Tempo do plantão, pontos perdidos por exame desnecessário, complicações em procedimento mal feito.

## Como o projeto está organizado

```
index.html              página do jogo (abre direto no navegador)
css/style.css           visual
js/dados.js             listas comuns: perguntas, exames, análises do líquido, diagnósticos, personagens (LOOKS)
js/casos/*.js           um arquivo por paciente; cada um faz CASES.push({...}). caso-0* = derrame pleural, resp-* = semiologia respiratória
js/ia.js                casos criados por IA a partir do material colado pelo aluno (só no artifact do Claude)
js/jogo.js              motor: desenho da sala e personagens, telas, toracocentese, pontuação
scripts/build.js        junta tudo em dist/plantao-pleural.html (arquivo único para publicar)
tests/testar.js         teste automático no navegador
docs/MODELO-DE-CASO.md  explicação de cada campo de um caso
IDEIAS.md               ideias do André, organizadas
.claude/skills/criar-caso/  passo a passo para transformar um resumo em caso novo
```

- Caso novo = arquivo novo em `js/casos/` + uma linha `<script src="js/casos/...">` no `index.html`, antes de `js/jogo.js`. Siga a skill `criar-caso` e `docs/MODELO-DE-CASO.md`.
- Pergunta, exame ou diagnóstico novo entra em `js/dados.js` e passa a valer para todos os casos. Ao adicionar uma pergunta, todo caso precisa de resposta para ela (o teste cobra isso).
- Sem frameworks e sem etapa de compilação: HTML, CSS e JavaScript puros, para abrir com dois cliques e publicar em qualquer lugar.
- Casos da IA (`js/ia.js`): usam o Claude de quem joga (`claude.use("sample")`), por isso só funcionam no artifact publicado. O que a IA devolve passa por `iaValidar` (ids das listas, Light batendo com a classificação, texto limpo) e fica no navegador de quem criou. Se mudar o formato de um caso, ajuste `iaValidar` e o prompt em `iaPrompt`.
- Pontuação: `MAX` (casos com derrame) e `MAX_SEMIO` (casos de semiologia) em `js/jogo.js`, cada um soma 100. Se mudar os pesos, o total continua 100.
- O menu agrupa os casos pelo campo `modulo`. Assunto novo = `modulo` novo; perguntas, exames, diagnósticos e síndromes continuam numa lista só, para não entregar o assunto pelo que aparece na tela.

## Antes de dizer que terminou

1. `npm test` (gera `dist/` e joga todos os casos no navegador). Tudo precisa passar.
2. Olhe os prints em `tests/prints/` e confira se a mudança aparece certa, inclusive no celular.
3. Se o André pedir para publicar, publique `dist/plantao-pleural.html` com `capabilities: {sample: {images: true}}` (é o que liga a IA). O artifact atual é https://claude.ai/artifact/2wzjHWrrK7Yk2PJgARnsEH (atualize esse, não crie outro). No GitHub Pages, o `index.html` da raiz já é o jogo.
4. Faça commit com mensagem em português dizendo o que mudou para o jogador.

## Visual

Sala de emergência à noite, pixel art desenhado no canvas (sem imagens externas). Tema escuro único. Fontes: Pixelify Sans (títulos), IBM Plex Sans (texto), IBM Plex Mono (números). Personagens novos entram em `LOOKS` e são desenhados por `drawPerson` e `drawPortrait`. Não copie personagens ou marcas existentes.
