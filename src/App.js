import React from 'react';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList.js';



function App() {
  return (
    <div className="App">
      <Contact name="Bob Harcker" avatarURL="https://randomuser.me/api/portraits/men/56.jpg" online/>
      <Contact name="Thierry Durant" avatarURL="https://randomuser.me/api/portraits/men/17.jpg" />
      <Contact name="Ashley Frey" avatarURL="https://randomuser.me/api/portraits/women/65.jpg" online/>
      <ContactList/>
    </div>
  );
}

export default App;
