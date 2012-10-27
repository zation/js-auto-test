beforeEach(function() {
    this.addMatchers({
        toEqualData: function(expectedData) {
            for (var key in expectedData) {
                if (expectedData.hasOwnProperty(key)) {
                    expectedData[key] = expectedData[key].toString();
                }
            }
            var dataStrings = this.actual.split('&');
            var data = {};
            for (var index = 0; index < dataStrings.length; index++) {
                var item = dataStrings[index].split('=');
                data[item[0]] = item[1];
            }
            return this.env.equals_(data, expectedData);
        }
    });
});