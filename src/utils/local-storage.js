export const clearLocalStorage = () => {
    const comeUnity = {
        accessToken: ''
    };
    localStorage.setItem('come-unity', JSON.stringify(comeUnity));
};

if (!localStorage.getItem('come-unity')) {
    clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
    const localObject = JSON.parse(localStorage.getItem('come-unity'));
    return localObject[name];
};

export const setToLocalStorage = (name, item) => {
    const localObject = JSON.parse(localStorage.getItem('come-unity'));
    localObject[name] = item;
    localStorage.setItem('come-unity', JSON.stringify(localObject));
};

export const deleteFromLocalStorage = () => {
    localStorage.removeItem('come-unity');
}