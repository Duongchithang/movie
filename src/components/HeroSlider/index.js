import React, { useEffect, useState } from "react";
import SliderDetail from "./SliderDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { movieList } from "../../api/api_movie";
import { Pagination } from "swiper";
import configAPI from '../../api/config_api'
import style from './index.module.scss'
import Modal from "../modal/modal";
function Slider() {
  const [MoviePopular , SetMoviePopular] = useState([]);
  const [modal , SetModal] = useState(false)
   useEffect(()=>{
    const params = {
      page : 1
    }
     movieList.getMoviePopular(params).then((res)=>{
        SetMoviePopular(res.results.slice(0,4));
     })
   },[]);
    const Toogle = (toogle)=>{
      SetModal(toogle)
    }
    return ( 
        <>
      <Swiper
        modules={[Pagination]}
        className={style.mySwiper}
      >
        {
          MoviePopular.map((slide,index)=>{
            const data = {
              slide,
              toogle : Toogle
            }
            return <SwiperSlide className={style.mySwiperSlide} key={index}>
            <img className={style.imgSlide} src={configAPI.originalImage(slide.backdrop_path)} alt=""/>
            <SliderDetail props={data}/>
            { modal ? <Modal/> : null}
            </SwiperSlide>
            
          })
        }
         
      </Swiper>
    </>
     );
}

export default Slider;