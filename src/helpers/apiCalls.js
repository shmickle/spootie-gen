import apiKey from "../apiKey"

const deepai = require("deepai")

deepai.setApiKey(apiKey)

export async function textToImage(text, gridSize) {
  const resp = await deepai.callStandardApi("text2img", {
    text: text,
    grid_size: gridSize || "1",
  })

  return resp.output_url
}
