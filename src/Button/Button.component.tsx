// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';
// ANCHOR
import { colors, fonts, sizes } from '../theme';
import { Theme, TRANSITION_SPEED } from './utils';
import { Flip } from './Flip';
import { HitArea } from './HitArea';

type Variant = 'primary' | 'outline' | 'minimal';

type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

interface ButtonProps {
    children?: any;
    disabled?: boolean;
    revealed?: boolean;
    showSpinner?: boolean;
    className?: string;
    margin?: string;

    flip?: boolean;
    colorTheme?: Theme;
    minWidth?: string;
    block?: boolean;
    icon?: any;
    circular?: boolean;
    reverse?: boolean;

    forceHover?: boolean;
    forceFocus?: boolean;
    forceActive?: boolean;

    onClick?: () => void;
    variant?: Variant;
    size?: ButtonSize;
}

interface StyledButtonProps extends ButtonProps {
    iconOnly?: boolean;
    borderRadius: string;
    buttonStyles: ButtonStyles;

    // named this way to avoid applying html attributes
    $height: number;
    $size: ButtonSize;

    // make nonnullable
    colorTheme: Theme;
    variant: Variant;
}

const themeDefaults = {
    primary: colors.savvyCyan,
    outline: {
        base: colors.savvyCyan.dark,
        light: colors.savvyCyan.base,
        dark: colors.savvyCyan.dark,
    },
    minimal: {
        base: colors.savvyCyan.dark,
        light: colors.savvyCyan.base,
        dark: colors.savvyCyan.dark,
    },
};

const reverseDefaults = {
    primary: {
        base: colors.charcoal.light,
        light: colors.charcoal.light,
        dark: colors.charcoal.dark,
    },
    outline: {
        base: colors.white.base,
        light: colors.white.base,
        dark: colors.charcoal.light,
    },
    minimal: colors.white,
};

const dimensions = {
    xs: {
        width: 4,
        height: 2,
        padding: 0.5,
        circularPadding: 1,
        fontSize: 0.75,
    },
    sm: {
        width: 5,
        height: 2.5,
        padding: 1,
        circularPadding: 1.5,
        fontSize: 0.875,
    },
    md: {
        width: 12.5,
        height: 3,
        padding: 1.5,
        circularPadding: 2,
        fontSize: 1,
    },
    lg: {
        width: 12.5,
        height: 3.5,
        padding: 2,
        circularPadding: 2.5,
        fontSize: 1,
    },
};

interface ButtonStyles {
    base: FlattenSimpleInterpolation;
    disabled: FlattenSimpleInterpolation;
    hover: FlattenSimpleInterpolation;
    active?: FlattenSimpleInterpolation;
    focus?: FlattenSimpleInterpolation;
    focusOutline?: FlattenSimpleInterpolation;
}

interface ButtonStylesGroup {
    [key: string]: ButtonStyles;
}

const ButtonColorStyles = ({
    colorTheme,
    reverse,
}: {
    colorTheme: Theme;
    reverse?: boolean;
}): ButtonStylesGroup => {
    const { base, dark, light } = colorTheme;

    if (reverse) {
        return {
            primary: {
                base: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                    color: ${base};
                `,
                disabled: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                    color: ${base};
                    opacity: 0.5;
                `,
                hover: css`
                    border: solid thin
                        ${transparentize(0.15, colors.white.base)};
                    background-color: ${transparentize(
                        0.15,
                        colors.white.base
                    )};
                    color: ${base};
                `,
                active: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                `,
                focus: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 2px
                        ${transparentize(0.6, colors.white.base)};
                `,
            },
            outline: {
                base: css`
                    border: solid thin ${base};
                    background-color: transparent;
                    color: ${base};
                `,
                disabled: css`
                    opacity: 0.5;
                    border: solid thin ${base};
                    background-color: transparent;
                    color: ${base};
                `,
                hover: css`
                    border: solid thin ${base};
                    background-color: ${base};
                    color: ${colors.charcoal.light};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 2px
                        ${transparentize(0.6, colors.white.base)};
                `,
            },
            minimal: {
                base: css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${base};
                `,
                disabled: css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${colors.ash.dark};
                `,
                hover: css`
                    background: ${transparentize(0.84, base)};
                    color: ${base};
                `,
                active: css`
                    background: ${transparentize(0.8, base)};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 2px
                        ${transparentize(0.6, colors.white.base)};
                `,
            },
        };
    }

    return {
        primary: {
            base: css`
                border: solid thin ${base};
                background-color: ${base};
                color: ${colors.white.base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.light};
                background-color: ${colors.ash.light};
                color: ${colors.ash.dark};
            `,
            hover: css`
                background-color: ${dark};
                border: solid thin ${dark};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, base)};
            `,
        },
        outline: {
            base: css`
                border: solid thin ${base};
                background-color: transparent;
                color: ${base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.dark};
                background-color: transparent;
                color: ${colors.ash.dark};
            `,
            hover: css`
                background-color: ${dark};
                border: solid thin ${dark};
                color: ${colors.white.base};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, light)};
            `,
        },
        minimal: {
            base: css`
                border: solid thin transparent;
                background-color: transparent;
                color: ${base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.light};
                background-color: ${colors.ash.light};
                color: ${colors.ash.dark};
            `,
            hover: css`
                background: ${transparentize(0.84, colors.ash.dark)};
                color: ${dark};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, colors.ash.dark)};
            `,
        },
    };
};

