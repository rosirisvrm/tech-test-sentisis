import { useState, useEffect, useCallback } from "react";
import { getEvents } from "~/services/events";
import type { EventType } from "~/types/events";
import { sortDatesDescending } from '~/utils/sortDatesDescending';

const useEvents = () => {
    const [events, setEvents] = useState<EventType[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEvents = useCallback(async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        const sortedDates = sortDatesDescending(data);
        setEvents(sortedDates);
        setError(null);
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      fetchEvents();
    }, [fetchEvents]);

    return { loading, error, events };
}

export { useEvents };