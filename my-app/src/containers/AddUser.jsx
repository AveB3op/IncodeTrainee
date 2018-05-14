import React,{ Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { List,Image } from 'semantic-ui-react';
import AddUserForm from '../components/AddUserForm.jsx';

class AddUser extends Component {
  render() {
    return (
    <div>
      <AddUserForm onAddUser = {this.props.onAddUser}/>
    </div>
    );
  }
}

export default AddUser;
