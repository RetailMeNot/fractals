import * as React from 'react';
import { Typography } from '@retailmenot/anchor';
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';

interface NavLinkProps {
    to: string;
    children: any;
}

const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
`;

export const NavLink = ({ to, children, ...props }: NavLinkProps) => (
    <StyledLink to={to} {...props}>
        <Typography weight="600">{children}</Typography>
    </StyledLink>
);
