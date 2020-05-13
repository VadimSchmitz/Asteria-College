export let checkEmail = (email) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

export let validateEmail = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een emailadres in'));

    else if (!checkEmail(value))
        return callback(new Error('Vul alsjeblieft geldig emailadres in'));

    else return callback();
};

export let validatePassword = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een wachtwoord in'));

    else return callback();
};
