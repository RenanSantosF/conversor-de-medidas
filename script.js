let valor1 = document.getElementById("inputConverter");
let valor2 = document.getElementById("inputConvertido");
let selecionar1 = document.getElementById("seletor1");
let selecionar2 = document.getElementById("seletor2");
let aviso = document.getElementById("alerta");
let novaClasse = document.getElementById("adicionar");
let array1 = document.getElementById("array1");
let array2 = document.getElementById("array2");
let array3 = document.getElementById("array3");
let array4 = document.getElementById("array4");
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []

const button = document.getElementById("buttonconverter").addEventListener("click", () =>{
    let option1 = selecionar1.options[selecionar1.selectedIndex].text;
    let option2 = selecionar2.options[selecionar2.selectedIndex].text;

    if( option1 != option2){
        aviso.innerHTML = "";
        if(valor1.value != ""){
            aviso.innerHTML = "";
            if(option1 == "m" & option2 == ("cm")){
                valor2.value = valor1.value * 100;
                arr1.unshift(valor2.value)
                arr2.unshift(option1)
                arr3.unshift(valor1.value)
                arr4.unshift(option2)

                if(arr1.length > 3){
                    arr1.pop()
                    arr2.pop()
                    arr3.pop()
                    arr4.pop()

                    array1.innerText = arr1.join("\n")
                    array2.innerText = arr2.join("\n")
                    array3.innerText = arr3.join("\n")
                    array4.innerText = arr4.join("\n")
                }else{
                    array1.innerText = arr1.join("\n")
                    array2.innerText = arr2.join("\n")
                    array3.innerText = arr3.join("\n")
                    array4.innerText = arr4.join("\n")
                }
                if(valor2.value == 0){
                    valor2.value = "";
                }
            }
            if (option1 == "cm" & option2 == "m"){
                valor2.value = valor1.value / 100;
                arr1.unshift(valor2.value)
                arr2.unshift(option1)
                arr3.unshift(valor1.value)
                arr4.unshift(option2)

                if(arr1.length > 3){
                    arr1.pop()
                    arr2.pop()
                    arr3.pop()
                    arr4.pop()

                    array1.innerText = arr1.join("\n")
                    array2.innerText = arr2.join("\n")
                    array3.innerText = arr3.join("\n")
                    array4.innerText = arr4.join("\n")

                }else{
                    array1.innerText = arr1.join("\n")
                    array2.innerText = arr2.join("\n")
                    array3.innerText = arr3.join("\n")
                    array4.innerText = arr4.join("\n")
                }
                if(valor2.value == 0){
                    valor2.value = "";
                }
            }
        }else{
            aviso.innerHTML = "Nenhum valor informado";
            valor2.value = "";
            valor1.value = "";
        }
    }else{
        aviso.innerHTML = "Selecione uma unidade de medida diferente";
        valor2.value = "";
        valor1.value = "";
    }
})