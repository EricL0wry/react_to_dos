import React from 'react';

class AddToDo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  };

  handleChange(event){
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Form Values', this.state);
  }

  reset(){
    this.setState({
      title: '',
      description: ''
    })
  }

  render(){
    const {title, description} = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Add To Do</h1>
        <div>
          <label htmlFor="title">Title: </label>
          <input value={title} name="title" onChange={this.handleChange} type="text" id="title"/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input value={description} name="description" onChange={this.handleChange} type="text" id="description" />
        </div>
        <div>
          <button>Add To Do</button>
          <button type="button" onClick={this.reset}>Reset</button>
        </div>
      </form>
    )
  }
}
export default AddToDo;
