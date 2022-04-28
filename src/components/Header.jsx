import "./Header.css";
import HamburguerList from "./Hamburguerlist";
import logo from "../assets/icons/logo.svg"
import sacola from "../assets/icons/sacola.svg"

function Background() {
  return   <div className="Background">
    <div className="Background__header Header">
		<div className="row">
			<div className="Header__logo Logo">
				<img src={logo} width="70px" alt="Logo El Geladon" className="Logo__icone" />
				<span className="Logo__titulo">Hamburgueria</span>
			</div>
			<div className="Header__opcoes Opcoes">
				<div className="Opcoes__sacola Sacola">
					<img src={sacola} width="40px" className="Sacola__icone" alt="Sacola de compras" />
				</div>
			</div>
		</div>
	</div>

  <div className="Background__container">
    <HamburguerList />
  </div>
</div>
   
  
}

export default Background