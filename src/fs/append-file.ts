import { appendFileSync } from "fs";

export function updateFile(name: string, data: string) {
  appendFileSync(`./${name}`, data, {
    encoding: "utf-8",
  });
}
