import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../i18n/config';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Kodyliszek'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Kodyliszek Lair'} />
      </Helmet>
      <App />
    </>
  );
};
