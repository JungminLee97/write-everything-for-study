import styled from "styled-components";

const ChangeDivTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChangeBtn = styled.button`
  margin: 8px;
`;
const PokemonCard = ({ pokemon, Addpokemon }) => {
  return (
    <ChangeDivTags>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.types.join(",")}</p>
      <ChangeBtn
        onClick={(e) => {
          e.stopPropagation();
          Addpokemon(pokemon.id);
        }}
      >
        추가버튼
      </ChangeBtn>
    </ChangeDivTags>
  );
};
export default PokemonCard;
