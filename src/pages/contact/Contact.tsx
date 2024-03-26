import Header from "../../components/ui/Header.tsx";
import TextField from "./TextField.tsx";

const Contact = () => {
  return (
    <div className="mt-52 flex flex-col items-center">
      <Header textStyle="text-primary mb-20">Contact</Header>
      <TextField>First:</TextField>
    </div>
  );
};

export default Contact;
