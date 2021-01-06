import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');

        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }
        else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios:</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem> Repositório: {repository} </S.ListItem>
                    )
                })}
            </S.List>
            <p>Para saber mais sobre os repositórios, <a href=''>acesse</a>.</p>
            <S.LinkHome to = "/">Voltar</S.LinkHome>
        </S.Container>
    )
}
