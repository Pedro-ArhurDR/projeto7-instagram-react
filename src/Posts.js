import { useState } from "react"
export default function Posts(){

    const [number,setNumber]= useState(112)
    const [number2,setNumber2]= useState(569)
    const [contador,setContador] = useState(0)
    const [contador2,setContador2] = useState(0)
    const [like, setLike] = useState('semLike')
    const [like2, setLike2] = useState('semLike2')
    const [curtida,setCurtida]= useState("heart-outline")
    const [curtida2,setCurtida2]= useState("heart-outline")
    const [marcador,setMarcador] = useState("bookmark-outline")
    const [marcador2,setMarcador2] = useState("bookmark-outline")
    console.log(contador)
    console.log(number)
  
    const posts = [
        <Post img1="assets/img/meowed.svg" name="meowed" img2="assets/img/gato-telefone.svg" 
        imgC="assets/img/respondeai.svg" nameC="respondeai" numberC={number} 
        heart={<ion-icon class={like2} onClick={() => contador === 0? setNumber(number+1) & setContador(contador+1) & setLike2('like2') & setCurtida("heart") 
        : setNumber(number-1) & setContador(contador-1)& setLike2('semlike2') &setCurtida("heart-outline")}name={curtida}></ion-icon>} 
        marcador={<ion-icon onClick={()=>setMarcador("bookmark")} name={marcador}></ion-icon>} />,

        <Post img1="assets/img/barked.svg" name="barked" img3="assets/img/dog.svg" 
        imgC="assets/img/adorable_animals.svg" nameC="adorable_animals" numberC={number2} 
        heart={<ion-icon class={like} onClick={() => contador2 === 0? setNumber2(number2+1) & setContador2(contador2+1) & setLike('like') & setCurtida2("heart") 
        : setNumber2(number2-1) & setContador2(contador2-1) & setLike('semLike') & setCurtida2("heart-outline")}
        name={curtida2}></ion-icon>}
        marcador2={<ion-icon onClick={()=>setMarcador2("bookmark")} name={marcador2}></ion-icon>} />,

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
            <img onClick={() => contador === 0? setNumber(number+1) & setContador(contador+1) & setLike2('like2') & setCurtida("heart") 
        : setNumber(number-1) & setContador(contador-1)& setLike2('semlike2') &setCurtida("heart-outline")} src={props.img2}/>
            <img onClick={() => contador2 === 0? setNumber2(number2+1) & setContador2(contador2+1) & setLike('like') & setCurtida2("heart") 
        : setNumber2(number2-1) & setContador2(contador2-1) & setLike('semLike') & setCurtida2("heart-outline")} src={props.img3}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                {props.heart}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                {props.marcador}
                {props.marcador2}
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