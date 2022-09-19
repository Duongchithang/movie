import style from './index.module.scss';
import configAPI from '../../../api/config_api';
import {memo} from 'react';
function SliderDetail({props}) {
    console.log(props);
    const Openvideo = ()=>{
       props.toogle(true)
    }
    return ( 
        <div className={style.wrapperSlide}>
            <div className={style.wrapperInfo}>
                <h1 className={style.Title}>{props.title}</h1>
                <p className={style.Decription}>{props.overview}</p>
                <div className={style.AroundBtn}>
                    <button className={style.BtnWatchNow}>Watch now</button>
                    <button onClick={Openvideo} className={style.BtnWatchTrailer}>Watch trailer</button>
                </div>
            </div>
            <div className={style.wrapperImage}>
                <img className={style.Image} src={configAPI.w500Image(props.slide.poster_path)} alt=""/>
            </div>
        </div>
     );
}

export default memo(SliderDetail);