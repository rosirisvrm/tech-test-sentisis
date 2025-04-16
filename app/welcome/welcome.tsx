import React, { useState } from 'react';
import type { EventType } from '~/types/events';
import type { TableHeaderType } from '~/types/table';
import { Table } from '~/components/Table/Table';
import { TableRow } from '~/components/Table/TableRow';
import { TableColumn } from '~/components/Table/TableColumn';
import { UnitSelector } from '~/components/UnitSelector';
import { EventDetailModal } from '~/components/EventDetailModal';
import { CartButton } from '~/components/CartButton';
import { CartModal } from '~/components/CartModal';
import { useEvents } from '~/hooks/useEvents';
// import { useCart } from '~/hooks/useCart';

const tableHeaders: TableHeaderType[] = [
  {
    id: "name",
    title: "Name",
  },
  {
    id: "type",
    title: "Type",
  },
  {
    id: "releaseDate",
    title: "Release Date",
  },
  {
    id: "unitSelector",
    title: "Unit Selector",
  },
  {
    id: "price",
    title: "Price",
  }
]

export function Welcome() {

  const { events, loading, error } = useEvents();
  // const { cart, addToCart } = useCart();

  const [eventClicked, setEventClicked] = useState<EventType | null>(null);
  const [isOpenEventModal, setIsOpenEventModal] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);

  const closeEventModal = () => {
    setIsOpenEventModal(false);
    setEventClicked(null);
  };

  const clickEvent = (event: EventType) => {
    setEventClicked(event);
    setIsOpenEventModal(true);
  }

  const toggleCartModal = () => {
    setIsOpenCartModal(!isOpenCartModal);
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        {/* Header */}
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            {/* <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            </nav> */}
            {/* Title */}
            <h2 className="leading-6 text-2xl text-gray-700 dark:text-gray-200 text-center font-bold">
              Events
            </h2>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-[800px] w-full space-y-6 px-4">

          {/* Table */}
          {events.length > 0 && (
            <Table data={events} tableHeaders={tableHeaders} loading={loading} error={error}>
              {events.map((event: EventType, index) => (
                <TableRow key={event.id} onClick={() => clickEvent(event)} isLast={index === events.length - 1}>
                  <TableColumn text={event.title} />
                  <TableColumn text={event.type} />
                  <TableColumn text={new Date(event.releaseDate).toLocaleDateString()} />
                  <TableColumn onClick={(e: any) => e.stopPropagation()}>
                    <UnitSelector 
                      // eventId={event.id} 
                      // updateCart={(units: number) => addToCart(event.id, units)} 
                    />
                  </TableColumn>
                  <TableColumn text={event.price} />
                </TableRow>
              ))}
            </Table>
          )}

          {/* Cart button */}
          {events.length > 0 && (
            <div className="flex justify-end">
              <CartButton onClick={toggleCartModal} />
            </div>
          )}

          {/* Modals */}
          {(isOpenEventModal && eventClicked) && ( 
            <EventDetailModal
              isOpen={isOpenEventModal}
              toggleModal={closeEventModal}
              event={eventClicked}
              addToCart={() => {}}
            />
          )}

          {(isOpenCartModal) && ( 
            <CartModal
              isOpen={isOpenCartModal}
              toggleModal={toggleCartModal}
              totalSelectedTickets={0}
              totalPrice={0}
              tickets={[]}
            />
          )}

        </div>

      </div>
    </main>
  );
}
