const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter() -> usada para retornar numero de elementos pré determinados
// 1. Retorne os inventores nascidos no século 16
const inventores = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});

console.table(inventores);

// Array.prototype.map() -> usada para retornar todos os elementos com alguma modificação
// 2. Retornar array com nome completo (inicial e final)
const nomeCompleto = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(nomeCompleto);

// Array.prototype.sort() -> usada para ordenação
// 3. Ordene pela data de nascimento
const ordenados = inventors.sort((a,b) => a.year > b.year ? 1: -1);
console.table(ordenados);


// Array.prototype.reduce()
// 4. Soma das idades dos inventores

const anos = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
    },0 // 0 para valor inicial de total
);

console.log(anos)

// 5. Ordenar inventores por quantidade de anos vividos

const maisVelho = inventors.sort(function (a,b) {
    const ultimo = a.passed - a.year;
    const proximo = b.passed - b.year;
    return ultimo > proximo ? -1 : 1;
})

console.table(maisVelho);


// 6. Exercício
// Ordene as pessoas pelo sobrenome

const ultimoNome = people.sort(function (ultimo,atual) {
    const [u_sobrenome, u_nome] = ultimo.split(', ');
    const [a_sobrenome, a_nome] = atual.split(', ');

    return u_sobrenome > a_sobrenome ? 1 : -1;

});
console.log(ultimoNome)

// 8. Exercício Reduce
// Some cada um dos meios de transporte
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportes = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {
});

console.log(transportes);