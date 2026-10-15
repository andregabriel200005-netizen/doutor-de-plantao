---
name: criar-caso
description: Transforma um resumo ou material de estudo do André (PDF, foto, texto) em um caso novo do jogo, seguindo as regras do CLAUDE.md. Use quando ele pedir um caso, paciente ou assunto novo.
---

# Criar um caso novo

1. **Ler o material inteiro.** Anote os critérios, valores de corte, exames e condutas que ele traz, com a página. Isso é a única fonte de verdade médica.
2. **Combinar com o André (uma pergunta só, se precisar):** qual diagnóstico, se é pegadinha, nível de dificuldade. Se ele não estiver por perto, escolha o diagnóstico mais importante do material e diga qual escolheu.
3. **Montar a história:** paciente fictício, personagem (reaproveite `LOOKS` ou crie um novo, original), queixa em linguagem leiga, pistas espalhadas entre conversa, exame e exames. Pelo menos uma pista que só aparece se o aluno pensar em perguntar.
4. **Escolher os números** para bater exatamente com os limiares do material, de preferência perto do corte, para obrigar a calcular.
5. **Escrever `js/casos/caso-NN-nome.js`** seguindo `docs/MODELO-DE-CASO.md`, com a fonte no comentário do topo. Dúvida de conteúdo vira `// CONFERIR:`.
6. **Registrar no `index.html`** com uma linha `<script>` antes de `js/jogo.js`.
7. **Se o assunto não for derrame pleural** e precisar de exame, pergunta, diagnóstico ou procedimento que não existe, adicione em `js/dados.js` (e respostas em todos os casos) ou proponha a mudança no motor antes de escrever.
8. **Rodar `npm test`** e olhar o print da radiografia do caso novo em `tests/prints/`.
9. **Contar ao André** em poucas linhas: quem é o paciente, o que o aluno precisa descobrir, e o que ele deve conferir no conteúdo.
