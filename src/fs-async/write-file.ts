import { writeFile } from "fs";

// callback
function asyncWriteFileCb(name: string, data: string) {
  writeFile(name, data, (err) => {
    if (err) {
      console.error("Something went wrong when writing the file", err);
    } else {
      console.log("File written successfully!");
    }
  });
}

// asyncWriteFile("report.txt", "This is nodejs report.");

// Promise

export function asyncWriteFilePromise(
  name: string,
  data: string
): Promise<{ message: string; isSuccess: boolean }> {
  return new Promise((resolve, reject) => {
    writeFile(name, data, (err) => {
      if (err) {
        console.error("Error", err);
        reject({
          isSuccess: false,
          message: "File writing failed",
        });
      } else {
        resolve({
          isSuccess: true,
          message: "File written successfully!",
        });
      }
    });
  });
}
