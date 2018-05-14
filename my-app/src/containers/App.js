import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import UserInfo from './UserInfo.jsx';
import SearchPane from '../components/SearchPane.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import AddUser from './AddUser.jsx';
import data from '../clients.json';
import { Container, Button} from 'semantic-ui-react';
import { Route,Switch,Redirect} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state = {user:{},data:data,navigate:null};
    this.userSelect = this.userSelect.bind(this);
    this.addUser = this.addUser.bind(this);

  }
  userSelect(id){
    this.setState({...this.state, user : this.state.data[id]});
  }
  addUser(userData){
    console.log(userData)
    this.setState({...this.state, data:[...this.state.data,userData], navigate:'/'} );
  }
  render() {
    // console.log(data);
    return (
      <Container text className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {this.state.navigate ? <Redirect to={this.state.navigate} />:''}
        <Switch>
          <Route exact path='/' component = {()=>{return <SearchPane userList = {this.state.data} select = {this.userSelect}/>}}/>
          {/* <SearchPane userList = {data} select = {this.userSelect}/> */}
          <Route path='/user/id' component = {()=>{return <InfoPanel currentUser = {this.state.user}/>}}/>
          {/* <InfoPanel currentUser = {this.state.user}/> */}
          <Route exact path='/user/new' component = {()=>{return <AddUser onAddUser = {this.addUser}/> }} />
        </Switch>


      </Container>
    );
  }
}

export default App;
