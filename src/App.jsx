import css from "./App.module.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const defaultContactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsVisible = () => {
  const savedContactsList = localStorage.getItem("contacts-list");
  return savedContactsList !== null
    ? JSON.parse(savedContactsList)
    : defaultContactsList;
};

function App() {
  const [contacts, setContacts] = useState(contactsVisible);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts-list", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const addContacts = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContacts} />
        <SearchBox value={filterName} onFilter={setFilterName} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
