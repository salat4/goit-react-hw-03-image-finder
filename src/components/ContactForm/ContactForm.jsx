const ContactForm = ({
  handelChangeTel,
  handelChangeName,
  name,
  saveChange,
  tel,
}) => (
  <form>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name.name}
        onChange={handelChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label>
      Tel
      <input
        type="tel"
        name="number"
        value={tel.number}
        onChange={handelChangeTel}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button type="button" onClick={saveChange}>
      Add contact
    </button>
  </form>
);
export default ContactForm;
