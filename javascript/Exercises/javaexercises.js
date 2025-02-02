const words= ["Peace","Zawadi","Aloni"];
const cars=[{type:"Toyota",year:1990},
    {type:"Hyundai",year:2023},
    {type:"Carina",year:2000}];
const numbers = [1, 32,44,90];
function myArrayMin(numbers){return Math.min.apply(null,numbers)}
function myArrayMax(numbers){return Math.max.apply(null,numbers)}


console.log(words.toSorted(),
words.toReversed(), 
numbers.sort(function(a,b){return a-b}),
numbers.sort(function(a,b){return b-a}),
myArrayMin(numbers),
myArrayMax(numbers),cars.sort(function(a,b){return a.year - b.year}),
cars.sort((p1,p2)=>{if (p1.year<p2.year) return -1;
    if (p1.year>p2.year) return 1;
    return 0;}
));

