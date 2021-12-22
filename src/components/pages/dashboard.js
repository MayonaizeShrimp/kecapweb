import React from "react"
import Navbar from "../parts/navbar"
import {Link} from "react-router-dom"

class Dashboard extends React.Component{
    render(){
        const dashboardPage = (
            <div id="dashboard">
                <Navbar />

                <div className="container mt-5">
                    <h1>Welcome to dashboard</h1>
                    <br></br>
                    This is a simple crud site to look at soy sauce variety and prices. <br/>
                    Click this <Link to="/Kecap">link</Link> to open the page.
                </div>
            </div>
        );

        return dashboardPage;
    }
}

export default Dashboard