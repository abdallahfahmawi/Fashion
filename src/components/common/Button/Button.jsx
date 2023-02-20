
import './Button.scss'




const Styles = [
    "btn-black",
    "btn-transparent"
]

const Button = (props) => {

const checkButtonStyle = Styles.includes(props.buttonStyle) ? props.buttonStyle : ""
    

    return (
        <button className={`btns ${props.className} ${checkButtonStyle}`} onClick={props.onClick} type={props.type} >
            {props.children}
        </button>
    )
}

export default Button