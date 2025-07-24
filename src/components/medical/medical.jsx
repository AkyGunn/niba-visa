import React, { useState } from 'react'
import './medical.css'
import Title from '../title/title.jsx'

// === BİLEŞENLERİ İMPORT ET ===
// lisans
import Hemsirelik from './lisans/hemsirelik.jsx'
import Biyoloji from './lisans/biyoloji.jsx'
import CocukGelisimi from './lisans/cocuk_gelisimi.jsx'
import Diyetisyenlik from './lisans/diyetisyenlik.jsx'
import FizyoterapiLisans from './lisans/fizyoterapi_lisans.jsx'
import Ebelik from './lisans/ebelik.jsx'
import Eczacilik from './lisans/eczacilik.jsx'
import Ergoterapi from './lisans/ergoterapi.jsx'
import Veterinerlik from './lisans/veterinerlik.jsx'

// onlisans
import Ameliyathane from './önlisans/ameliyathane.jsx'
import Anestezi from './önlisans/anestezi.jsx'
import DisSagligi from './önlisans/dis_sagligi.jsx'
import CocukGelisimiOnlisans from './önlisans/cocuk_gelisimi_onlisans.jsx'
import EczacilikTeknikerligi from './önlisans/eczacilik_teknikerligi.jsx'
import NukleerTip from './önlisans/nukleer_tip.jsx'
import Paramedik from './önlisans/paramedik.jsx'
import FizyoterapiOnlisans from './önlisans/fizyoterapi_onlisans.jsx'
import Radyoloji from './önlisans/radyoloji.jsx'
import Radyoterapi from './önlisans/radyoterapi.jsx'
import Lab from './önlisans/lab.jsx'
import Sekreterlik from './önlisans/sekreterlik.jsx'
import YasliBakimi from './önlisans/yasli_bakimi.jsx'

// lise
import Att from './lise/att.jsx'
import Hemsire2016 from './lise/hemsire_2016.jsx'
import HemsireYardimcisi from './lise/hemsire_yardimcisi.jsx'
import HastaYasliBakimi from './lise/hasta_yasli_bakimi.jsx'

// doktor
import UzmanDoktorlar from './doktor/uzman_doktorlar.jsx'

// === COMPONENT MAP ===
const componentMap = {
  // lisans
  hemsirelik: Hemsirelik,
  biyoloji: Biyoloji,
  cocuk_gelisimi: CocukGelisimi,
  diyetisyenlik: Diyetisyenlik,
  fizyoterapi_lisans: FizyoterapiLisans,
  ebelik: Ebelik,
  eczacilik: Eczacilik,
  ergoterapi: Ergoterapi,
  veterinerlik: Veterinerlik,

  // önlisans
  ameliyathane: Ameliyathane,
  anestezi: Anestezi,
  dis_sagligi: DisSagligi,
  cocuk_gelisimi_onlisans: CocukGelisimiOnlisans,
  eczacilik_teknikerligi: EczacilikTeknikerligi,
  nukleer_tip: NukleerTip,
  paramedik: Paramedik,
  fizyoterapi_onlisans: FizyoterapiOnlisans,
  radyoloji: Radyoloji,
  radyoterapi: Radyoterapi,
  lab: Lab,
  sekreterlik: Sekreterlik,
  yasli_bakimi: YasliBakimi,

  // lise
  att: Att,
  hemsire_2016: Hemsire2016,
  hemsire_yardimcisi: HemsireYardimcisi,
  hasta_yasli_bakimi: HastaYasliBakimi,

  // doktor
  uzman_doktorlar: UzmanDoktorlar,
}

