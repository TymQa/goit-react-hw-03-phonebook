import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!this.props.addNewContacts(name, number)) {
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handlerFormSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            onChange={this.handlerInputChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-ЯєіїЄІЇ]+(([' \-][a-zA-Zа-яА-ЯєіїЄІЇ ])?[a-zA-Zа-яА-ЯєіїЄІЇ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            onChange={this.handlerInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="093-***-**-**"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addNewContacts: PropTypes.func.isRequired,
};

export default ContactForm;