import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
const MainBox1 = styled.div`
  width: 210px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  overflow-wrap: break-word;
  align-items: center;
  justify-content: space-between;
`;

const PokemonList = ({ pokemons, Addpokemon }) => {
  const navigate = useNavigate();

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <MainBox1
            key={pokemon.id}
            onClick={() => {
              navigate("/detail");
            }}
          >
            <PokemonCard pokemon={pokemon} Addpokemon={Addpokemon} />
          </MainBox1>
        );
      })}
    </>
  );
};

export default PokemonList;
