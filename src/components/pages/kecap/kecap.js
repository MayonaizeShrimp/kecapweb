import React from "react"
import Navbar from "../../parts/navbar";
import KecapGet from "./get";

class KecapPage extends React.Component{
    render(){
        const kecapPage = (
            <div id="kecap">
                <Navbar />

                <div className="container mt-5">
                    <h1>Welcome to kecap page</h1>
                    <br></br>
                    <p>In this page, you will see lists of available soy sauces</p>

                    <KecapGet/>
                </div>
            </div>
        );

        return kecapPage;
    }
}

export default KecapPage