import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";

export default function HomeAboutDatiles(){
    return(
        <div className="my-5 flex gap-5 mt-24">
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </div>
    )
}