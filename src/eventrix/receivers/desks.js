import { EventsReceiver } from 'eventrix';

export const ADD_DESK = "desks:add";

const desksEventsReceiver = new EventsReceiver(
    ADD_DESK,
    (eventName, eventData, storeManager) => {
        const desks = storeManager.getState('desks');
        storeManager.setState('desks', desks + 1)
    }
);

export default desksEventsReceiver;
