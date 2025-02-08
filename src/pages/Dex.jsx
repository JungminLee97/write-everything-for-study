import styled from "styled-components";
import PokemonList from "../Components/PokemonList";
import Dashboard from "../Components/Dashboard";
import MOCK_DATA from "../Components/MOCK_DATA";
import { useState } from "react";

const Dex = () => {
  const [pokemons, setPokemons] = useState(MOCK_DATA);
  const [addpokemon, setAddpokemon] = useState([]);
  const Addpokemon = (id) => {
    const selected = pokemons.find((poke) => {
      return poke.id === id;
    });
    setAddpokemon([...addpokemon, selected]);
  };
  return (
    <div>
      <Dashboard addpokemon={addpokemon}></Dashboard>
      <MainBox>
        <PokemonList pokemons={pokemons} Addpokemon={Addpokemon} />
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
