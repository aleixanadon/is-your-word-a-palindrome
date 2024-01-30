
const userInput = document.getElementById("user-input");
const divResult = document.getElementById("div-result");

/**
 * @param {string} str
 */
const isPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++;
        end--;
    }
    return true;
};

/**
 * @param {boolean} result
 */
const handleDivResult = (result) => {
    if (result) {
        divResult.innerHTML = "Is a palindrome";
        divResult.style.color = "green";
    } else {
        divResult.innerHTML = "Is a not palindrome";
        divResult.style.color = "red";
    }
};

const clearDivResult = () => {
    divResult.innerHTML = "";
}

/**
 * @param {InputEvent} event
 */
const handleInputChange  = (event) => {
    let inputString = event.target.value;
    if (inputString.length > 1) {
        let isStrPalindrome = isPalindrome(inputString);
        handleDivResult(isStrPalindrome);
    } else {
        clearDivResult();
    }
}

userInput.addEventListener("input", handleInputChange);