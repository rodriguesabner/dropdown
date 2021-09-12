import React, {useState} from 'react';
import {Container, Layout, ProfileWrapper} from "./styles";
import Dropdown from "../Dropdown";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleToggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <Layout>
            <Container>
                <h1 className={"logo"}>
                    Logo
                </h1>

                <div className={"right-items"}>
                    <button className={"login"}>
                        Login
                    </button>

                    <ProfileWrapper>
                        <img
                            src={"https://github.com/rodriguesabner.png"}
                            alt={"Abner Rodrigues"}
                            onClick={() => handleToggleDropdown()}
                        />

                        <Dropdown
                            open={open}
                        />
                    </ProfileWrapper>
                </div>
            </Container>
        </Layout>
    );
};

export default Header;