const OutlineStyles = ({ buttonStyles, borderRadius }: StyledButtonProps) =>
    css`
        &:after {
            position: absolute;
            content: '';

            // overlap border and extend 2px past
            top: calc(-${sizes.border.width.base} - 2px);
            left: calc(-${sizes.border.width.base} - 2px);
            right: calc(-${sizes.border.width.base} - 2px);
            bottom: calc(-${sizes.border.width.base} - 2px);

            border-radius: calc(${borderRadius} + 2px);

            // shadow instead of border so that it doesn't contribute to clickable area
            ${buttonStyles.focusOutline}
        }
    `;

const StyledButton = styled.button<StyledButtonProps>`
	position: relative;
    border-radius: ${(props: StyledButtonProps) => props.borderRadius};
	font-weight: 600;
	font-family: ${fonts.fontFamily};
	text-align: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none !important;

    margin: ${({ margin }: StyledButtonProps) => margin || `0`};
    ${({ block, margin }: StyledButtonProps) =>
        !margin &&
        css`
            & + & {
                margin-left: ${block ? sizes.margin.sm : sizes.margin.md};
            }
        `};

	transition: ${TRANSITION_SPEED} ease background-color,
                ${TRANSITION_SPEED} ease border-color,
                ${TRANSITION_SPEED} ease color,
                ${TRANSITION_SPEED} ease fill;

	// These properties are deprecated but help make white text on colored backgrounds look more crisp in Chrome and
	// Firefox.
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Base and Disabled Styles */
    ${({ disabled, buttonStyles }: StyledButtonProps) =>
        disabled
            ? css`
                  ${buttonStyles.disabled}
                  cursor: not-allowed;
              `
            : buttonStyles.base}

    /* Sizing */
    padding: ${({ $size, circular, iconOnly }: StyledButtonProps) =>
        iconOnly
            ? '0'
            : `0 ${
                  circular
                      ? dimensions[$size].circularPadding
                      : dimensions[$size].padding
              }rem`};
    font-size: ${({ $size }) => dimensions[$size].fontSize}rem;
    height: ${({ $height }) => $height}rem;
    ${({ $size, minWidth, iconOnly, $height, block }: StyledButtonProps) =>
        iconOnly
            ? css`
                  // Make it a square
                  width: ${$height}rem;
              `
            : block
            ? css`
                  width: 100%;
              `
            : css`
                  min-width: ${minWidth || `${dimensions[$size].width}rem`};
              `}

    ${({ icon, iconOnly, $size }: StyledButtonProps) =>
        icon &&
        !iconOnly &&
        css`
            // Space icon from text
            & > .anchor-icon {
                margin-right: ${$size === 'lg' || $size === 'md'
                    ? 0.5
                    : 0.375}rem;
            }
        `}

    /* Hover styles */
    ${({
        forceHover,
        forceFocus,
        forceActive,
        disabled,
        revealed,
        flip,
        buttonStyles,
    }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        css`
            &:hover,
            &:focus,
            &:active {
                ${buttonStyles.hover}
                ${flip &&
                    css`
                        & > .flip-base {
                            opacity: 0;
                        }
                    `}
            }

            ${(forceHover || forceFocus || forceActive) &&
                css`
                    ${buttonStyles.hover}
                    ${flip &&
                        css`
                            & > .flip-base {
                                opacity: 0;
                            }
                        `}
                `}
        `}

    /* Active styles */
    ${({ forceActive, disabled, revealed, buttonStyles }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        buttonStyles.active &&
        css`
            &:active {
                ${buttonStyles.active}
            }
            ${forceActive && buttonStyles.active}
        `}

    /* Focus styles */
    ${({ forceFocus, disabled, revealed, buttonStyles }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        buttonStyles.focus &&
        css`
            &:focus {
                ${buttonStyles.focus}
            }
            ${forceFocus && buttonStyles.focus}
        `}

    /* Outline */
    &:focus {
        ${OutlineStyles}
    }
    ${({ forceFocus, ...props }: StyledButtonProps) =>
        forceFocus && OutlineStyles(props)}

    /* Revealed State */
    ${({ variant, revealed }: StyledButtonProps) =>
        variant === 'primary' &&
        revealed &&
        css`
            background-color: ${colors.silver.base};
            border: solid thin ${colors.silver.base};
            color: ${colors.charcoal.light};
            font-weight: bold;
        `}
`;

