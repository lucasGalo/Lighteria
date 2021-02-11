import React, {useEffect, useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {//{imagem:"", estudio:"", itemDesc:"", itemName:"", titulo:"", preco:15., id:"145", quantidade:0}
  const [itensCheckout, setItensCheckout] = useState([]);
  
  console.warn("Chamo o provider" + itensCheckout);
  return (
    <DataContext.Provider
      value={{        
        itensCheckout,
        setItensCheckout,
        adicionarItem: (novoItem) => {
          console.warn(`item adicionado: ${JSON.stringify(novoItem)}`);
          console.warn(itensCheckout);
          let copiaItensCheckout = [...itensCheckout]; 
          let itemFiltrado = copiaItensCheckout.find(
            (itensCheckout) => itensCheckout.id === novoItem.id,
          );
          if (itemFiltrado) {
            itemFiltrado.quantidade = itemFiltrado.quantidade + 1;
          } else {
            novoItem.quantidade = 1;
            copiaItensCheckout = [...copiaItensCheckout, novoItem];
          }
          console.warn(copiaItensCheckout)
          setItensCheckout(copiaItensCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;