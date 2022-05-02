import React, { useState, useEffect } from 'react';
import './hamburguer.css'
import HamburguerListaItem from 'components/HamburguerListaItem/HamburguerListaItem';
import { hamburguerService } from 'services/HamburguerService';
import HamburguerDetalhesModal from '../Hamburguerdetalhemodal/HamburguerDetalhesModal';

function HamburguerList() {
  const [hamburguer, sethamburguer] = useState ([]);

  const [hamburguerSelecionado, sethamburguerSelecionado] = useState({});

  const [hamburguermodal, sethamburguermodal] = useState(false);

  const adicionarItem = (hamburguerIndex) => {
          const hamburguer = { [hamburguerIndex]: Number(hamburguerSelecionado[hamburguerIndex] || 0) +1 }
          sethamburguerSelecionado({ ...hamburguerSelecionado, ...hamburguer});
  }
  const RemoverItem = (hamburguerIndex) => {
    const hamburguer = { [hamburguerIndex]: Number(hamburguerSelecionado[hamburguerIndex] || 0) -1 }
    sethamburguerSelecionado({ ...hamburguerSelecionado, ...hamburguer});
}

const getLista = async () => {
  const response = await hamburguerService.getLista();
  sethamburguer(response);
};

const gethamburguerById = async (hamburguerId) => {
  const response = await hamburguerService.getById(hamburguerId);
  sethamburguermodal(response);
};

useEffect(() => {
  getLista();
}, []);

   return <div className="HamburguerList">
        {hamburguer.map((hamburguer, index) => ( 
   <HamburguerListaItem key={`HamburgerList-${index}`}
   hamburguer={hamburguer}
   quantidadeSelecionada={+(hamburguerSelecionado[index])}
   index={index}
   onRemove={index => RemoverItem(index)}
   onAdd={index => adicionarItem(index)}
   clickItem={(hamburguerId) => gethamburguerById(hamburguerId)}
    />


    ))}
  {hamburguermodal && <HamburguerDetalhesModal hamburguer={hamburguermodal} closeModal={() => sethamburguermodal(false)} />}
…
  </div>
}


export default HamburguerList;