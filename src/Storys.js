
 import Usuario from "./Usuario"
 export default function Storys(){
    const storys = [
        <Story src="assets/img/9gag.svg" name="9gag"/>,
        <Story src="assets/img/meowed.svg" name="meowed" />,
        <Story src="assets/img/barked.svg" name="barked"/>,
        <Story src="assets/img/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet"/>,
        <Story src="assets/img/wawawicomics.svg" name="wawawicomics"/>,
        <Story src="assets/img/respondeai.svg" name="respondeai"/>,
        <Story src="assets/img/filomoderna.svg" name="filomoderna"/>,
        <Story src="assets/img/memeriagourmet.svg" name="memeriagourmet"/>
    ]
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
    return <>
    <div class="stories">
        {storys.map(story => story)}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
}