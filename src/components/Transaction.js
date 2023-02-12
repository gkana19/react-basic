import Item from "./Item";
import './Transaction.css'
// const Transaction = (props) => {
//     const { items } = props
//     return (
//         <ul className="item-list">
//             {items.map((element) => {
//                 return <Item {...element} key={element.id} />
//             })}
//         </ul>
//     );
// }

const Transaction = ({ items }) => {
    return (
        <div>
            <ul className="item-list">
                {items.map((element) => {
                    return <Item {...element} key={element.id} />
                })}
            </ul>
        </div>
    );
}
export default Transaction;