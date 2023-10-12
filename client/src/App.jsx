import {Routes, Route} from "react-router-dom"
import './App.css'
import CardDetail from "./Componentes/cards/detail/carddetail"
import CardContainer from "./Componentes/cards/container/container"
import FormCrearDriver from "./Componentes/form/form"
import Filtercontainer from "./Componentes/containerfiltrado/containerfiltrado"
import Ingreso from "./Componentes/ingreso/ingreso"
import Nav from "./Componentes/nav/nav"
import Error from "./Componentes/error/error"
import  {useEffect} from "react"
import { setDrivers } from "./Redux/actions"
import { useDispatch } from "react-redux"

function  App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDrivers());
    },[dispatch]);

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element= {<Ingreso/>}/>
        <Route path="/drivers" element= {<CardContainer/>}/>
        <Route path="/create" element= {<FormCrearDriver/>}/>
        <Route path="/drivers/:id" element= {<CardDetail/>}/>
        <Route path="*" element= {<Error/>}/>
        <Route path="/filterdrivers" element= {<Filtercontainer/>}/>
      </Routes>  
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
