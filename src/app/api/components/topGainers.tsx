import Card from "@/components/card/card";
import {use} from 'react'
import { getTopGainers } from "../routes/getTopGainers";

export default  function TopGainers(){
    const allTopGainers = use(getTopGainers());
    return (
            <Card title="Top Gainers" subtitle={allTopGainers.last_updated}>
                <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">Ticker</th>
                            <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">Price</th>
                            <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">Change Amount</th>
                            <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">Change Percent</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allTopGainers.top_gainers.map((company) => (
                        <tr className="hover:bg-gray-100">
                            <td className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">{company.ticker}</td>
                            <td className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">{company.price}</td>
                            <td className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">{company.change_amount}</td>
                            <td className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-300">{company.change_percentage}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Card>
    )
}