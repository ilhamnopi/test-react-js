import PlaceContentCenter from "./PlaceContentCenter";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import Label from "./Label";

const Useref = () => {
  const inputRef = useRef(null);

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>useRef Hooks</Card.Title>
        <Card.Body>
          <Label>Email</Label>
          <Input type="email" isFocused={true} />
          <Label>Password</Label>
          <Input type="password" />
        </Card.Body>
        <Card.Footer>
          <Button className={"w-full bg-blue-700 hover:bg-blue-600"}>Hitme</Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
};

export default Useref;
