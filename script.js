function calcular_preco(){
    const pag = parseFloat(document.getElementById("pag").value);
    const preco = document.getElementById("preco");

    if (pag > ""){
        preco.innerHTML = `${pag} páginas custam ${Math.round((pag*200)*0.35)} KZ`;
    } else {preco.innerHTML = ""}
}


function solicitar(){
    const pop_up = document.getElementById("pop_up"); 
    const foco= document.getElementById("foco");
    
    foco.classList.add("desfocar");
    pop_up.classList.add("show");
    
    const pag = parseFloat(document.getElementById("pag").value);
    const valor = document.getElementById("valor");

    if (pag > ""){
        valor.innerHTML = `É necessário pagar 50% antes de começarmos o trabalho.  ${Math.round(((pag*200)*0.35)*0.5)} KZ se quiser continuar com as ${pag} páginas que digitou.`;
    } else {valor.innerHTML = "É necessário pagar 50% antes de começarmos o trabalho."}
}

function chamar(){
    setTimeout(() => {
    solicitar(); // tua função que mostra o pop-up
  }, 800); // tempo em milissegundos — ajusta se quiser
}

function fechar_solicitacao(){
    const pop_up = document.getElementById("pop_up");
    const foco= document.getElementById("foco");
    
    foco.classList.remove("desfocar");
    pop_up.classList.remove("show"); 
}

window.addEventListener('scroll', fechar_solicitacao); 

