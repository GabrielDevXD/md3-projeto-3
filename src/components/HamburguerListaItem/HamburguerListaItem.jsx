import './HamburguerListaItem.css'

function HamburguerListItem({ hamburguer, quantidadeSelecionada, index, onRemove, onAdd, clickItem }) {

    const badgeCounter = (canRender, index) =>
Boolean(canRender) && (<span className="HamburguerListaItem__badge"> {quantidadeSelecionada} </span>);

const removeButton = (canRender, index) =>
Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);


    return ( <div className="HamburguerListItem"onClick={(e) => clickItem(hamburguer.id)}>   
    {badgeCounter(quantidadeSelecionada, index)}
<div>
  <div className="HamburguerListItem__nome">{hamburguer.nome}</div>
  <div className="HamburguerListItem__preco">{hamburguer.preco}</div>
  <div className="HamburguerListItem__descricao"> {hamburguer.descricao}</div>
  <div className="HamburguerListItem__acoes Acoes">
  <button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} onClick={(e) => {e.stopPropagation(); onAdd(index);}}>adicionar</button>
  {removeButton(quantidadeSelecionada, index)}
{console.log(quantidadeSelecionada)}
  </div>
</div>
  <img  className="HamburguerListItem__foto"
        src={hamburguer.foto}
        alt={`Hamburguer de ${hamburguer.nome}`} />
  
</div>)
}

export default HamburguerListItem;