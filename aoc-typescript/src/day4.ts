export const validPassword = (password: string): boolean => {
    let passwordChecks = {
        "sixDigit": false,
        "twoAdjacentDigitsEqual": false,
        "neverDecrease": false
    }

    if (password.length != 6) {
        passwordChecks.sixDigit = false;
        return false;
    }

    passwordChecks.sixDigit = true;

    const pwd:Array<number> = [...password].map(Number);
    if (Number.isNaN(pwd[0])) {
        return false;
    }
    let digitsEqualCount = 1;
    for (let i = 1; i < pwd.length; i++) {
        if (Number.isNaN(pwd[i])) {
            return false;
        }
        if ( pwd[i-1] != pwd[i]) {
            digitsEqualCount = 1;
        } else {
            digitsEqualCount += 1;
        }
        if ( pwd[i-1] === pwd[i] && digitsEqualCount  == 2) {
            if ( i < pwd.length && pwd[i] != pwd[i+1]) {
                passwordChecks.twoAdjacentDigitsEqual = true;
            }
        }
        if ( pwd[i-1] > pwd[i]) {
            return false;
        } else {
            passwordChecks.neverDecrease = true;
        }
    }
    return passwordChecks.sixDigit && passwordChecks.neverDecrease && passwordChecks.twoAdjacentDigitsEqual ? true : false;
}
