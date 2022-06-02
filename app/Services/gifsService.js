import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/gift.js"


const gifApi = axios.create({
  
  baseURL : 'https://api.giphy.com/v1/gifs'
})

let params = {
  api_key: 'E9K4jxFCJ5kmnn5UYQKJUhqNYDzmeDql',
  rating: 'PG',
  q: 'lion'
}

class GifsService{
  async getGifs(){
    window.event.preventDefault()
    const res = await gifApi.get('search', {
      params
    })
    console.log('getGif', res.data);
    ProxyState.gifs = res.data.data.map(g => new Gift(g))
    console.log(ProxyState.gifs);
  }
  
  
}

export const gifsService = new GifsService()