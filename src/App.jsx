// import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons";
import Button from "./components/Button";
import Card from "./components/Card";
function App() {
  return (
    <div className="bg-slate-100 text-slate-800  tracking-tight antialiased flex items-center justify-center min-h-screen ">
      <div className="max-w-md w-full flex gap-4 item-center w-full">
        <Card>
          <Card.Title>Hello React</Card.Title>
          <Card.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore explicabo et voluptas esse molestias nam similique deleniti cumque temporibus officiis sit labore culpa dolores a aspernatur odit, placeat eveniet corporis.
          </Card.Body>
          <Card.Footer>
            <Button className="bg-blue-600 hover:bg-blue-500 duration-100  ">Register</Button>
          </Card.Footer>
        </Card>
        
      </div>
    </div>
  );
}

export default App;
