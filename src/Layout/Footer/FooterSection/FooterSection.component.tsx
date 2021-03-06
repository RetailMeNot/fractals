// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';

const reset = css`
    margin: 0;
    padding: 0;
`;

const StyledFooterSectionElement = styled('section')`
    width: 6.875rem;
    font-family: base;
    font-size: 0.75rem;

    h4 {
        ${reset};
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
        color: font.base;
    }

    ul {
        list-style: none;
        ${reset};
    }

    li {
        ${reset};

        &:last-child {
            a {
                margin-bottom: 0;
            }
        }
    }

    a {
        display: block;
        margin-bottom: 0.75rem;
        text-decoration: none;
        color: text.base;
        font-weight: 500;
    }
`;

interface FooterSectionProps {
    className?: string;
    title?: string;
    children?: any;
}

export const FooterSection = ({
    children,
    title,
}: FooterSectionProps): React.ReactElement<any> => (
    <StyledFooterSectionElement className="anchor-footer-section">
        {title && <h4>{title}</h4>}
        {children}
    </StyledFooterSectionElement>
);
