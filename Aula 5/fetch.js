//Testes realizados no endereço https://jsonplaceholder.typicode.com/

//dá get no post de id 99
fetch('/posts/99').
then(resposta => resposta.json()).
then(json => console.log(json)); 


//cria novo post
fetch('/posts', {
method: 'POST',
body: JSON.stringify({
     title: 'Vale a pena!',
     body: 'Este restaurante é bem legal!',
     userId: 2
}),
headers: {
   "Content-type": "application/json"
   }
}).
then(resposta => resposta.json()).
then(json => console.log(json)); 


//Substitui os dados da postagem com id=3 (PUT)
fetch('/posts/3', {
method: 'PUT',
body: JSON.stringify({
     id: 3,
     title: 'Não vale a pena!',
     body: 'Há outros mais legais pelo mesmo preço!',
     userId: 2
}),
headers: {
   "Content-type": "application/json"
   }
}).
then(resposta => resposta.json()).
then(json => console.log(json)); 
