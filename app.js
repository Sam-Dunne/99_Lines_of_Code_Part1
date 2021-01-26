

let friends = ['Chase', 'Trey', 'Katie', 'Devonte', 'Emil'];

for (let name = 0; name < friends.length; name++) {
    console.log(friends[name]);

    for (let num = 99; num >= 1; num--) {
        if (num === 2) {
            console.log(num + ' lines of code in the file, '
                + num + ' lines of code; ' + friends[name] + ' strikes one out, clears it all out, '
                + (num - 1) + ' line of code in the file,')
        } else if (num === 1) {
            console.log(num + ' line of code in the file, '
                + num + ' line of code; ' + friends[name] + ' strikes one out, clears it all out, '
                + (num - 1) + ' lines of code in the file.')
        } else {
            console.log(num + ' lines of code in the file, '
                + num + ' lines of code; ' + friends[name] + ' strikes one out, clears it all out '
                + (num - 1) + ' lines of code in the file,')
        }
    }
}







