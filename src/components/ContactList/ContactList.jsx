import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export function ContactList({ contacts, onDeleteContact }) {
  return contacts.length ? (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem
          name={name}
          phone={phone}
          id={id}
          onDeleteContact={onDeleteContact}
          key={id}
        />
      ))}
    </ul>
  ) : (
    <p>There is no contact yet</p>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};