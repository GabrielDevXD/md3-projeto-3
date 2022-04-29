import React, { useState } from 'react';
import HamburguerListaItem from 'components/HamburguerListaItem/HamburguerLista';
import './hamburguer.css'
import { hamburguer } from "mocks/hamburguer.js";


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
    <HamburguerListaItem key={`HamburguerListaItem${index}`}/>
    ))}
  </div>
}

export default HamburguerList;