const form = document.getElementById("form");

let cargarComponentes = (leyenda, input1, input2)=>{
    return `
    <fieldset id="infPer">
            <legend>${leyenda}</legend>
            <label for="name">${input1} :</label>
            <input type="text" name="name" id="name">
            <label for="name">${input2} :</label>
            <input type="email" name="name" id="email">
        </fieldset>
    `
}

form.insertAdjacentHTML("afterbegin", cargarComponentes("hola","prueba","2"))
form.insertAdjacentHTML("afterbegin", cargarComponentes("hola","prueba","2"))