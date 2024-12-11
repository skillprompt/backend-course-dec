import { Mail_Events, mailEventEmitter } from "./main";

function signUp(email: string) {
  console.log("sign up is successfull", email);
  // save user email, name, into database

  // emit sign_up event
  mailEventEmitter.emit(Mail_Events.SIGN_UP, {
    email,
  });
}

signUp("ram@test.com");
signUp("hari@test.com");
