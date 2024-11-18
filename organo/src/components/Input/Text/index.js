import './Text.css'

const Text = (props) => {
    return (
        <div className='input-wrapper'>
            <label>{props.title}</label>
            <input value={props.value} onChange={e => props.onUpdate(e.target.value)} required={props.required} name="text-input" id="text-input" className={props.classText} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default Text 
