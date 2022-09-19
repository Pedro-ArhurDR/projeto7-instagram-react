import { useState } from "react"
export default function Usuario_Perfil(props){

    const [nome,setNome] = useState("PANOKOkkkkkkkk")
    const [foto, setFoto] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRqPLbRhtz71uQFS1yDSAOt1x-AYPnykaew&usqp=CAU")
    const [contador,setContador] = useState(false)

    

    return <div class="usuario">
     <img onClick={()=> setFoto(prompt("LINK DA FOTO"))} src={foto}/>
     {(foto===null || foto === "" ? 
     setFoto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRqPLbRhtz71uQFS1yDSAOt1x-AYPnykaew&usqp=CAU"):console.log(foto))}
     {console.log(foto)}
     <div class="texto">
       <strong>{props.name}</strong>
       <span>
         {nome}
         <ion-icon onClick={()=>setNome(prompt("ALTERE O NOME"))} name="pencil"></ion-icon>
         {nome===null || nome===""? setNome("(insira seu nome)"): console.log(nome)}
       </span>
     </div>
   </div>
 }