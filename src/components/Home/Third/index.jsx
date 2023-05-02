import React from 'react'
import WhyUsCard from '../WhyUsCardComponent'
import './index.css'

//import icon
import ThumbsIcon from '../../img/Icons/icon_thumbs.png'
import TwentyForHour from '../../img/Icons/icon_24hrs.png'
import PriceIcon from '../../img/Icons/icon_price.png'
import ProfessionalIcon from '../../img/Icons/icon_professional.png'

function Third() {
  return (
    <>
    <div className="container">
        <div className="row third">
          <div className="tag-why-us">Why Us?</div>
          <div className="why-us-desc">Mengapa harus pilih Binar Car Rental?</div>
          <div className="card-container">
            <div className="container text-center" style={{padding: "0", margin: "0"}}>
              <div className="row">
                <div className="col">
                    <WhyUsCard
                    cardIcon={ThumbsIcon}
                    cardTitle='Mobil Lengkap'
                    cardText='Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={PriceIcon}
                    cardTitle='Harga Murah'
                    cardText='Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={TwentyForHour}
                    cardTitle='Layanan 24 Jam'
                    cardText='Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
                    />
                </div>
                <div className="col">
                <WhyUsCard
                    cardIcon={ProfessionalIcon}
                    cardTitle='Sopir Profesional'
                    cardText='Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Third