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
    if (!value)
        return callback(new Error('Vul alsjeblieft een emailadres in'));

    else if (!checkEmail(value))
        return callback(new Error('Vul alsjeblieft een geldig emailadres in'));

    else return callback();
};

export let validateUsername = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een gebruikersnaam in'));

    else if (!checkUsername(value))
        return callback(new Error('Deze gebruikersnaam is al in gebruik, kies een andere'));

    else if (value.length < 3)
        return callback(new Error('Zorg dat de gebruikersnaam minimaal 3 tekens bevat'));

    else return callback();
};

export let validateLoginName = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een gebruikersnaam in'));

    else if (checkEmail(value))
        return callback(new Error('Log in met je gebruikersnaam'));

    else return callback();
};

export let validateLoginPassword = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een wachtwoord in'));

    else return callback();
};

export let validateName = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een naam in'));

    else return callback();
};

export let validatePassword = (rule, value, callback) => {
    if (!value)
        return callback(new Error('Vul alsjeblieft een wachtwoord in'));
    else if (value.length < 5)
        return callback(new Error('Zorg dat het wachtwoord minimaal 5 tekens bevat'));

    else return callback();
};
