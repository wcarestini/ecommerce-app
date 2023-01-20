import { ReactNode, useEffect, useState } from "react";
import {
  calcularPrecoPrazo,
  consultarCep,
  rastrearEncomendas,
} from "correios-brasil";

import {
  AddressContainer,
  Container,
  Input,
  LabelOption,
  Option,
  OptionsContainer,
  OptionWrapper,
} from "./styles";
import axios from "axios";

interface DeliveryProps {}

export function Delivery({}: DeliveryProps) {
  const [address, setAddress] = useState();
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [deliveryOptionSelected, setDeliveryOptionSelected] = useState([]);

  function handleInput({ target, key }) {
    if (key === "Enter") {
      consultarCep(target.value).then((response) => {
        setAddress(response);
      });
    }
  }

  function handleCheck({ target }) {
    setDeliveryOptionSelected(target.value);
  }

  useEffect(() => {
    if (address && address.cep) {
      axios
        .get("http://0.0.0.0:8080/deliveries/delivery-options/" + address.cep)
        .then((r) => {
          setDeliveryOptions(r.data);
        });
    }
  }, [address]);

  return (
    <Container>
      {address ? (
        <AddressContainer>
          <p>
            {address.logradouro} - {address.bairro} - {address.localidade} -
            {address.uf}
          </p>
        </AddressContainer>
      ) : (
        <>
          <label>Entrega para:</label>
          <Input placeholder="CEP" type="text" onKeyDown={handleInput} />
        </>
      )}
      <OptionsContainer>
        {deliveryOptions.map((option) => {
          return (
            <OptionWrapper>
              <Option
                onChange={handleCheck}
                name="deliveryOption"
                type="radio"
                value={option.code}
                id={option.code}
              />
              <LabelOption htmlFor={option.code}>
                {option.type} {option.deadline} R$ {option.price}
              </LabelOption>
            </OptionWrapper>
          );
        })}
      </OptionsContainer>
    </Container>
  );
}
