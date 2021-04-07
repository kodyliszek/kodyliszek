import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dropdown } from 'react-bootstrap';


const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSelect = eventKey => {
    i18n.changeLanguage(eventKey);
    values.language = eventKey;
    console.log(values);

  }

  return(
    <Dropdown id="language" onSelect={handleSelect}>
    <Dropdown.Toggle value={values.language} variant="white" id="dropdown-basic">
        {values.language}
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item eventKey="en">en</Dropdown.Item>
        <Dropdown.Item eventKey="fr">fr</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageMenu
