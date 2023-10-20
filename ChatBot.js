const botResponses = {
    common: [
      "Наш менеджер перезвонит Вам в ближайшее время!",
      "Уточнить детали можно по телефону 123456789",
      "Оставайтесь на связи!",
      "Сегодня прекрасная погода!",
      "С Вами очень приятно общаться!"
    ],
    javascript: [
      "В JavaScript есть много методов для работы со строкой.",
      "Массивы в JavaScript похожи на объекты.",
      "JavaScript - это интересный язык программирования.",
    ],
    html: [
      "HTML используется для создания структуры веб-страниц.",
      "В HTML используются теги для разметки контента.",
      "CSS позволяет стилизовать веб-страницы, а JavaScript делает их интерактивными.",
    ],
    php: [
      "PHP - это серверный язык программирования.",
      "PHP часто используется для создания динамических веб-сайтов.",
      "PHP позволяет взаимодействовать с базами данных.",
    ]
  };
  
  function getRandomResponse(topic) 
  {
    const responses = botResponses[topic] || botResponses.common;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  function isTopicMentioned(userInput, topic) 
  {
    const lowerCaseInput = userInput.toLowerCase();
    return lowerCaseInput.includes(topic);
  }
  
  while (true) 
  {
    const userInput = prompt("Вы: ");
  
    if (userInput === "До свидания") 
    {
      alert("Бот: До свидания, рад был пообщаться!");
      break;
    }
  
    let botResponse = "";
  
    if (userInput === "Привет") 
    {
      botResponse = "Приветствую!";
    } 
    else if (userInput === "Ты кто?")
    {
        botResponse = "Я бот Василий.";
    }
    else if (isTopicMentioned(userInput, "javascript")) 
    {
      botResponse = getRandomResponse("javascript");
    } 
    else if (isTopicMentioned(userInput, "html")) 
    {
      botResponse = getRandomResponse("html");
    } 
    else if (isTopicMentioned(userInput, "php")) 
    {
      botResponse = getRandomResponse("php");
    } 
    else 
    {
      botResponse = "Я хочу беседовать о JavaScript, HTML или PHP!";
    }
  
    alert(`Бот: ${botResponse}`);
  }