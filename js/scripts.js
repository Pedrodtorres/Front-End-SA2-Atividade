$(document).ready(function(){
    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")
    })
})

// Diferentes possibilidades
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

function enviarEmail(){
    let emailUsuario = document.getElementById("campo-email");
        if(emailUsuario.value !== ""){
            window.alert(`Olá ${emailUsuario.value}.\nVocê concluiu seu cadastro com sucesso!`)
        }else{
            window.alert("Seu E-Mail é invalido ou já foi usado por outro Usuario")
        }
}

function validarRegistro(){
    let emailUsuario = document.getElementById("email");
    let emailConfirmacao = document.getElementById("email-confirmacao");
    let senhaUsuario = document.getElementById("senha");
    let senhaConfirmacao = document.getElementById("confirmacao-senha");
    let nomeUsuario = document.getElementById("nome");
    let sobrenomeUsuario = document.getElementById("sobrenome");
    let checkboxCheck = document.getElementById("agreement");
        if(emailUsuario.value == emailConfirmacao.value && emailUsuario.value !== "" && senhaUsuario.value == senhaConfirmacao.value && senhaUsuario.value !== "" && checkboxCheck.checked == true){
            window.alert(`olá ${nomeUsuario.value} ${sobrenomeUsuario.value}.\nSeu cadastro foi efetuado com sucesso.`)
        }else if(emailUsuario.value != emailConfirmacao.value){
            window.alert("E-mail e confirmação do e-mail diferentes.")
        }else if(emailUsuario.value == emailConfirmacao.value && emailUsuario.value !== "" && checkboxCheck.checked == true && senhaUsuario.value != senhaConfirmacao.value){
            window.alert("Senha e confirmação de senha estão diferentes")
        }else if(emailUsuario.value == emailConfirmacao.value && emailUsuario.value !== "" && senhaUsuario.value == senhaConfirmacao.value && senhaUsuario.value !== "" && checkboxCheck.checked == false){
            window.alert(`Para se cadastrar você precisa aceitar nossos termos de uso`)
        }else if(emailUsuario.value == emailConfirmacao.value && emailUsuario.value !== "" && checkboxCheck.checked == false && senhaUsuario.value != senhaConfirmacao.value){
            window.alert("Senha e confirmação de senha estão diferentes")
        }else{
            window.alert("Você precisa preencher todos os campos para efetuar o registro")
        }
}

// Testando checkbox
// function validarRegistro(){
//     let checkboxCheck = document.getElementById("agreement");
//         if(checkboxCheck.checked == true){
//             window.alert(`foi ${checkboxCheck.checked}`)
//         }
// }

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