export default function Sidebar(){
    
    
    
    function Sugestao(props){
        return <div class="sugestao">
        <div class="usuario">
          <img src={props.src} />
          <div class="texto">
            <div class="nome">{props.name}</div>
            <div class="razao">{props.desc}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
     }



    function Usuario2(props){
       return <div class="usuario">
        <img src={props.src}/>
        <div class="texto">
          <strong>{props.name}</strong>
          <span>
            {props.user}
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    }
    return <>

    <div class="sidebar">
        <Usuario2 src="assets/img/catanacomics.svg" name="catanacomics" user="Catana"/>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <Sugestao src="assets/img/bad.vibes.memes.svg" name="bad.vibes.memes" desc="Segue você"/>
        <Sugestao src="assets/img/chibirdart.svg" name="chibirdart" desc="Segue você"/>
        <Sugestao src="assets/img/razoesparaacreditar.svg" name="razoesparaacreditar" desc="Novo no Instagram"/>
        <Sugestao src="assets/img/adorable_animals.svg" name="adorable_animals" desc="Segue você"/>
        <Sugestao src="assets/img/smallcutecats.svg" name="Segue você" desc="Segue você"/>
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
    </>
}