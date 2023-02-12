import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css"
const ReportComponent = () => {
    const { expense, income } = useContext(DataContext);

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด: </h4>
                    <p className="report positive">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด: </h4>
                    <p className="report negative">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent;