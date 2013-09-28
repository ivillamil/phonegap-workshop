var app = {

    findByName: function() {
        var $this = this;
        this.store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html($this.employeeLiTpl(employees));
        });
    },

    initialize: function() {
        var $this = this;
        this.homeTpl = Handlebars.compile($('#home-tpl').html());
        this.employeeLiTpl = Handlebars.compile($('#employee-li-tpl').html());
        this.store = new WebSqlStore( function() {
            $this.renderHomeView();
        } );
    },

    renderHomeView: function() {
        $('body').html(this.homeTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    }

};

app.initialize();