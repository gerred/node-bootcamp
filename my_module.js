exports.squareNumber = function(i) {
    return Math.pow(i,2);
}

var privateSquare = function(i) {
    return Math.pow(i,2)
}

var myObject = function Squarer(db) {
    db.get('myKey')
}