
import styled from "styled-components";
import { BASE_URL } from "../../App";

function SearchResult({ data = [] }) {
  return (
    <FoodCartContainer>
      <FoodCarts>
        {data?.map((food) => (
          <FoodCard key={food.name}>
            <FoodImage>
              <img src={`${BASE_URL}${food.image}`} alt={food.name} />
            </FoodImage>

            <ImageInfo>
              <InfoBox>
                <Title>{food.name}</Title>
                <Desc>{food.text}</Desc>
              </InfoBox>

              <PriceTag>Rs. {Number(food.price ?? 0).toFixed(2)}</PriceTag>
            </ImageInfo>
          </FoodCard>
        ))}
      </FoodCarts>
    </FoodCartContainer>
  );
}

export default SearchResult;


const FoodCartContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 40px 0;
  height: calc(100vh - 240px);
  box-sizing: border-box;
`;

const FoodCarts = styled.div`
  width: calc(3 * 340px + 2 * 24px);
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 340px); 
  justify-content: center;
  gap: 24px;
  padding: 0 20px;
  box-sizing: border-box;

 
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
    width: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FoodCard = styled.article`
  width: 340px;
  background: rgba(40, 40, 40, 0.6);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: flex-start; 
  gap: 12px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.45);
  }
`;


const FoodImage = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid rgba(255, 255, 255, 0.12);
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const ImageInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  position: relative;
`;

const InfoBox = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 0 0 6px 0;
  color: #fff;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const Desc = styled.p`
  font-size: 12px;
  margin: 0;
  color: #ccc;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceTag = styled.button`
  align-self: flex-end;
  background: #ff6b6b;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  margin-top: 30px;

  &:hover{
     transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.45);
  }
`;