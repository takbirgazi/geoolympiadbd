import Slider from "../Slider/Slider";
import HomeAboutDatiles from "../homeComponents/HomeAboutDatiles/HomeAboutDatiles";

export default function Home(){
    return(
       <div>
            <Slider></Slider>
            <div className="w-11/12 mx-auto">
                <HomeAboutDatiles></HomeAboutDatiles>
            </div>
       </div>
    )
}