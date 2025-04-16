import React from 'react';
import type { TableHeaderType } from '~/types/table';

interface Props {
    tableHeaders: TableHeaderType[];
}

const TableHeader = ({ tableHeaders }: Props) => {
    return(
        <div className='flex row justify-center items-center rounded-t-3xl border border-gray-200 
            p-6 dark:border-gray-700 space-y-4'>
            {tableHeaders.map((header: TableHeaderType) => (
                <div key={header.id} className='w-1/5 mb-0'>
                    <p className='text-center font-semibold'>
                        {header.title}
                    </p>
                </div>
            ))}    
      </div>
    )
}

export { TableHeader };