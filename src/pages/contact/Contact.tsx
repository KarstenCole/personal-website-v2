import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";

import TextField from "./TextField.tsx";

const Contact = () => {
  return (
    <div className="mt-52 flex flex-col items-center">
      <Header textStyle="text-primary mb-20">Contact</Header>
      <div className="flex flex-col items-center">
        <div className="flex">
          <TextField>First:</TextField>
          <div id="spacer" className="w-20"></div>
          <TextField>Last:</TextField>
        </div>
        <TextField>Email:</TextField>
        <TextField>Subject:</TextField>
        <TextField body>Body:</TextField>
        <div className="w-full text-right z-[1]">
          <div className="rounded-lg mb-10">
            <button className="bg-light-background p-3 pt-2 pb-2 rounded-lg">
              <SubHeader textStyle="text-secondary text-4xl">Submit</SubHeader>
            </button>
          </div>
        </div>
        <div className="flex z-[1] w-64 justify-between m-8 mt-0">
          <img className="scale-75" src="src/assets/linkedin.png" alt="" />
          <img className="scale-75" src="src/assets/github.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
