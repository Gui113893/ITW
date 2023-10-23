function valida() {
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado;
    //--- Se a função retornar false, o formulário não será enviaddo.
    var retval = true;

    retVal1 = validateNome();
    retVal2 = validateSexo();
    retVal3 = validateData();
    retVal4 = validateNota("field_51", "field_51_Error");
    retVal5 = validateNota("field_52", "field_52_Error");
    retVal6 = validateNota("field_53", "field_53_Error");
    retVal7 = validateNota("field_54", "field_54_Error");
    retVal8 = validateNota("field_55", "field_55_Error");

    media()

    console.log("CALL: valida()");
    return retVal1 && retVal2 && retVal3 && retVal4 && retVal5 && retVal6 && retVal7 && retVal8;
    
}


function limpa() {
    console.log("CALL: limpa()");
   

    limpaErro("field_1_Error")
    limpaErro("field_2_Error")
    limpaErro("field_3_Error")
    limpaErro("field_51_Error")
    limpaErro("field_52_Error")
    limpaErro("field_53_Error")
    limpaErro("field_54_Error")
    limpaErro("field_55_Error") 
    
    document.getElementById("field_1").value=""
    document.getElementById("field_2").value=""
    document.getElementById("field_4").value=""
    document.getElementById("field_51").value= ""
    document.getElementById("field_52").value=""
    document.getElementById("field_53").value=""
    document.getElementById("field_54").value=""
    document.getElementById("field_55").value=""
}

function limpaErro(id_error) {
    if (!document.getElementById(id_error).classList.contains("d-none")) {
        document.getElementById(id_error).classList.add("d-none");
    }
}



function validateNome() {
    nome = document.getElementById("field_1").value.trim().split(" ");
    if (nome.length < 2) {
        document.getElementById("field_1_Error").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("field_1_Error").classList.contains("d-none")) {
            document.getElementById("field_1_Error").classList.add("d-none");
        }
        return true
    }
}

function validateSexo() {
    sexo = document.getElementsByName("field_2");
    count = 0;
    sexo.forEach(element => {
        if (element.type == "radio" && element.checked) {
            count++;
        }
    });

    if (count != 1) {
        document.getElementById("field_2_Error").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("field_2_Error").classList.contains("d-none")) {
            document.getElementById("field_2_Error").classList.add("d-none");
        }
        return true;
    }
}

function validateData() {
    data = document.getElementById("field_4").value;

    if (data == "") {
        document.getElementById("field_3_Error").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("field_3_Error").classList.contains("d-none")) {
            document.getElementById("field_3_Error").classList.add("d-none");
        }
        return true;
    }
}

function validateNota(id, id_error) {
    nota = document.getElementById(id).value

    if ((parseFloat(nota) < 0 || parseFloat(nota) > 20) || nota == "") {
        document.getElementById(id_error).classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById(id_error).classList.contains("d-none")) {
            document.getElementById(id_error).classList.add("d-none");
        }
        return true;
    }
}


function media() {
    nota1 = document.getElementById("field_51").value
    nota2 = document.getElementById("field_52").value
    nota3 = document.getElementById("field_53").value
    nota4 = document.getElementById("field_54").value
    nota5 = document.getElementById("field_55").value

    media_valor = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)) / 5

    document.getElementById("media").value = media_valor
}

// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();     //--- Devolverá 9
// new Date("2019-11-09").getMonth();    //--- Devolverá 11
// new Date("2019-11-09").getFullYear(); //--- Devolverá 2019
//
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
