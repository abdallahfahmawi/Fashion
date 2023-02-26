

import './input.scss'

const Input = (props) => {

    return (
        <input  className={`input ${props.className}`}  onChange={props.onChange} vlaue={props.value} placeholder={props.placeholder}/>
    )
}

export default Input