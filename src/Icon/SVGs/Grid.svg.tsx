// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 16,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M1.455 2.909V1.454H2.91l.001 1.455H1.455zM2.91 0H1.455C.653 0 0 .652 0 1.454v1.455c0 .802.653 1.455 1.455 1.455H2.91c.802 0 1.454-.653 1.454-1.455V1.454C4.364.652 3.712 0 2.91 0zm4.363 2.909V1.454h1.455l.001 1.455H7.273zM8.728 0H7.273c-.802 0-1.455.652-1.455 1.454v1.455c0 .802.653 1.455 1.455 1.455h1.455c.802 0 1.454-.653 1.454-1.455V1.454C10.182.652 9.53 0 8.728 0zm4.364 2.909V1.454h1.454l.002 1.455h-1.456zM14.546 0h-1.454c-.802 0-1.455.652-1.455 1.454v1.455c0 .802.653 1.455 1.455 1.455h1.454c.802 0 1.455-.653 1.455-1.455V1.454C16 .652 15.348 0 14.546 0zM1.455 8.727V7.272H2.91l.001 1.455H1.455zm1.455-2.91H1.455C.653 5.818 0 6.472 0 7.273v1.455c0 .802.653 1.455 1.455 1.455H2.91c.802 0 1.454-.653 1.454-1.455V7.272c0-.801-.652-1.454-1.454-1.454zm4.363 2.91V7.272h1.455l.001 1.455H7.273zm1.455-2.91H7.273c-.802 0-1.455.654-1.455 1.455v1.455c0 .802.653 1.455 1.455 1.455h1.455c.802 0 1.454-.653 1.454-1.455V7.272c0-.801-.652-1.454-1.454-1.454zm4.364 2.91V7.272h1.454l.002 1.455h-1.456zm1.454-2.91h-1.454c-.802 0-1.455.654-1.455 1.455v1.455c0 .802.653 1.455 1.455 1.455h1.454c.802 0 1.455-.653 1.455-1.455V7.272c0-.801-.653-1.454-1.455-1.454zM1.455 14.546V13.09H2.91l.001 1.455H1.455zm1.455-2.909H1.455C.653 11.636 0 12.288 0 13.09v1.455C0 15.347.653 16 1.455 16H2.91c.802 0 1.454-.653 1.454-1.455V13.09c0-.802-.652-1.454-1.454-1.454zm4.363 2.91V13.09h1.455l.001 1.455H7.273zm1.455-2.91H7.273c-.802 0-1.455.652-1.455 1.454v1.455c0 .802.653 1.455 1.455 1.455h1.455c.802 0 1.454-.653 1.454-1.455V13.09c0-.802-.652-1.454-1.454-1.454zm4.364 2.91V13.09h1.454l.002 1.455h-1.456zm1.454-2.91h-1.454c-.802 0-1.455.652-1.455 1.454v1.455c0 .802.653 1.455 1.455 1.455h1.454c.802 0 1.455-.653 1.455-1.455V13.09c0-.802-.653-1.454-1.455-1.454z"
                id="icon-grid"
            />
        </defs>
        <use fill={color} xlinkHref="#icon-grid" fillRule="evenodd" />
    </svg>
);