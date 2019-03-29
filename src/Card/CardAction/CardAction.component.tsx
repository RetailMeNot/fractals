// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts } from '../../theme';

export interface CardActionProps {
    className?: string;
    children?: any;
}

const StyledCard = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.fontFamily};
    top: 0;
    right: 0;
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
`;

export const CardAction: React.FunctionComponent<CardActionProps> = ({
    className,
    children,
    ...props
}: CardActionProps): JSX.Element => (
    <StyledCard className={classNames(className)} {...props}>
        {children}
    </StyledCard>
);

export default CardAction;
