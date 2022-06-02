import { ProxyState } from "../AppState.js";


function _drawSandboxGifs(){
  let gifs = ProxyState.sandboxGifs
  let template = ''
  gifs.forEach((g) => {
    template += g.SandboxTemplate
    document.getElementById('sbox-gif')
    
  })
}


export class SandboxGifsController{
  constructor(){
    console.log('sbox controller loaded');
    ProxyState.on('sandboxGifs', _drawSandboxGifs);
  }
}