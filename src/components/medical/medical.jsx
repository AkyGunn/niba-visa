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

  return (
    <div className="medical-container">
      <Title text="Sağlık Personelleri" size="l"/>
      <div className="department-inputs">
        {/* Select kutuları */}
        <select value={selected.lisans} onChange={(e) => handleChange("lisans", e.target.value)}>
          <option value="">Lisans Mezunları</option>
          <option value="hemsirelik">Hemşirelik</option>
          <option value="biyoloji">Biyoloji</option>
          <option value="cocuk_gelisimi">Çocuk Gelişimi</option>
          <option value="diyetisyenlik">Diyetisyenlik</option>
          <option value="fizyoterapi_lisans">Fizyoterapi</option>
          <option value="ebelik">Ebelik</option>
          <option value="eczacilik">Eczacılık</option>
          <option value="ergoterapi">Ergoterapi</option>
          <option value="veterinerlik">Veterinerlik</option>
        </select>

        <select value={selected.onlisans} onChange={(e) => handleChange("onlisans", e.target.value)}>
          <option value="">Ön Lisans Mezunları</option>
          <option value="ameliyathane">Ameliyathane Teknikleri</option>
          <option value="anestezi">Anestezi</option>
          <option value="dis_sagligi">Ağız ve Diş Sağlığı</option>
          <option value="cocuk_gelisimi_onlisans">Çocuk Gelişimi</option>
          <option value="eczacilik_teknikerligi">Eczacılık Teknikerliği</option>
          <option value="nukleer_tip">Nükleer Tıp</option>
          <option value="paramedik">Paramedik</option>
          <option value="fizyoterapi_onlisans">Fizyoterapi</option>
          <option value="radyoloji">Radyoloji</option>
          <option value="radyoterapi">Radyoterapi</option>
          <option value="lab">Tıbbi Laboratuvar</option>
          <option value="sekreterlik">Tıbbi Sekreterlik ve Dökümantasyon</option>
          <option value="yasli_bakimi">Yaşlı Bakımı</option>
        </select>

        <select value={selected.lise} onChange={(e) => handleChange("lise", e.target.value)}>
          <option value="">Lise Mezunları</option>
          <option value="att">Acil Tıp Teknisyenliği</option>
          <option value="hemsire_2016">Hemşirelik (2016 ve öncesi)</option>
          <option value="hemsire_yardimcisi">Hemşire Yardımcılığı</option>
          <option value="hasta_yasli_bakimi">Hasta ve Yaşlı Bakımı</option>
        </select>

        <select value={selected.doktor} onChange={(e) => handleChange("doktor", e.target.value)}>
          <option value="">Doktorlar</option>
          <option value="uzman_doktorlar">Uzmanlığı Olan Tüm Doktorlar</option>
        </select>
      </div>

      <div className="selected-description">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default Medical;
