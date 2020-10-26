import React, { Component } from 'react';
import './QuoteForm.css';

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {character: 'Homer Simpson',};
  }
  render() {
    return (
      <form className="QuoteForm" onSubmit={event => event.preventDefault()}>
        <label htmlFor="character">Character:</label>
        <input 
          id="name" 
          name="character"
          type="text"
          value={this.state.character}
          onChange={event => {
            const input = event.target;
            console.log('NAME:', input.name, 'VALUE:', input.value);
          }}
        />
      </form>
    );
  }
}

export default QuoteForm;
