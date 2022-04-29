import './HamburguerListaItem.css'

function HamburguerListItem({ hamburguer, quantidadeSelecionada, index, onRemove, onAdd }) {

    const badgeCounter = (canRender, index) =>
Boolean(canRender) && (<span className="HamburguerListaItem__badge"> {quantidadeSelecionada[index]} </span>);

const removeButton = (canRender, index) =>
Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);


    return ( <div className="HamburguerListItem">   
    {badgeCounter(quantidadeSelecionada[index], index)}
<div>
  <div className="HamburguerListItem__nome">{hamburguer.nome}</div>
  <div className="HamburguerListItem__preco">{hamburguer.preco}</div>
  <div className="HamburguerListItem__descricao"> {hamburguer.descricao}</div>
  <div className="HamburguerListItem__acoes Acoes">
  <button className={`Acoes__adicionar ${!quantidadeSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() =>  onAdd(index)}>adicionar</button>
  {removeButton(quantidadeSelecionada[index], index)}

  </div>
</div>
  <img  className="HamburguerListItem__foto"
        src={hamburguer.foto}
        alt={`Hamburguer de ${hamburguer.nome}`} />
  
</div>)
}

export default HamburguerListItem