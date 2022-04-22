import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Notiflix from "notiflix";
import { v4 as uuidv4 } from "uuid";
const LS_KEY = "reader_contact";
export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const cont = this.state.contacts;
    const index = localStorage.getItem(LS_KEY);
    if (index !== null) {
      JSON.parse(index).map((contact) =>
        cont.push({
          id: uuidv4(),
          name: contact.name,
          number: contact.number,
        })
      );

      this.setState({ contacts: cont });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log("next", prevState.name);
    //console.log("current", this.state.contacts);
    console.log(this.state.name);
    if (this.state.name !== prevState.name) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }
  handelChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handelChangeTel = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  saveChange = () => {
    const name = this.state.name;
    const number = this.state.number;
    let cont = this.state.contacts;
    if (name === undefined || number === undefined) {
      return Notiflix.Notify.warning("Write name or number");
    }
    for (let i = 0; i < cont.length; i++) {
      if (cont[i].name === name) {
        return Notiflix.Notify.info(`${name} is already is contacts`);
      }
    }
    cont.push({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    return this.setState({
      contacts: cont,
      name: "",
      number: "",
    });
  };
  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  filterName = (name) => {
    return name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
  };
  deleteContacts = (e) => {
    let deleteCont = [...this.state.contacts];

    for (let i = 0; i < this.state.contacts.length; i++) {
      if (e.target.id === this.state.contacts[i].id) {
        deleteCont.splice(i, 1);
      }
    }
    this.setState({ contacts: deleteCont });
  };
  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          handelChangeName={this.handelChangeName}
          handelChangeTel={this.handelChangeTel}
          name={contacts}
          tel={contacts}
          saveChange={this.saveChange}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handelFilter={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filterName={this.filterName}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
