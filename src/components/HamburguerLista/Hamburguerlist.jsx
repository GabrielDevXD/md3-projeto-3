import React, { useState } from 'react';
import './hamburguer.css'
import { hamburguer } from '../../mocks/hamburguer';
import HamburguerListaItem from 'components/HamburguerListaItem/HamburguerListaItem';


function HamburguerList() {
  const [hamburguerSelecionado, sethamburguerSelecionado] = useState({});

  const adicionarItem = (hamburguerIndex) => {
          const hamburguer = { [hamburguerIndex]: Number(hamburguerSelecionado[hamburguerIndex] || 0) +1 }
          sethamburguerSelecionado({ ...hamburguerSelecionado, ...hamburguer});
  }
  const RemoverItem = (hamburguerIndex) => {
    const hamburguer = { [hamburguerIndex]: Number(hamburguerSelecionado[hamburguerIndex] || 0) -1 }
    sethamburguerSelecionado({ ...hamburguerSelecionado, ...hamburguer});
}


   return <div className="HamburguerList">
        {hamburguer.map((hamburguer, index) => ( 
   <HamburguerListaItem key={`HamburgerList-${index}`}
   hamburguer={hamburguer}
   QuantidadeSelecionada={hamburguerSelecionado[index]}
   index={index}
   onRemove={index => RemoverItem(index)}
   onAdd={index =>  adicionarItem(index)}/>

    ))}
  </div>
}

export default HamburguerList;