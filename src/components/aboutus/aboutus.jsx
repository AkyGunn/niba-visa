import React from 'react'
import './aboutus.css'
import Title from '../title/title'
import TextChart from '../text-chart/textchart'

const Aboutus = () => {
  return (
    <div className="aboutus-container">
        <Title text="Hakkımızda" align="center" size="l" />
        
        <div className="aboutus-charts">
            <TextChart
          header="Hakkımızda"
            text="Almanya’ya gitmek ve orada yeni bir hayat kurmak çoğu kişinin gözünde büyük ve zor bir süreç gibi görünebilir. Ancak biz, bu sürecin aslında çok daha kolay olduğunu biliyor ve bunu danışanlarımıza göstermek için çalışıyoruz. Ne yazık ki, birçok danışmanlık firması bu süreci zor ve karmaşık göstererek insanları kendilerine muhtaç hissettirmek istiyor. Bizim farkımız burada ortaya çıkıyor: Şeffaf, açık ve her aşamada kaliteli hizmet sunuyoruz. Deneyimli ekibimizle, dil kurslarından vize işlemlerine kadar her konuda kişiye özel çözümler sunuyor ve amacımız, müşterilerimizin Almanya’daki yeni hayatlarına güvenle adım atmalarını sağlamak. Bu sürecin sizin için mümkün olan en kolay şekilde tamamlanması bizim için esastır."
        />
        <TextChart 
          header="Vizyon"
            text="Almanya’ya göç danışmanlığında lider bir firma olmak ve bu süreçte insanların en güvenilir yol arkadaşı haline gelmek. Birçok danışmanlık firmasının aksine, süreci karmaşık göstermiyor, müşterilerimizi zorunluluk psikolojisine sokmuyoruz. Vizyonumuz, sunduğumuz kaliteli ve şeffaf hizmetlerle daha fazla kişiye ulaşmak, müşterilerimizin başarı hikayelerine katkı sağlamak ve her aşamada onların yanında olmak."
        />
        <TextChart 
          header="Misyon"
            text="Almanya’ya göç sürecini herkes için anlaşılır, erişilebilir ve mümkün olan en kolay hale getirmeyi hedefliyoruz. Misyonumuz, insanlara doğru bilgi ve rehberlik sunarak eğitim, iş ve yaşam hedeflerine güvenle ulaşmalarını sağlamak. Her adımda şeffaf, profesyonel destek sunarak bu süreci sizin için sorunsuz ve hızlı bir şekilde yönetiyoruz."
        />
        </div>
        
    </div>
  )
}

export default Aboutus