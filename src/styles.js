import styled from 'styled-components'

/*BACKGROUND*/
export const Tela = styled.div`
  background: #D5D6E6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

/*CONTAINER PRINCIPAL*/
export const Container = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  width: 944px;
  height: 609px;
  border-radius: 16px;
  box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.25);

  /*POSIÇÃO LISTA DE LIVROS*/
  .registro{
    background-color: #5B5FCD;
    width: 418px;
    height: 609px;
    margin-left: 0px;
    border-radius: 16px 0px 0px 16px;
  }

  /*H1 REGISTRO DE LIVROS*/
  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    margin-top: 50px;
  }
  
  /*TEXTO NENHUM LIVRO ENCONTRADO*/
  p{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    margin-top: 50%;
  }

  /*POSIÇÃO FORMULARIO*/
  .forPosicao{
    margin-left: 150px;
  }
`

/*H2 ADICIONAR LIVRO*/
export const Formulario = styled.div`
h2{
    color: #5B5FCD;
    font-size: 24px;
    font-style: normal;
  }
`

/*BOTÃO ADICIONAR*/
export const Button = styled.button`
  background: ${props => props.isOn ? '#000000' : 'gray'};
  border-radius: 10px;
  width: 150px;
  height: 35px;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
`