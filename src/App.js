import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body1 from "./Components/Body1";
// import Body from "./Components/Body";


const AppLayout = ()=>{
    return(
        <>
            <Header/>
            {/* <Body/> */}
            <Body1/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)