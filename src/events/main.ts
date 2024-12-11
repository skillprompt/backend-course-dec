import EventEmitter from "events";
import { sendMail } from "../fs-async/send-mail";

export const mailEventEmitter = new EventEmitter();

export const Mail_Events = {
  SIGN_UP: "sign_up",
};

mailEventEmitter.on(Mail_Events.SIGN_UP, async (data) => {
  const result = await sendMail(data);
  console.log("mail result", result);
});
