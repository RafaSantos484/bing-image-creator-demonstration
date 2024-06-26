import * as readline from "readline";

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function consoleRead(question = ""): Promise<string> {
  return new Promise((resolve) => {
    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    prompt.question(question, (answer) => {
      prompt.close();
      resolve(answer);
    });
  });
}
