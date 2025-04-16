import React from 'react';

interface Props {
    children: React.ReactNode;
    isLast?: boolean;
    onClick: () => void;
}

const TableRow = ({ children, isLast, onClick }: Props) => {
    return (
        <div className={`flex w-full row items-center border-l border-r border-b border-gray-200 p-6
             dark:border-gray-700 space-y-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 
             ${isLast && 'rounded-b-3xl'}`} onClick={onClick}
        >
            {children}
        </div>
    )
}

export { TableRow };