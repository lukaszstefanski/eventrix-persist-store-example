import { EventsReceiver } from 'eventrix';

export const ADD_WARDROBE = "wardrobes:add";

const wardrobesEventsReceiver = new EventsReceiver(
    ADD_WARDROBE,
    (eventName, eventData, storeManager) => {
        const wardrobes = storeManager.getState('wardrobes');
        storeManager.setState('wardrobes', wardrobes + 1)
    }
);

export default wardrobesEventsReceiver;
