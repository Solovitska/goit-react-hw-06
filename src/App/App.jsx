import "./App.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/ContactList/ContactList";
import ContactList from "../components/SearchBox/SearchBox";

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;