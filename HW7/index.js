function inputYear(question) {
    let year = prompt(`Input your ${question}`);

    if(year === null) {
        return false;
    }

    while(isNaN(year) || !yearValidate(year)) {
        const errorMessage = isNaN(year) ? 'Error: year need to be a number.' : `Error: year can to be [0; ${new Date().getFullYear()}]`;
        year = prompt(errorMessage);

        if(year === null) {
            return false;
        }
    }

    return year;
}

function yearValidate(year) {
    const todayYear = new Date().getFullYear();
    return (year > todayYear || year < 0) ? false : true;
}

function hasNumber(string) {
    for(const element of string) {
        if(!isNaN(element)) {
            return true;
        }
    }

    return false
}

function isEnglish(string) {
    return /[a-zA-Z]/.test(string.replace(' ', '')) ? true : false;         // New York
}

function inputString(question) {
    let answer = prompt(`Input your ${question}`);

    if(answer === null) {
        return false;
    }

    while(hasNumber(answer) || !isEnglish(answer)) {
        const errorMessage = hasNumber(answer) ? `Error: your answer cann't have number.\n` : `Error: use English letter for your answer.\n`;
        answer = prompt(errorMessage + 'Input ' + question);

        if(answer === null) {
            return false;
        }
    }

    return answer;
}

function countOld(year) {
    const todayYear = new Date().getFullYear();
    return todayYear - year;
}

function customerOld(year) {
    if(year === false) {
        return `You weren't input your old`;
    }

    const old = countOld(year);

    if(old > 1) {
        return `You are ${old} years old`;
    } else if (old === 1) {
        return `You are ${old} year old`;
    }

    return `You born in this year. You are baby.`;
}

function customerCity(city) {
    const citiesOfCountry = {
        washington: 'America',
        london: 'UK',
        kyiv: 'Ukraine'
    }

    if (!city) {
        return `You weren't input your city`;
    }

    const cityLowerCase = city.toLowerCase();

    if(cityLowerCase in citiesOfCountry) {
        return `You live in capital of ${citiesOfCountry[cityLowerCase]}`;
    }

    return `You lives in city ${city}`;
}

function customerSport(sport) {
    const chempionsOfSport = {
        football: 'Messi',
        basketball: 'Jordan',
        hockey: 'Ovechkin'
    }

    if (!sport) {
        return `You weren't input your sport`;
    }

    sport = sport.toLowerCase();

    if(sport in chempionsOfSport) {
        return `Cool! Do you want to be as ${chempionsOfSport[sport]}?`;
    }

    return `Your favourite sport is ${sport}.`;
}

const year = inputYear('year of birth');
const city = inputString('city where you are live');
const sport = inputString('favourite sport');

alert(`${customerOld(year)}\n${customerCity(city)}\n${customerSport(sport)}`);