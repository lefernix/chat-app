import React from 'react';
import './Contact.css';
import Contact from './Contact';

const users =[
    {
        name:'Liam Powell',
        avatarURL:"https://randomuser.me/api/portraits/women/46.jpg",
        online:true
    },
    {
        name:'Cameron Morgan',
        avatarURL:'https://randomuser.me/api/portraits/women/53.jpg',
        online:true
    },
    {
        name:'Sofia Riley',
        avatarURL:'https://randomuser.me/api/portraits/women/29.jpg',
        online:false
    },
    {
        name:'Oscar Cox',
        avatarURL:'https://randomuser.me/api/portraits/men/63.jpg',
        online:false
    },
    {
        name:'Justin Simpson',
        avatarURL:'https://randomuser.me/api/portraits/men/51.jpg',
        online:true
    }
]

const ContactList = () => (
    <div>
      {users.map(profil => (
          <Contact avatarURL={profil.avatarURL} name={profil.name} online={profil.online} />
      ))}
    </div>
  );
export default ContactList;