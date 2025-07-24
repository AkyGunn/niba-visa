import React from 'react'
import './services.css'
import Title from '../title/title.jsx'
import { useEffect } from 'react';
import Description1 from './service-descriptions/description1.jsx'
import Description2 from './service-descriptions/description2.jsx'
import Description3 from './service-descriptions/description3.jsx'
import Description4 from './service-descriptions/description4.jsx'
import Description5 from './service-descriptions/description5.jsx'
import Description6 from './service-descriptions/description6.jsx'
import Description7 from './service-descriptions/description7.jsx'
import Description8 from './service-descriptions/description8.jsx'
import Description9 from './service-descriptions/description9.jsx'
import Description10 from './service-descriptions/description10.jsx'

const Services = () => {

  const colorPaltette = [
    '#be746e',
    '#e1ca73',
    '#72d0b5',
    '#53d5fb',
  ]

  const components = {
    description1: <Description1 />,
    description2: <Description2 />,
    description3: <Description3 />,
    description4: <Description4 />,
    description5: <Description5 />,
    description6: <Description6 />,
    description7: <Description7 />,
    description8: <Description8 />,
    description9: <Description9 />,
    description10: <Description10 />,
  };

  // State'i bir key olarak tut
  const [selectedDescription, setSelectedDescription] = React.useState("description1");

  const handleClick = (key) => {
    setSelectedDescription(key);
  };

  return (
    <div>
      <Title text="Hizmetlerimiz" />
      <div className="services-container">
        <div className="services-list">
          <ul>
  {[
    "Mesleki Denklik",
    "Diploma Tanıtım İşlemi",
    "Mesleki Eğitim",
    "IHK FOSA / Denklik",
    "İş Bulma ve Konaklama",
    "Vize / Oturum",
    "Almanca Kurslarımız",
    "Almanya'da Üniversite",
    "Almanya'da Dil Okulu",
    "Erasmus Projeleri",
  ].map((text, index) => (
    <li
      key={index}
      className={selectedDescription === `description${index + 1}` ? "active" : ""}
      onClick={() => handleClick(`description${index + 1}`)}
      style={{ backgroundColor: colorPaltette[index % colorPaltette.length] }}
    >
      {text}
    </li>
  ))}
</ul>
        </div>
        <div className="services-description">
          {/* Seçilen bileşeni göster */}
          {components[selectedDescription]}
        </div>
      </div>
    </div>
  );
};

export default Services;
