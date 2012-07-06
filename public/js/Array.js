Array.prototype.contains = function(element) {
    var i = this.length;
    while(i--) {
        if (_.isEqual(this[i], element)) {
            return true;
        }
    }
    return false;
}
