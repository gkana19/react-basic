import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useEffect, useState, useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {/* Edit <code>src/App.js</code> and save to reload. */}
  //         Kanawat Gumkuntee
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const design = { color: 'red', textAlign: 'center', }
  const initData = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: -2000 },
    { id: 2, title: "ค่าเช่าห้อง", amount: -4000 },
    { id: 3, title: "เงินเดือน", amount: 50000 },
    { id: 4, title: "โบนัส", amount: 30000 },
  ]

  const [items, setItems] = useState(initData)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts
      .filter(element => element > 0)
      .reduce((total, element) => total += element, 0).toFixed(2)

    const expense = amounts
      .filter(element => element < 0)
      .reduce((total, element) => total += Math.abs(element), 0).toFixed(2)

    setReportIncome(income)
    setReportExpense(expense)
  }, [items, reportIncome, reportExpense])

  // reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  // }

  // const [result, dispatch] = useReducer(reducer, showReport);


  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense, }}>
      <div className='container'>
        <h1 style={design}>โปรแกรม <br />บันทึกรายรับ-รายจ่าย</h1>
        {/* <div className='header-button' >
          <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
          <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button>
        </div>
        {showReport && <ReportComponent />} */}
        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={[<ReportComponent />, <Transaction items={items} />]} />
              <Route path='insert' element={[<FormComponent onAddItem={onAddNewItem} />, <Transaction items={items} />]} />
            </Routes>
          </div>
        </Router>

      </div >

    </DataContext.Provider >
  );
}

export default App;
