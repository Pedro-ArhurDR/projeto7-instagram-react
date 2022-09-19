import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Storys from "./Storys"

export default function Corpo(){

    return <div class="corpo">
    <div class="esquerda">
      <Storys/>
      <Posts/>
    </div>
    <Sidebar/>
  </div>
}