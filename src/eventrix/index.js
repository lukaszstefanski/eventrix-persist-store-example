import { Eventrix, EventrixDebugger } from 'eventrix';
import chairsEventsReceiver from './receivers/chairs';
import desksEventsReceiver from './receivers/desks';
import wardrobesEventsReceiver from './receivers/wardrobes';

const initialState = {
    chairs: 0,
    desks: 0,
    wardrobes: 0,
};

const eventsReceivers = [chairsEventsReceiver, desksEventsReceiver, wardrobesEventsReceiver];

const eventrix = new Eventrix(initialState, eventsReceivers);

const eDebugger = new EventrixDebugger(eventrix);
eDebugger.start();

export default eventrix;