export const Button = ({
    className,
    flip = false,
    variant = 'primary',
    size = 'md',
    block,
    disabled,
    revealed,
    colorTheme,
    reverse,
    circular,
    children,
    minWidth,
    icon: Icon,
    ...props
}: ButtonProps): React.ReactElement<ButtonProps> => {
    const iconOnly = Icon && React.Children.count(children) === 0;

    /* tslint:disable no-console */
    if (flip && circular) {
        console.warn(
            "Buttons should not have both 'flip' and 'circular' props."
        );
    }
    if (flip && reverse) {
        console.warn(
            "Buttons should not have both 'flip' and 'reverse' props."
        );
    }
    if (flip && disabled) {
        console.warn(
            "Buttons with 'flip' are not meant to be 'disabled'. Did you mean to make it 'revealed'?"
        );
    }
    if (iconOnly && minWidth) {
        console.warn("Button is icon-only so 'minWidth' prop will be ignored.");
    }
    if (iconOnly && block) {
        console.warn("Button is icon-only so 'block' prop will be ignored.");
    }
    if (block && minWidth) {
        console.warn(
            "Button has 'block' prop so 'minWidth' prop will be ignored."
        );
    }
    /* tslint:enable no-console */

    const iconScale = iconOnly
        ? size === 'xs' ||
          (size === 'sm' && (circular || variant === 'minimal'))
            ? 'md'
            : 'lg'
        : 'md';

    const height = dimensions[size].height;
    const borderRadius = circular
        ? `${height / 2}rem`
        : sizes.border.radius.base;
    const width = iconOnly ? dimensions[size].height : dimensions[size].width;

    if (!colorTheme) {
        colorTheme = reverse
            ? reverseDefaults[variant]
            : themeDefaults[variant];
    }

    const buttonStyles = ButtonColorStyles({ colorTheme, reverse })[variant];

    return (
        <StyledButton
            className={classNames('anchor-button', className)}
            flip={flip}
            block={block}
            colorTheme={colorTheme}
            reverse={reverse}
            minWidth={minWidth}
            $height={height}
            $size={size}
            icon={Icon}
            iconOnly={iconOnly}
            circular={circular}
            variant={variant}
            disabled={disabled}
            revealed={revealed}
            borderRadius={borderRadius}
            buttonStyles={buttonStyles}
            {...props}
        >
            {/* Caveat: If the width was set to below 3rem, but the button ended up
                being wider (because wide contents) then a horizontal hitbox could
                be added to the button when it isn't needed. */}
            {(height < 3 || width < 3) && (
                <HitArea buttonHeight={height} buttonWidth={width} />
            )}
            {Icon && <Icon scale={iconScale} />}
            {children}
            {flip && !disabled && !revealed && <Flip colorTheme={colorTheme} />}
        </StyledButton>
    );
};
