export const getData = (key: string) => {
    if (!localStorage) {
        return;
    }

    try {
        
        const item = localStorage.getItem(key);
        if (item === null) {
            return null;
        }
        return JSON.parse(item);
    }
    catch (error) {
        console.error(`Error getting item ${key} from localStorage`, error);
    }
};

export const storeData = (key, item) => {
    if (!localStorage) {
        return;
    }

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    }
    catch (error) {
        console.error(`Error setting item ${key} in localStorage`, error);
    }
}