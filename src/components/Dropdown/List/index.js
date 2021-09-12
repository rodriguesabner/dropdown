import React from 'react';
import {Item, Layout, Wrapper} from "./styles";
import {DollarSign, Globe, Inbox, Lock, LogOut, Settings, User} from "react-feather";

const List = () => {
    return (
        <Layout>
            <Wrapper>
                <Item>
                    <button onClick={() => alert("Clicked: Minha Conta")}>
                        <User/> Minha Conta
                    </button>
                </Item>

                <Item>
                    <button onClick={() => alert("Clicked: Mensagens")}>
                        <Inbox/> Mensagens
                    </button>
                </Item>

                <Item>
                    <button>
                        <DollarSign/> Pagamentos
                    </button>
                </Item>

                <Item>
                    <button>
                        <Lock/> Privacidade
                    </button>
                </Item>

                <Item>
                    <button>
                        <Globe/> Português Brasil
                    </button>
                </Item>

                <Item>
                    <button>
                        <Settings/> Configurações
                    </button>
                </Item>

                <Item>
                    <button>
                        <LogOut/> Sair
                    </button>
                </Item>
            </Wrapper>
        </Layout>
    );
};

export default List;
