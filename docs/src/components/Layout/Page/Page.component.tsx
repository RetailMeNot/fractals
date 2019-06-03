// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import { AutoComplete } from '@retailmenot/anchor';
// COMPONENTS
import { fonts, NormalizeCSS } from '../../../../../src/theme';
import { Footer } from '../';
import { CodePreview } from '../../CodePreview';
import {
    Grid,
    Cell,
    CenteredCell,
    Search,
    Typography,
} from '../../../../../src';
// ASSETS
import logo from './anchor-logo.svg';
// THEME
import { colors } from '../../../../../src/theme';

const StyledPageElement = styled.div``;

interface PageProps {
    className?: string;
    children?: any;
    enableFooter?: boolean;
}

const StyledContentBody = styled.div`
    box-sizing: border-box;
    width: 90%;

    table {
        width: 100%;
        font-family: ${fonts.fontFamily};
        margin: 1rem 0;
    }
    th {
        text-align: left;
        padding: 0.75rem 0.5rem;
        border-bottom: solid thin ${colors.silver.dark};
    }
    tr {
        &:nth-child(even) {
            background-color: ${colors.silver.light};
        }
    }
    td {
        padding: 0.75rem 0.5rem;
        &:first-child {
            font-family: monospace;
            color: ${colors.flashPink.dark};
        }
        &:nth-child(3) {
            font-family: monospace;
            color: ${colors.cyberMango.dark};
        }
        &:nth-child(4) {
            text-align: center;
        }
    }

    blockquote {
        padding-bottom: 0;
        > p {
            padding-bottom: 0.5rem;
        }
    }
`;
const StyledContentMain = styled.main`
    box-sizing: border-box;
    padding-left: 1rem;
`;

const StyledLogoContainer = styled.a`
    border-right: solid thin ${colors.silver.base};
    width: 100%;
    margin-left: 1rem;
    display: block;
`;

const StyledHeader = styled.header`
    z-index: 90; // Set high because of the code editor
    position: sticky;
    top: 0;
    display: block;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
`;

const StyledSideNav = styled(Cell)`
    box-sizing: border-box;
    background-color: ${colors.silver.light};
    border-right: solid thin ${colors.silver.base};
`;

const StyledPrimaryNav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: flex-end;

    a {
        padding: 1.5rem;
        box-sizing: border-box;
        display: inline-flex;
        height: 100%;
        min-width: 4rem;
        color: ${colors.charcoal.base};
        &:hover {
            color: ${colors.flashPink.base};
        }
    }
`;

const StyledTable = styled.table``;

const Components: any = {};

Components.code = (props: any) => <CodePreview {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.inlineCode = (props: any) => <Typography tag="code" {...props} />;
Components.pre = (props: any) => <Typography tag="pre" {...props} />;
Components.h1 = ({ children, ...props }: any) => (
    <Typography
        id={`${children}`.toLowerCase()}
        weight={600}
        tag="h1"
        {...props}
        children={children}
    />
);
Components.h2 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h2"
        lineHeight={2.3}
        {...props}
        children={children}
    />
);
Components.h3 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h3"
        lineHeight={2.5}
        {...props}
        children={children}
    />
);
Components.h4 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h4"
        {...props}
        children={children}
    />
);
Components.h5 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h5"
        {...props}
        children={children}
    />
);
Components.h6 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h6"
        {...props}
        children={children}
    />
);
Components.p = (props: any) => <Typography tag="p" {...props} />;
Components.a = (props: any) => (
    <Typography color={colors.flashPink.base} tag="a" {...props} />
);
Components.blockquote = (props: any) => (
    <Typography tag="blockquote" {...props} />
);
Components.strong = (props: any) => (
    <Typography weight={600} tag="strong" {...props} />
);
Components.ul = (props: any) => <ul {...props} />;
Components.ol = (props: any) => <ol {...props} />;
Components.li = (props: any) => <li {...props} />;
// TODO: This only binds to MD tables, not HTML
Components.table = (props: any) => <StyledTable {...props} />;

export const Page = ({
    children,
    className,
    enableFooter,
}: PageProps): React.ReactElement<any> => (
    <StyledPageElement className={classNames(className)}>
        <NormalizeCSS />
        <StyledHeader>
            <Grid
                columns="300px minmax(300px, 1fr) minmax(200px, 1fr)"
                columnGap="1rem"
                minRowHeight="4.625rem"
            >
                <CenteredCell>
                    <StyledLogoContainer href="/">
                        <img alt="Anchor Logo Horizontal" src={logo} />
                    </StyledLogoContainer>
                </CenteredCell>
                <CenteredCell>
                    <AutoComplete
                        placeholder="Search on Anchor"
                        prefix={<Search />}
                        shadow={false}
                        border={false}
                        dataSource={['1', '1', '1', '1']}
                    />
                </CenteredCell>
                <Cell>
                    <StyledPrimaryNav>
                        <Typography
                            tag="a"
                            weight={600}
                            className="active"
                            href="/support"
                        >
                            Support
                        </Typography>
                        <Typography
                            tag="a"
                            weight={600}
                            className="active"
                            href="/support"
                        >
                            Github
                        </Typography>
                    </StyledPrimaryNav>
                </Cell>
            </Grid>
        </StyledHeader>
        <StyledContentBody>
            <Grid columns="minmax(180px, 300px) 1fr">
                <StyledSideNav>
                    <Typography tag="p">
                        TODO: when we have accordions
                    </Typography>
                </StyledSideNav>
                <Cell>
                    <StyledContentMain>
                        <MDXProvider components={Components}>
                            {children}
                        </MDXProvider>
                        {enableFooter && <Footer />}
                    </StyledContentMain>
                </Cell>
            </Grid>
        </StyledContentBody>
    </StyledPageElement>
);

export default Page;
