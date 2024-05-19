import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((item, index) => (
        <Card
          name={contacts[index].name}
          image={contacts[index].imgURL}
          tel={contacts[index].phone}
          email={contacts[index].email}
        />
      ))}
    </div>
  );
}

export default App;
