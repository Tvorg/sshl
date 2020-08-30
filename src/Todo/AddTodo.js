import React, {useState} from "react";
import PropTypes from "prop-types"


function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

function submitHandler (event) {
        event.preventDefault()

    if(value.trim()){
        onCreate('Купить ' + value)
        setValue('')
    }
}

    return(
        <form style={{
            marginBottom: "1rem",
            margin: "0 auto",
            width: "600px",
            display: "flex",
            justifyContent: "space-between",
            height: "38px"

        }} onSubmit={submitHandler}>
            <input value={value} onChange={event =>
                setValue(event.target.value)}
                   style={{
                       border: "1px solid #ccc",
                       borderRadius: "4px",
                       width: "512px"

                   }}/>
            <button type={"submit"}
                style={{
                    background: "grey",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    color: "white",
                    width: "78px"
                }}>
                Add item
            </button>
        </form>
    )

}
AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired

}
export default AddTodo