import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Calculator from "../calculatorComponents/Calculator";
import CurrencySelect from "../currencyComponents/CurrencySelect";
import ListDescription from "../listComponents/ListDescription";
import Lists from "../listComponents/Lists";
import CombineDifferentComponents from "../differentComponents/CombineDifferentComponents";
import Carousel from "../imageCarousel/Carousel";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Carousel/>}/>
            <Route path="/lists" element={<Lists/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/currency" element={<CurrencySelect/>}/>
            <Route path="/different" element={<CombineDifferentComponents/>}/>
            <Route path="/lists/:id" element={<ListDescription/>}/>
        </Routes>
    );
};

export default AllRoutes;