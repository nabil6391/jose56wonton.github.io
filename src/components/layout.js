import styled from 'styled-components';
import {  colors, breakpoints, transitions} from './variables';

export const Four = styled.div`
  height: 100vh;
`

export const Three = styled.div`
  height: 75vh;
`

export const Hero  = styled.div`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeroContent = styled.div`
  height: auto;
  width: 100%;
  max-width: 500px;  
`
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1140px;
  ${breakpoints.xs(`
    width: 90%;
  `)}
  ${breakpoints.sm(`
    width: 80%;
  `)}
  ${breakpoints.md(`
    width: 80%;
 `)}
`

export const DarkBox = styled.div`
  padding: 20px; 
  background: ${colors.dark};
  color: ${colors.white};
  position: relative;
 
  span{
    transition: ${transitions.fast};
  }  
  &:hover{
    span{
      transition: ${transitions.fast};
      transform: translate(5px,5px);
    }
  }
`


export const BoxBigText = styled.div`
  padding: 30px; 
  background: ${colors.white};
  color: ${colors.dark};
  position: relative;
  span{
    transition: ${transitions.fast};
  }  
  &:hover{
    span{
      transition: ${transitions.fast};
      transform: translate(5px,5px);
    }
  }
`
export const BoxSmallText = styled.div`
  padding: 20px; 
  background: ${colors.regular};
  color: ${colors.black};
  position: relative;
 
  span{
    transition: ${transitions.fast};
  }  
  &:hover{
    span{
      transition: ${transitions.fast};
      transform: translate(5px,5px);
    }
  }
`
export const UnderLay = styled.span`
  position: absolute;
  width: 100%;
  z-index: -1; 
  height: 100%;
  top: 20px;
  
  background-color: ${colors.light};  
`

export const UnderLayRegular = styled.span` 
   position: absolute;
  width: 100%;
  z-index: -1; 
  height: 100%;
  top: 20px;
  background-color: ${colors.regular};  
`


export const Tools = styled.div`
  ul {
    list-style:none;
    padding: 0;
    li{
      display:inline-block;
      color: ${colors.regular};
      border: 2px solid  ${colors.regular};
      padding: 4px;
      border-radius: 4px;
      margin-bottom: 8px;
      margin-right: 8px;
    }
  }
`
export const SiteWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`