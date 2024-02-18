import { FaAngleRight } from "react-icons/fa";

export function InvestmentManagement() {

    return (
        <table class="auto-class border-purple-900  border">
            <caption className="caption-top text-purple-900 font-bold">Recent Investment</caption>
            <thead>
                <tr>
                    <th class="border p-2 border-purple-900 text-gray-400">Type</th>
                    <th class="border p-2 border-purple-900 text-gray-400">Status</th>
                    <th class="border p-2 border-purple-900 text-gray-400">Date</th>
                    <th class="border p-2 border-purple-900 text-gray-400">Name</th>
                    <th class="border p-2 border-purple-900 text-gray-400">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border p-2 border-purple-900">Silver - Daily 4.76% for 21 Days</td>
                    <td class="border p-2 border-purple-900 text-purple-400 font-bold">Active</td>
                    <td class="border p-2 border-purple-900">18/02/2023</td>
                    <td class="border p-2 border-purple-900">David Jones</td>
                    <td class="border p-2 border-purple-900">2.0974 USD</td>
                    <td><FaAngleRight className="text-purple-900 text-2xl cursor-pointer" /></td>
                </tr>
                <tr>
                    <td class="border p-2 border-purple-900">Diamond - Daily 8.52% for 14 Days</td>
                    <td class="border p-2 border-purple-900 text-green-400 font-bold">Closed</td>
                    <td class="border p-2 border-purple-900">09/04/2022</td>
                    <td class="border p-2 border-purple-900">Candace Banne</td>
                    <td class="border p-2 border-purple-900">3.0974 USD</td>
                    <td><FaAngleRight className="text-purple-900 text-2xl cursor-pointer" /></td>
                </tr>
                <tr>
                    <td class="border p-2 border-purple-900">Platinum - Daily 14.82% for 7 Days</td>
                    <td class="border p-2 border-purple-900 text-green-400 font-bold  ">Closed</td>
                    <td class="border p-2 border-purple-900">11/02/2022</td>
                    <td class="border p-2 border-purple-900">John Street</td>
                    <td class="border p-2 border-purple-900">4.0974 USD</td>
                    <td><FaAngleRight className="text-purple-900 text-2xl cursor-pointer" /></td>
                </tr>
                <tr>
                    <td class="border p-2 border-purple-900">Silver - Daily 4.76% for 21 Days</td>
                    <td class="border p-2 border-purple-900 text-purple-400 font-bold">Active</td>
                    <td class="border p-2 border-purple-900">18/02/2023</td>
                    <td class="border p-2 border-purple-900">Alice Jones</td>
                    <td class="border p-2 border-purple-900">5.3274 USD</td>
                    <td><FaAngleRight className="text-purple-900 text-2xl cursor-pointer" /></td>
                </tr>
            </tbody>
        </table>

    )
}

export default InvestmentManagement;