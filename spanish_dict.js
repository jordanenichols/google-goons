

var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "https://freedict.org/freedict-database.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
	
console.log(json);