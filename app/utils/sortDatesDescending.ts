import type { EventType } from "~/types/events";

const sortDatesDescending = (events: EventType[]) => {
    return [...events].sort((a: any, b: any) => b.releaseDate - a.releaseDate);
};

export { sortDatesDescending};
  