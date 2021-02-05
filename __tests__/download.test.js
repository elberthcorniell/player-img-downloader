import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Download from '../src/components/Download';

describe('Download Button', () => {
    test('Render as expected', () => {
        render(<Download />)
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    test('Render as expected', () => {
        render(<Download>test</Download>)
        const textElement = screen.getAllByText('test');
        expect(typeof textElement[0]).not.toBe('undefined');
    });
});