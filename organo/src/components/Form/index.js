import {useState} from 'react'
import Text from '../Input/Text'
import Select from '../Input/Select'
import Button from '../Button'
import './Form.css'

const Form = () => {

    const teams = [
        'Programacao',
        'Devops',
        'Backend',
        'Frontend',
        'UX e Design',
        'Mobile',
        'Inovacao e gestao'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [team, setTeam] = useState('')


    const onSave = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(position);
        console.log(imageUrl);
        console.log(team);
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
                    onUpdate={value => setImageUrl(value)} 
                />
                <Select 
                    required={true}
                    title={'Cargo'}
                    options={teams}
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