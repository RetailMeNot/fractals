// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
// COMPONENTS
import { ItemProps } from './Item/Item.component';
// THEME
import { colors, fonts, variables } from '../theme';

interface MenuProps {
    children?:
        | Array<React.ReactElement<ItemProps>>
        | React.ReactElement<ItemProps>;
    className?: string;
    size?: 'small' | 'large';
    // Color
    bg?: string;
    color?: string;
    // Configuration
    justify?: 'flex-start' | 'flex-end';
}

const StyledMenu = styled('nav')`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  min-width: 250px;
  /* TODO: for mobile */
  //overflow-y: hidden;
  //overflow-x: auto;

  background: ${({ bg = colors.grapePurchase.base }: MenuProps) => bg};
  font-size: 0.875rem;
  font-family: ${fonts.fontFamily};
  border-radius: ${variables.borderRadius};

  /* TODO: use React.clone to append a run-time class here instead of using a * selector */
  > * > a,
  > a {
    display: inline-block;
    line-height: 1.125rem;
    color: ${({ color = colors.white.base }: MenuProps) => color};
    transition: background-color 500ms, color: 500ms;
    margin: 0 0.125rem;

    &:hover {
      color: ${({ color = colors.white.base }: MenuProps) =>
          lighten(20, color)};
      background-color: rgba(255, 255, 255, .1);
    }

    &:active,
    &.active {
      color: ${({ color = colors.white.base }: MenuProps) =>
          lighten(20, color)};
      background-color: rgba(255, 255, 255, .1); // TODO: more or less opacity
    }

    &:focus {
      color: ${({ color = colors.silver.dark }: MenuProps) =>
          lighten(20, color)};
      background-color: rgba(255, 255, 255, .1);
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  /* Positioning */
  justify-content: ${({ justify = 'flex-start' }: MenuProps) => justify};

  /* Menu Sizes */
  ${({ size = 'large' }: MenuProps) => MenuSizes[size]};
`;

const MenuSizes = {
    small: css`
        > * > a,
        > a {
            font-size: 0.75rem;
            line-height: 0.75rem;
            font-weight: 500;
            padding: 0.5rem 0.75rem;
        }
    `,
    large: css`
        > * > a,
        > a {
            border-radius: ${variables.borderRadius};
            font-weight: 600;
            padding: 1rem 0.75rem;
        }
    `,
};

export const Menu = ({
    className,
    children,
    ...props
}: MenuProps): React.ReactElement<any> => (
    <StyledMenu className={classNames('anchor-menu', className)} {...props}>
        {/* TODO: React.cloneElement() to add props from parent to child? */}
        {/* TODO: Need to solve the container issue */}
        {children}
    </StyledMenu>
);
