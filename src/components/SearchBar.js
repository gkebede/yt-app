import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component {
    state = {term:''}
    onFormSubmit = (event)=>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
    }
    render(){
    console.log(this.state);

      return (
          
        <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="filed">
            <label htmlFor="search">Search for a Video </label>
            <input 
            value={this.state.term}
           onChange={e=>this.setState({term:e.target.value})}
            name="search"
            type="text"
            placeholder="Enter search"/>
        </div>
        </form> 
       </div>
      )

   
    }
}

export default SearchBar;