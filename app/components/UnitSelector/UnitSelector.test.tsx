import { describe, it, expect } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { UnitSelector } from './index';

describe('<UnitSelector />', () => {
    it('Should show the initial value of 0', () => {
        render(<UnitSelector />);
        const unitSelector = screen.getByDisplayValue('0');	
        expect(unitSelector).toBeInTheDocument();
    })

    it('Should increment by 1 when clicking the + button', async () => {
        render(<UnitSelector />);
        const button = screen.getByText('+');
        await act(() => {
            fireEvent.click(button);
        })
        const unitSelector = screen.getByDisplayValue('1');
        expect(unitSelector).toBeInTheDocument();
    })
})