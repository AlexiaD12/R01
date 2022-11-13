function addTokens(input, tokens){

    if (typeof(input) !== 'string')
    throw 'Invalid input';
    
    if (input.length < 6)
    throw 'Input should have at least 6 characters';

    for (let i = 0; i < tokens.length; i++) {
        if (typeof(tokens[i].tokenName) !== 'string')
        throw 'Invalid array format';
        }
     
    if (input.indexOf('...') > -1)
    {
        let modified = input
        for (let i = 0; i < tokens.length; i++) {
        modified = modified.replace('...', tokens[i].tokenName);
        }
        return modified;

    } else {
        return input;
    }

}

const app = {
    addTokens: addTokens
}

module.exports = app;

console.log(addTokens('Subsemnatul ... domiciliat in ... ', [{tokenName: 'subsemnatul'}, {tokenName: 'localitatea'}]))