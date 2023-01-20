import styled from "styled-components";

export const Container = styled.div`
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 5%);
  border: none;
  border-radius: 5px;
  margin-left: 1rem;
  min-height: 3.6rem;
  padding: 0.8rem;

  justify-self: flex-start;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 5%);
  /* min-height: 10rem; */
  width: 100%;
  padding: 1.5rem;
  border-radius: 5px;
`;

export const OptionsContainer = styled.fieldset`
  border: none;
`;

export const OptionWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Option = styled.input``;
//   -webkit-appearance: none;
//   appearance: none;
//   margin: 0;
//   width: 1.5em;
//   height: 1.5em;
//   border: 2px solid black;
//   border-radius: 50%;
//   ::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     width: 0.75em;
//     height: 0.75em;
//     margin: 3px;
//   }
//   :hover {
//     ::after {
//       background-color: purple;
//     }
//   }
//   :focus {
//     outline: 2px solid yellow;
//   }
//   :checked {
//     ::after {
//       background-color: purple;
//     }
//     :hover {
//       background-color: white;
//       border: 2px solid black;
//       ::after {
//         background-color: black;
//       }
//     }
//   }

//   :disabled {
//     cursor: not-allowed;
//     border: 2px solid black;
//     background-color: purple;
//     :hover {
//       ::after {
//         background-color: purple;
//       }
//     }
//     :checked {
//       ::after {
//         background-color: black;
//       }
//       :hover {
//         background-color: purple;
//         ::after {
//           background-color: black;
//         }
//       }
//     }
//   }
// `;

export const LabelOption = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;
