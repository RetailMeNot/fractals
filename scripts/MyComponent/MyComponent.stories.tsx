// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { MyComponent } from './MyComponent.component';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.body;
    font-family: ${th('typography.fontFamily')};
`;

storiesOf('Components/MyComponent', module).add('Default', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <MyComponent />
        </StyledStory>
    </ThemeProvider>
));