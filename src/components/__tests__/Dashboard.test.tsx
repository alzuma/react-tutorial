import * as React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../Dashboard';

describe('Simple rect test', () => {
    test('Contains div with hello message', () => {
        const dashboard = shallow(<Dashboard />);
        const theDiv = dashboard.find('#message');
        expect(theDiv).toHaveLength(1);
        expect(theDiv.text()).toBe('Hello Mom!');
    });
});
