import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";
import TextField from "./TextField.tsx";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

interface Props {
  emailSent: () => void;
  emailNotSent: (error: string) => void;
}

const Contact = ({ emailSent, emailNotSent }: Props) => {
  const form = useRef(null);
  const lastEmailSendTime: null | string =
    localStorage.getItem("lastEmailSendTime");
  const [lastEmailSent, setLastEmailSent] = useState(
    lastEmailSendTime === null ? null : JSON.parse(lastEmailSendTime)
  );

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      form.current != undefined &&
      (lastEmailSent === null ||
        lastEmailSent + 360 <= new Date().getTime() / 1000)
    ) {
      emailjs
        .sendForm("service_fnoggi9", "template_5lscoys", form.current, {
          publicKey: "PVvHA-LJLf8X7D4yK",
        })
        .then(
          () => {
            emailSent();
            localStorage.setItem(
              "lastEmailSendTime",
              JSON.stringify(new Date().getTime() / 1000)
            );
            setLastEmailSent(new Date().getTime() / 1000);
          },
          (error) => {
            emailNotSent(error.text);
          }
        );
    } else if (lastEmailSent + 360 > new Date().getTime() / 1000) {
      emailNotSent("You must wait 5 minutes after submitting a contact form.");
    }
  };

  return (
    <div className="mt-52 flex flex-col items-center m-20 mb-0">
      <Header textStyle="text-primary mb-20">Contact</Header>
      <div className="flex flex-col items-center">
        <form ref={form} onSubmit={sendEmail} className="z-0">
          <div className="flex max-[640px]:flex-col">
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
          <img
            draggable="false"
            className="scale-[.65]"
            src="assets/linkedin.png"
            alt=""
          />
          <img
            draggable="false"
            className="scale-[.65]"
            src="assets/github.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
