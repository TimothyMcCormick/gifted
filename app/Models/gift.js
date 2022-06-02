



export class Gift{
  constructor(data){
    this.id = data.id
    this.url = data.images.downsized.url
    
  }


  get Template(){
    return`
    <div class="col-md-3">
    <img src="${this.url}" alt="">
    <p>${this.url}</p>
    </div>
    `
  }

  get SandboxTemplate(){
    return`
    
    `
  }
}