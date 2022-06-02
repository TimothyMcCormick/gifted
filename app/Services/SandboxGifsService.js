import { ProxyState } from "../AppState.js";


const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 12000
})

class SandboxGifsService{
  async getSandboxGifs(){
    const res = await sandboxApi.get()
    console.log('getSandboxGifs', res.data);
    ProxyState.sandboxGifs = res.data.map((sbg) => new SandboxGif(sbg))
  }
}

export const sandboxGifsService = new SandboxGifsService()