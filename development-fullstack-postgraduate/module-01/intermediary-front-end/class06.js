// ============================================================================
// 📚 AULA 06 - ESTRUTURAS DE CONTROLE EM JAVASCRIPT
// ============================================================================
// Este arquivo contém exemplos educativos sobre:
// 1. Estrutura condicional IF / ELSE IF / ELSE
// 2. Estrutura condicional SWITCH
// 3. Loop FOR
// 4. Loop WHILE
// 5. Loop DO WHILE
// 6. Controle de loops (break, continue, labels)
// ============================================================================

console.log("🚀 Iniciando o estudo de Estruturas de Controle!");


// ============================================================================
// 📌 SEÇÃO 1: ESTRUTURA CONDICIONAL IF / ELSE IF / ELSE
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 1: IF / ELSE IF / ELSE");
console.log("========================================\n");

/*
 * A estrutura IF permite executar código condicionalmente.
 * O código dentro do bloco só é executado se a condição for verdadeira (truthy).
 * 
 * SINTAXE:
 * if (condição) {
 *     // código executado se condição for true
 * } else if (outraCondição) {
 *     // código executado se outraCondição for true
 * } else {
 *     // código executado se nenhuma condição anterior for true
 * }
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1.1 IF SIMPLES
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== IF SIMPLES ===\n");

const idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade! ✅");
}

// IF com uma única linha (sem chaves - não recomendado para legibilidade)
const temperatura = 35;
if (temperatura > 30) console.log("Está muito quente! 🔥");

// ─────────────────────────────────────────────────────────────────────────────
// 1.2 IF / ELSE
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== IF / ELSE ===\n");

const numero = 7;

if (numero % 2 === 0) {
    console.log(`${numero} é um número PAR`);
} else {
    console.log(`${numero} é um número ÍMPAR`);
}

// Exemplo com boolean
const estaLogado = false;

if (estaLogado) {
    console.log("Bem-vindo de volta!");
} else {
    console.log("Por favor, faça login.");
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.3 IF / ELSE IF / ELSE (Múltiplas condições)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== IF / ELSE IF / ELSE ===\n");

const nota = 75;
let conceito;

if (nota >= 90) {
    conceito = "A - Excelente";
} else if (nota >= 80) {
    conceito = "B - Bom";
} else if (nota >= 70) {
    conceito = "C - Regular";
} else if (nota >= 60) {
    conceito = "D - Insuficiente";
} else {
    conceito = "F - Reprovado";
}

console.log(`Nota: ${nota} - Conceito: ${conceito}`);

// Exemplo: Classificação de idade
const idadePessoa = 25;

if (idadePessoa < 0) {
    console.log("Idade inválida!");
} else if (idadePessoa < 12) {
    console.log("Criança");
} else if (idadePessoa < 18) {
    console.log("Adolescente");
} else if (idadePessoa < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.4 IF ANINHADOS (Nested IF)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== IF ANINHADOS ===\n");

const temCarteira = true;
const idadeMotorista = 20;

if (idadeMotorista >= 18) {
    if (temCarteira) {
        console.log("Pode dirigir! 🚗");
    } else {
        console.log("Precisa tirar a carteira de motorista.");
    }
} else {
    console.log("Menor de idade, não pode dirigir.");
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.5 CONDIÇÕES COMPOSTAS (AND, OR, NOT)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CONDIÇÕES COMPOSTAS ===\n");

const usuario = "admin";
const senha = "123456";
const ativo = true;

// AND (&&) - Todas as condições devem ser verdadeiras
if (usuario === "admin" && senha === "123456" && ativo) {
    console.log("Login bem-sucedido! ✅");
}

// OR (||) - Pelo menos uma condição deve ser verdadeira
const dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
    console.log("É fim de semana! 🎉");
} else {
    console.log("É dia de semana.");
}

// NOT (!) - Inverte a condição
const estaChuvendo = false;
if (!estaChuvendo) {
    console.log("Pode sair sem guarda-chuva! ☀️");
}

// Combinando operadores
const horaAtual = 14;
const temReserva = true;

if ((horaAtual >= 12 && horaAtual <= 15) || temReserva) {
    console.log("Restaurante aberto para você!");
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.6 TRUTHY E FALSY EM CONDIÇÕES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== TRUTHY E FALSY ===\n");

/*
 * VALORES FALSY (considerados false):
 * - false
 * - 0 e -0
 * - "" (string vazia)
 * - null
 * - undefined
 * - NaN
 * 
 * TODOS os outros valores são TRUTHY!
 */

