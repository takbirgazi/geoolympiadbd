import Home from "../Home/Home";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const naviget = useNavigate()
    const erronStatus = useRouteError();
    const backHandler = ()=>{
        naviget(-1);
    }

    return(
        <div>
            <Home></Home>
            <div className="w-11/12 mx-auto min-h-screen flex items-center justify-center flex-col">
                <h2 className="font-bold text-2xl">{erronStatus.status} {erronStatus.statusText}</h2>
                <button onClick={backHandler}>Go Back</button>
            </div>
        </div>
    )
}