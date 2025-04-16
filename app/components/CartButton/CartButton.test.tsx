import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { CartButton } from './index';

describe('<CartButton />', () => {
    it('The button is rendered', () => {
        const handleClick = vi.fn();
        render(<CartButton onClick={handleClick} />);
        const button = screen.getByText('Cart');
        expect(button).toBeInTheDocument();
    })

    it('The function onClick is called', async () => {
        const handleClick = vi.fn();
        render(<CartButton onClick={handleClick} />)
        const button = screen.getByText('Cart');
        await act(() => {
            fireEvent.click(button);
        })
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})