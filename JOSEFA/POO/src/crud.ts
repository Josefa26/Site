interface Produtos {
  name: string;
  valor: number;
}

let produtos: Array<Produtos> = [
  {name: "Monster High Boneca Draculaura" , valor:  123},
  {name: "Monster High Boneca Clawdeen" , valor:  129},
  {name: "Monster High Boneca Frankie" , valor: 120}
];

console.log(produtos); 
    console.log(produtos[1]);

function listarProdutos
(nome: string , valor: number){

  console.log(produtos);
}

function salvarProdutos
(name: string , valor: number){

  let productObj : Produtos = {

    name, valor
  }
  produtos.push(productObj);

  {
    String(prompt("acrescentar produtos"));
    Number(prompt("escreva o valor do produto"));
  };

  function editarProdutos
  (nameField: string , name: string, valor: number){
    let productObj = produtos.findIndex(p => p.name === nameField);
    let productEdit : Produtos = {name, valor}
    produtos[productObj] = productEdit;
  }
      String(prompt("Que produto deseja editar?"));
      String(prompt("Quer mudar para qual?"));
      Number(prompt("Valor do produto"));
    
    }

  function deletarProdutos
  (name: string){
    let productObj = produtos.findIndex(p => p.name === name);
    produtos.splice(productObj, 1);
  }

  {
    salvarProdutos('Monster High Boneca Draculaura',  123);
    salvarProdutos('Monster High Boneca Clawdeen',   129);
    salvarProdutos('Monster High Boneca Frankie',  120);

    console.log(produtos);
    


    }



































