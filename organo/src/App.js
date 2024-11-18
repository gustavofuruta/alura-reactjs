import {useState} from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'


function App() {

  const teams = [
    {id:1, name:'Programacao', primaryColor:'#57C278', secondaryColor:'#D9F7E9'},
    {id:2, name:'Devops', primaryColor:'#E06B69', secondaryColor:'#FDE7E8'},
    {id:3, name:'Frontend', primaryColor:'#82CFFA', secondaryColor:'#E8F8FF'},
    {id:4, name:'UX e Design', primaryColor:'#DB6EBF', secondaryColor:'#FAE9F5'},
    {id:5, name:'Mobile', primaryColor:'#FFBA05', secondaryColor:'#FFF5D9'},
    {id:6, name:'Inovacao e gestao', primaryColor:'#FF8A29', secondaryColor:'#FFEEDF'}
  ]

  const [workers, setWorkers] = useState([])
  
  return (
    <div className="App">
      <Banner/>
      <Form teams={teams} onWorkerRegister={newWorker => setWorkers([...workers, newWorker])}/>
  
      {teams.map(team => <Team 
        key={team.id}
        workers={workers.filter(worker => worker.team == team.id)}
        title={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        teamId={team.id}/>
      )}
    </div>
  );
}

export default App;
