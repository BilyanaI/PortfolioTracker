import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import InvestmentManagement from './InvestmentManagement';

export function InvestmentPage() {

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Portfolio area investments'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true
            }
        },
        series: [{
            name: 'Portfolio',
            colorByPoint: true,
            data: [
                { name: 'Cash', y: 1 },
                { name: 'Crypto', y: 2 },
                { name: 'Stocks', y: 3 },
                { name: 'Gold', y: 4 },
                { name: 'Property', y: 5 },
                { name: 'Land', y: 6 },
            ]
        }
        ]
    }

    return (
        <div className='p-10 w-full col-md-4'>
            <div className='text-purple-900 p-2 text-3xl font-semibold text-center'>Investment Dashboard</div>
            <div className="m-2 border rounded border-gray-400">
                <div className="flex p-10">
                    <div className="p-5 w-86">
                        <div className="p-10 border-2 rounded-md border-purple-400">
                            <div className="text-gray-400  font-bold">Total Deposit</div>
                            <div className="text-purple-400 text-2xl font-bold">49,545.25 USD</div>
                        </div>
                    </div>
                    <div className="p-5 w-86">
                        <div className="p-10 border-2 rounded-md border-green-400">
                            <div className="text-gray-400  font-bold">Currently Activated Investment</div>
                            <div className="text-green-400 text-2xl font-bold">200</div>
                            <br/>
                            <div className="text-gray-400  font-bold">Closed Investments</div>
                            <div className="text-green-400 text-2xl font-bold">10</div>
                        </div>
                    </div>
                    <div className="p-1 w-96">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
            </div>
            <div className="p-2 m-2 border rounded border-gray-400">
                <InvestmentManagement/>
            </div>
        </div>
    );
}

export default InvestmentPage;