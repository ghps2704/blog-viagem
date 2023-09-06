function newsletter(){
    swal({
        title:  "Você deseja assinar o newsletter do blog?",
        buttons: {
            cancel: "Não",
            confirm: "Sim",
        }
    })
};

setTimeout(newsletter, 3000);
