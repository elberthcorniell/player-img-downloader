import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerSelector from '../src/containers/PlayerSelector';

describe('Player Selector Container', () => {
    test('Render as expected', () => {
        render(<PlayerSelector />)
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});