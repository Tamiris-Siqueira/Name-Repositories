import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const [erro, setErro] = useState(false);
  const history = useHistory();
  const [ usuario, setUsuario ] = useState ('');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repositories) => {
        repositoriesName.push(repositories.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange = {e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Usuário não encontrado :( Tente novamente!</S.ErrorMsg> : ''}
    </S.HomeContainer>
  )
}

export default App;