const Medical = () => {
  const [selected, setSelected] = useState({
    lisans: "",
    onlisans: "",
    lise: "",
    doktor: "",
  });

  const handleChange = (category, value) => {
    setSelected({
      lisans: category === "lisans" ? value : "",
      onlisans: category === "onlisans" ? value : "",
      lise: category === "lise" ? value : "",
      doktor: category === "doktor" ? value : "",
    });
  };

  const activeValue =
    selected.lisans || selected.onlisans || selected.lise || selected.doktor;

  const SelectedComponent = componentMap[activeValue];

  const colorPalette = [
    '#be746e',
    '#e1ca73',
    '#72d0b5',
    '#53d5fb',
  ]

  return (
    <div className="medical-container">
      <Title text="Sağlık Personelleri" size="l"/>
      <div className="department-inputs">
        {/* Select kutuları */}
        <select
  value={selected.lisans}
  onChange={(e) => handleChange("lisans", e.target.value)}
  style={{ backgroundColor: colorPalette[0], color: "white" }}
>
  {[
    { value: "", label: "Lisans Mezunları" },
    { value: "hemsirelik", label: "Hemşirelik" },
    { value: "biyoloji", label: "Biyoloji" },
    { value: "cocuk_gelisimi", label: "Çocuk Gelişimi" },
    { value: "diyetisyenlik", label: "Diyetisyenlik" },
    { value: "fizyoterapi_lisans", label: "Fizyoterapi" },
    { value: "ebelik", label: "Ebelik" },
    { value: "eczacilik", label: "Eczacılık" },
    { value: "ergoterapi", label: "Ergoterapi" },
    { value: "veterinerlik", label: "Veterinerlik" },
  ].map((option, index) => (
    <option
      key={index}
      value={option.value}
      style={{
        backgroundColor: colorPalette[index % colorPalette.length],
        color: "white",
      }}
    >
      {option.label}
    </option>
  ))}
</select>

<select
  value={selected.onlisans}
  onChange={(e) => handleChange("onlisans", e.target.value)}
  style={{ backgroundColor: colorPalette[1], color: "white" }}
>
  {[
    { value: "", label: "Ön Lisans Mezunları" },
    { value: "ameliyathane", label: "Ameliyathane Teknikleri" },
    { value: "anestezi", label: "Anestezi" },
    { value: "dis_sagligi", label: "Ağız ve Diş Sağlığı" },
    { value: "cocuk_gelisimi_onlisans", label: "Çocuk Gelişimi" },
    { value: "eczacilik_teknikerligi", label: "Eczacılık Teknikerliği" },
    { value: "nukleer_tip", label: "Nükleer Tıp" },
    { value: "paramedik", label: "Paramedik" },
    { value: "fizyoterapi_onlisans", label: "Fizyoterapi" },
    { value: "radyoloji", label: "Radyoloji" },
    { value: "radyoterapi", label: "Radyoterapi" },
    { value: "lab", label: "Tıbbi Laboratuvar" },
    { value: "sekreterlik", label: "Tıbbi Sekreterlik ve Dökümantasyon" },
    { value: "yasli_bakimi", label: "Yaşlı Bakımı" },
  ].map((option, index) => (
    <option
      key={index}
      value={option.value}
      style={{
        backgroundColor: colorPalette[index % colorPalette.length],
        color: "white",
      }}
    >
      {option.label}
    </option>
  ))}
</select>

<select
  value={selected.lise}
  onChange={(e) => handleChange("lise", e.target.value)}
  style={{ backgroundColor: colorPalette[2], color: "white" }}
>
  {[
    { value: "", label: "Lise Mezunları" },
    { value: "att", label: "Acil Tıp Teknisyenliği" },
    { value: "hemsire_2016", label: "Hemşirelik (2016 ve öncesi)" },
    { value: "hemsire_yardimcisi", label: "Hemşire Yardımcılığı" },
    { value: "hasta_yasli_bakimi", label: "Hasta ve Yaşlı Bakımı" },
  ].map((option, index) => (
    <option
      key={index}
      value={option.value}
      style={{
        backgroundColor: colorPalette[index % colorPalette.length],
        color: "white",
      }}
    >
      {option.label}
    </option>
  ))}
</select>

<select
  value={selected.doktor}
  onChange={(e) => handleChange("doktor", e.target.value)}
  style={{ backgroundColor: colorPalette[3], color: "white" }}
>
  {[
    { value: "", label: "Doktorlar" },
    { value: "uzman_doktorlar", label: "Uzmanlığı Olan Tüm Doktorlar" },
  ].map((option, index) => (
    <option
      key={index}
      value={option.value}
      style={{
        backgroundColor: colorPalette[index % colorPalette.length],
        color: "white",
      }}
    >
      {option.label}
    </option>
  ))}
</select>

      </div>

      <div className="selected-description">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default Medical;
