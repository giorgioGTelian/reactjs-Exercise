import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');



  return (
    <div>
      <h3>Hi there!</h3>
    </div>
  );
}
