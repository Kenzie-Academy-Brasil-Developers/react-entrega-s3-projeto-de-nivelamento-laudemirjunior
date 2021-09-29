const Display = ({ products, currentSale, setCurrentSale }) => {
  const handleClick = (product) => {
    setCurrentSale([...currentSale, product]);
  };

  return (
    <div className="display">
      <h3>Produtos</h3>
      <table>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Desconto</th>
          <th>Adicionar ao carrinho</th>
        </tr>
        {products.map((item) => {
          return (
            <tr id={item.code} key={item.index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>
                <button onClick={() => handleClick(item)}>Adicionar</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Display;
