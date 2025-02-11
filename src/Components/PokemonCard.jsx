import styled from "styled-components";

const ChangeDivTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChangeBtn = styled.button`
  margin: 8px;
`;
const PokemonCard = ({ pokemon, AddPokemons }) => {
  return (
    <ChangeDivTags>
      <img src={pokemon.img_url} />
      <p>{pokemon.types}</p>
      <ChangeBtn
        onClick={(e) => {
          e.stopPropagation();
          AddPokemons(pokemon.id);
        }}
      >
        추가
      </ChangeBtn>
    </ChangeDivTags>
  );
};
export default PokemonCard;
