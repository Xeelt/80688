import './MiFieldSet.css'

function MiFieldSet(params){
    const {p1, id1, p2, id2, p3} = params
    return(
    <>
     <fieldset>
        <legend>{p1}</legend>
        <label htmlFor={id1}>{p2}</label>
        <input type="text" id="${id1}input"></input>
        <label htmlFor={id2}>{p3}</label>
        <input type="text" id ={ids2}/>
        </fieldset>
        </>
        )
}

export default MiFieldSet