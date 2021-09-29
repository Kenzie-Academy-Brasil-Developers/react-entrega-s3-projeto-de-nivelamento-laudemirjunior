const Card = ({ currentSale }) => {
  const totalPrice = () => {
    return currentSale.reduce((acc, total) => acc + total.price, 0).toFixed(2);
  };

  const totalDiscount = () => {
    return currentSale
      .reduce((acc, total) => acc + total.discount, 0)
      .toFixed(2);
  };

  return (
    <div className="display">
      <h3>Carrinho de compras</h3>
      <table>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Desconto</th>
        </tr>
        {currentSale.map((item) => {
          return (
            <tr id={item.code} key={item.index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
            </tr>
          );
        })}
      </table>
      <div className="sale">
        <h3>Valor de Compra: R${totalPrice()}</h3>
        <h3>Valor economizado: R${totalDiscount()}</h3>
      </div>
    </div>
  );
};

export default Card;
