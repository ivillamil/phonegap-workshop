var HomeView = function(store) {

    this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees){
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.delegate('.search-key','keyup',this.findByName);
    };

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    }

    this.initialize();
}
HomeView.template = Handlebars.compile($('#home-tpl').html());
HomeView.liTemplate = Handlebars.compile($('#employee-li-tpl').html());