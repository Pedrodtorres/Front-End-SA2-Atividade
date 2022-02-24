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
        titulo: "Noticia da boa",
        Descrição: "Essa é uma das noticias"
    },    
    {
        titulo: "Noticia da boa",
        Descrição: "Essa é uma das noticias"
    },    
    {
        titulo: "Noticia da boa",
        Descrição: "Essa é uma das noticias"
    }
]