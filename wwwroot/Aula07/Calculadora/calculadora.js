var start = true
var controlo = 1;
var n1 = "";
var n2 = "";
var operacao = "";
var res = document.getElementById("res");

function addNumber() {
    var x = event.target.value;
    if (controlo == 1) {
        n1 += x;
    } else {
        n2 += x;
    }
    
    if (start) {
        res.innerText = "";
        start = false;
    }
    res.innerText += x;
    console.log("n1="+n1, "n2="+n2, "operação="+operacao, "controlo="+controlo);
}

function addOperation() {
    var x = event.target.value;
    if (operacao == "" && n1 != "") {
        operacao = x;
        res.innerText += x;
        controlo = 2;
    } else {
        erro();
        return;
    }
    console.log("n1="+n1, "n2="+n2, "operação="+operacao, "controlo="+controlo);

}

function calcula() {

    if (operacao != "" && n1 != "" && n2 != "") {
        
        switch(operacao) {
            case "+":
                resultado = parseFloat(n1) + parseFloat(n2)
                break;
            case "-":
                resultado = parseFloat(n1) - parseFloat(n2)
                break;
            case "*":
                resultado = parseFloat(n1) * parseFloat(n2)
                break;
            case "/":
                if (parseFloat(n2) == 0) {
                    erro();
                    return;
                } else {
                    resultado = parseFloat(n1) / parseFloat(n2)
                }
                break;
            default:
                erro();
                break;
        }

        res.innerText = "";
        res.innerText = resultado;
        n1 = resultado
        n2 = 0
        operacao = ""
        controlo = 1
        console.log("n1="+n1, "n2="+n2, "operação="+operacao, "controlo="+controlo);    
    } else {
        erro();
        return;
    }
}

function clearRes() {
    res.innerText = 0;
    start = true;
    n1 = "";
    n2 = "";
    controlo = 1;
    operacao = "";

    console.clear();
}

function erro() {
    alert("Operação inválida");
    clearRes();
}