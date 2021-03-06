import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g transform="translate(2 3)" fill="currentColor">
            <circle opacity=".9" cx="2.75" cy="1.25" r="1.25" />
            <circle opacity=".9" cx="9.25" cy="1.25" r="1.25" />
            <path
                d="M11.5 9.264c0 .407-.344.736-.769.736-.424 0-.769-.33-.769-.736C9.962 7.17 8.188 5.472 6 5.472S2.038 7.17 2.038 9.264c0 .407-.345.736-.77.736C.845 10 .5 9.67.5 9.264.5 6.357 2.962 4 6 4s5.5 2.357 5.5 5.264z"
                fillRule="nonzero"
            />
        </g>
    </g>
);

export const SadFace = iconHOC(svgPath, 'sad-face');
