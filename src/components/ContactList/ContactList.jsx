import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></Contact>
        );
      })}
    </ul>
  );
}
