export let checkEmail = (email) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

export let checkUsername = async (username) => {
    return await axios.get('/users/' + username + '/check')
        .then(response => true)
        .catch(e => false);
};

export let validateEmail = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een emailadres in'));

    else if (!checkEmail(value))
        return callback(new Error('Vul alsjeblieft een geldig emailadres in'));

    else return callback();
};

export let validateUsername = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een gebruikersnaam in'));

    else if (!checkUsername(value))
        return callback(new Error('Deze gebruikersnaam is al in gebruik, kies een andere'));

    else return callback();
};

export let validateName = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een naam in'));

    else if (!checkUsername(value))
        return callback(new Error('Vul alsjeblieft een geldige naam in'));

    else return callback();
};

export let validatePassword = (rule, value, callback) => {
    if (value === '')
        return callback(new Error('Vul alsjeblieft een wachtwoord in'));

    else return callback();
};
