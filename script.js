
let inputC = document.getElementById("child");
let inputA = document.getElementById("adult");
let inputD = document.getElementById("duration");
btn1.addEventListener('click', result);

function result() {
    let duration = inputD.value
    let adult = inputA.value;
    let child = inputC.value;
    
    if (duration < 5 && duration != "" && child != "" && adult != "") {
        return calc()
    } else if (duration >= 5) {
        return calcDuration()
    } else {
    return alert("Preencha todos os campos!")
  }

}


function calc() {
    let adult = inputA.value;
    let child = inputC.value;

    let meat = adult * 400 + (child *200);
    let sausage = adult * 200 + (child *100);
    let rice = adult * 200 + (child *100);
    let breadGarlic = adult * 4 + (child *2);
    let cola = adult* 1.5 + (child *1);

    let show = document.getElementById("result");
    show.innerHTML = `<p>${meat / 1000}Kg de carne </p>`;
    show.innerHTML += `<p>${sausage / 1000}Kg de linguiça </p>`;
    show.innerHTML += `<p>${rice / 1000}Kg de arroz </p>`;
    show.innerHTML += `<p>${breadGarlic} unidades de pão de alho </p>`;
    show.innerHTML += `<p>${Math.ceil(cola)}L de refri </p>`;
}

function calcDuration() {

    let adult = inputA.value;
    let child = inputC.value;

    let meat = adult * 700 + (child *300);
    let sausage = adult * 500 + (child *200);
    let rice = adult * 500 + (child *200);
    let breadGarlic = adult * 7 + (child *4);
    let cola = adult* 3 + (child *2);

    let showD = document.getElementById("result");
    showD.innerHTML = `<p>${meat / 1000}Kg de carne </p>`;
    showD.innerHTML += `<p>${sausage / 1000}Kg de linguiça </p>`;
    showD.innerHTML += `<p>${rice / 1000}Kg de arroz </p>`;
    showD.innerHTML += `<p>${breadGarlic} unidades de pão de alho </p>`;
    showD.innerHTML += `<p>${Math.ceil(cola)}L de refri </p>`;
}







