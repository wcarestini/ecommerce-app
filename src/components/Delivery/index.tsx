import { ReactNode, useEffect, useState } from "react";
import {
  calcularPrecoPrazo,
  consultarCep,
  rastrearEncomendas,
} from "correios-brasil";

import { Container } from "./styles";

interface DeliveryProps {}

export function Delivery({}: DeliveryProps) {
  const [address, setAddress] = useState();
  const deliveryOptions = [];

  function handleInput({ target, key }) {
    console.log(target);
    if (key === "Enter") {
      consultarCep(target.value).then((response) => {
        setAddress(response);
      });
    }
  }

  useEffect(() => {
    const cep = address ? address.cep : 0;
    let args = {
      sCepOrigem: "81200100",
      sCepDestino: cep,
      nVlPeso: "1",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "20",
      nVlLargura: "20",
      nCdServico: ["04014", "04510"], //Array com os códigos de serviço
      nVlDiametro: "0",
    };

    calcularPrecoPrazo(args).then((response) => {
      console.log(response);
    });
  }, [address]);

  return (
    <Container>
      <h1>Delivery</h1>
      {address ? (
        <>
          <h1>
            {address.localidade} - {address.uf}
          </h1>
          <h2>
            {address.logradouro} - {address.bairro}
          </h2>
          <h3>{address.cep}</h3>
        </>
      ) : (
        <>
          <label htmlFor="">CEP</label>
          <input type="text" onKeyDown={handleInput} />
        </>
      )}
      {deliveryOptions.map((option) => {})}
    </Container>
  );
}
