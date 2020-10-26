import React, { Component } from 'react';
import './QuoteForm.css';

class QuoteForm extends Component {
  render() {
    return (
      <form className="QuoteForm" onSubmit={event => event.preventDefault()}>
        <label htmlFor="character">Character:</label>
        <input
          id="name"
          name="character"
          type="text"
          value="Homer"
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
