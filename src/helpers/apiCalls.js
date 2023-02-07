import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://spootie-gen-api.ericmbryant.com/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export async function textToImage(textPrompt) {
  return apiClient.get(`/text2img/${textPrompt}`).catch(function (error) {
    console.log(error)
  })
}
