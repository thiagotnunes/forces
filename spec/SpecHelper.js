beforeEach(function() {
  this.addMatchers({
      toHaveAttributesOf: function(other) {
        for (property in this.actual) {
            if (!_.isFunction(this.actual[property]) 
                && !_.isEqual(this.actual[property], other[property])) {
                return false;
            }
        }

        return true;
      },

      toContain : function(element) {
          return this.actual.contains(element);
      },

      notToContain : function(element) {
          return !this.actual.contains(element);
      }
  })
});
