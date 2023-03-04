function validateNumber(input) {
    const integers = /^[0-9]+$/;
    const result = {
        isValid: integers.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The number is required.');
        }
        if (!integers.test(input)) {
            result.message.push('The number must be a positive integer.');
        }
    }

    return result;
}

function validateFloatingPointNumber(input) {
    const floatingPointNumbers = /[-+]?[0-9]+(\.?[0-9])*/;
    const result = {
        isValid: floatingPointNumbers.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The number is required.');
        }
        if (!floatingPointNumbers.test(input)) {
            result.message.push('Enter a number.');
        }
    }

    return result;
}

function validateText(input) {
    const letters = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const result = {
        isValid: letters.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The field is required.');
        }
        if (!letters.test(input)) {
            result.message.push(
                'Use letters and only one character each "-" and "\'" within a word.'
            );
        }
    }

    return result;
}

function validateMinLength(input, minLength) {
    const pattern = `^.{${minLength},}$`;
    const requiredMinLength = new RegExp(pattern);
    const result = {
        isValid: requiredMinLength.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The field is required.');
        }
        if (!requiredMinLength.test(input)) {
            result.message.push(`Enter ${minLength} or more characters.`);
        }
    }

    return result;
}

function validateMaxLength(input, maxLength) {
    const pattern = `^.{0,${maxLength}}$`;
    const requiredMaxLength = new RegExp(pattern);
    const result = {
        isValid: requiredMaxLength.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The field is required.');
        }
        if (!requiredMaxLength.test(input)) {
            result.message.push(`Enter ${maxLength} characters or less.`);
        }
    }

    return result;
}

function validateMinMaxLength(input, minLength, maxLength) {
    const pattern = `^.{${minLength},${maxLength}}$`;
    const requiredLength = new RegExp(pattern);
    const result = {
        isValid: requiredLength.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The field is required.');
        }
        if (!requiredLength.test(input)) {
            result.message.push(
                `Enter between ${minLength} and ${maxLength} characters.`
            );
        }
    }

    return result;
}

function validateName(input) {
    const fullName = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const result = {
        isValid: fullName.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The name is required.');
        }
        if (!fullName.test(input)) {
            result.message.push(
                'Use letters, spaces and only one character each "-" and "\'" within a word.'
            );
        }
    }

    return result;
}

// 1. The number of characters must be between 5 and 15. (You may specify a different range according to your requirements, but do make changes in the regex accordingly.)
// 2. The string should only contain alphanumeric characters and/or underscores (_).
// 3. The first character of the string should be alphabetic.
function validateUsername(input) {
    const username = /^[A-Za-z][A-Za-z0-9_]{4,14}$/;
    const result = {
        isValid: username.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The username is required.');
        }
        if (!/^.{5,15}$/.test(input)) {
            result.message.push(
                'The username must be between 5 and 15 characters.'
            );
        }
        if (/^[^A-Za-z][A-Za-z0-9_]/.test(input)) {
            result.message.push('The username must begin with a letter.');
        }
        if (/[^A-Za-z0-9_]/.test(input)) {
            result.message.push(
                'The username must only contain letters, numbers and underscores.'
            );
        }
    }

    return result;
}

function validateEmail(input) {
    const email = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const result = {
        isValid: email.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The email is required.');
        }
        if (!/@/.test(input)) {
            result.message.push('The email must contain "@".');
        }
        if (!email.test(input)) {
            result.message.push('Enter a valid email.');
        }
    }

    return result;
}

// 1. The minimum number of characters must be 8.
// 2. The string must have at least one digit.
// 3. The string must have at least one uppercase character.
// 4. The string must have at least one lowercase character.
function validatePassword(input) {
    const password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    const result = {
        isValid: password.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The password is required.');
        }
        if (!/^.{8,}$/.test(input)) {
            result.message.push('The minimum number of characters must be 8.');
        }
        if (!/\d/.test(input)) {
            result.message.push('The password must have at least one digit.');
        }
        if (!/[A-Z]/.test(input)) {
            result.message.push(
                'The password must have at least one uppercase character.'
            );
        }
        if (!/[a-z]/.test(input)) {
            result.message.push(
                'The password must have at least one lowercase character.'
            );
        }
    }

    return result;
}

function validatePasswordMatch(input1, input2) {
    const result = {
        isValid: input1 === input2,
        message: [],
    };

    if (!result.isValid) {
        result.message.push('Passwords do not match.');
    }

    return result;
}

function validateDateMonthDayYear(input) {
    const date =
        /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
    const result = {
        isValid: date.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The date is required.');
        }
        if (/^\d\d[- /.]\d\d[- /.]\d\d$/.test(input)) {
            result.message.push('Enter the complete year.');
        }
        if (
            /^(\d?[- /.]\d\d|\d\d[- /.]\d?|\d?[- /.]\d?)[- /.].+$/.test(input)
        ) {
            result.message.push('Enter the date in MM/DD/YYYY format.');
        }
    }

    return result;
}

function validateDateDayMonthYear(input) {
    const date =
        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    const result = {
        isValid: date.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (/^\d\d[- /.]\d\d[- /.]\d\d$/.test(input)) {
            result.message.push('Enter the complete year.');
        }
        if (
            /^(\d?[- /.]\d\d|\d\d[- /.]\d?|\d?[- /.]\d?)[- /.].+$/.test(input)
        ) {
            result.message.push('Enter the date in DD/MM/YYYY format.');
        }
    }

    return result;
}

function validateCardNumber(input) {
    const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercard =
        /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    const amex = /^3[47][0-9]{13}$/;
    const discover =
        /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
    const jcb = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/;
    const diners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    const cup = /^62|^81[0-9]{14}[0-9]*$/;

    const result = {
        isValid: false,
        message: [],
        cardType: '',
    };

    if (!input) {
        result.message.push('The credit card number is required.');
    } else {
        if (visa.test(input)) {
            result.cardType = 'visa';
        } else if (mastercard.test(input)) {
            result.cardType = 'mastercard';
        } else if (amex.test(input)) {
            result.cardType = 'amex';
        } else if (discover.test(input)) {
            result.cardType = 'discover';
        } else if (jcb.test(input)) {
            result.cardType = 'jcb';
        } else if (diners.test(input)) {
            result.cardType = 'diners';
        } else if (cup.test(input)) {
            result.cardType = 'cup';
        } else {
            result.message.push('Enter a valid credit card number.');
        }
    }

    if (result.cardType) {
        result.isValid = true;
    }

    return result;
}

function validateCardCVV(input) {
    const cvv = /^[0-9]{3,4}$/;
    const result = {
        isValid: cvv.test(input),
        message: [],
    };

    if (!result.isValid) {
        result.message.push('Enter a valid CVV.');
    }

    return result;
}

function validatePhoneNumber(input) {
    const phone = /^\+?[0-9-\.\s]{7,16}$/;
    const result = {
        isValid: phone.test(input),
        message: [],
    };

    if (!result.isValid) {
        if (!input) {
            result.message.push('The phone number is required.');
        } else {
            result.message.push('Enter a valid phone number.');
        }
    }

    return result;
}
