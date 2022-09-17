import Sidebar from "./Sidebar"
import Usuario from "./Usuario"

export default function Corpo(){


    function Story(props){
        return <>
        <div class="story">
          <div class="imagem">
            <img src={props.src}/>
          </div>
          <Usuario name = {props.name}/>
        </div>
        </>
    }
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

    return <div class="corpo">
    <div class="esquerda">
      <div class="stories">
        <Story src="assets/img/9gag.svg" name="9gag"/>
        <Story src="assets/img/meowed.svg" name="meowed" />
        <Story src="assets/img/barked.svg" name="barked"/>
        <Story src="assets/img/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet"/>
        <Story src="assets/img/wawawicomics.svg" name="wawawicomics"/>
        <Story src="assets/img/respondeai.svg" name="espondeai"/>
        <Story src="assets/img/filomoderna.svg" name="filomoderna"/>
        <Story src="assets/img/memeriagourmet.svg" name="memeriagourmet"/>
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

      <div class="posts">
        <Post img1="assets/img/meowed.svg" name="meowed" img2="assets/img/gato-telefone.svg" imgC="assets/img/respondeai.svg" nameC="respondeai" numberC="101.523"/>
        <Post img1="assets/img/barked.svg" name="barked" img2="assets/img/dog.svg" imgC="assets/img/adorable_animals.svg" nameC="adorable_animals" numberC="99.159"/>
      </div>
    </div>

    <Sidebar/>
  </div>
}