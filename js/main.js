var app = {

    initialize: function() {
        var $this = this;
        this.homeTpl = Handlebars.compile($('#home-tpl').html());
        this.employeeLiTpl = Handlebars.compile($('#employee-li-tpl').html());
        this.store = new WebSqlStore( function() {
            $('body').html(new HomeView($this.store).render().el);
        } );
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