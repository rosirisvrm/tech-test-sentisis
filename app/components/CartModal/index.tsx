import React from 'react';
import type { EventType } from '~/types/events';

interface Props {
    isOpen: boolean;
    toggleModal: () => void;
    currency?: string;
    totalSelectedTickets: number;
    totalPrice: number;
    tickets?: EventType[] | []; // data from the cart
}

const CartModal = ({ isOpen, toggleModal, currency = 'euro', totalSelectedTickets, totalPrice, tickets = [] }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50 z-50" 
          onClick={toggleModal}
        >
          <div 
              className="bg-gray-800 text-white p-6 rounded shadow-lg w-80"
              onClick={(e) => e.stopPropagation()}
          >
              <h2 className="text-xl font-bold mb-4 text-center">Cart Sumary</h2>
              <p className="text-gray-300 mb-4">This summary contain a list with the objects ordered</p>
              <div className="mb-4">
                {tickets.length > 0 &&
                  tickets.map((ticket: EventType) => (
                    <div key={ticket.id} className="mb-2 w-full flex row justify-between items-center">
                      <div className='w-1/3'>
                        <p className='text-center'>{ticket.title}</p>
                      </div>
                      <div className='w-1/3'>
                        <p className='text-center'>{ticket.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <p className="mb-2">{`Total selected tickets: ${totalSelectedTickets}`}</p>
              <p className="mb-4">
                {`Total price: ${totalPrice}`}
              </p>
          </div>
        </div>
      )}
    </div>
  );
}

export { CartModal };
