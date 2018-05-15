import React,{ Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { List,Image } from 'semantic-ui-react';
import AddUserForm from '../components/AddUserForm.jsx';

class AddUser extends Component {
  constructor(){
    super();
    if(!this.state){
    this.state = {data:{}}
    }
    this.addUser = this.addUser.bind(this);
  }

  addUser(e){
    let userData = this.formObject(e.target);
    // this.setState({...this.state, data:[...this.state.data,userData]});
    this.props.onAddUser(userData);
    this.props.history.push('/');
  }
  formObject(data){

    return{
      "general": {
        "firstName": data[0].value,
        "lastName": data[1].value,
        "avatar": data[2].value
      },
      "job": {
        "company": data[3].value,
        "title": data[4].value
      },
      "contact": {
        "email": data[5].value,
        "phone": data[6].value
      },
      "address": {
        "street":data[7].value,
        "city": data[8].value,
        "zipCode": data[9].value,
        "country": data[10].value
      }
    }
  }
  render() {
    console.log(this.props);
    return (
        <AddUserForm onAddUser = {this.addUser} />
      );
  }
}

export default AddUser;
