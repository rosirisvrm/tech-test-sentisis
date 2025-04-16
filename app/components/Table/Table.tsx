import React from 'react';
import { TableHeader } from '~/components/Table/TableHeader';
import type { TableHeaderType } from '~/types/table';
import { TableEmpty } from './TableEmpty';
import { TableLoading } from './TableLoading';
import { TableError } from './TableError';

interface Props{
    data?: any[];
    tableHeaders: TableHeaderType[],
    children: React.ReactNode;
    loading?: boolean;
    error?: string | null;
}

const Table = ({ tableHeaders, children, loading, error }: Props) => {

    if(loading){
      return(<TableLoading />);
    }

    if(error){
      return(<TableError />);
    }
    
    return(
        <div>
          <TableHeader tableHeaders={tableHeaders} />
          <div>
            {children}
          </div>
        </div>
    )
}

export { Table };