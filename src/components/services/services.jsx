import React from 'react'
import './services.css'
import Title from '../title/title.jsx'
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
            <li className={selectedDescription === "description1" ? "active" : ""} onClick={() => handleClick("description1")}>Mesleki Denklik</li>
            <li className={selectedDescription === "description2" ? "active" : ""} onClick={() => handleClick("description2")}>Diploma Tanıtım İşlemi</li>
            <li className={selectedDescription === "description3" ? "active" : ""} onClick={() => handleClick("description3")}>Mesleki Eğitim</li>
            <li className={selectedDescription === "description4" ? "active" : ""} onClick={() => handleClick("description4")}>IHK FOSA / Denklik</li>
            <li className={selectedDescription === "description5" ? "active" : ""} onClick={() => handleClick("description5")}>İş Bulma ve Konaklama</li>
            <li className={selectedDescription === "description6" ? "active" : ""} onClick={() => handleClick("description6")}>Vize / Oturum</li>
            <li className={selectedDescription === "description7" ? "active" : ""} onClick={() => handleClick("description7")}>Almanca Kurslarımız</li>
            <li className={selectedDescription === "description8" ? "active" : ""} onClick={() => handleClick("description8")}>Almanya'da Üniversite</li>
            <li className={selectedDescription === "description9" ? "active" : ""} onClick={() => handleClick("description9")}>Almanya'da Dil Okulu</li>
            <li className={selectedDescription === "description10" ? "active" : ""} onClick={() => handleClick("description10")}>Erasmus Projeleri</li>
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
