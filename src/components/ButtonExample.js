import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function ButtonExample() {
  return (
    <div>
      <ButtonToolbar>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-info">Warning</Button>
        <Button variant="outline-warning">Danger</Button>
        <Button variant="outline-danger">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </ButtonToolbar>
    </div>
  );
}

export default ButtonExample;
