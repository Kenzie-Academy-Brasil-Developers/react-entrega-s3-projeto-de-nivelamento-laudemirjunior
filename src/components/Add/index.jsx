import { useState } from "react";

const Add = ({ products, setProducts }) => {
  const [inputCode, setInputCode] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDiscount, setInputDiscount] = useState("");

  const handleClick = () => {
    setProducts([
      ...products,
      {
        code: Number(inputCode),
        name: inputName,
        description: inputDescription,
        price: Number(inputPrice),
        discount: Number(inputDiscount),
      },
    ]);
  };

  return (
    <div className="add">
      <h3>Cadastre um produto</h3>
      <div>
        <label>Código</label>
        <input
          placeholder="Código do produto"
          value={inputCode}
          onChange={() => setInputCode}
        ></input>
      </div>
      <div>
        <label>Nome</label>
        <input
          placeholder="Nome do produto"
          value={inputName}
          onChange={() => setInputName}
        ></input>
      </div>
      <div>
        <label>Descrição</label>
        <input
          placeholder="Descrição do produto"
          value={inputDescription}
          onChange={() => setInputDescription}
        ></input>
      </div>
      <div>
        <label>Preço</label>
        <input
          placeholder="Preço do produto"
          value={inputPrice}
          onChange={() => setInputPrice}
        ></input>
      </div>
      <div>
        <label>Desconto</label>
        <input
          placeholder="Desconto do produto"
          value={inputDiscount}
          onChange={() => setInputDiscount}
        ></input>
      </div>
      <button onClick={() => handleClick()}>Adicionar produto</button>
    </div>
  );
};

export default Add;
