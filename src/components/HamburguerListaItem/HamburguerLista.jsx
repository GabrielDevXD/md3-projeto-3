import './Hamburguerlista.css'



function HamburguerListaItem ({Hamburguer, quantidadeSelecionada, index}){
  
	const RemoverItem = (i) => console.log('remover' + i);
	const adicionarItem = (i) => console.log('adicionar' + i)
    
    
const badgeCounter = (canRender, index) =>
Boolean(canRender) && (<span className="HamburgerListaItem__badge"> {quantidadeSelecionada[index]} </span>);

const RemoveButton = (canRender, index) =>
Boolean(canRender) && (<button className="Acoes__remover" onClick={()=> RemoverItem(index)}>Remover</button>);

    return(<div className="HamburguerListItem">
      {badgeCounter(quantidadeSelecionada), index }
    <div className="HamburguerListaItem__badge"></div>
    <div>
      <div className="HamburguerListItem__nome">{hamburguer.nome}</div>
      <div className="HamburguerListItem__preco">{hamburguer.preco.toFixed(2)}</div>
      <div className="HamburguerListItem__descricao"> {hamburguer.descricao}</div>
      <div className="HamburguerListItem__acoes Acoes">
        <button className={`Acoes__adicionar ${!quantidadeSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
   
      </div>
    </div>
      <img className="HamburguerListItem__foto" src={hamburguer.foto} alt={`Hamburguer de ${hamburguer.nome}`} />
  </div>
    )
}
export default HamburguerListaItem