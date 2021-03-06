// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, {
    css,
    FlattenSimpleInterpolation,
} from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';

type ScaleFactors = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IconSVGProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        SpaceProps {
    scale?: ScaleFactors;
    color?: string;
    className?: string;
    children?: any;
}

interface StyledIconSVGProps extends IconSVGProps {
    $color?: string;
}

export const Scale = {
    xs: 8,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const DefaultColor = 'currentColor';
export const DefaultScale = 'md';

const StyledIcon = styled('span')<StyledIconSVGProps>`
    ${spaceStyles};
    display: inline-block;
    height: ${({ scale = 'md' }): string => `${Scale[scale] / 16}rem`};
    width: ${({ scale = 'md' }): string => `${Scale[scale] / 16}rem`};
    line-height: 0;
    ${({ $color }): FlattenSimpleInterpolation => css({ color: $color })}
`;

StyledIcon.displayName = 'AnchorIcon';

export function iconHOC(svgPath: any, iconClassName: string) {
    return React.forwardRef(
        (
            {
                color = DefaultColor,
                scale = DefaultScale,
                className,
                ...props
            }: IconSVGProps,
            ref: React.RefObject<any>
        ) => (
            <StyledIcon
                ref={ref}
                className={classNames('anchor-icon', iconClassName, className)}
                scale={scale}
                $color={color}
                {...props}
            >
                <svg
                    width={Scale[scale]}
                    height={Scale[scale]}
                    viewBox="0 0 16 16"
                >
                    {svgPath}
                </svg>
            </StyledIcon>
        )
    );
}

export type AnchorIcons =
    | 'AddEvent'
    | 'ArrowBack'
    | 'ArrowForward'
    | 'AvatarIcon'
    | 'AvatarOutline'
    | 'BarCode'
    | 'BulletList'
    | 'Calendar'
    | 'Camera'
    | 'Cart'
    | 'CashBack'
    | 'Cells'
    | 'Chat'
    | 'Check'
    | 'CheckSmall'
    | 'ChevronDown'
    | 'ChevronDownSmall'
    | 'ChevronLeft'
    | 'ChevronLeftSmall'
    | 'ChevronRight'
    | 'ChevronRightSmall'
    | 'ChevronUp'
    | 'ChevronUpSmall'
    | 'Clock'
    | 'Close'
    | 'CloseSmall'
    | 'CommentMore'
    | 'CreditCard'
    | 'CrossHairs'
    | 'Cut'
    | 'Disabled'
    | 'Dislike'
    | 'Download'
    | 'Ellipses'
    | 'EllipsesVertical'
    | 'Envelope'
    | 'EnvelopeOpen'
    | 'Error'
    | 'Expand'
    | 'Gear'
    | 'GiftCard'
    | 'Hamburger'
    | 'Heart'
    | 'HeartOutline'
    | 'Home'
    | 'Info'
    | 'InfoOutline'
    | 'Laptop'
    | 'Lightning'
    | 'Like'
    | 'ListIcon'
    | 'Lock'
    | 'Map'
    | 'Marker'
    | 'MarkerOutline'
    | 'Mobile'
    | 'News'
    | 'Pencil'
    | 'Play'
    | 'Plus'
    | 'PlusSmall'
    | 'Print'
    | 'Question'
    | 'QuestionOutline'
    | 'Refresh'
    | 'RetailMeNotLogo'
    | 'SadFace'
    | 'Search'
    | 'Share'
    | 'Sliders'
    | 'Star'
    | 'StarHalf'
    | 'StarOutline'
    | 'Success'
    | 'SuccessOutline'
    | 'Tag'
    | 'TagAdd'
    | 'Upload';
