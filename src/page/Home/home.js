// import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";
import Slider from "../../components/HeroSlider";
import styled from 'styled-components'
function Home() { 
    return ( 
       <div>
          <Wrapper>
            <Header/>
          </Wrapper>
          <Slider/>
       </div>
     );
}
let Wrapper = styled.div`
padding: 0 100px 0 100px;
`;

export default Home;