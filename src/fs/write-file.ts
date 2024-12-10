import { writeFileSync } from "fs";

export function writeFile(name: string) {
  writeFileSync(
    `./${name}`,
    "Hello, welcome to nodejs. Nodejs is awesome. \nLearning Nodejs.",
    {
      encoding: "utf-8",
    }
  );
}
