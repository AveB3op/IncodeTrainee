import React,{ Component } from 'react';
import { List,Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class User extends Component {
  render() {
    return (
      <Link to={'/user/id?'+this.props.id}>
      <List.Item onClick = {()=>{this.props.select(this.props.id)}}>
        <Image height='30px' avatar src = {this.props.user.avatar+''} alt='ava'/>
        {' '+this.props.user.firstName +' '+ this.props.user.lastName }
      </List.Item>
    </Link>
    );
  }
}

export default User;
