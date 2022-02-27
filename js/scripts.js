$(document).ready(function(){
    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")
    })
})

// $(document).ready(function(){

//     $("#barras").click(function(){
//         if($("#menu").hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("menu-ativo")
//         }
//     })
// })

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    setInterval(slide,2500)
})

function slide(){

    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
}

let emailUsuario = document.getElementById("campo-email");

function enviarEmail(){
        if(emailUsuario.value !== ""){
        window.alert(`Olá ${emailUsuario.value}.\nVocê concluiu seu cadastro com sucesso!`)
        }else{
            window.alert("Seu E-Mail é invalido ou já foi usado por outro Usuario")
        }
}

let listaNoticias = [
    {
        titulo: "Notícia da boa",
        descricao: "Essa é uma das notícias"
    },    
    {
        titulo: "Outra notícia da boa",
        descricao: "Essa é outra das notícias"
    },    
    {
        titulo: "Mais uma notícia da boa",
        descricao: "Essa é mais uma das notícias"
    },
]

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticia")
    
    let template = "";
    
    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];

        template += `<div class="card-noticias">
        <img src="img/noticias1.jpg" alt="noticia">
        <h5>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
    </div>` 
    }
    espaco.innerHTML = template;
}