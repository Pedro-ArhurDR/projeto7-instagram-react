export default function Posts(){
    const posts = [
        <Post img1="assets/img/meowed.svg" name="meowed" img2="assets/img/gato-telefone.svg" imgC="assets/img/respondeai.svg" nameC="respondeai" numberC="101.523"/>,
        <Post img1="assets/img/barked.svg" name="barked" img2="assets/img/dog.svg" imgC="assets/img/adorable_animals.svg" nameC="adorable_animals" numberC="99.159"/>
    ]
    function Post(props){
        return <>
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.img1} />
              {props.name}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.img2}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imgC} />
              <div class="texto">
                Curtido por <strong>{props.nameC}</strong> e <strong>outras {props.numberC} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
        </>
    }
    return<div class="posts">
    {posts.map(post => post)}
  </div>
}