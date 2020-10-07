module.exports = function check(str, bracketsConfig) {
 
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let index = str.indexOf(bracketsConfig[j].join(''));
            if (index !== -1) {
                str = str.replace(bracketsConfig[j].join(''), '');
                i = -1;
            }
        }
    }

    return (str.length === 0);
    
}    


  