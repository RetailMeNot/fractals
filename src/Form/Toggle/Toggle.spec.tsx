// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Toggle } from './Toggle.component';

describe('Component: Toggle', () => {
    it('should be defined', () => {
        const subject = <Toggle />;

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
