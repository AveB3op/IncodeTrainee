import React,{ Component } from 'react';
import Search from './Search.jsx';
import User from './User.jsx';
import { Segment, Button, List  } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SearchPane extends Component {
  constructor(){
    super();
    this.state = {userList:[]};
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount(){
    this.setState({...this.state,userList:this.props.userList});
  }
  onSearch(input) {
  if (input !== '') {
    this.setState({
      ...this.state,
      userList: this.props.userList.filter((el) => {
        return (el.general.firstName + el.general.lastName).toLowerCase().includes(input.toLowerCase());
      })
    });
  } else {
    this.setState({
      ...this.state,
      userList: this.props.userList
    });
  }
}
  render() {
    return (
      <Segment className="search-panel" inverted floated = 'left'>
        <Search onSearch ={this.onSearch}/>
        <List bulleted>
          {this.state.userList.map((el,i)=>{
            return <User key ={el.address.zipCode} id ={i} user={el.general} select = {this.props.select}/>
          })}
        </List>
        <Link to='/user/new'>
          <Button>
             Add new user
          </Button>
        </Link>
      </Segment>
    );
  }
}

export default SearchPane;