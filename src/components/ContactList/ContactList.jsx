const ContactList = ({ contacts, filterName, deleteContacts }) => (
  <div>
    <ul>
      {contacts
        .filter((contact) => filterName(contact.name))
        .map((contact) => (
          <li key={contact.id}>
            {/* {console.log(index)} */}
            {contact.name}: {contact.number}
            <button id={contact.id} onClick={deleteContacts}>
              delete
            </button>
          </li>
        ))}
    </ul>
  </div>
);
export default ContactList;
