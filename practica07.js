const formulario=document.getElementById("formulario");
const par=["Nombre:","Correo Electrónico:"];
const par1=["Dirección:","Ciudad:"];
const boton=()=>{
    return ` <input type="submit" name="btnEnvia" id="btnEnvia" value="Enviar">`
}
const informacion=(legend,parametros)=>{
    for(let i=0;i<parametros.length;i++){        
        return`
        <fieldset>
        <legend>${legend}</legend>
        <label for="">${parametros[i]}</label>
        <input type="text" name="nombre" class="input">
        <label for="">${parametros[i+1]}</label>
        <input type="text" name="correo" class="input">
        </fieldset>` 
    }
}

   formulario.innerHTML+=informacion('Información Personal',par);
   formulario.innerHTML+=informacion('Información de Dirección',par1);
   formulario.innerHTML+=boton();
   