const nome = "Maria";
if (nome) {
    console.log(`Olá, ${nome}!`); // Executado (string não vazia é truthy)
}

const lista = [];
if (lista.length) {
    console.log("Lista tem elementos");
} else {
    console.log("Lista está vazia"); // Executado (0 é falsy)
}

// Verificação de existência
const usuarioLogado = null;
if (usuarioLogado) {
    console.log("Usuário existe");
} else {
    console.log("Usuário não logado"); // Executado (null é falsy)
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.7 OPERADOR TERNÁRIO (Alternativa ao IF simples)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR TERNÁRIO ===\n");

// Sintaxe: condição ? valorSeTrue : valorSeFalse

const idadeCliente = 17;
const categoria = idadeCliente >= 18 ? "Adulto" : "Menor";
console.log(`Categoria: ${categoria}`);

// Ternário encadeado (use com moderação)
const pontuacao = 85;
const nivel = pontuacao >= 90 ? "Expert" :
    pontuacao >= 70 ? "Intermediário" :
        pontuacao >= 50 ? "Iniciante" : "Novato";
console.log(`Nível: ${nivel}`);

// Ternário para valor padrão
const nomeUsuario = "";
const displayName = nomeUsuario ? nomeUsuario : "Visitante";
console.log(`Bem-vindo, ${displayName}!`);

// Forma mais moderna com || ou ??
const displayName2 = nomeUsuario || "Visitante";
const displayName3 = nomeUsuario ?? "Visitante"; // Só usa fallback se for null/undefined


// ============================================================================
// 📌 SEÇÃO 2: ESTRUTURA SWITCH
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 2: SWITCH");
console.log("========================================\n");

/*
 * SWITCH é uma alternativa ao IF/ELSE IF quando temos muitas condições
 * baseadas no valor de uma única variável.
 * 
 * SINTAXE:
 * switch (expressão) {
 *     case valor1:
 *         // código
 *         break;
 *     case valor2:
 *         // código
 *         break;
 *     default:
 *         // código se nenhum case corresponder
 * }
 * 
 * ⚠️ IMPORTANTE: O switch usa comparação ESTRITA (===)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 SWITCH BÁSICO
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SWITCH BÁSICO ===\n");

const diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 0:
        nomeDia = "Domingo";
        break;
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log(`Dia ${diaSemana}: ${nomeDia}`);

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 SWITCH COM STRINGS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SWITCH COM STRINGS ===\n");

const comando = "iniciar";

switch (comando.toLowerCase()) {
    case "iniciar":
        console.log("🚀 Iniciando o sistema...");
        break;
    case "pausar":
        console.log("⏸️ Sistema pausado");
        break;
    case "parar":
        console.log("⏹️ Sistema parado");
        break;
    case "reiniciar":
        console.log("🔄 Reiniciando...");
        break;
    default:
        console.log("❓ Comando não reconhecido");
}

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 SWITCH COM MÚLTIPLOS CASES (Fall-through)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÚLTIPLOS CASES (FALL-THROUGH) ===\n");

// Agrupando casos que têm o mesmo resultado
const mes = 4;
let estacao;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão ☀️";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono 🍂";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno ❄️";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera 🌸";
        break;
    default:
        estacao = "Mês inválido";
}

console.log(`Mês ${mes}: ${estacao}`);

// Dias úteis vs fim de semana
const diaAtual = "sábado";

switch (diaAtual.toLowerCase()) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("Dia útil - Trabalhar! 💼");
        break;
    case "sábado":
    case "domingo":
        console.log("Fim de semana - Descansar! 🎉");
        break;
    default:
        console.log("Dia inválido");
}

// ─────────────────────────────────────────────────────────────────────────────
// 2.4 SWITCH SEM BREAK (Fall-through proposital)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FALL-THROUGH PROPOSITAL ===\n");

// ⚠️ Use com cuidado! Geralmente é um bug esquecer o break
const nivel2 = 2;
let privilegios = [];

switch (nivel2) {
    case 3:
        privilegios.push("Deletar usuários");
    // Fall-through proposital
    case 2:
        privilegios.push("Editar conteúdo");
    // Fall-through proposital
    case 1:
        privilegios.push("Visualizar conteúdo");
        break;
    default:
        privilegios.push("Sem acesso");
}

console.log(`Nível ${nivel2} - Privilégios:`, privilegios);
// Resultado: ["Editar conteúdo", "Visualizar conteúdo"]

// ─────────────────────────────────────────────────────────────────────────────
// 2.5 SWITCH COM EXPRESSÕES NOS CASES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SWITCH COM EXPRESSÕES ===\n");

// Usando switch(true) para avaliar expressões
const valorNota = 85;

switch (true) {
    case valorNota >= 90:
        console.log("Conceito A");
        break;
    case valorNota >= 80:
        console.log("Conceito B");
        break;
    case valorNota >= 70:
        console.log("Conceito C");
        break;
    case valorNota >= 60:
        console.log("Conceito D");
        break;
    default:
        console.log("Conceito F");
}

// ─────────────────────────────────────────────────────────────────────────────
// 2.6 SWITCH vs IF/ELSE - QUANDO USAR CADA UM
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SWITCH vs IF/ELSE ===\n");

/*
 * USE SWITCH quando:
 * ✅ Comparar uma variável com múltiplos valores fixos
 * ✅ Ter muitos casos (mais de 3-4)
 * ✅ Cada caso é um valor discreto e conhecido
 * 
 * USE IF/ELSE quando:
 * ✅ Condições envolvem ranges (>, <, >=, <=)
 * ✅ Condições são complexas (múltiplas variáveis)
 * ✅ Poucos casos (2-3)
 * ✅ Condições não são comparações de igualdade simples
 */

console.log("Dica: Switch para valores discretos, IF para condições complexas");


// ============================================================================
// 📌 SEÇÃO 3: LOOP FOR
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 3: LOOP FOR");
console.log("========================================\n");

/*
 * O loop FOR é usado quando sabemos quantas vezes queremos repetir algo.
 * 
 * SINTAXE:
 * for (inicialização; condição; incremento) {
 *     // código a ser repetido
 * }
 * 
 * 1. inicialização: executada UMA vez antes do loop começar
 * 2. condição: verificada ANTES de cada iteração
 * 3. incremento: executado APÓS cada iteração
 */

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 FOR BÁSICO
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== FOR BÁSICO ===\n");

// Contando de 1 a 5
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`  Número: ${i}`);
}

