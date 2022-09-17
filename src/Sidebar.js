import Sugestoes from "./Sugestoes"
export default function Sidebar(){
    
    const links= [
        "Sobre •", "Ajuda •", "Imprensa •", "API •", "Carreiras •", "Privacidade •", "Termos •", "Localizações •", "Contas mais relevantes •",
       " Hashtags •", "Idioma"
    ]
    
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
        <Sugestoes/>
      <div class="links">
        {links.map (link => link)}
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
    </>
}