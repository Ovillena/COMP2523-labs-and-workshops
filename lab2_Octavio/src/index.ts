import { question } from "readline-sync";
import Reminder from "./reminder";
import ReminderList from "./reminderList";
import printTagandReminders from "./printTagArray";

const menu = `
------------------------------
|      Reminders menu:       |
------------------------------
|  [1] Show all reminders 👀  
|  [2] Search reminders 🔎    
|  [3] Add reminder ✏️        
|  [4] Modify reminders ✍️   
|  [5] Toggle completion ⭕️ 🔴  
|  [6] Exit 👋                
------------------------------
`;

let reminderArray: Reminder[] = [];
let cache: { [k: string]: any } = {};
let tagArray: string[] = [];

let exit = false;
let first = true;
while (exit == false) {
  if (first) {
    /*when the app starts, this message shows first. At the end of loop, the 'first' flag becomes false. */
    const enter = question("Hit [Enter] key to see main menu", {
      hideEchoBack: true,
      mask: "",
    });
  } else {
    const enter = question("press [Enter] to continue", {
      hideEchoBack: true,
      mask: "",
    });
  }

  const response = question(`${menu} \nChoose a number: `);
  //prompt user to choose menu options
  cache = {}; //empties cache to prevent duplicate printing of reminders
  reminderArray.forEach((reminder) => {
    //refactor this portion to a class*************
    //adds tag and reminders to cache. groups all reminders under same tag.
    let thisTag = reminder.getTag();
    let thisReminder = reminder.getReminder();
    if (!cache[thisTag]) {
      cache[thisTag] = `\n${thisReminder}`;
    } else {
      cache[thisTag] += `\n${thisReminder}`;
    }
  });
  switch (response) {
    case "1": {
      let print = new printTagandReminders();
      print.printTagArray(tagArray, cache); //put below loop into a function of it's own class.

      break;
    }
    case "2": {
      let search = question(`Enter a keyword to search: `);
      console.log(cache[search.toUpperCase()]);
      break;
    }
    case "3": {
      const newReminder = question(`Enter a new reminder: `);
      const newTag = question(`enter a tag: `);
      let reminder = new Reminder(newReminder, newTag);

      reminderArray.push(reminder);
      if (!tagArray.includes(reminder.getTag())) {
        tagArray.push(reminder.getTag());
      }
      console.log(reminder);
      break;
    }
    case "4": {
      console.log(reminderArray);
      for (let i = 0; i < reminderArray.length; i++) {
        console.log(`[${i + 1}] ${reminderArray[i].getReminder()}`);
      }
      const toggleChoose = question(`Enter a number: `);
      let toggle = parseInt(toggleChoose) - 1;
      if (toggle > reminderArray.length) {
        continue;
      }
      reminderArray[toggle].setReminder(); //one of the few proper uses of class in this app
      break;
    }
    case "5": {
      let reminderList = new ReminderList();
      reminderList.printReminderNum(reminderArray); //for loop to print reminders with numbers
      const toggleChoose = question(`Enter a number: `);

      let toggle = parseInt(toggleChoose) - 1;
      if (toggle > reminderArray.length) {
        continue;
      }

      reminderArray[toggle].toggleComplete();
      console.log(reminderArray[toggle]);

      break;
    }
    case "6": {
      exit = true;
      break;
    }
    default: {
      continue;
    }
  }
}
