import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillBell } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const InputForm = () => {
  return (
    <>
      <Form inline>
        <InputGroup className="ml-lg-5">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="search for artworks, artists and many more..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <AiFillBell />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

export default InputForm;
