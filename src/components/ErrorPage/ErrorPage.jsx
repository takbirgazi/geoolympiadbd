import Home from "../Home/Home";

export default function ErrorPage(){
    return(
        <div>
            <Home></Home>
            <div className="w-11/12 mx-auto min-h-screen flex items-center justify-center">
                <h2 className="font-bold text-2xl">404 Page Not Found</h2>
            </div>
        </div>
    )
}