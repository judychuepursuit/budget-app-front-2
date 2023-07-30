// import Logs from "../Components/Logs";

// function Index() {
//   return (
//     <div className="Index">
//       <h2>Index</h2>
//       <Logs />
//     </div>
//   );
// }


import axios from "axios";
import { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";

const API = process.env.REACT_APP_API_URL;

function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  let balance = 0;
  transactions.forEach(tr => balance += tr.amount);

  // let TOTAL = 0;
  // transactions.forEach(tr => total += tr.amount);

  return (
    <div className="Index">
      <h1>BANK ACCOUNT TOTAL: $ {balance.toFixed(2)}</h1>
      <Transactions transactions={transactions} />
    
    </div>
  );
}

// return (
//   <div className="Index">
//     <h1>BANK ACCOUNT $ { TOTAL.toFixed(2) }</h1>
//     <Transactions transactions={transactions} />
  
//   </div>
// );
// }

export default Index;