import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PaginasSwipe.css";
//import imagem1 from "../assets/61f75ea9a680def2ed1c6929fe75aeee.jpg"

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
          
        </div>

        <div
          className={`bloco ${paginaAtual === 1 ? "ativo" : ""}`}
          onClick={() => swiperRef.current?.slideTo(1)}
        >
          2
        </div>

        <div
          className={`bloco ${paginaAtual === 2 ? "ativo" : ""}`}
          onClick={() => swiperRef.current?.slideTo(2)}
        >
          3
        </div>
      </div>
    </div>
  );
}
