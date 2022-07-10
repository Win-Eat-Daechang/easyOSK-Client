import styled from 'styled-components';
import { HeaderContainer, MicContainer } from '../components/Shared/components';
import Mic from '../components/Home/Mic';
const Menu = () => {
  return (
    <HomeContainer>
      <div>
        <HeaderContainer text={'홈'} />
        <section style={{ marginTop: '64px' }}>
          <h1>"업체명과</h1>
          <h1>메뉴를 말해주세요"</h1>
        </section>
      </div>
      <MicContainer>
        <Mic />
      </MicContainer>
    </HomeContainer>
  );
};
export default Menu;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
