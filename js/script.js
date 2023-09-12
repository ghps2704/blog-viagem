function newsletter(){
    swal({
        title:  "Você aceita assinar o jornal do blog?",
        buttons: {
            cancel: "Não",
            confirm: "Sim",
        }
    })
};

setTimeout(newsletter, 3000);
