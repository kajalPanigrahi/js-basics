// let values = ['hello',45,true,null,undefined];

// console.log(values);

let words = ['today','is','tuesday','the','second','day','of','the','week'];

console.log(words);
console.log('Traversing the Array ');
words.forEach(word=>{
    console.log(word);
})

console.log('transforming words to upper case')

let upperWords = [];
upperWords = words.map(word => word.toUpperCase())

console.log(upperWords);

console.log('Filtering Array for words starting with t')
let filteredWords = [];


filteredWords = words.filter(word=>word.startsWith('t'))
console.log(filteredWords)


let count = words.reduce((accumulator,word)=>{
    if(word.startsWith('t')){
        accumulator+=1;
    }
    return accumulator;
},0)

console.log(`Count of Words Starting with t is ${count}`)

let countWord = words
    .map(word=>word.toUpperCase())
    .filter(word=>word.startsWith('T'))
    .reduce((accumulator,word)=>{
        accumulator++;
        return accumulator;
    },0)


    console.log(`Count of Words Starting with T is ${countWord}`)


