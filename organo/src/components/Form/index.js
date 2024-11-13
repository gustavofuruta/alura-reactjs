import Text from '../Input/Text'
import './Form.css'
const Form = () => {
    return (
        <section className="form-wrapper">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Text title={'Nome'} placeholder={'Digite seu nome'} classText={''} />
                <Text title={'Cargo'} placeholder={'Digite seu cargo'} classText={''} />
                <Text title={'Imagem'} placeholder={'Informe o endereço da imagem'} classText={''} />
            </form>
        </section>
    )
}

export default Form