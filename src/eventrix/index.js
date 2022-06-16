import { Eventrix, EventrixDebugger } from 'eventrix';
import chairsEventsReceiver from './chairs';
import desksEventsReceiver from './desks';
import wardrobesEventsReceiver from './wardrobes';

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
