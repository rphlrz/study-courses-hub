// ============================================================================
// 📚 AULA 01 - FUNDAMENTOS DO JAVASCRIPT
// ============================================================================
// Este arquivo contém exemplos educativos sobre:
// 1. Estrutura do JavaScript
// 2. Variáveis (var, let, const)
// 3. Tipos de Dados
// 4. Operadores
// ============================================================================


// ============================================================================
// 📌 SEÇÃO 1: ESTRUTURA BÁSICA DO JAVASCRIPT
// ============================================================================

/*
 * JavaScript é uma linguagem de programação interpretada, orientada a objetos
 * e de tipagem dinâmica. É a linguagem principal para desenvolvimento web.
 * 
 * CARACTERÍSTICAS PRINCIPAIS:
 * - Case-sensitive: 'nome' é diferente de 'Nome'
 * - Instruções terminam com ponto e vírgula (;) - opcional, mas recomendado
 * - Suporta comentários de linha (//) e bloco (/* *\/)
 * - Usa chaves {} para delimitar blocos de código
 */

// Comentário de linha única (ignora tudo após //)

/* 
   Comentário de múltiplas linhas
   Pode ocupar várias linhas
   Útil para documentação
*/

// Console.log - função para exibir mensagens no console do navegador/terminal
console.log("🚀 Iniciando o estudo de JavaScript!");


// ============================================================================
// 📌 SEÇÃO 2: VARIÁVEIS
// ============================================================================

