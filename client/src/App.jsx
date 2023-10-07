//import {Switch, Route} from "react-router-dom"
import './App.css'
//import CardDetail from "./Componentes/cards/detail/carddetail"
//import CardContainer from "./Componentes/cards/container/container"
import FormCrearDriver from "./Componentes/form/form"
//mport Ingreso from "./Componentes/ingreso/ingreso"
//import Nav from "./Componentes/nav/nav"
//import Error from "./Componentes/error/error"

function  App() {//
  

  return (
    <div>
      <FormCrearDriver/>   
{/*       <Switch>
        <Route path="/" component={Ingreso}/>
        <Route path="/createdriver" component={FormCrearDriver}/>
        <Route path="/home" component={CardContainer}/>
        <Route path="/:id" component={CardDetail}/>
        <Route path="*" component={Error}/>

      </Switch> */}
    </div>
  )
}

export default App
