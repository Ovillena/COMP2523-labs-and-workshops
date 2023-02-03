import Reminder from "./reminder";

export default class ReminderList {

  printReminderNum = (reminderArray: Reminder[]): void => {
    for (let i = 0; i < reminderArray.length; i++) {
      console.log(`[${i + 1}] ${reminderArray[i].getReminder()}`);
    }
  };
}
///implimeeeeeent
