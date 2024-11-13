import Banner from './components/Banner'
import Text from './components/Input/Text'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Text title={'Nome'} placeholder={'Digite seu nome'} classText={''}/>
      <Text title={'Cargo'} placeholder={'Digite seu cargo'} classText={''}/>
      <Text title={'Imagem'} placeholder={'Informe o endereço da imagem'} classText={''}/>
    </div>
  );
}

export default App;
