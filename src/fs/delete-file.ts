import { unlinkSync } from "fs";

export function deleteFile(name: string) {
  unlinkSync(`./${name}`);
}
