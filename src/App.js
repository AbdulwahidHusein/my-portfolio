import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Abdulwahid Hussen",
    location: "Adama, Ethiopia",
    email: "abdulwahidhussen750@gmail.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };
  const blogs = [
    {'text':'The journey to Software Developement'},
    {'text':'this is my blog 2'},
    {'text':`.container {
      display: grid;
      place-items: center;
      /* Additional styles for container if needed */
    }
    
    .centered-div {
      /* Additional styles for centered div if needed */
    }
    `},
    {'text':'The journey to Software Developement'},
    {'text':'this is my blog 2'},
    {'title':'Title1', 'text':`.container {
      display: grid;
      place-items: center;
      /* Additional styles for container if needed */
    }
    
    .centered-div {
      /* Additional styles for centered div if needed */
    }
    `},
    {'image':'', 'title':'My Method', 'text':`
    To retrieve all messages, including the old ones, sent to your Telegram bot, you'll need to use a combination of the getUpdates method and message history tracking. The getUpdates method allows you to retrieve a limited number of recent updates, so you'll need to implement pagination to fetch older messages.
    
    Here's an example of how you can retrieve all messages, including the old ones, using Node.js and the node-telegram-bot-api library:
    
    Install the node-telegram-bot-api library by running the following command in your project directory:
    shell
    Copy code
    npm install node-telegram-bot-api
    Require the library and create an instance of the bot using your bot token:
    javascript
    Copy code
    const TelegramBot = require('node-telegram-bot-api');
    const bot = new TelegramBot('YOUR_BOT_TOKEN');
    Set up a function to retrieve messages recursively using pagination:
    javascript
    Copy code
    function getAllMessages(offset = 0, messages = []) {
      return new Promise((resolve, reject) => {
        bot.getUpdates({ offset: offset + 1 }).then((updates) => {
          updates.forEach((update) => {
            if (update.message) {
              messages.push(update.message);
            }
          });
    
          if (updates.length > 0) {
            resolve(getAllMessages(messages[messages.length - 1].message_id, messages));
          } else {
            resolve(messages);
          }
        }).catch((error) => {
          reject(error);
        });
      });
    }
    Call the getAllMessages function to retrieve all the messages:
    javascript
    Copy code
    getAllMessages().then((messages) => {
      console.log('Total Messages:', messages.length);
      console.log('Messages:', messages);
    }).catch((error) => {
      console.error('Error:', error);
    });
    The getAllMessages function uses recursion to fetch updates in batches, keeping track of the offset to ensure that older messages are retrieved. It collects the messages in an array and resolves with the complete list when there are no more updates available.
    
    Make sure to replace 'YOUR_BOT_TOKEN' with your actual Telegram bot token.
    
    Note that retrieving all messages can be a time-consuming process, especially if you have a large chat history, as the Telegram Bot API imposes rate limits. You may encounter delays or receive incomplete updates if the request rate exceeds the allowed limits. Additionally, keep in mind that this method may not retrieve deleted messages or messages that were sent before your bot started running.
    
    Remember to handle errors and adapt the code as per your specific requirements.`}
  ]
  personalDetails.posts = blogs;
  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
