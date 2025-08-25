export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Метод не разрешен
    return;
  }
  const data = req.body; // Получаем данные из POST-запроса
  // Обработка данных заказа
  res.status(200).json({ message: 'Заказ получен!', data });
}