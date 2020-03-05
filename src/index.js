module.exports = function check(str, bracketsConfig) {
    let stack = [];

    if (str.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] === bracketsConfig[j][0] &&
                bracketsConfig[j][0] !== bracketsConfig[j][1]
            ) {
                stack.push(str[i]);
                break;
            }

            if (
                str[i] === bracketsConfig[j][1] &&
                bracketsConfig[j][0] !== bracketsConfig[j][1]
            ) {
                if (stack[stack.length - 1] === bracketsConfig[j][0]) {
                    stack.pop();
                    break;
                }
            }

            if (
                str[i] === bracketsConfig[j][0] &&
                bracketsConfig[j][0] === bracketsConfig[j][1]
            ) {
                if (stack[stack.length - 1] !== str[i]) {
                    stack.push(str[i]);
                    break;
                } else stack.pop();
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else return false;
};
