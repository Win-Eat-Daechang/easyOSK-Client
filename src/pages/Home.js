import styled from 'styled-components';
import HeaderContainer from '../components/Shared/components';
const Home = () => {
  return (
    <HomeContainer>
      <HeaderContainer text={'홈'} />
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
