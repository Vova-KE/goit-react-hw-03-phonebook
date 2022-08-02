import React, { Component } from "react";
import { nanoid } from 'nanoid';
import styles from './styles.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '' })
        this.setState({ number: '' })
    };

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId} className={styles.label}>Name
                <input className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    id={this.nameInputId}
                />
            </label>
            <label htmlFor={this.numberInputId} className={styles.label}>Number
                <input className={styles.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                    id={this.numberInputId}
                />
            </label>
            <button type="submit" className={styles.button}>Add contact</button>
        </form>
        )
    }
};

export default ContactForm;