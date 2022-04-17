import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoryPage() {
  const [History, setHistory] = useState([]);

  useEffect(() => {
    axios.get("/api/users/history").then((response) => {
      if (response.data.success) {
        setHistory(response.data.user[0].history);
      } else {
        alert("Failed to bring the history...");
      }
    });
  }, []);

  const renderItems = () =>
    History &&
    History.map((item, index) => (
      <tr key={index}>
        <td>{item.paymentId}</td>
        <td>{item.name}</td>
        <td>$ {item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.dateOfPurchase}</td>
      </tr>
    ));

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>History</h1>
        <table>
          <thead>
            <tr>
              <th>Payment Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date Of Purchase</th>
            </tr>
          </thead>
          <tbody>{renderItems()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryPage;
