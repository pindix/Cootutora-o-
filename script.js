function calcular_preco(){
    const pag = parseFloat(document.getElementById("pag").value);
    const preco = document.getElementById("preco");

    if (pag > ""){
        preco.innerHTML = `${pag} páginas custam ${Math.round((pag*200)*0.35)} KZ`;
    } else {preco.innerHTML = ""}
}