import { Eventrix, connectPersistStore, EventrixDebugger } from 'eventrix';
import chairsEventsReceiver from './receivers/chairs';
import desksEventsReceiver from './receivers/desks';
import wardrobesEventsReceiver from './receivers/wardrobes';

const initialState = {
    chairs: 0,
    desks: 0,
    wardrobes: 0,
};

const config = {
    blackList: ['chairs'],
    storage: localStorage,
    storageKey: 'exampleData',
};

const eventsReceivers = [chairsEventsReceiver, desksEventsReceiver, wardrobesEventsReceiver];

const eventrix = new Eventrix(initialState, eventsReceivers);

connectPersistStore(eventrix, config);

const eDebugger = new EventrixDebugger(eventrix);
eDebugger.start();

export default eventrix;
