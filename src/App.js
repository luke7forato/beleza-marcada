import './App.css';
//Components
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//pages
import Home from './Components/Pages/Home/Home';
import Buscar from './Components/Pages/Buscar/Buscar';
import CadSalao from './Components/Pages/Cadastro/CadSalao';
import CadUser from './Components/Pages/Cadastro/CadUser';
import LogSalao from './Components/Pages/Acesso/LogSalao';
import LogUser from './Components/Pages/Acesso/LogUser';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/buscar' exact component={Buscar}/>
        <Route path='/cadsalao' exact component={CadSalao}/>
        <Route path='/caduser' exact component={CadUser}/>
        <Route path='/logsalao' exact component={LogSalao}/>
        <Route path='/loguser' exact component={LogUser}/>

      </Switch>
    </Router>
  );
}

export default App;
