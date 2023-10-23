$(document).ready(function() {
    $("#name_Error").hide();
    $("#morada_Error").hide();
    $("#local_Error").hide();
    $("#email_Error").hide();
    $("#submit").click(function() {
        valNome = validaNome();
        valMorada = validaMorada();
        valLocal = validaLocal();
        valEmail = validaEmail();
        return valNome && valMorada && valLocal && valEmail;
    })

    $("#reset").click(function() {

        $("#nome").val("");
        $("#morada").val("");
        $("#email").val("");
        $("input[name='local']").val("");

        limpaErro("#name_Error");
        limpaErro("#morada_Error");
        limpaErro("#local_Error");
        limpaErro("#email_Error");
    })

    function validaNome(){
        nome = $("#nome").val();
        if (nome.length < 10 || nome.length > 100) {
            $("#name_Error").show();
            return false;
        } else {
            return true;
        }
    }

    function validaMorada(){
        morada = $("#morada").val();
        if (morada.length < 20 || morada.length > 200) {
            $("#morada_Error").show();
            return false;
        } else {
            return true;
        }
    }

    function validaLocal(){
        count = 0;
        valor = 0;
        $("input[name='local']").each(function(){
            if (this.checked) {
                count += 1;
                valor += parseFloat($(this).val());
            }
        })

        $("#max_pagamento").val(valor);

        if (count < 2) {
            $("#local_Error").show();
            return false;
        } else {
            return true;
        }
    }

    function validaEmail(){
        email = $("#email").val();
        if (email.length == 0) {
            $("#email_Error").show();
            return false;
        } else {
            return true;
        }
    }

    function limpaErro(error_code){
        $(error_code).hide();
    }
})
