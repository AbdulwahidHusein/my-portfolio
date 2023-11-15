const botToken = '6034455665:AAGJXL0aODUV_nsWoC5A093e6ptophaCzwY';
//const bot = new TelegramBot(botToken);

const axios = require('axios');
// Define the URL to access the Telegram Bot API
const apiUrl = `https://api.telegram.org/bot${botToken}`;

// Function to retrieve updates
async function getUpdates() {
  try {
    const response = await axios.get(`${apiUrl}/getUpdates`);
    if (response.status === 200) {
      const updates = response.data.result;
      return updates;
    }
  } catch (error) {
    console.error('Error retrieving updates:', error.message);
    return [];
  }
}

// Retrieve updates and log the messages
async function logMessages() {
  const updates = await getUpdates();
  updates.forEach((update) => {
    const message = update.message;
    const chatId = message.chat.id;
    const messageText = message.text;
    console.log('Received message:', messageText);

    // Perform further actions based on the received message
    // For example, you can send a reply
    // sendMessage(chatId, 'Thank you for your message!');
  });
}

// Call the function to log messages
logMessages();
