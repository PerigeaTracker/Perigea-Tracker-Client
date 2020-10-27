import React, {Component} from "react"
import LoginPage from "./Components/LoginPage"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import AuthPerigea from "./Components/AuthPerigea"
import AdminPage from "./Components/AdminPage"

import NavMenuPerigea from "./Components/NavMenuPerigea"
import Card from "./Components/Card"
import Dashboard from "./Components/LayoutTest"
import LayoutTest from "./Components/LayoutTest"
import DipendenteViewer from "./Components/get/DipendenteViewer"
import ClientiViewer from "./Components/get/ClientiViewer"
import ConsulenteViewer from "./Components/get/ConsulenteViewer"
import FornitoreViewer from "./Components/get/FornitoreViewer"
import CommessaViewer from "./Components/get/CommessaViewer"
import UtenteViewer from "./Components/get/UtenteViewer"
import ContattoViewer from "./Components/get/ContattoViewre"
import InsTestCli from "./Components/post/InsTestCli"
import InsTestDip from "./Components/post/InsTestDip"
import InsTestCom from "./Components/post/InsTestCom"
import InsTestCons from "./Components/post/InsTestCons"
import InsTestCont from "./Components/post/InsTestCont"
import InsTestFor from "./Components/post/InsTestFor"
import InsTestUser from "./Components/post/InsTestUser"
import UpdFornitore from "./Components/Update/UpdFornitore"
import UpdDipendente from "./Components/Update/UpdDipendente"
import UpdCliente from "./Components/Update/UpdCliente"
import UpdConsulente from "./Components/Update/UpdConsulente"
import UpdCommessa from "./Components/Update/UpdCommessa"
import UpdContatto from "./Components/Update/UpdContatto"
import UpdUtente from "./Components/Update/UpdUtente"
import DeleteDipendente from "./Components/delete/DeleteDipendente"
import DeleteConsulente from "./Components/delete/DeleteConsulente";
import DeleteCliente from "./Components/delete/DeleteCliente"
import DeleteCommessa from "./Components/delete/DeleteCommessa"
import DeleteFornitore from "./Components/delete/DeleteFornitore"
import DeleteUtente from "./Components/delete/DeleteUtente"
import DeleteContatto from "./Components/delete/DeleteContatto"
import CardContainer from "./Components/CardCointeiner"
import ArrayCard from "./Components/ArrayCard"
import TestGetFornitoreCard from "./Components/TestGetFornitoreCard"
import TestBarraRicerca from "./Components/TestBarraRicerca";
import DipendenteCard from "./Components/Dipendente/DipendenteCard";
import CardsListDipendenti from "./Components/Dipendente/CardsListDipendenti";
import LoginTracker from "./Components/LoginTracker";
import FornitoreCard from "./Components/Fornitore/FornitoreCard";
import CardsListFornitore from "./Components/Fornitore/CardsListFornitore";
import ClienteCard from "./Components/Cliente/ClienteCard";
import CardsListCliente from "./Components/Cliente/CardsListCliente";
import ConsulenteCard from "./Components/Consulente/ConsulenteCard";
import CardsListConsulente from "./Components/Consulente/CardsListConsulente";
import UtenteCard from "./Components/Utente/UtenteCard";
import CardsListUtente from "./Components/Utente/CardsListUtente";



class AppPerigea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tokenFound: false
        }
    }
    
    getData(){
          console.log('Our data is fetched');
          this.setState({tokenFound: true})  
      }

    componentDidMount(){
        this.getData();
      }

    render() {
        return (
            <Router>
                <Switch>
                        <Route path="/" exact component={LoginPage}/>
                        <Route path="/dashboard" exact component={LayoutTest}/>
                        <Route path="/instest" exact component={InsTestCli}/>
                        <Route path="/instestdip" exact component={InsTestDip}/>
                        <Route path="/instestcom" exact component={InsTestCom}/>
                        <Route path="/instestcons" exact component={InsTestCons}/>
                        <Route path="/instestcont" exact component={InsTestCont}/>
                        <Route path="/instestuser" exact component={InsTestUser}/>
                        <Route path="/instestfor" exact component={InsTestFor}/>
                        <Route path="/dipendenteviewer" exact component={DipendenteViewer}/>
                        <Route path ="/commessaviewer" exact component={CommessaViewer}/>
                        <Route path ="/utenteviewer" exact component ={UtenteViewer}/>
                        <Route path="/fornitoreviewer" exact component={FornitoreViewer}/>
                        <Route path="/consulenteviewer" exact component={ConsulenteViewer}/>
                        <Route path ="/contattoviewer" exact component ={ContattoViewer}/>
                        <Route path="/clientiviewer" exact component={ClientiViewer}/>
                        <Route path ="/updcliente" exact component={UpdCliente}/>
                        <Route path ="/upddipendente" exact component={UpdDipendente}/>
                        <Route path="/updfornitore" exact component={UpdFornitore}/>
                        <Route path ="/updconsulente" exact component={UpdConsulente}/>
                        <Route path ="/updcommessa" exact component={UpdCommessa}/>
                        <Route path ="/updcontatto" exact component ={UpdContatto}/>
                        <Route path ="/updutente" exact component={UpdUtente}/>
                        <Route path="/deletedipendente" exact component={DeleteDipendente}/>
                        <Route path="/deleteconsulente" exact component ={DeleteConsulente}/>
                        <Route path="/deletecliente" exact component = {DeleteCliente}/>
                        <Route path="/deletecommessa" exact component = {DeleteCommessa}/>
                        <Route path="/deletefornitore" exact component = {DeleteFornitore}/>
                        <Route path="/deleteutente" exact component={DeleteUtente}/>
                        <Route path="/deletecontatto" exact component={DeleteContatto}/>
                        <Route path="/cardcontainer" exact component={CardContainer}/>
                        <Route path="/arraycard" exact component={ArrayCard}/>
                        <Route path="/testgetfornitorecard" exact component ={TestGetFornitoreCard}/>
                        <Route path="/testbarraricerca" exact component={TestBarraRicerca}/>
                        <Route path  ="/dipendentecard" exact component ={DipendenteCard}/>
                        <Route path = "/cardslistdipendenti" exact component ={CardsListDipendenti}/>
                        <Route path ="/fornitorecard" exact component = {FornitoreCard}/>
                        <Route path = "/cardslistfornitore" exact component = {CardsListFornitore}/>
                        <Route path = "/logintracker" exact component = {LoginTracker}/>
                        <Route path = "/clientecard" exact component = {ClienteCard}/>
                        <Route path = "/cardslistcliente" exact component = {CardsListCliente}/>
                        <Route path = "/consulentecard" exact component = {ConsulenteCard}/>
                        <Route path = "/cardslistconsulente" exact component = {CardsListConsulente}/>
                        <Route path = "/utentecard" exact component = {UtenteCard}/>
                        <Route path = "/cardslistutente" exact component = {CardsListUtente}/>
                      
                </Switch>
                
            </Router>
        )
    }
    
}
//render={ (this.state.tokenFound ? (<AuthPerigea/>) : (<Redirect to="/login"/>)) }
//<Route path="/dashboard" exact component={NavBarPerigea}/>
//<Route path="/dashboard" exact component={NavMenuPerigea}/>
//<Route path="/test" exact component={NavTest}/>
export default AppPerigea