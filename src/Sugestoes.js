export default function Sugestoes(){
    const sugestao = [
        <Sugestao src="assets/img/bad.vibes.memes.svg" name="bad.vibes.memes" desc="Segue você"/>,
        <Sugestao src="assets/img/chibirdart.svg" name="chibirdart" desc="Segue você"/>,
        <Sugestao src="assets/img/razoesparaacreditar.svg" name="razoesparaacreditar" desc="Novo no Instagram"/>,
        <Sugestao src="assets/img/adorable_animals.svg" name="adorable_animals" desc="Segue você"/>,
        <Sugestao src="assets/img/smallcutecats.svg" name="Segue você" desc="Segue você"/>,
    ]
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

     return <div class="sugestoes">
     <div class="titulo">
       Sugestões para você
       <div>Ver tudo</div>
     </div>
     {sugestao.map(sugestao =>sugestao)}
   </div>
}