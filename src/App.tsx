import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import Alert from "./components/Alert";
import Button from "./components/Buttons";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Message />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Uga buga alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </div>
  );
}

export default App;
