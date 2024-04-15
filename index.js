/**
 * Получает случайную активность с помощью API.
 * @returns {Promise<string>} Случайная активность.
 */
async function getRandomActivity() {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    if (!response.ok)
      throw new Error('Failed to fetch activity');
    const data = await response.json();
    return data.activity;
  } catch (error) {
    console.error(error);
    return "К сожалению, произошла ошибка";
  }
}

/**
 * Обновляет активность на странице.
 */
async function updateActivity() {
  const activityElement = document.getElementById("activity");
  const activity = await getRandomActivity();
  activityElement.innerText = activity;
}

/**
 * Запускает обновление активности каждую минуту.
 */
function startUpdatingActivity() {
  // Обновляем активность сразу
  updateActivity();
  // Запускаем таймер для обновления каждую минуту
  setInterval(updateActivity, 60000); // 60000 миллисекунд = 1 минута
}

// Запускаем обновление активности при загрузке страницы
document.addEventListener("DOMContentLoaded", startUpdatingActivity);

