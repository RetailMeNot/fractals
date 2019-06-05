// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, select, number, text, object } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from 'styled-components';
// ANCHOR
import { Button, Typography } from '..';
import { colors } from '../theme/index';
// SUBJECT
import * as README from './README.md';
import {
    Modal,
    BaseModalBackground,
    ModalProvider,
    ModalSize,
} from './Modal.component';

const { useState } = React;
const { Close, Header, Content, Footer } = Modal;

const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100vw;
    height: 120vh;
`;

const sizeOptions: ModalSize[] = ['sm', 'lg'];

storiesOf('Components/Modal', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () => {
        const OpenModalButton = () => {
            const [isOpen, setIsOpen] = useState<boolean>(true);

            return (
                <React.Fragment>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                    <Modal
                        size={select('size', sizeOptions, 'lg')}
                        isOpen={isOpen}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                        allowScroll={boolean('allowScroll', false)}
                    >
                        <Header title="It's dangerous to go alone.">
                            <Close onClick={() => setIsOpen(false)} />
                        </Header>
                        <Content>
                            <Typography>Stuff in the middle</Typography>
                        </Content>
                        <Footer>
                            <Button
                                block
                                onClick={() => setIsOpen(false)}
                                variant="outline"
                            >
                                Decline
                            </Button>
                            <Button block onClick={() => setIsOpen(false)}>
                                Accept
                            </Button>
                        </Footer>
                    </Modal>
                </React.Fragment>
            );
        };

        return (
            <ModalProvider>
                <StyledStory>
                    <Typography tag="h5">Click this button!</Typography>
                    <OpenModalButton />
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Blank', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen />
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Content', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Close />
                        <Content>
                            <Typography>Content Area</Typography>
                        </Content>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Header + Content', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Header title="Header Area">
                            <Close />
                        </Header>
                        <Content>
                            <Typography>Content Area</Typography>
                        </Content>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Content + Footer', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Close />
                        <Content>
                            <Typography>Content Area</Typography>
                        </Content>
                        <Footer>
                            <Typography>Footer Area</Typography>
                        </Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Oversized', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal
                        isOpen
                        height={text('height', '100rem')}
                        size={select('size', sizeOptions, 'lg')}
                        backgroundProps={{
                            padding: text('background padding', '2rem 1rem'),
                        }}
                    >
                        <Header title="Oversized Modal">
                            <Close />
                        </Header>
                        <Content>
                            <Typography>Psst... down below!</Typography>
                        </Content>
                        <Footer>
                            <Typography>Psst... up above!</Typography>
                        </Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Custom Background', () => {
        const CustomBackground = styled(BaseModalBackground)`
            background-color: rgba(255, 0, 0, 0.6);
        `;

        return (
            <ModalProvider backgroundComponent={CustomBackground}>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Close />
                        <Header title="Modal with Custom Background" />
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Custom Theme', () => {
        const size = select('size', sizeOptions, 'sm');
        const width = text('width', '');
        const borderRadius = text('borderRadius', 'modal');

        const theme = {
            modal: {
                size: {
                    lg: {
                        height: 40,
                        width: 100,
                        contentPadding: 5,
                        footerHeight: 6.5,
                    },
                    sm: {
                        height: 25,
                        width: 30,
                        contentPadding: 1,
                        footerHeight: 4,
                    },
                },
            },
            radii: {
                modal: '32px',
            },
        };

        return (
            <ThemeProvider theme={object('theme', theme)}>
                <ModalProvider>
                    <StyledStory>
                        <Modal
                            size={size}
                            isOpen
                            width={width ? width : undefined}
                            borderRadius={
                                borderRadius ? borderRadius : undefined
                            }
                        >
                            <Close />
                            <Header title="Modal with Custom Theme" />
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Customized', () => {
        const height = text('height', '25rem');

        const OpenModalButton = () => {
            const [isOpen, setIsOpen] = useState<boolean>(true);

            return (
                <React.Fragment>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

                    <Modal
                        isOpen={isOpen}
                        size={select('size', sizeOptions, 'sm')}
                        height={height}
                        width={text('width', '30rem')}
                        margin={text('margin', 'auto')}
                        background={`linear-gradient(170deg, ${
                            colors.flashPink.base
                        } 0%, ${colors.fireSale.light} 50%, ${
                            colors.white.base
                        } calc(50% + 1.25px))`}
                        color={text('color', colors.white.base)}
                        backgroundProps={{
                            opacity: number('backgroundProps.opacity', 0.2),
                        }}
                        allowScroll={boolean('allowScroll', false)}
                        shadow={text(
                            'shadow',
                            '0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13)'
                        )}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                    >
                        <Close reverse onClick={() => setIsOpen(false)} />
                        <Content>
                            <Typography
                                tag="p"
                                scale={24}
                                weight={600}
                                align="center"
                            >
                                Customized Example
                            </Typography>
                            <Typography tag="p" align="center">
                                With some other text
                            </Typography>
                        </Content>
                        <Footer>
                            <Button
                                block
                                circular
                                variant="minimal"
                                colorTheme={colors.flashPink}
                                onClick={() => setIsOpen(false)}
                            >
                                Decline
                            </Button>
                            <Button
                                block
                                circular
                                colorTheme={colors.flashPink}
                                onClick={() => setIsOpen(false)}
                            >
                                Accept
                            </Button>
                        </Footer>
                    </Modal>
                </React.Fragment>
            );
        };

        return (
            <ModalProvider>
                <StyledStory>
                    <OpenModalButton />
                </StyledStory>
            </ModalProvider>
        );
    });
