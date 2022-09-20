//CRIANDO OS OBJETOS

//OBJETO 01
//ANTES
authorBook1 = {
    author : 'John Ronald Reuel Tolkien',
    numberBooks : 40,
    live : false,
    bestBooks : ['The Silmarillion', 'The Lord Of The Rings', 'The Hobbit']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks1 = ""
for(i in authorBook1.bestBooks){
   nBook = authorBook1.bestBooks.length - 1
   bestBooks1 += authorBook1.bestBooks[i];
   if(i < nBook){
    bestBooks1 += ', '
}
}

//Imprimindo
authorBook1.bestBooks = bestBooks1;
console.log(authorBook1)

//OBJETO 02

authorBook2 = {
    author : 'CLive Staples Lewis',
    numberBooks: 49,
    live : false,
    bestBooks : ['Till We Have Face', 'The Screwtappers Letters', 'Chronicles Of Narnia: The Last Battle']
}


//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks2 = ""
for(i in authorBook2.bestBooks){
   nBook = authorBook2.bestBooks.length - 1
   bestBooks2 += authorBook2.bestBooks[i];
   if(i < nBook){
    bestBooks2 += ', '
}
}

authorBook2.bestBooks = bestBooks2;
console.log(authorBook2)

authorBook3 = {
    author : 'John Piper',
    numberBooks: 49,
    live : true,
    age: 79,
    bestBooks : ['Desiring God', 'Providence', 'Don´t Waste Your Cancer']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks3 = ""
for(i in authorBook3.bestBooks){
   nBook = authorBook3.bestBooks.length - 1
   bestBooks3 += authorBook3.bestBooks[i];
   if(i < nBook){
    bestBooks3 += ', '
}
}


authorBook3.bestBooks = bestBooks3;
console.log(authorBook3)

authorBook4 = {
    author : 'Timothy Keller',
    numberBooks: 52,
    live : true,
    age: 72,
    bestBooks : ['Center Church', 'On Birth', 'Counterfeit Gods']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks4 = ""
for(i in authorBook4.bestBooks){
   nBook = authorBook4.bestBooks.length - 1
   bestBooks4 += authorBook4.bestBooks[i];
   if(i < nBook){
    bestBooks4 += ', '
}
}


authorBook4.bestBooks = bestBooks4;
console.log(authorBook4)

//CRIANDO O ARRAY
const authorsLive = []
//CRIANDO AS CONDIÇÕES PARA O PUSH DO ARRAY 2   
if(authorBook1.live){
    authorsLive.push(authorBook1)
} else{
    console.log(authorBook1.author + ' não adicionado')
} 

if(authorBook2.live){
    authorsLive.push(authorBook2)
} else{
   console.log(authorBook2.author + ' não adicionado')
} 


if(authorBook3.live){
    authorsLive.push(authorBook3)
} else{
    console.log(authorBook3.author + ' não adicionado')
} 

if(authorBook4.live){
    authorsLive.push(authorBook4)
} else{
    console.log(authorBook4.author + ' não adicionado')
} 