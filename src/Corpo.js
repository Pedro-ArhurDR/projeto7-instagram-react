import Sidebar from "./Sidebar"
import Usuario from "./Usuario"

export default function Corpo(){


    function Story(props){
        return <>
        <div class="story">
          <div class="imagem">
            <img src={props.src}/>
          </div>
          <Usuario name = "9gag"/>
        </div>
        </>
    }

    return <div class="corpo">
    <div class="esquerda">
      <div class="stories">
        <Story src="assets/img/9gag.svg"/>
        <div class="story">
          <div class="imagem">
            <img src="assets/img/meowed.svg" />
          </div>
          <Usuario name = "meowed"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/barked.svg" />
          </div>
          <Usuario name = "barked"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/nathanwpylestrangeplanet.svg" />
          </div>
          <Usuario name = "nathanwpylestrangeplane"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/wawawicomics.svg" />
          </div>
          <Usuario name = "wawawicomics"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/respondeai.svg" />
          </div>
          <Usuario name = "respondeai"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/filomoderna.svg" />
          </div>
          <Usuario name = "filomoderna"/>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/memeriagourmet.svg" />
          </div>
          <Usuario name = "memeriagourmet"/>
        </div>

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

      <div class="posts">
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/meowed.svg" />
              meowed
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/gato-telefone.svg" />
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
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/barked.svg" />
              barked
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/dog.svg" />
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
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Sidebar/>
  </div>
}