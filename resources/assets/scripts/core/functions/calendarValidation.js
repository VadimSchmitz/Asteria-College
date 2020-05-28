export let validateTitle = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een vak in'));
    else return callback();
};
export let validateStartDate = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een begin datum in'));
else return callback();
};

export let validateEndDate = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een eind datum in'));
    else return callback();
};
