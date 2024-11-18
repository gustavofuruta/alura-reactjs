import './Select.css'

const Select = (props) => {
    return (
        <div className='select-wrapper'>
            <label>{props.title}</label>
            <select onChange={e => props.onUpdate(e.target.value)} required={props.required} value={props.value}>
                <option value='default'>Selecione uma opcao...</option>
                {props.options.map((option) => <option key={option}>{option}</option>)}
            </select>
            
        </div>
    )

}

export default Select;