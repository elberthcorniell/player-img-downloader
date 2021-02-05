import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from '../src/components/Dropdown';

describe('Dropdown Button', () => {
    test('Render as expected', () => {
        render(<Dropdown />)
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    test('Render as expected', () => {
        render(<Dropdown
            items={[
                { name: 'test1' },
                { name: 'test2' },
            ]}
        ></Dropdown>)
        document.getElementsByTagName('button')[0].click();
        const textElement1 = screen.getAllByText('test1');
        const textElement2 = screen.getAllByText('test2');
        expect(typeof textElement1[0]).not.toBe('undefined');
        expect(typeof textElement2[0]).not.toBe('undefined');
    });
});