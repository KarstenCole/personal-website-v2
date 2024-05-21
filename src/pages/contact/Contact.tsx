import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";
import TextField from "./TextField.tsx";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current != undefined) {
      emailjs
        .sendForm("service_fnoggi9", "template_5lscoys", form.current, {
          publicKey: "PVvHA-LJLf8X7D4yK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="mt-52 flex flex-col items-center">
      <Header textStyle="text-primary mb-20">Contact</Header>
      <div className="flex flex-col items-center">
        <form ref={form} onSubmit={sendEmail} className="z-0">
          <div className="flex">
            <TextField name="first_name">First:</TextField>
            <div id="spacer" className="w-10"></div>
            <TextField name="last_name">Last:</TextField>
          </div>
          <TextField name="email">Email:</TextField>
          <TextField name="subject">Subject:</TextField>
          <TextField body>Body:</TextField>

          <div className="w-full text-right z-[1]">
            <div className="rounded-lg mb-10">
              <button
                type="submit"
                className="bg-light-background pr-2 pl-2 rounded-lg"
              >
                <SubHeader textStyle="text-secondary !text-[30px]">
                  Submit
                </SubHeader>
              </button>
            </div>
          </div>
        </form>
        <div className="flex z-[1] w-64 justify-between m-8 mt-0">
          <img className="scale-[.65]" src="src/assets/linkedin.png" alt="" />
          <img className="scale-[.65]" src="src/assets/github.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
