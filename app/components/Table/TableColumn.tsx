import React from 'react';

interface Props{
    children?: React.ReactNode | string;
    text?: string | number;
    onClick?: any;
}

const TableColumn = ({ children, text = '', onClick }: Props) => {
    return(
        <div className='w-1/5 p-2 mb-0' onClick={onClick}>
            <p className='text-center'>{text}</p>
            {children && (
                <div className='flex items-center justify-center'>
                    {children}
                </div>
            )}
        </div>
    )
}

export { TableColumn }