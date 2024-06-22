import React from 'react';
import { Sale } from '../lib/sale'
import 'react-tooltip/dist/react-tooltip.css'

interface Props {
    sale: Sale
}

export function Row({ sale }: Props) {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <tr className="table-value bg-white bottom-border text-sm">
            <td className="py-10">
                {sale.weekEnding} </td>
            <td>
                {USDollar.format(sale.retailSales)}
            </td>
            <td>
                {USDollar.format(sale.wholesaleSales)}
            </td>
            <td>
                {USDollar.format(sale.unitsSold)}
            </td>
            <td>
                {USDollar.format(sale.retailerMargin)}
            </td>
        </tr>
    );
}
