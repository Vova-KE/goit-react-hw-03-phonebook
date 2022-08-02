import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContactList = ({ foundContacts, onDeleteContact }) => (
    <ul>
        {foundContacts.map((contact) => (
            <li className={styles.list__item} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                    type="button"
                    className={styles.list__button}
                    onClick={() => onDeleteContact(contact.id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    foundContacts: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;