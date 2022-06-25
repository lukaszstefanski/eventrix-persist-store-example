import { EventsReceiver } from 'eventrix';

export const ADD_CHAIR = "chairs:add";

const chairsEventsReceiver = new EventsReceiver(
    ADD_CHAIR,
    (eventName, eventData, storeManager) => {
        const chairs = storeManager.getState('chairs');
        storeManager.setState('chairs', chairs + 1)
    }
);

export default chairsEventsReceiver;
