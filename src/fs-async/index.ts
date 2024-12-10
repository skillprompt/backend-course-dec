import { sendMail } from "./send-mail";
import { asyncWriteFilePromise } from "./write-file";

async function runAsyncFileOperation() {
  try {
    const result = await asyncWriteFilePromise(
      "async-file.txt",
      "I am async file."
    );

    if (result.isSuccess) {
      const mailResult = await sendMail("File write vayo...");
      if (mailResult.isSuccess) {
        console.log("Mail result", mailResult.data);
      }
    }
  } catch (error) {
    console.log("error", error);
  }
}

runAsyncFileOperation();
