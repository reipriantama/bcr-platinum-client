import style from "./index.module.css"
import heroimage from "../../../../img/Hero_Landing_Page.svg"

const HeroImage = () => {
    return(
        //${style.content_hide_1}
        <div className={`${style.main_size} ${style.container_position_1} d-none d-lg-block d-xl-block`}> 
            <div className="d-flex flex-xl-column">
                <div className="d-flex">
                    <h3 className={`${style.font_style_1 } ${style.title_position_1}`}>Binar Car Rental</h3>
                </div>
                <div className="d-flex">
                    <img className={`${style.img_size_1} ${style.img_position_1}`} src={heroimage}></img>
                </div>
            </div>
            
        </div>
    );
};

export default HeroImage;