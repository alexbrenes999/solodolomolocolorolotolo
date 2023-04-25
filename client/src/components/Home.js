import React from "react";
import { useLocation, useNavigation } from "react-router-dom";

function Home() {
    const location = useLocation();

    return (
        <div className="homepage">

            <h1>Hey {location.state.id}, Welcome back! </h1>

        </div>
    )

}

export default Home;