// Contando de 10 a 1 (decrescente)
console.log("\nContagem regressiva:");
for (let i = 10; i >= 1; i--) {
    console.log(`  ${i}...`);
}
console.log("  🚀 Lançar!");

// Pulando de 2 em 2
console.log("\nNúmeros pares de 0 a 10:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`  ${i}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 FOR COM ARRAYS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FOR COM ARRAYS ===\n");

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

// Percorrendo array com for tradicional
console.log("Lista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`  ${i + 1}. ${frutas[i]}`);
}

// Percorrendo array de trás para frente
console.log("\nFrutas em ordem reversa:");
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(`  ${frutas[i]}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.3 FOR...OF (Iterando sobre valores)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FOR...OF (VALORES) ===\n");

/*
 * FOR...OF é usado para iterar sobre VALORES de objetos iteráveis:
 * - Arrays
 * - Strings
 * - Maps, Sets
 * - NodeLists (DOM)
 */

const cores = ["Vermelho", "Verde", "Azul"];

console.log("Cores (for...of):");
for (const cor of cores) {
    console.log(`  🎨 ${cor}`);
}

// Com strings
const palavra = "JavaScript";
console.log("\nLetras da palavra 'JavaScript':");
for (const letra of palavra) {
    console.log(`  ${letra}`);
}

// Com índice usando entries()
console.log("\nCom índice usando entries():");
for (const [indice, cor] of cores.entries()) {
    console.log(`  ${indice}: ${cor}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.4 FOR...IN (Iterando sobre propriedades/índices)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FOR...IN (PROPRIEDADES/ÍNDICES) ===\n");

/*
 * FOR...IN é usado para iterar sobre CHAVES/ÍNDICES:
 * - Propriedades de objetos
 * - Índices de arrays (não recomendado para arrays!)
 * 
 * ⚠️ ATENÇÃO: Prefira for...of para arrays, use for...in para objetos
 */

// Com objetos (uso ideal)
const pessoa = {
    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

console.log("Propriedades do objeto pessoa:");
for (const chave in pessoa) {
    console.log(`  ${chave}: ${pessoa[chave]}`);
}

// Com arrays (não recomendado, mas funciona)
console.log("\nÍndices do array (for...in - evite para arrays):");
for (const indice in cores) {
    console.log(`  Índice ${indice}: ${cores[indice]}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.5 FOR ANINHADOS (Nested FOR)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FOR ANINHADOS ===\n");

// Tabuada do 1 ao 3
console.log("Tabuadas:");
for (let i = 1; i <= 3; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 5; j++) {
        console.log(`  ${i} x ${j} = ${i * j}`);
    }
}

// Matriz 2D
console.log("\nMatriz 3x3:");
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linha = 0; linha < matriz.length; linha++) {
    let linhaTexto = "  ";
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        linhaTexto += matriz[linha][coluna] + " ";
    }
    console.log(linhaTexto);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.6 FOR COM MÚLTIPLAS VARIÁVEIS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FOR COM MÚLTIPLAS VARIÁVEIS ===\n");

// Duas variáveis indo em direções opostas
console.log("Duas variáveis opostas:");
for (let i = 0, j = 10; i <= 10; i++, j--) {
    console.log(`  i = ${i}, j = ${j}`);
}


// ============================================================================
// 📌 SEÇÃO 4: LOOP WHILE
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 4: LOOP WHILE");
console.log("========================================\n");

/*
 * O loop WHILE é usado quando NÃO sabemos quantas vezes iremos repetir,
 * pois a condição é verificada ANTES de cada iteração.
 * 
 * SINTAXE:
 * while (condição) {
 *     // código a ser repetido
 *     // IMPORTANTE: algo deve mudar para sair do loop!
 * }
 * 
 * ⚠️ CUIDADO: Se a condição nunca se tornar false, teremos um loop infinito!
 */

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 WHILE BÁSICO
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== WHILE BÁSICO ===\n");

// Contando de 1 a 5
console.log("Contando de 1 a 5:");
let contador = 1;
while (contador <= 5) {
    console.log(`  ${contador}`);
    contador++; // Não esqueça de incrementar!
}

// Contagem regressiva
console.log("\nContagem regressiva:");
let contagem = 5;
while (contagem > 0) {
    console.log(`  ${contagem}...`);
    contagem--;
}
console.log("  💥 Boom!");

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 WHILE COM CONDIÇÃO EXTERNA
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== WHILE COM CONDIÇÃO EXTERNA ===\n");

// Simulando um jogo de dados
let somaTotal = 0;
let jogadas = 0;

console.log("Jogando dados até somar pelo menos 20:");
while (somaTotal < 20) {
    const dado = Math.floor(Math.random() * 6) + 1; // 1 a 6
    somaTotal += dado;
    jogadas++;
    console.log(`  Jogada ${jogadas}: dado = ${dado}, total = ${somaTotal}`);
}
console.log(`Terminou em ${jogadas} jogadas com soma ${somaTotal}!`);

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 WHILE PARA PROCESSAMENTO DE DADOS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== WHILE PARA PROCESSAMENTO ===\n");

// Encontrar todos os divisores de um número
const numeroParaDividir = 24;
let divisor = 1;
const divisores = [];

console.log(`Divisores de ${numeroParaDividir}:`);
while (divisor <= numeroParaDividir) {
    if (numeroParaDividir % divisor === 0) {
        divisores.push(divisor);
    }
    divisor++;
}
console.log(`  ${divisores.join(", ")}`);

// ─────────────────────────────────────────────────────────────────────────────
// 4.4 WHILE COM ARRAYS (Processando e removendo)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== WHILE COM ARRAYS ===\n");

// Processando e esvaziando um array (fila)
const fila = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"];

console.log("Atendendo fila:");
while (fila.length > 0) {
    const cliente = fila.shift(); // Remove e retorna o primeiro
    console.log(`  Atendendo: ${cliente} (restam ${fila.length} na fila)`);
}
console.log("Fila vazia!");


// ============================================================================
// 📌 SEÇÃO 5: LOOP DO WHILE
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 5: LOOP DO WHILE");
console.log("========================================\n");

/*
 * O loop DO WHILE é similar ao WHILE, mas a condição é verificada
 * APÓS cada iteração. Isso garante que o código execute PELO MENOS UMA VEZ.
 * 
 * SINTAXE:
 * do {
 *     // código a ser repetido
 * } while (condição);
 * 
 * 💡 Use quando precisar garantir pelo menos uma execução!
 */

// ─────────────────────────────────────────────────────────────────────────────
// 5.1 DO WHILE BÁSICO
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== DO WHILE BÁSICO ===\n");

// Contando de 1 a 5
console.log("Contando de 1 a 5:");
let num = 1;
do {
    console.log(`  ${num}`);
    num++;
} while (num <= 5);

// ─────────────────────────────────────────────────────────────────────────────
// 5.2 DIFERENÇA ENTRE WHILE E DO WHILE
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DIFERENÇA WHILE vs DO WHILE ===\n");

// Com condição falsa desde o início
console.log("WHILE com condição falsa desde o início:");
let a = 10;
while (a < 5) {
    console.log("  Isso nunca será executado");
    a++;
}
console.log("  (nada foi executado no while)");

console.log("\nDO WHILE com condição falsa desde o início:");
let b = 10;
do {
    console.log(`  Isso executa pelo menos uma vez! b = ${b}`);
    b++;
} while (b < 5);
console.log("  (executou UMA vez no do while)");

// ─────────────────────────────────────────────────────────────────────────────
// 5.3 DO WHILE PARA MENUS (Caso de uso comum)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DO WHILE PARA MENUS ===\n");

// Simulando um menu que executa até o usuário escolher sair
let opcaoMenu;
let execucoes = 0;
const opcoesSimuladas = [1, 2, 3, 0]; // Simulando escolhas do usuário

console.log("Simulação de menu:");
do {
    opcaoMenu = opcoesSimuladas[execucoes];
    console.log(`  Menu - Opção escolhida: ${opcaoMenu}`);

    switch (opcaoMenu) {
        case 1:
            console.log("    → Opção 1 selecionada");
            break;
        case 2:
            console.log("    → Opção 2 selecionada");
            break;
        case 3:
            console.log("    → Opção 3 selecionada");
            break;
        case 0:
            console.log("    → Saindo...");
            break;
    }
    execucoes++;
} while (opcaoMenu !== 0 && execucoes < opcoesSimuladas.length);

// ─────────────────────────────────────────────────────────────────────────────
// 5.4 DO WHILE PARA VALIDAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DO WHILE PARA VALIDAÇÃO ===\n");

// Simulando validação de entrada
const entradasSimuladas = ["", "abc", "12345"];
let indiceEntrada = 0;
let entradaValida;

console.log("Simulando validação de senha:");
do {
    entradaValida = entradasSimuladas[indiceEntrada];
    console.log(`  Tentativa ${indiceEntrada + 1}: "${entradaValida}"`);

    if (entradaValida.length < 5) {
        console.log("    ❌ Senha muito curta (mínimo 5 caracteres)");
    } else {
        console.log("    ✅ Senha válida!");
    }
    indiceEntrada++;
} while (entradaValida.length < 5 && indiceEntrada < entradasSimuladas.length);


// ============================================================================
// 📌 SEÇÃO 6: CONTROLE DE LOOPS (BREAK, CONTINUE, LABELS)
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 6: CONTROLE DE LOOPS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 BREAK - Interrompe o loop imediatamente
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BREAK ===\n");

// Encontrar o primeiro número divisível por 7
console.log("Procurando primeiro número > 50 divisível por 7:");
for (let i = 51; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`  Encontrado: ${i}`);
        break; // Sai do loop imediatamente
    }
}

// Break em loop infinito (padrão comum)
console.log("\nLoop com break condicional:");
let tentativas = 0;
while (true) { // Loop "infinito"
    tentativas++;
    const sorteio = Math.floor(Math.random() * 10) + 1;
    console.log(`  Tentativa ${tentativas}: ${sorteio}`);

    if (sorteio === 7) {
        console.log(`  🎉 Encontrou 7 em ${tentativas} tentativas!`);
        break;
    }

    if (tentativas >= 20) {
        console.log("  ⏰ Limite de tentativas atingido");
        break;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 CONTINUE - Pula para a próxima iteração
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CONTINUE ===\n");

// Imprimir apenas números ímpares
console.log("Apenas números ímpares de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula números pares
    }
    console.log(`  ${i}`);
}

// Pular valores específicos
console.log("\nNúmeros de 1 a 10, pulando múltiplos de 3:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(`  ${i}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 LABELS - Controle de loops aninhados
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== LABELS ===\n");

/*
 * Labels permitem identificar loops para que break/continue
 * saibam qual loop controlar em situações aninhadas.
 * 
 * SINTAXE:
 * nomeLabel: for (...) {
 *     for (...) {
 *         break nomeLabel;    // Sai do loop externo
 *         continue nomeLabel; // Continua no loop externo
 *     }
 * }
 */

// Encontrar um par de números cuja soma seja 15
console.log("Encontrando par de números que soma 15:");
loopExterno: for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        if (i + j === 15) {
            console.log(`  Encontrado: ${i} + ${j} = 15`);
            break loopExterno; // Sai de AMBOS os loops
        }
    }
}

// Continue com label
console.log("\nMatriz - pulando linhas com número 5:");
const matrizTeste = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

linhas: for (let i = 0; i < matrizTeste.length; i++) {
    for (let j = 0; j < matrizTeste[i].length; j++) {
        if (matrizTeste[i][j] === 5) {
            console.log(`  Linha ${i} contém 5 - pulando resto da linha`);
            continue linhas; // Pula para a próxima linha
        }
        console.log(`  [${i}][${j}] = ${matrizTeste[i][j]}`);
    }
}


// ============================================================================
// 📌 SEÇÃO 7: EXEMPLOS PRÁTICOS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 7: EXEMPLOS PRÁTICOS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 7.1 CALCULADORA DE FATORIAL
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== FATORIAL ===\n");

function calcularFatorial(n) {
    if (n < 0) return "Número deve ser positivo";
    if (n <= 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("5! =", calcularFatorial(5));   // 120
console.log("10! =", calcularFatorial(10)); // 3628800

// ─────────────────────────────────────────────────────────────────────────────
// 7.2 SEQUÊNCIA DE FIBONACCI
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FIBONACCI ===\n");

function fibonacci(quantidade) {
    const sequencia = [0, 1];

    for (let i = 2; i < quantidade; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }

    return sequencia;
}

console.log("Primeiros 10 números de Fibonacci:");
console.log("  ", fibonacci(10).join(", "));

// ─────────────────────────────────────────────────────────────────────────────
// 7.3 VERIFICAR NÚMERO PRIMO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== NÚMERO PRIMO ===\n");

function ehPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

console.log("Verificando números primos:");
for (let n = 1; n <= 20; n++) {
    if (ehPrimo(n)) {
        console.log(`  ${n} é primo ✅`);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 7.4 TRIÂNGULO DE PADRÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== TRIÂNGULO DE ASTERISCOS ===\n");

const tamanhoTriangulo = 5;
for (let i = 1; i <= tamanhoTriangulo; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "* ";
    }
    console.log("  " + linha);
}

// ─────────────────────────────────────────────────────────────────────────────
// 7.5 BUSCA EM ARRAY
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== BUSCA EM ARRAY ===\n");

function buscarElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return { encontrado: true, indice: i };
        }
    }
    return { encontrado: false, indice: -1 };
}

const numerosArray = [10, 25, 33, 47, 58, 62, 79];
console.log("Array:", numerosArray);
console.log("Buscar 47:", buscarElemento(numerosArray, 47));
console.log("Buscar 99:", buscarElemento(numerosArray, 99));

// ─────────────────────────────────────────────────────────────────────────────
// 7.6 FizzBuzz (Clássico de entrevistas)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FIZZBUZZ ===\n");

console.log("FizzBuzz de 1 a 20:");
for (let i = 1; i <= 20; i++) {
    let resultado = "";

    if (i % 3 === 0) resultado += "Fizz";
    if (i % 5 === 0) resultado += "Buzz";

    console.log(`  ${i}: ${resultado || i}`);
}


// ============================================================================
// 📌 SEÇÃO 8: RESUMO E BOAS PRÁTICAS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 RESUMO E BOAS PRÁTICAS");
console.log("========================================\n");

console.log(`
📚 TABELA DE REFERÊNCIA - ESTRUTURAS DE CONTROLE:

CONDICIONAIS:
┌─────────────────────────────────────────────────────────────────────┐
│ if (condição) { }                 → Executa se condição for true   │
│ if...else                         → Dois caminhos: true ou false   │
│ if...else if...else               → Múltiplas condições            │
│ switch (valor) { case: ... }      → Múltiplos valores discretos    │
│ condição ? a : b                  → Operador ternário (inline)     │
└─────────────────────────────────────────────────────────────────────┘

LOOPS:
┌─────────────────────────────────────────────────────────────────────┐
│ for (init; cond; incr) { }        → Número conhecido de iterações  │
│ for...of                          → Itera sobre VALORES            │
│ for...in                          → Itera sobre CHAVES (objetos)   │
│ while (condição) { }              → Repete enquanto true           │
│ do { } while (condição)           → Executa pelo menos 1 vez       │
└─────────────────────────────────────────────────────────────────────┘

CONTROLE DE FLUXO:
┌─────────────────────────────────────────────────────────────────────┐
│ break                             → Sai do loop imediatamente      │
│ continue                          → Pula para próxima iteração     │
│ break label                       → Sai de loop aninhado específico│
│ continue label                    → Continua loop específico       │
└─────────────────────────────────────────────────────────────────────┘

✅ BOAS PRÁTICAS:

1. CONDICIONAIS:
   - Use === em vez de == para comparações
   - Simplifique condições complexas em variáveis
   - Prefira switch para mais de 3-4 valores fixos
   - Use early return para reduzir aninhamento

2. LOOPS:
   - Use for...of para arrays (mais legível)
   - Use for...in apenas para objetos
   - Evite loops infinitos - sempre tenha condição de saída
   - Prefira métodos de array (map, filter, forEach) quando possível

3. GERAL:
   - Mantenha blocos pequenos e legíveis
   - Comente código complexo
   - Use nomes de variáveis descritivos
   - Evite aninhamento excessivo (máximo 3 níveis)
   - Use break/continue com moderação

⚠️ CUIDADOS:
- Esquecer o break no switch causa fall-through
- Loops infinitos travam o navegador/programa
- Modificar array durante iteração pode causar bugs
- for...in em arrays pode incluir propriedades herdadas
`);

console.log("🎉 Fim da Aula 06 - Estruturas de Controle em JavaScript!");


