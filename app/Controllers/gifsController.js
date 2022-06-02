import { ProxyState } from "../AppState.js";
import { gifsService } from "../Services/gifsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawGifs(){
  let gifs = ProxyState.gifs
  let template = ''
  gifs.forEach(g => template += g.Template)
  document.getElementById('gif-template').innerHTML = template
}


export class GifsController{
  constructor(){
    console.log('gifs controller loaded');
    let gifts = ProxyState.gifs
    ProxyState.on('gifs', _drawGifs)
    _drawGifs()
  }

  async getGifs(){
    try {
      await gifsService.getGifs()
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }
}