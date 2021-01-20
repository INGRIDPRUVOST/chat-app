import React from 'react';
import './Contact.css';

function Contact () {
    return (

        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/women/31.jpg"
            alt = "contact image" className="avatar"/>
      
        <section>
            <div>
                <name className="name">Carrie Fox</name>
            </div>

            <div className="status">
                <span className ="status-online"></span>
                <status className ="status-text">Online</status>
            </div>

        </section>
        </div>
  );
}


export default Contact




