// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M8 4.038c.352 0 .636.273.636.61v.673c.533.096 1.01.308 1.356.619.257.232.27.619.029.865a.654.654 0 0 1-.9.027c-.24-.215-.668-.35-1.121-.35-.777 0-1.272.363-1.272.612 0 .199 0 .61 1.272.61 1.877 0 2.545.948 2.545 1.835 0 .868-.801 1.57-1.91 1.77v.674a.624.624 0 0 1-.635.612.624.624 0 0 1-.636-.612v-.672c-.533-.095-1.01-.307-1.356-.62a.594.594 0 0 1-.03-.863.652.652 0 0 1 .9-.027c.24.215.67.349 1.122.349.777 0 1.273-.362 1.273-.611 0-.506-.692-.611-1.273-.611-2.215 0-2.545-1.15-2.545-1.834 0-.868.8-1.572 1.909-1.771v-.674c0-.338.284-.611.636-.611zm7.897 3.029c.862 5.226-3.803 9.688-9.25 8.825C3.374 15.375.73 12.869.135 9.733a7.39 7.39 0 0 1 .329-3.986c.17-.453.538-.71 1.014-.557.7.227.396.92.396.92a6.042 6.042 0 0 0-.314 3.341c.495 2.663 2.804 4.764 5.598 5.1 4.202.507 7.76-2.84 7.356-6.856-.216-2.152-1.66-4.045-3.675-5.007a6.496 6.496 0 0 0-4.088-.54 6.64 6.64 0 0 0-2.283.884l1.433.285a.7.7 0 0 1 .565.826.7.7 0 0 1-.313.443.772.772 0 0 1-.231.09c-.024.005-.048.007-.073.01-.032.004-.062.014-.094.014a.76.76 0 0 1-.15-.015l-2.524-.503-.324-.064a.699.699 0 0 1-.564-.822v-.003l.046-.213.545-2.524a.652.652 0 0 1 .107-.24c.016-.023.038-.041.057-.062a.75.75 0 0 1 .126-.119C3.1.117 3.13.104 3.16.089a.803.803 0 0 1 .15-.058.595.595 0 0 1 .104-.018C3.44.01 3.467 0 3.494 0a.731.731 0 0 1 .609.315.671.671 0 0 1 .105.524l-.176.815A8.172 8.172 0 0 1 5.649.972 8.338 8.338 0 0 1 9.058.699c3.457.433 6.293 3.061 6.839 6.368z"
                id="icon-cash-back"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-cash-back" />
        </g>
    </svg>
);
