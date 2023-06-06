import nodeSchedule from "node-schedule";
import sendMail from "./sendMail.js";

const notify = (date, time) => {
  console.log("schedule created");
  const dateFormat = new Date(date + " " + time);
  // dateFormat.setHours(dateFormat.getHours() + 5); // add 5 hours to UTC time
  // dateFormat.setMinutes(dateFormat.getMinutes() + 30); // add 30 minutes to UTC time
  const notificationDate = new Date(dateFormat.getTime() - 15 * 60000);
  console.log(notificationDate);
  console.log(dateFormat);
  nodeSchedule.scheduleJob(notificationDate, () => {
    console.log("The world is going to end today.");
    sendMail();
  });
};

export default notify;
