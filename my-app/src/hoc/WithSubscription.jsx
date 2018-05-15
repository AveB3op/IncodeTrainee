import React from 'react';
import data from '../clients.json';

function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
       this.state = {
        data
      };
      
      this.addUser = this.addUser.bind(this);
    }
    addUser(userData){
      console.log(userData);
      this.setState({...this.state, data:[...this.state.data, userData]});
    }
    selectUser(id){

    }
    componentDidMount() {
      // ... that takes care of the subscription...
      // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      // this.setState({
      //   data: selectData(DataSource, this.props)
      // });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} onAddUser = {this.addUser} />;
    }
  };
}
export default withSubscription;
