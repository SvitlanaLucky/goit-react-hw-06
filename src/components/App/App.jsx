import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
    </div>
  );
};

export default App;
