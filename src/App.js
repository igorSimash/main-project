import React from "react";
import './styles/App.css'
import DashBoard from "./components/UI/dashBoard/DashBoard";
import AllRoutes from "./components/AllRoutes";


function App() {
    return (
        <div className="App">
            <DashBoard/>
            <AllRoutes/>
        </div>
    );
}

export default App;
