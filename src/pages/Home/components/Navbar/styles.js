import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #4F4F4F	 15%, 	#4F4F4F	);

  .bid {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    padding-left: 15%;
  }
  .test{
    height: 55px;
  }
  .bidu {
    display: flex;
    align-items: center;
    padding: 0 32px;
  }
  .br{
    padding-left: 3%;
  }
  .brr{
    padding-left: 75%;
  }
  .blogin{
   padding-right: 6%;
  }
  .entrar{
  color: 	#fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  transition: filter 0.2s; 
  }
.buttonbid{
  width: 130%;
  height: 40px;
  background: #fff ;
  border: 0;
  border-radius: 10px;
  color: 	#1C1C1C;
  font-weight: 700;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  transition: filter 0.5s; 
  /* aplica p efeito de alterar a cor*/
}
   `;
 export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #fff;
    font-size: 18px;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 10;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      top: -6.5px;
      left: -8px;
      border-radius: 4px 0 0 0;

      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      0 -18px 60px -10px rgba(0, 0, 0, 0.025);

    background: #fff;
    border-radius: 6px;
  }

  .dropdown-section {
    position: absolute;
  }

  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #DCDCDC;
    width: 100%;
  }
`;
