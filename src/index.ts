import { downloadImages, getImageRequestId, getImgURLs } from "./imgen";
import { consoleRead, sleep } from "./utils";

async function main() {
  const _U = await consoleRead("Insira o cookie _U: ");
  const imgPrompt = await consoleRead("Insira o prompt da imagem: ");

  let maxRetries = 15;
  let requestId: string | undefined = undefined;
  console.log("Obtendo id da requisição");
  while (maxRetries > 0) {
    try {
      requestId = await getImageRequestId(_U, imgPrompt);
      break;
    } catch (err) {
      console.log(`error: ${err as string}. Retrying...`);
    }

    maxRetries -= 1;
    await sleep(5000);
  }
  if (requestId === undefined) {
    console.log("Falha ao tentar obter id da requisição");
    return;
  }

  maxRetries = 15;
  let imgURLs: string[] | undefined = undefined;
  console.log("Obtendo URL das imagens");
  while (maxRetries > 0) {
    try {
      imgURLs = await getImgURLs(requestId);
      break;
    } catch (err) {
      console.log(`error: ${err as string}. Retrying...`);
    }

    maxRetries -= 1;
    await sleep(5000);
  }
  if (imgURLs === undefined) {
    console.log("Falha ao tentar obter url das imagens");
    return;
  }

  console.log("Salvando imagens");
  await downloadImages(imgURLs, `imgs-${requestId}`);
  console.log("Imagens salvas");
}

main();
