import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
  }

  // handle change for input
  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  // handle submit for form 
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
  };
  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleChanges}
          value={this.state.item}
          name='item'
          
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Form;  