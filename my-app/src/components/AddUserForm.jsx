import React, {Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';
import {Redirect,Link} from 'react-router-dom';
// import { List,Image } from 'semantic-ui-react';

class AddUser extends Component {

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


    return (
      <div>
      <Form onSubmit={(e)=>{
        e.preventDefault();
        this.props.onAddUser(this.formObject(e.target));
        }}>

        <Form.Field>
          <label>First Name
            <input placeholder='First Name' name='fname' required/>
          </label>
          <label>Last Name
            <input placeholder='Last Name' name='lname'/>
          </label>
          <label>Avatar link
            <input placeholder='link' name='avatar'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>Company name
            <input placeholder='Company name'/>
          </label>
          <label>Job title
            <input placeholder='Job title'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>E-mail
            <input type='email' placeholder='E-mail'/>
          </label>
          <label>Phone number
            <input type='tel' placeholder='Phone number'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>Street
            <input placeholder='Street'/>
          </label>
          <label>City
            <input placeholder='City'/>
          </label>
          <label>Zip code
            <input placeholder='zipCode' required/>
          </label>
          <label>Country
            <input placeholder='Country'/>
          </label>
        </Form.Field>

        <Form.Field>
          <Button type='submit'>Accept</Button>
          <Link to='/'>
            <Button type='reset'>Cancel</Button>
          </Link>
        </Form.Field>
      </Form>
    </div>);
  }
}

export default AddUser;
