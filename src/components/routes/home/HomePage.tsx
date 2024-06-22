import React, { useEffect, useState } from 'react';
import { Table } from '../../Table';
import { Header } from '../../Header';
import salesData from '../../../../data/stackline_frontend_assessment_data_2021.json';
import '../../../index.css';
import {ProductWidget} from "../../ProductWidget";

const sales = salesData[0].sales;

export default function HomePage() {
    return (
        <div>
            <Header/>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }} className="flex flex-col align-top h-screen p-8">
                <div className="py-40">
                    <ProductWidget/>
                </div>
                <div className="py-40">
                    <Table sales={sales}/>
                </div>
            </div>
        </div>
    );
}
