// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require("superheroes");

const myHeroes = superheroes.random();
console.log(myHeroes);

const supervillains = require("superheroes");

// const myVillains = supervillains.all;
const myVillainsRandom = supervillains.random();
// console.log(myVillains);
console.log(myVillainsRandom);