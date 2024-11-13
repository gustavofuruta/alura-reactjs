import './Text.css'

const Text = (props) => {
    return (
        <div className='input-wrapper'>
            <label>{props.title}</label>
            <input name="text-input" id="text-input" className={props.classText} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default Text 
