import './Button.css'

const Button = (props) => {
    return (
        <button className="button-wrapper">
            {props.children}
        </button>
    )
}

export default Button