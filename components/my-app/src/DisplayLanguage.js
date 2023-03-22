// Rewrite the DisplayLanguage component from Context 02
// to be a function component, and access the LanguageContext
// through the useContext hook.
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const translation = {
  en: {
    greetings: "Hello and welcome to Italy",
  },
  it: {
    greetings: "Ciao e benvenuto in Italia",
  },
};

function DisplayLanguage() {
  const language = useContext(LanguageContext);
 
  return (
    <div>
      <h1>{translation[language].greetings}</h1>
    </div>
  );
}

export default DisplayLanguage;
