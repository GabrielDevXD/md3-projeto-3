import "./Header.css";
import HamburguerList from "components/HamburguerLista/Hamburguerlist";
import Navbar from 'components/Navbar/Navbar'


function Background() {
  return   <div className="Background">
 

  <div className="Background__container">
	  <Navbar />
    <HamburguerList />
  </div>
</div>
   
  
}

export default Background