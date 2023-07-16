// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

// export default function () {
// }
import Transaction from "./Transaction";

function Transactions( {transactions} ) {
  return (
    <div className="transactions">
      <section>
        <table>
          {/* <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            {transactions.map((transaction, index) =>
              <Transaction key={transaction.id} transaction={transaction} index={index} />
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
