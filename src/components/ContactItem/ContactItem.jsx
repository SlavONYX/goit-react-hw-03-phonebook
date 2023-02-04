import PropTypes from 'prop-types';

export function ContactItem({ name, phone, id, onDeleteContact }) {
  return (
    <li key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
};






// const ContactItem = ({ name, phone, onRemove }) => {
//     return (
//         <li className={css.item}>
//             <span className={css.span}>
//                 {name}:{phone}
//             </span>
//             <button className="btn" onClick={onRemove}>
//                 Delete
//             </button>
//         </li>
//     );
// };