import {useState} from 'react'
import Text from '../Input/Text'
import Select from '../Input/Select'
import Button from '../Button'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [team, setTeam] = useState('')


    const clearForm = () => {
        setName('')
        setPosition('')
        setImageUrl('')
        setTeam('')
    }

    const onSave = (e) => {
        e.preventDefault();
        props.onWorkerRegister({
            name: name,
            position: position,
            imageUrl: imageUrl,
            team: team
        })
        clearForm();
    }

    return (
        <section className="form-wrapper">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Text 
                    required={true}
                    title={'Nome'}
                    placeholder={'Digite seu nome'}
                    classText={''}
                    value={name}
                    onUpdate={value => setName(value)}
                />

                <Text 
                    required={true} 
                    title={'Cargo'} 
                    placeholder={'Digite seu cargo'} 
                    classText={''}
                    value={position}
                    onUpdate={value => setPosition(value)} 
                />
                <Text 
                    title={'Imagem'} 
                    placeholder={'Informe o endereço da imagem'} 
                    classText={''} 
                    value={imageUrl}
                    onUpdate={value => setImageUrl(value)}
                />
                <Select 
                    required={true}
                    title={'Cargo'}
                    options={props.teams}
                    value={team}
                    onUpdate={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form