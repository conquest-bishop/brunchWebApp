import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";

function Home() {
  const [name, setName] = useState("");

  return (
    <div className="home">
      {/* <div className="home-header">
        <p>Brunch App</p>
        <h1>BrunchUp</h1>
      </div> */}
      <div>
        <Card
          bgColor="#d66101"
          //   overlay={true}
          children="Bruch Your Way to Success"
          button={{
            onClick: () => alert("Card Button Clicked!"),
            title: "Learn More",
            disabled: false,
          }}
        />
      </div>
      <div className="welcome-section">
        <h1>Welcome to the Brunch App</h1>
        <p>Click the button below to get started!</p>
        <Button onClick={() => alert("Button clicked!")} title="Get Started" />
      </div>
      <TextInput
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <TextInput
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <TextInput
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <TextInput
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Home;
