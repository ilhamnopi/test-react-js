import { IconBrandGithub } from "@tabler/icons";
import Label from "./Label";
import Input from "./input";
import Button from "./Button";
import Card from "./Card";
import PlaceContentCenter from "./PlaceContentCenter";

import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <PlaceContentCenter>
      <form action="" onSubmit={submit}>
        <Card>
          <Card.Title>Sign up for new account!</Card.Title>
          <Card.Body>
            <div className="mb-5 border border-slate-400 rounded-lg  p-4">
              <p>Name : {form.name || "-------"}</p>
              <p>Email : {form.email || "-------"}</p>
            </div>
            <div className="mb-6">
              <Label htmlFor="name" value={"Name"}>
                Name
              </Label>
              <Input id={"name"} name={"name"} value={form.name} onChange={onChange} />
            </div>
            <div className="mb-6">
              <Label htmlFor="email" value={"Email"}>
                Email
              </Label>
              <Input type="email" id={"email"} name={"email"} value={form.email} onChange={onChange} />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button>
              <IconBrandGithub></IconBrandGithub> Register
            </Button>
          </Card.Footer>
        </Card>
      </form>
    </PlaceContentCenter>
  );
}
