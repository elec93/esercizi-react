import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

function App (){
const [language, setLanguage] = useState('en')

  const handleChangeLang = (event) => {
    setLanguage(event.target.value);
  };
    return (
      <div>
        <select onChange={handleChangeLang} value={language}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
}

export default App;
