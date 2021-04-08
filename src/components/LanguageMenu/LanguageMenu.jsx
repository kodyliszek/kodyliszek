import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const [values] = useState({
    language: 'en',
  });

  const handleSelect = (eventKey) => {
    i18n.changeLanguage(eventKey);
    values.language = eventKey;
  };

  return (
    <section id="language">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle value={values.language} variant="white" id="dropdown-basic">
          {values.language}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="en">en</Dropdown.Item>
          <Dropdown.Item eventKey="pl">pl</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default LanguageMenu;
