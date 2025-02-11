import styled from "styled-components";
const PokemonDetail = ({ locatedFindId }) => {
  return (
    <DetailPokemon>
      <Tag2 src={locatedFindId.img_url} alt={locatedFindId.korean_name} />
      <Tag3>{locatedFindId.korean_name}</Tag3>
      <Tag4>{locatedFindId.types}</Tag4>
    </DetailPokemon>
  );
};
const DetailPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tag1 = styled.h2`
  margin: 2rem;
  font-size: 25px;
  font-weight: 600;
`;
const Tag2 = styled.img`
  margin: 2rem;
  width: 220px;
  height: 220px;
`;
const Tag3 = styled.p`
  margin: 2rem;
  font-size: 25px;
  font-weight: 549;
  color: #0d9220;
`;
const Tag4 = styled.p`
  margin: 2rem;
  font-size: 25px;
  font-weight: 600;
  color: #f50808f4;
`;
export default PokemonDetail;
