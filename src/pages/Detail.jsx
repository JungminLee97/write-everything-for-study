import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonDetail from "../Components/PokemonDetail";
import MOCK_DATA from "../Components/MOCK_DATA";
const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const detailpage = new URLSearchParams(location.search);
  const detailpageId = Number(detailpage.get("id"));
  const locatedFindId = MOCK_DATA.find((arr) => arr.id === detailpageId);
  return (
    <DetailPageColor>
      <DetailBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감으로다시이동
      </DetailBtn>
      <PokemonDetail locatedFindId={locatedFindId} />
    </DetailPageColor>
  );
};
const DetailPageColor = styled.div`
  background-color: #ffe5b7;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailBtn = styled.button`
  background-color: #2e57a7;
  color: #fec301;
  font-size: 15px;
  font-weight: 600;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 3px solid red;
`;
export default Detail;
