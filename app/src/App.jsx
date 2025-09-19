import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import SearchResult from './Component/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData]=useState(null);
  const [selectedBtn,setSelectedBtn]=useState("all");

  const FetchFoodData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      console.log("Fetched Data:", json);
      setData(json); 
      setFilteredData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchFoodData();
  }, []);

  const SearchFood=(e)=>{
    const SearchValue=e.target.value;
    
  if(SearchValue===""){
    setFilteredData(null);
  }

  const filter=data.filter((food)=>food.name.toLowerCase().includes(SearchValue.toLowerCase()));
  setFilteredData(filter);
  };

  const FilterData=(type)=>{
    if(type==="all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    
    const filter=data.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
     setFilteredData(filter);
     setSelectedBtn("all");
  }



  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='/images/Foody Zone.svg' alt='Logo' />
        </div>
        <div className='search'>
          <input onChange={SearchFood} placeholder="Search here..." />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={()=>FilterData("all")}>All</Button>
        <Button onClick={()=>FilterData("breakfast")}>Breakfast</Button>
        <Button onClick={()=>FilterData("lunch")}>Lunch</Button>
        <Button onClick={()=>FilterData("dinner")}>Dinner</Button>
      </FilterContainer>
      <SearchResult data={filteredData}/>
    </Container>
  )
}

export default App;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  display: flex;
  min-height: 140px;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
  padding: 15px;

  .logo img{
    width: 200px;
    height: 100px;
  }

  .search input {
    background: transparent;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    outline: none;   
  }
`;
const FilterContainer=styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 30px;
  max-width: 100vw;
`
export const Button=styled.button`
  background-color: #bc132c;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  font-weight: 300;
  color: white;
  cursor: pointer;
  &:hover{
       transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.45);
  }
`;