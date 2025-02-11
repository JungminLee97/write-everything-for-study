import styled from "styled-components";
import PokemonList from "../Components/PokemonList";
import Dashboard from "../Components/Dashboard";
import MOCK_DATA from "../Components/MOCK_DATA";
import { useEffect, useState } from "react";

const Dex = () => {
  const [pokemons, setPokemons] = useState(MOCK_DATA);
  const [emptyArray, SetEmptyArray] = useState([]);

  useEffect(() => {
    const savedPokemons = localStorage.getItem("selectedPokemons");
    if (savedPokemons) {
      SetEmptyArray(JSON.parse(savedPokemons));
    }
  }, []);

  const AddPokemons = (id) => {
    if (emptyArray.find((ar) => ar.id === id)) {
      alert("같은포켓몬은 잡을수없습니다.");
      return;
    }
    if (emptyArray.length >= 6) {
      alert("더 이상 추가할 수 없습니다! (최대 6개)");
      return;
    }
    const FindArray = pokemons.find((poke) => poke.id === id);
    const updatedArray = [...emptyArray, FindArray];
    SetEmptyArray(updatedArray);
    localStorage.setItem("selectedPokemons", JSON.stringify(updatedArray));
  };

  const deletedArray = (arr) => {
    const updatedArray = emptyArray.filter((empty) => empty.id !== arr.id);
    SetEmptyArray(updatedArray);
    localStorage.setItem("selectedPokemons", JSON.stringify(updatedArray));
  };
  return (
    <div>
      <Dashboard emptyArray={emptyArray} deletedArray={deletedArray} />
      <MainBox>
        <PokemonList pokemons={pokemons} AddPokemons={AddPokemons} />
      </MainBox>
    </div>
  );
};

const MainBox = styled.div`
  width: 1400px;
  height: 300vh;
  border: 1px solid red;
  background-color: #f0eeee;
  margin: 30px auto 30px auto;
  display: flex;
  overflow: auto;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`;

export default Dex;
