import styled from 'styled-components';
import { HeaderContainer } from '../components/Shared/components';
import Mic from '../components/Home/Mic';
const Home = () => {
  return (
    <HomeContainer>
      <HeaderContainer text={'홈'} />
      <section style={{ marginTop: '64px' }}>
        <h1>"업체명과</h1>
        <h1>메뉴를 말해주세요"</h1>
      </section>
      <section>
        <Mic />
      </section>
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
`;
