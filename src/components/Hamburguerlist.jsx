import React, { useState } from 'react';
import './hamburguer.css'
import { hamburguer } from '../mocks/hamburguer';


function hamburguerList() {
  const [HamburguerSelecionado, setHamburguerSelecionado] = useState({}) ;

  const adicionarItem = (HamburguerIndex) => {
          const Hamburguer = { [HamburguerIndex]: Number(HamburguerSelecionado[HamburguerIndex] || 0) +1 }
          setHamburguerSelecionado({ ...HamburguerSelecionado, ...Hamburguer});
  
  }
   return <div className="HamburguerList">
        {hamburguer.map((hamburguer, index) => ( 
    <div className="HamburguerListItem" key={`HamburgerList-${index}`}>
      <div>
        <div className="HamburguerListItem__nome">{hamburguer.nome}</div>
        <div className="HamburguerListItem__preco">{hamburguer.preco.toFixed(2)}</div>
        <div className="HamburguerListItem__descricao"> {hamburguer.descricao}</div>
        <div className="HamburguerListItem__acoes Acoes">
          <button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adicionar</button>
        </div>
      </div>
        <img className="HamburguerListItem__foto" src={hamburguer.foto} alt={`Hamburguer de ${hamburguer.nome}`} />
    </div>
    ))}
  </div>
}

export default hamburguerList;