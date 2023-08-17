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
  justify-content: space-between;
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
`

/*FORMULÁRIO*/
export const Formulario = styled.div`
  margin-right: 50px;
  margin-top: 10px;

  /*H2 ADICIONAR LIVRO*/
  h2{
    color: #5B5FCD;
    font-size: 24px;
    font-style: normal;
    margin-bottom: 15px;
    margin-left: 112px;
    margin-top: 50px;
  }
  form{
    margin-bottom: 30px;
  }
  input{
    padding-left: 15px;
    color: #454545;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 6px;
    width: 416px;
    height: 60px;
    border: none;
    background-color: #D5D6E6;
    outline: none;
  }
  ::placeholder{
    color: #9A9A9A;
    font-size: 16px;
  }  
`

/*BOTÃO ADICIONAR*/
export const Button = styled.button`
  background: #fff;
  border-radius: 26px;
  border: 2px solid ${props => props.isOn ? '#5B5FCD' : '#9A9A9A'};
  font-weight: ${props => props.isOn ? '600' : '400'};
  margin-left: 80px;
  margin-top: 15px;
  width: 234px;
  height: 58px;
  color: ${props => props.isOn ? '#5B5FCD' : '#9A9A9A'};
  font-size: 20px;
  cursor: pointer;
`


