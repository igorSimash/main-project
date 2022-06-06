import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Lists from "./Lists";
import Calculator from "./Calculator";
import CurrencySelect from "./UI/select/CurrencySelect";
import Counter from "./Counter";
import ListDescription from "./ListDescription";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/lists" element={<Lists/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/currency" element={<CurrencySelect/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/lists/:id" element={<ListDescription/>}/>
        </Routes>
    );
};

export default AllRoutes;