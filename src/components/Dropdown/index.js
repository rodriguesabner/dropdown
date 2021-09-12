import React from 'react';
import {Container, Layout} from "./styles";
import List from "./List";
import MegaMenu from "./MegaMenu";

const Dropdown = ({open}) => {
    return (
        open &&
        <Layout>
            <Container>
                {/*<List/>*/}
                <MegaMenu/>
            </Container>
        </Layout>
    );
};

export default Dropdown;
