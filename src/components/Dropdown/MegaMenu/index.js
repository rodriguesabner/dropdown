import React from 'react';
import {Container, Item, Layout, Wrapper} from "./styles";
import {GitBranch, GitCommit, GitMerge, GitPullRequest, Video} from "react-feather";

const MegaMenu = () => {
    return (
        <Layout>
            <Container>
                <Wrapper>
                    <Item>
                        <GitBranch/>
                        <h1>
                            Editor
                        </h1>
                        <p>
                            Create videos with a single click. Add subtitles, transcribe audio and more...
                        </p>
                    </Item>

                    <Item>
                        <GitCommit/>
                        <h1>
                            Screen Recorder
                        </h1>
                        <p>
                            Create videos with a single click. Add subtitles, transcribe audio and more...
                        </p>
                    </Item>

                    <Item>
                        <GitMerge/>
                        <h1>
                            Comprossor
                        </h1>
                        <p>
                            Create videos with a single click. Add subtitles, transcribe audio and more...
                        </p>
                    </Item>

                    <Item>
                        <GitPullRequest/>
                        <h1>
                            Convertor
                        </h1>
                        <p>
                            Create videos with a single click. Add subtitles, transcribe audio and more...
                        </p>
                    </Item>
                </Wrapper>
            </Container>
        </Layout>
    );
};

export default MegaMenu;
