import React from 'react';
import Store from './State';
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
         this.state = {
        data: Store.getData()
      };

      // this.addUser = this.addUser.bind(this);
    }
    addUser(userData){
      console.log(userData);
      // this.setState({...this.state, data:[...this.state.data, userData]});
      console.log(Store.getData());
      Store.addUser(userData);
      console.log(Store.getData());
    }
    getUser(id){
      return Store.getUser(id);
    }
    deleteUser(id){
      Store.deleteUser(id);
    }
    editUser(id,newData){
      Store.editUser(id,newData);
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} onAddUser = {this.addUser} displayUser = {this.getUser} deleteUser = {this.deleteUser} editUser= {this.editUser}/>;
    }
  };
}
export default withSubscription;
