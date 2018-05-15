import React, { Component } from 'react';
import './App.css';
// import UserInfo from './UserInfo.jsx';
import SearchPane from '../components/SearchPane.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import AddUser from './AddUser.jsx';
// import data from '../clients.json';
import { Container, Button} from 'semantic-ui-react';
import { Route,Switch,Redirect} from 'react-router-dom';
import withSubscription from '../hoc/WithSubscription.jsx';
class App extends Component {
  constructor(){
    super();
    // // this.state = {user:{},data:data};
    // this.userSelect = this.userSelect.bind(this);
    

  }

  // userSelect(id){
  //   this.setState({...this.state, user : this.state.data[id]});
  // }

  render() {
    // console.log(data);
    return (
      <Container text className="App">
        {/* <Switch>
          <Route exact path='/' component = {()=>{return <SearchPane userList = {this.state.data} select = {this.userSelect}/>}}/>
          <Route path='/user/id' component = {()=>{return <InfoPanel currentUser = {this.state.user}/>}}/>
          <Route exact path='/user/new' component = {AddUser}/>
        </Switch>
         */}
        <Switch>
          <Route exact path='/' component = {withSubscription(SearchPane)}/>
          <Route path='/user/id' component = {withSubscription(InfoPanel)}/>
          <Route exact path='/user/new' component = {withSubscription(AddUser)}/>
        </Switch>

      </Container>
    );
  }
}

export default App;