/*
 * Variáveis são "containers" para armazenar dados.
 * Em JavaScript, temos 3 formas de declarar variáveis:
 * 
 * 1. var   - Forma antiga, escopo de função (evite usar)
 * 2. let   - Forma moderna, escopo de bloco (use para valores que mudam)
 * 3. const - Forma moderna, escopo de bloco (use para valores constantes)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 VAR (Forma Legada - Não Recomendada)
// ─────────────────────────────────────────────────────────────────────────────

var nomeAntigo = "João"; // Pode ser redeclarada e reatribuída
var nomeAntigo = "Maria"; // Isso é permitido com var (problema!)

console.log("VAR:", nomeAntigo);

// Problemas do var:
// - Permite redeclaração (pode causar bugs)
// - Tem escopo de função, não de bloco
// - Sofre "hoisting" (é içada para o topo)

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 LET (Forma Moderna - Recomendada para valores mutáveis)
// ─────────────────────────────────────────────────────────────────────────────

let idade = 25; // Declaração e inicialização
idade = 26; // Reatribuição permitida

// let idade = 30; // ❌ ERRO! Não pode redeclarar no mesmo escopo

console.log("LET - idade:", idade);

// Exemplo de escopo de bloco com let
let contador = 0;
{
    let contador = 100; // Nova variável, só existe dentro das chaves
    console.log("Contador dentro do bloco:", contador); // 100
}
console.log("Contador fora do bloco:", contador); // 0

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 CONST (Constantes - Recomendada para valores imutáveis)
// ─────────────────────────────────────────────────────────────────────────────

const PI = 3.14159;
const NOME_DO_SISTEMA = "Meu Sistema";
const ANO_ATUAL = 2026;

// PI = 3.14; // ❌ ERRO! Não pode reatribuir uma constante

console.log("CONST - PI:", PI);
console.log("CONST - Sistema:", NOME_DO_SISTEMA);

// IMPORTANTE: const com objetos e arrays
const pessoa = { nome: "Ana", idade: 30 };
pessoa.idade = 31; // ✅ Isso é permitido! O objeto não é imutável, apenas a referência
console.log("Pessoa (objeto const modificado):", pessoa);

const numeros = [1, 2, 3];
numeros.push(4); // ✅ Permitido! Estamos modificando o conteúdo, não a referência
console.log("Array (const modificado):", numeros);


// ============================================================================
// 📌 SEÇÃO 3: TIPOS DE DADOS
// ============================================================================

/*
 * JavaScript tem tipagem dinâmica - variáveis podem mudar de tipo.
 * 
 * TIPOS PRIMITIVOS (imutáveis):
 * 1. String    - Texto
 * 2. Number    - Números (inteiros e decimais)
 * 3. Boolean   - Verdadeiro ou Falso
 * 4. Undefined - Variável declarada mas não inicializada
 * 5. Null      - Ausência intencional de valor
 * 6. Symbol    - Valor único e imutável (ES6)
 * 7. BigInt    - Números inteiros muito grandes (ES2020)
 * 
 * TIPOS DE REFERÊNCIA (mutáveis):
 * - Object (inclui Arrays, Functions, Date, etc.)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 STRING (Texto)
// ─────────────────────────────────────────────────────────────────────────────

const nome = "Maria Silva"; // Aspas duplas
const sobrenome = 'Oliveira'; // Aspas simples
const frase = `Olá, ${nome}!`; // Template literals (permite interpolação)

console.log("\n=== STRINGS ===");
console.log("String com aspas duplas:", nome);
console.log("String com aspas simples:", sobrenome);
console.log("Template literal:", frase);
console.log("Tipo:", typeof nome); // "string"

// Métodos úteis de String
console.log("Tamanho:", nome.length); // 11
console.log("Maiúsculas:", nome.toUpperCase()); // "MARIA SILVA"
console.log("Minúsculas:", nome.toLowerCase()); // "maria silva"
console.log("Primeira letra:", nome.charAt(0)); // "M"
console.log("Fatiar (slice):", nome.slice(0, 5)); // "Maria"

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 NUMBER (Números)
// ─────────────────────────────────────────────────────────────────────────────

const inteiro = 42;
const decimal = 3.14;
const negativo = -10;
const notacaoCientifica = 2.5e6; // 2.500.000

console.log("\n=== NUMBERS ===");
console.log("Inteiro:", inteiro);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);
console.log("Notação científica:", notacaoCientifica);
console.log("Tipo:", typeof inteiro); // "number"

// Valores especiais de Number
console.log("Infinito positivo:", Infinity);
console.log("Infinito negativo:", -Infinity);
console.log("NaN (Not a Number):", NaN);
console.log("Verificar se é NaN:", isNaN("texto" / 2)); // true

// Métodos úteis
console.log("Arredondar:", Math.round(3.7)); // 4
console.log("Arredondar para baixo:", Math.floor(3.9)); // 3
console.log("Arredondar para cima:", Math.ceil(3.1)); // 4
console.log("Número aleatório (0-1):", Math.random());
console.log("Fixar decimais:", (3.14159).toFixed(2)); // "3.14"

// ─────────────────────────────────────────────────────────────────────────────
// 3.3 BOOLEAN (Verdadeiro ou Falso)
// ─────────────────────────────────────────────────────────────────────────────

const ativo = true;
const deslogado = false;

console.log("\n=== BOOLEAN ===");
console.log("Ativo:", ativo);
console.log("Deslogado:", deslogado);
console.log("Tipo:", typeof ativo); // "boolean"

// Valores "falsy" (considerados false em contextos booleanos)
console.log("Falsy values:");
console.log("false:", Boolean(false)); // false
console.log("0:", Boolean(0)); // false
console.log("'' (string vazia):", Boolean("")); // false
console.log("null:", Boolean(null)); // false
console.log("undefined:", Boolean(undefined)); // false
console.log("NaN:", Boolean(NaN)); // false

// Todos os outros valores são "truthy"
console.log("Truthy:", Boolean("texto"), Boolean(1), Boolean([])); // true true true

// ─────────────────────────────────────────────────────────────────────────────
// 3.4 UNDEFINED e NULL
// ─────────────────────────────────────────────────────────────────────────────

let variavelNaoInicializada;
const valorNulo = null;

console.log("\n=== UNDEFINED e NULL ===");
console.log("Undefined:", variavelNaoInicializada); // undefined
console.log("Tipo undefined:", typeof variavelNaoInicializada); // "undefined"
console.log("Null:", valorNulo);
console.log("Tipo null:", typeof valorNulo); // "object" (bug histórico do JS)

// Diferença importante:
// - undefined = variável existe mas não tem valor
// - null = ausência intencional de valor (você define explicitamente)

// ─────────────────────────────────────────────────────────────────────────────
// 3.5 SYMBOL (ES6) - Identificadores únicos
// ─────────────────────────────────────────────────────────────────────────────

const simbolo1 = Symbol("descricao");
const simbolo2 = Symbol("descricao");

console.log("\n=== SYMBOL ===");
console.log("Symbol:", simbolo1);
console.log("São iguais?", simbolo1 === simbolo2); // false (sempre únicos!)
console.log("Tipo:", typeof simbolo1); // "symbol"

// ─────────────────────────────────────────────────────────────────────────────
// 3.6 BIGINT (ES2020) - Números inteiros gigantes
// ─────────────────────────────────────────────────────────────────────────────

const numeroGigante = 9007199254740991n; // Note o 'n' no final
const outroBigInt = BigInt("123456789012345678901234567890");

console.log("\n=== BIGINT ===");
console.log("BigInt:", numeroGigante);
console.log("Tipo:", typeof numeroGigante); // "bigint"

// ─────────────────────────────────────────────────────────────────────────────
// 3.7 OBJECT (Objetos)
// ─────────────────────────────────────────────────────────────────────────────

const usuario = {
    nome: "Carlos",
    idade: 28,
    email: "carlos@email.com",
    ativo: true,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log("\n=== OBJECT ===");
console.log("Objeto completo:", usuario);
console.log("Acessar propriedade (ponto):", usuario.nome);
console.log("Acessar propriedade (colchetes):", usuario["email"]);
console.log("Objeto aninhado:", usuario.endereco.cidade);
console.log("Tipo:", typeof usuario); // "object"

// ─────────────────────────────────────────────────────────────────────────────
// 3.8 ARRAY (Vetores/Listas)
// ─────────────────────────────────────────────────────────────────────────────

const frutas = ["maçã", "banana", "laranja"];
const misto = [1, "texto", true, null, { chave: "valor" }]; // Pode misturar tipos

console.log("\n=== ARRAY ===");
console.log("Array:", frutas);
console.log("Primeiro elemento (índice 0):", frutas[0]);
console.log("Último elemento:", frutas[frutas.length - 1]);
console.log("Quantidade:", frutas.length);
console.log("Array misto:", misto);
console.log("Tipo:", typeof frutas); // "object" (arrays são objetos!)
console.log("É um array?", Array.isArray(frutas)); // true


// ============================================================================
// 📌 SEÇÃO 4: OPERADORES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 4: OPERADORES");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 OPERADORES ARITMÉTICOS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== OPERADORES ARITMÉTICOS ===");

const a = 10;
const b = 3;

console.log(`Soma: ${a} + ${b} =`, a + b); // 13
console.log(`Subtração: ${a} - ${b} =`, a - b); // 7
console.log(`Multiplicação: ${a} * ${b} =`, a * b); // 30
console.log(`Divisão: ${a} / ${b} =`, a / b); // 3.333...
console.log(`Módulo (resto): ${a} % ${b} =`, a % b); // 1
console.log(`Exponenciação: ${a} ** ${b} =`, a ** b); // 1000 (10³)

// Incremento e Decremento
let x = 5;
console.log("\nIncremento e Decremento:");
console.log("Valor inicial de x:", x);
console.log("x++ (pós-incremento):", x++); // Mostra 5, depois incrementa
console.log("Valor atual de x:", x); // 6
console.log("++x (pré-incremento):", ++x); // Incrementa primeiro, mostra 7
console.log("x-- (pós-decremento):", x--); // Mostra 7, depois decrementa
console.log("--x (pré-decremento):", --x); // Decrementa primeiro, mostra 5

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 OPERADORES DE ATRIBUIÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADORES DE ATRIBUIÇÃO ===");

let valor = 10;
console.log("Valor inicial:", valor);

valor += 5; // valor = valor + 5
console.log("Após += 5:", valor); // 15

valor -= 3; // valor = valor - 3
console.log("Após -= 3:", valor); // 12

valor *= 2; // valor = valor * 2
console.log("Após *= 2:", valor); // 24

valor /= 4; // valor = valor / 4
console.log("Após /= 4:", valor); // 6

valor %= 4; // valor = valor % 4
console.log("Após %= 4:", valor); // 2

valor **= 3; // valor = valor ** 3
console.log("Após **= 3:", valor); // 8

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 OPERADORES DE COMPARAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADORES DE COMPARAÇÃO ===");

const num1 = 5;
const num2 = "5";
const num3 = 10;

console.log("Comparando:", num1, "e", num2, "e", num3);
console.log("");

// Igualdade solta (==) - Compara apenas valor (faz coerção de tipo)
console.log("5 == '5' (igualdade solta):", num1 == num2); // true

// Igualdade estrita (===) - Compara valor E tipo
console.log("5 === '5' (igualdade estrita):", num1 === num2); // false

// Diferença solta (!=)
console.log("5 != '5' (diferença solta):", num1 != num2); // false

// Diferença estrita (!==)
console.log("5 !== '5' (diferença estrita):", num1 !== num2); // true

// Maior e Menor
console.log("5 > 10:", num1 > num3); // false
console.log("5 < 10:", num1 < num3); // true
console.log("5 >= 5:", num1 >= 5); // true
console.log("5 <= 10:", num1 <= num3); // true

/*
 * ⚠️ IMPORTANTE: Sempre prefira usar === e !== (igualdade/diferença estrita)
 * A igualdade solta (==) pode causar bugs inesperados devido à coerção de tipos.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 4.4 OPERADORES LÓGICOS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADORES LÓGICOS ===");

const verdadeiro = true;
const falso = false;

// AND (&&) - Retorna true se AMBOS forem verdadeiros
console.log("true && true:", verdadeiro && verdadeiro); // true
console.log("true && false:", verdadeiro && falso); // false
console.log("false && false:", falso && falso); // false

// OR (||) - Retorna true se PELO MENOS UM for verdadeiro
console.log("\ntrue || true:", verdadeiro || verdadeiro); // true
console.log("true || false:", verdadeiro || falso); // true
console.log("false || false:", falso || falso); // false

// NOT (!) - Inverte o valor booleano
console.log("\n!true:", !verdadeiro); // false
console.log("!false:", !falso); // true
console.log("!!true (dupla negação):", !!verdadeiro); // true

// Short-circuit evaluation (avaliação de curto-circuito)
console.log("\n--- Short-circuit ---");
const resultado1 = false && console.log("Isso NÃO será executado");
const resultado2 = true || console.log("Isso NÃO será executado");
const resultado3 = true && "Valor retornado se true";
const resultado4 = false || "Valor padrão (fallback)";

console.log("true && 'texto':", resultado3); // "Valor retornado se true"
console.log("false || 'fallback':", resultado4); // "Valor padrão (fallback)"

// ─────────────────────────────────────────────────────────────────────────────
// 4.5 OPERADOR TERNÁRIO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR TERNÁRIO ===");

const idadeUsuario = 20;

// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
const status = idadeUsuario >= 18 ? "Maior de idade" : "Menor de idade";
console.log(`Idade: ${idadeUsuario} - Status: ${status}`);

// Exemplo prático
const pontos = 75;
const aprovado = pontos >= 70 ? "Aprovado ✅" : "Reprovado ❌";
console.log(`Pontos: ${pontos} - Resultado: ${aprovado}`);

// Ternário encadeado (use com moderação para não perder legibilidade)
const nota = 85;
const conceito = nota >= 90 ? "A" :
    nota >= 80 ? "B" :
        nota >= 70 ? "C" :
            nota >= 60 ? "D" : "F";
console.log(`Nota: ${nota} - Conceito: ${conceito}`);

// ─────────────────────────────────────────────────────────────────────────────
// 4.6 OPERADOR DE COALESCÊNCIA NULA (??) - ES2020
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR DE COALESCÊNCIA NULA (??) ===");

// Retorna o lado direito APENAS se o lado esquerdo for null ou undefined
const valorA = null ?? "valor padrão";
const valorB = undefined ?? "valor padrão";
const valorC = 0 ?? "valor padrão"; // 0 NÃO é null/undefined
const valorD = "" ?? "valor padrão"; // "" NÃO é null/undefined
const valorE = false ?? "valor padrão"; // false NÃO é null/undefined

console.log("null ?? 'padrão':", valorA); // "valor padrão"
console.log("undefined ?? 'padrão':", valorB); // "valor padrão"
console.log("0 ?? 'padrão':", valorC); // 0
console.log("'' ?? 'padrão':", valorD); // ""
console.log("false ?? 'padrão':", valorE); // false

// Diferença entre ?? e ||
console.log("\n--- Diferença entre ?? e || ---");
console.log("0 || 'fallback':", 0 || "fallback"); // "fallback" (0 é falsy)
console.log("0 ?? 'fallback':", 0 ?? "fallback"); // 0 (0 não é null/undefined)

// ─────────────────────────────────────────────────────────────────────────────
// 4.7 OPERADOR DE ENCADEAMENTO OPCIONAL (?.) - ES2020
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR DE ENCADEAMENTO OPCIONAL (?.) ===");

const cliente = {
    nome: "Ana",
    contato: {
        email: "ana@email.com"
    }
};

// Acesso seguro a propriedades que podem não existir
console.log("Email:", cliente.contato?.email); // "ana@email.com"
console.log("Telefone:", cliente.contato?.telefone); // undefined (não existe)
console.log("Endereço:", cliente.endereco?.rua); // undefined (endereço não existe)

// Sem o ?., teríamos erro:
// console.log(cliente.endereco.rua); // ❌ TypeError: Cannot read property 'rua' of undefined

// ─────────────────────────────────────────────────────────────────────────────
// 4.8 OPERADOR SPREAD (...) - ES6
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR SPREAD (...) ===");

// Com Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = [...array1, ...array2];
console.log("Arrays combinados:", arrayCombinado); // [1, 2, 3, 4, 5, 6]

// Clonar array
const arrayOriginal = [1, 2, 3];
const arrayClone = [...arrayOriginal];
console.log("Clone do array:", arrayClone);

// Com Objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log("Objetos combinados:", objetoCombinado); // { a: 1, b: 2, c: 3, d: 4 }

// Sobrescrever propriedades
const config = { tema: "claro", idioma: "pt" };
const novaConfig = { ...config, tema: "escuro" };
console.log("Config atualizada:", novaConfig); // { tema: "escuro", idioma: "pt" }

// ─────────────────────────────────────────────────────────────────────────────
// 4.9 TYPEOF (operador de tipo)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OPERADOR TYPEOF ===");

console.log('typeof "texto":', typeof "texto"); // "string"
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (bug histórico!)
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"
console.log("typeof function(){}:", typeof function () { }); // "function"
console.log("typeof Symbol():", typeof Symbol()); // "symbol"
console.log("typeof 10n:", typeof 10n); // "bigint"


// ============================================================================
// 📌 SEÇÃO 5: RESUMO E BOAS PRÁTICAS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 RESUMO E BOAS PRÁTICAS");
console.log("========================================\n");

console.log(`
✅ BOAS PRÁTICAS:

1. VARIÁVEIS:
   - Use 'const' por padrão
   - Use 'let' apenas quando precisar reatribuir
   - Evite 'var' (problemas de escopo e hoisting)

2. NOMES DE VARIÁVEIS:
   - Use camelCase para variáveis e funções
   - Use UPPER_SNAKE_CASE para constantes reais
   - Escolha nomes descritivos e significativos

3. COMPARAÇÕES:
   - Sempre use === e !== (igualdade estrita)
   - Evite == e != (podem causar bugs)

4. OPERADORES MODERNOS:
   - Use ?? para valores padrão (null/undefined)
   - Use ?. para acesso seguro a propriedades
   - Use ... (spread) para copiar/combinar arrays e objetos

5. TIPOS:
   - Lembre-se que JavaScript é dinamicamente tipado
   - Valide tipos quando necessário
   - Use typeof e Array.isArray() para verificações
`);

console.log("🎉 Fim da Aula 01 - Fundamentos do JavaScript!");

console.log("\n\n========================================");
console.log("📌 ATIVIDADES");
console.log("========================================\n");

// Exercise 1

var salarioMensal = 1000;
var taxaReajuste = 0.3;
var valorReajuste = salarioMensal * taxaReajuste;
var salarioNovo = salarioMensal + valorReajuste;

console.log("The new salary is: " + salarioNovo);

// Exercise 2

var number = prompt("Enter a number");
number = Number(number);
var numberSuccessor = number + 1;
var numberPredecessor = number - 1;

console.log("The successor is: " + numberSuccessor + " and the predecessor is: " + numberPredecessor);

// Exercise 3

var taxes = 0.45,
    distributorPercentage = 0.28,
    factoryCost = parseFloat(prompt("Enter the cost of the factory")),
    newCarCost = factoryCost + (factoryCost * taxes) + (factoryCost * distributorPercentage);

console.log("The cost of the new car is: " + newCarCost.toFixed(2));

// Exercise 4

var grade1 = parseFloat(prompt("Enter the first grade"));
var grade2 = parseFloat(prompt("Enter the second grade"));
var grade3 = parseFloat(prompt("Enter the third grade"));
var average = (grade1 + grade2 + grade3) / 3;
console.log("The average of the grades is: " + average.toFixed(2));

// Exercise 5

var number1 = parseFloat(prompt("Enter the first number"));
var number2 = parseFloat(prompt("Enter the second number"));
var number3 = parseFloat(prompt("Enter the third number"));
var number4 = parseFloat(prompt("Enter the fourth number"));
var ponderedAverage = (number1 * 2 + number2 * 3 + number3 * 4 + number4 * 1) / 10;
console.log("The pondered average is: " + ponderedAverage.toFixed(2));

// Exercise 6

var productValue = parseFloat(prompt("Enter the product value"));
var discount = productValue * 0.09;
var newPrice = productValue - discount;
console.log("The new price is: " + newPrice.toFixed(2));

// Exercise 7

// Calculate the consumption of a car
var distance = parseFloat(prompt("Enter the distance"));
var fuelConsumption = parseFloat(prompt("Enter the fuel consumption"));
var consumption = distance / fuelConsumption;
console.log("The consumption is: " + consumption.toFixed(2));

// String manipulation
var name = prompt("Enter your name");
var newName = name.toUpperCase();
console.log("The new name is: " + newName);

// Resume about String and yours methods

// ============================================================================
// 📌 SEÇÃO 6: STRINGS E SEUS MÉTODOS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SEÇÃO 6: STRINGS E SEUS MÉTODOS");
console.log("========================================\n");

/*
 * STRING é um tipo primitivo em JavaScript usado para representar texto.
 * Strings são IMUTÁVEIS - métodos de string retornam uma NOVA string,
 * não modificam a original.
 * 
 * Formas de criar strings:
 * 1. Aspas simples: 'texto'
 * 2. Aspas duplas: "texto"
 * 3. Template literals (crase): `texto com ${variável}`
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 CRIAÇÃO DE STRINGS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== CRIAÇÃO DE STRINGS ===\n");

const stringSimples = 'Olá Mundo';           // Aspas simples
const stringDupla = "Hello World";            // Aspas duplas
const templateLiteral = `Soma: ${2 + 2}`;    // Template literal (permite interpolação)

console.log("Aspas simples:", stringSimples);
console.log("Aspas duplas:", stringDupla);
console.log("Template literal:", templateLiteral);

// Escape characters (caracteres de escape)
console.log("\n--- Caracteres de Escape ---");
console.log("Nova linha: Linha 1\nLinha 2");
console.log("Tab: Coluna1\tColuna2");
console.log("Aspas dentro de string: Ela disse \"Olá\"");
console.log('Apóstrofe: It\'s a nice day');
console.log("Barra invertida: C:\\Users\\Nome");

// Strings multilinha com template literals
const textoMultilinha = `
    Esta é uma string
    que ocupa várias linhas
    usando template literals
`;
console.log("String multilinha:", textoMultilinha);

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 PROPRIEDADE LENGTH
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== PROPRIEDADE LENGTH ===\n");

const texto = "JavaScript";
console.log(`Texto: "${texto}"`);
console.log("Tamanho (length):", texto.length); // 10

// Verificar se string está vazia
const stringVazia = "";
console.log("String vazia tem length 0:", stringVazia.length === 0); // true

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 ACESSANDO CARACTERES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ACESSANDO CARACTERES ===\n");

const palavra = "Programação";

// Método 1: Notação de colchetes (índice começa em 0)
console.log("Primeiro caractere [0]:", palavra[0]);         // "P"
console.log("Quinto caractere [4]:", palavra[4]);           // "r"
console.log("Último caractere:", palavra[palavra.length - 1]); // "o"

// Método 2: charAt()
console.log("charAt(0):", palavra.charAt(0));               // "P"
console.log("charAt(5):", palavra.charAt(5));               // "a"

// Método 3: charCodeAt() - retorna o código Unicode
console.log("charCodeAt(0) - código de 'P':", palavra.charCodeAt(0)); // 80

// Método 4: at() (ES2022) - aceita índices negativos
console.log("at(0):", palavra.at(0));                       // "P"
console.log("at(-1) - último caractere:", palavra.at(-1)); // "o"
console.log("at(-2) - penúltimo:", palavra.at(-2));        // "ã"

// ─────────────────────────────────────────────────────────────────────────────
// 6.4 MÉTODOS DE BUSCA
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE BUSCA ===\n");

const fraseBusca = "JavaScript é incrível. JavaScript é popular.";

// indexOf() - retorna a primeira posição encontrada ou -1
console.log("indexOf('JavaScript'):", fraseBusca.indexOf("JavaScript")); // 0
console.log("indexOf('Python'):", fraseBusca.indexOf("Python"));         // -1 (não encontrado)
console.log("indexOf('JavaScript', 5):", fraseBusca.indexOf("JavaScript", 5)); // 23 (busca a partir do índice 5)

// lastIndexOf() - retorna a última posição encontrada
console.log("lastIndexOf('JavaScript'):", fraseBusca.lastIndexOf("JavaScript")); // 23

// includes() - retorna true/false se contém a substring
console.log("includes('incrível'):", fraseBusca.includes("incrível")); // true
console.log("includes('Python'):", fraseBusca.includes("Python"));     // false

// startsWith() - verifica se começa com a substring
console.log("startsWith('Java'):", fraseBusca.startsWith("Java"));     // true
console.log("startsWith('Python'):", fraseBusca.startsWith("Python")); // false

// endsWith() - verifica se termina com a substring
console.log("endsWith('.'):", fraseBusca.endsWith("."));               // true
console.log("endsWith('!'):", fraseBusca.endsWith("!"));               // false

// search() - busca usando regex, retorna posição ou -1
console.log("search(/incrível/):", fraseBusca.search(/incrível/));     // 14

// ─────────────────────────────────────────────────────────────────────────────
// 6.5 MÉTODOS DE EXTRAÇÃO (SUBSTRING)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE EXTRAÇÃO ===\n");

const textoExtracao = "Desenvolvimento Web";

// slice(início, fim) - extrai do início até fim (não inclui fim)
console.log("slice(0, 5):", textoExtracao.slice(0, 5));       // "Desen"
console.log("slice(5):", textoExtracao.slice(5));             // "volvimento Web"
console.log("slice(-3):", textoExtracao.slice(-3));           // "Web" (índice negativo conta do final)
console.log("slice(-7, -4):", textoExtracao.slice(-7, -4));   // "nto"

// substring(início, fim) - similar ao slice, mas não aceita negativos
console.log("substring(0, 5):", textoExtracao.substring(0, 5)); // "Desen"
console.log("substring(5):", textoExtracao.substring(5));       // "volvimento Web"
console.log("substring(5, 0):", textoExtracao.substring(5, 0)); // "Desen" (inverte se início > fim)

// substr(início, quantidade) - DEPRECATED, mas ainda funciona
console.log("substr(0, 5):", textoExtracao.substr(0, 5));       // "Desen" (5 caracteres)
console.log("substr(-3, 3):", textoExtracao.substr(-3, 3));     // "Web"

/*
 * 💡 RECOMENDAÇÃO: Use slice() como padrão
 * - Aceita índices negativos
 * - Comportamento mais previsível
 * - É o mais moderno e recomendado
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.6 MÉTODOS DE TRANSFORMAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE TRANSFORMAÇÃO ===\n");

const textoOriginal = "   Olá Mundo!   ";

// toUpperCase() - converte para maiúsculas
console.log("toUpperCase():", "javascript".toUpperCase()); // "JAVASCRIPT"

// toLowerCase() - converte para minúsculas
console.log("toLowerCase():", "JAVASCRIPT".toLowerCase()); // "javascript"

// trim() - remove espaços do início e fim
console.log(`Original: "${textoOriginal}"`);
console.log(`trim(): "${textoOriginal.trim()}"`);           // "Olá Mundo!"

// trimStart() / trimLeft() - remove espaços só do início
console.log(`trimStart(): "${textoOriginal.trimStart()}"`); // "Olá Mundo!   "

// trimEnd() / trimRight() - remove espaços só do fim
console.log(`trimEnd(): "${textoOriginal.trimEnd()}"`);     // "   Olá Mundo!"

// padStart(tamanho, caractere) - preenche no início até atingir o tamanho
console.log("'5'.padStart(3, '0'):", "5".padStart(3, "0")); // "005"
console.log("'42'.padStart(5, '*'):", "42".padStart(5, "*")); // "***42"

// padEnd(tamanho, caractere) - preenche no final até atingir o tamanho
console.log("'5'.padEnd(3, '0'):", "5".padEnd(3, "0"));     // "500"
console.log("'Hi'.padEnd(5, '!'):", "Hi".padEnd(5, "!"));   // "Hi!!!"

// repeat(vezes) - repete a string N vezes
console.log("'Ha'.repeat(3):", "Ha".repeat(3));             // "HaHaHa"
console.log("'=-'.repeat(10):", "=-".repeat(10));           // "=-=-=-=-=-=-=-=-=-="

// ─────────────────────────────────────────────────────────────────────────────
// 6.7 MÉTODOS DE SUBSTITUIÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE SUBSTITUIÇÃO ===\n");

const fraseSubstituir = "Eu gosto de Java. Java é legal.";

// replace() - substitui a PRIMEIRA ocorrência
console.log("replace('Java', 'Python'):",
    fraseSubstituir.replace("Java", "Python")); // "Eu gosto de Python. Java é legal."

// replaceAll() - substitui TODAS as ocorrências
console.log("replaceAll('Java', 'Python'):",
    fraseSubstituir.replaceAll("Java", "Python")); // "Eu gosto de Python. Python é legal."

// replace com regex e flag 'g' (global) - também substitui todas
console.log("replace(/Java/g, 'Python'):",
    fraseSubstituir.replace(/Java/g, "Python")); // "Eu gosto de Python. Python é legal."

// replace com função callback
const textoComNumeros = "a1b2c3";
const resultado = textoComNumeros.replace(/\d/g, (match) => `[${match}]`);
console.log("replace com callback:", resultado); // "a[1]b[2]c[3]"

// ─────────────────────────────────────────────────────────────────────────────
// 6.8 MÉTODOS DE DIVISÃO E JUNÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE DIVISÃO E JUNÇÃO ===\n");

// split() - divide a string em um array
const fraseParaDividir = "HTML,CSS,JavaScript,React";

console.log("split(','):", fraseParaDividir.split(","));
// ["HTML", "CSS", "JavaScript", "React"]

console.log("split(',', 2):", fraseParaDividir.split(",", 2));
// ["HTML", "CSS"] (limita a 2 elementos)

console.log("split(''):", "ABC".split(""));
// ["A", "B", "C"] (divide cada caractere)

// join() - junta um array em uma string (método de Array)
const tecnologias = ["HTML", "CSS", "JavaScript"];
console.log("join(' - '):", tecnologias.join(" - ")); // "HTML - CSS - JavaScript"
console.log("join(''):", tecnologias.join(""));       // "HTMLCSSJavaScript"

// Combinando split e join para substituir
const textoComHifen = "nome-do-arquivo".split("-").join("_");
console.log("split('-').join('_'):", textoComHifen);  // "nome_do_arquivo"

// ─────────────────────────────────────────────────────────────────────────────
// 6.9 MÉTODOS DE COMPARAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS DE COMPARAÇÃO ===\n");

// localeCompare() - compara strings considerando localização
console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));   // -1 (a vem antes)
console.log("'b'.localeCompare('a'):", "b".localeCompare("a"));   // 1 (b vem depois)
console.log("'a'.localeCompare('a'):", "a".localeCompare("a"));   // 0 (são iguais)

// Útil para ordenação correta com acentos
const palavras = ["água", "zebra", "maçã", "banana"];
palavras.sort((a, b) => a.localeCompare(b, "pt-BR"));
console.log("Ordenação com localeCompare:", palavras);
// ["água", "banana", "maçã", "zebra"]

// Comparação case-insensitive
const str1 = "JavaScript";
const str2 = "javascript";
console.log("Comparação direta:", str1 === str2);                             // false
console.log("Comparação case-insensitive:", str1.toLowerCase() === str2.toLowerCase()); // true

// ─────────────────────────────────────────────────────────────────────────────
// 6.10 MÉTODOS COM REGEX (EXPRESSÕES REGULARES)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS COM REGEX ===\n");

const textoRegex = "Contato: email@exemplo.com, Tel: 11-99999-8888";

// match() - retorna um array com os matches ou null
console.log("match(/\\d+/):", textoRegex.match(/\d+/));     // ["11"] - primeiro match
console.log("match(/\\d+/g):", textoRegex.match(/\d+/g));   // ["11", "99999", "8888"] - todos os matches

// matchAll() - retorna um iterador com todos os matches e detalhes
const matches = [...textoRegex.matchAll(/\d+/g)];
console.log("matchAll(/\\d+/g):", matches.map(m => m[0]));  // ["11", "99999", "8888"]

// search() - retorna o índice do primeiro match ou -1
console.log("search(/\\d+/):", textoRegex.search(/\d+/));   // 38 (posição do primeiro dígito)

// test() (método de RegExp) - retorna true/false
console.log("/\\d/.test(textoRegex):", /\d/.test(textoRegex)); // true

// ─────────────────────────────────────────────────────────────────────────────
// 6.11 CONVERSÃO DE/PARA STRING
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CONVERSÃO DE/PARA STRING ===\n");

// Convertendo para String
console.log("String(123):", String(123));                 // "123"
console.log("String(true):", String(true));               // "true"
console.log("String(null):", String(null));               // "null"
console.log("(123).toString():", (123).toString());       // "123"
console.log("(255).toString(16):", (255).toString(16));   // "ff" (hexadecimal)
console.log("(10).toString(2):", (10).toString(2));       // "1010" (binário)

// Convertendo de String para outros tipos
console.log("Number('42'):", Number("42"));               // 42
console.log("parseInt('42px'):", parseInt("42px"));       // 42
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14
console.log("+'42' (unary plus):", +"42");                // 42

// ─────────────────────────────────────────────────────────────────────────────
// 6.12 CONCATENAÇÃO DE STRINGS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CONCATENAÇÃO DE STRINGS ===\n");

const primeiroNome = "João";
const ultimoNome = "Silva";

// Método 1: Operador +
console.log("Concatenação (+):", primeiroNome + " " + ultimoNome);

// Método 2: concat()
console.log("concat():", primeiroNome.concat(" ", ultimoNome));

// Método 3: Template literals (RECOMENDADO)
console.log("Template literal:", `${primeiroNome} ${ultimoNome}`);

// Método 4: join() para múltiplas partes
console.log("join():", [primeiroNome, ultimoNome].join(" "));

/*
 * 💡 RECOMENDAÇÃO: Use template literals
 * - Mais legível
 * - Permite expressões dentro ${}
 * - Suporta múltiplas linhas
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.13 MÉTODOS ÚTEIS ADICIONAIS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MÉTODOS ÚTEIS ADICIONAIS ===\n");

// normalize() - normaliza caracteres Unicode
const textoAcentuado = "café";
console.log("normalize('NFD'):", textoAcentuado.normalize("NFD")); // Decomposição

// String.raw - template literal sem interpretação de escape
console.log("String.raw:", String.raw`Linha1\nLinha2`); // "Linha1\nLinha2" (não interpreta \n)

// String.fromCharCode() - cria string a partir de códigos Unicode
console.log("String.fromCharCode(65, 66, 67):", String.fromCharCode(65, 66, 67)); // "ABC"

// String.fromCodePoint() - similar, mas suporta mais caracteres Unicode
console.log("String.fromCodePoint(128512):", String.fromCodePoint(128512)); // "😀"

// codePointAt() - retorna o código Unicode completo
console.log("'😀'.codePointAt(0):", "😀".codePointAt(0)); // 128512

// ─────────────────────────────────────────────────────────────────────────────
// 6.14 EXEMPLOS PRÁTICOS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== EXEMPLOS PRÁTICOS ===\n");

// Exemplo 1: Capitalizar primeira letra
function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("Capitalizar 'jAVASCRIPT':", capitalizar("jAVASCRIPT")); // "Javascript"

// Exemplo 2: Converter para Title Case
function titleCase(str) {
    return str.toLowerCase().split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
}
console.log("Title Case 'olá mundo feliz':", titleCase("olá mundo feliz")); // "Olá Mundo Feliz"

// Exemplo 3: Contar palavras
function contarPalavras(str) {
    return str.trim().split(/\s+/).length;
}
console.log("Contar palavras 'Olá mundo feliz':", contarPalavras("Olá mundo feliz")); // 3

// Exemplo 4: Remover acentos
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
console.log("Remover acentos 'Programação':", removerAcentos("Programação")); // "Programacao"

// Exemplo 5: Validar e-mail básico
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("Validar 'teste@email.com':", validarEmail("teste@email.com")); // true
console.log("Validar 'invalido':", validarEmail("invalido"));               // false

// Exemplo 6: Truncar texto
function truncar(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
console.log("Truncar texto longo:", truncar("Este é um texto muito longo", 15)); // "Este é um texto..."

// Exemplo 7: Slug para URL
function criarSlug(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}
console.log("Criar slug 'Olá Mundo! Teste 123':", criarSlug("Olá Mundo! Teste 123")); // "ola-mundo-teste-123"

// Exemplo 8: Inverter string
function inverterString(str) {
    return str.split("").reverse().join("");
}
console.log("Inverter 'JavaScript':", inverterString("JavaScript")); // "tpircSavaJ"

// Exemplo 9: Verificar palíndromo
function ehPalindromo(str) {
    const limpa = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return limpa === limpa.split("").reverse().join("");
}
console.log("'ana' é palíndromo?:", ehPalindromo("ana"));           // true
console.log("'A man a plan a canal Panama':", ehPalindromo("A man a plan a canal Panama")); // true

// Exemplo 10: Formatar CPF
function formatarCPF(cpf) {
    const numeros = cpf.replace(/\D/g, "");
    return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
console.log("Formatar CPF '12345678901':", formatarCPF("12345678901")); // "123.456.789-01"

// ─────────────────────────────────────────────────────────────────────────────
// 6.15 RESUMO DOS MÉTODOS DE STRING
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== RESUMO DOS MÉTODOS DE STRING ===\n");

console.log(`
📚 TABELA DE REFERÊNCIA - MÉTODOS DE STRING:

ACESSO:
├─ str[index]          → Acessa caractere pelo índice
├─ str.charAt(i)       → Retorna caractere na posição i
├─ str.charCodeAt(i)   → Retorna código Unicode do caractere
├─ str.at(i)           → Acessa caractere (aceita índice negativo)
└─ str.length          → Propriedade: tamanho da string

BUSCA:
├─ str.indexOf(sub)        → Primeira posição de sub (-1 se não encontrar)
├─ str.lastIndexOf(sub)    → Última posição de sub
├─ str.includes(sub)       → Retorna true se contém sub
├─ str.startsWith(sub)     → Retorna true se começa com sub
├─ str.endsWith(sub)       → Retorna true se termina com sub
└─ str.search(regex)       → Posição do match da regex

EXTRAÇÃO:
├─ str.slice(ini, fim)     → Extrai do índice ini até fim (recomendado)
├─ str.substring(ini, fim) → Similar ao slice
└─ str.substr(ini, qtd)    → Extrai qtd caracteres (deprecated)

TRANSFORMAÇÃO:
├─ str.toUpperCase()   → Converte para maiúsculas
├─ str.toLowerCase()   → Converte para minúsculas
├─ str.trim()          → Remove espaços das extremidades
├─ str.trimStart()     → Remove espaços do início
├─ str.trimEnd()       → Remove espaços do final
├─ str.padStart(n, c)  → Preenche no início até n caracteres
├─ str.padEnd(n, c)    → Preenche no final até n caracteres
└─ str.repeat(n)       → Repete a string n vezes

SUBSTITUIÇÃO:
├─ str.replace(sub, novo)     → Substitui primeira ocorrência
└─ str.replaceAll(sub, novo)  → Substitui todas ocorrências

DIVISÃO/JUNÇÃO:
├─ str.split(sep)      → Divide em array pelo separador
└─ arr.join(sep)       → Junta array em string (método de Array)

REGEX:
├─ str.match(regex)    → Retorna array de matches
├─ str.matchAll(regex) → Retorna iterador de matches
└─ str.search(regex)   → Retorna índice do primeiro match

CONVERSÃO:
├─ String(valor)       → Converte valor para string
├─ valor.toString()    → Converte valor para string
├─ String.fromCharCode(n) → Cria string a partir de código Unicode
└─ String.fromCodePoint(n) → Cria string a partir de code point

💡 DICAS IMPORTANTES:
1. Strings são IMUTÁVEIS - métodos retornam nova string
2. Use template literals \`\${var}\` para interpolação
3. Use slice() para extrair substrings
4. Use === para comparações exatas
5. Use localeCompare() para ordenação com acentos
`);

console.log("🎉 Fim da Seção 6 - Strings e seus Métodos!");


