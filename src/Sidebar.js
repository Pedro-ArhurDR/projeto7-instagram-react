import Sugestoes from "./Sugestoes"
import Usuario_Perfil from "./Usuario_Perfil"

export default function Sidebar(){
    
    const links= [
        "Sobre •", "Ajuda •", "Imprensa •", "API •", "Carreiras •", "Privacidade •", "Termos •", "Localizações •", "Contas mais relevantes •",
       " Hashtags •", "Idioma"
    ]

    
    
    return <>

    <div class="sidebar">
        <Usuario_Perfil name="pankas"/>
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