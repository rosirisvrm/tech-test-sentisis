import React from 'react';

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

const CartButton = ({ children = 'Cart', onClick }: Props) => {
    return(
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg 
            hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={onClick}>
            {children}
        </button>
    )
}

export { CartButton };