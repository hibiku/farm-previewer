import { useState } from "../StateProvider.jsx";

function Beauty() {
    const [state] = useState();
    return (
        <table>
            <caption>Beauty effects</caption>
            <thead>
                <tr>
                    <th>Combine Result Choices</th>
                    <th>Building Max Waru Capacity</th>
                    <th>Shop Discount</th>
                    <th>Special Merchant Visit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{"+" + state.beauty.choices + "%"}</td>
                    <td>{"+" + state.beauty.banked}</td>
                    <td>{state.beauty.discount + "%"}</td>
                    <td>{"+" + state.beauty.visit + "%"}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan={2}>Total aesthetic points</th>
                    <td colspan={2}>{state.beauty.total}</td>
                </tr>
                <tr>
                    <th colspan={2}>Points to next threshold</th>
                    <td colspan={2}>{state.beauty.next}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Beauty;