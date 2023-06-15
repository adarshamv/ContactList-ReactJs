import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts";
import Avatar from "./Avatar.jsx";

function App(){
  return(
    <div>
    <h1 className="heading">MyContact</h1>
    <Avatar 
    img="https://th.bing.com/th?id=OIP.51JUhK_39dVGFXUCAouzmwHaK7&w=205&h=303&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"/>
    <h3>Jhon Smith</h3>

    <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
    />
    <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
    />
    <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
    />
    <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
    />
</div>
  );
}

export default App;