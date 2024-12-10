import { updateFile } from "./append-file";
import { deleteFile } from "./delete-file";
import { writeFile } from "./write-file";

writeFile("hello-node.txt");

updateFile("hello-node.txt", "\nWe are learning fs module.");

deleteFile("hello-node.txt");
