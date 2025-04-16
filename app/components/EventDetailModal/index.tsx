import React from 'react';
import type { EventType } from '~/types/events';

interface Props {
    isOpen: boolean;
    toggleModal: () => void;
    event: EventType;
    addToCart: () => void;
}

const EventDetailModal = ({ isOpen, toggleModal, event, addToCart }: Props) => {

  const addToCartHandler = () => {
    addToCart();
    toggleModal();
  }

  return (
    <div className="flex flex-col items-center">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50 z-50">
            <div className="bg-gray-800 text-white p-6 rounded shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Event Detail</h2>
                <h3 className="text-lg font-semibold mb-4 text-center capitalize">{event.title}</h3>
                <p className='text-center capitalize mb-2'>{event.type}</p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded 
                      hover:bg-blue-600 transition duration-200 cursor-pointer" onClick={addToCartHandler}>
                      Add
                  </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export { EventDetailModal };
