import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PaginasSwipe.css";
import imagem1 from "../assets/icone1.png"
import imagem2 from "../assets/icone2.png"
import imagem3 from "../assets/icone3.png"


//import imagem3 from "../assets/icone3-convertido-de-jpg.png"


import Pagina6 from "./Pagina6";
import Pagina7 from "./Pagina7";
import Pagina8 from "./Pagina8";

export default function PaginasSwipe() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Referência do Swiper para permitir slideTo()
  const swiperRef = useRef<any>(null);

  return (
    <div className="container-swipe">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={true}
        initialSlide={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // guardar referência
        onSlideChange={(swiper) => setPaginaAtual(swiper.activeIndex)}
        className="swiper-area"
      >
        <SwiperSlide>
          <Pagina6 />
        </SwiperSlide>

        <SwiperSlide>
          <Pagina7 />
        </SwiperSlide>

        <SwiperSlide>
          <Pagina8 />
        </SwiperSlide>
      </Swiper>

      {/* Barra inferior com 3 blocos (agora clicáveis) */}
      <div className="menu-inferior-blocos">
        <div
          className={`bloco ${paginaAtual === 0 ? "ativo" : ""}`}
          onClick={() => swiperRef.current?.slideTo(0)}
        >
          <img src={imagem1} alt="Imagem 1" className="icone-imagem" />
        </div>

        <div
          className={`bloco ${paginaAtual === 1 ? "ativo" : ""}`}
          onClick={() => swiperRef.current?.slideTo(1)}
        >
          <img src={imagem3} alt="Imagem 2" className="icone-imagem" />
        </div>

        <div
          className={`bloco ${paginaAtual === 2 ? "ativo" : ""}`}
          onClick={() => swiperRef.current?.slideTo(2)}
        >
          <img src={imagem2} alt="Imagem 3" className="icone-imagem" />

          
        </div>
      </div>
    </div>
  );
}
