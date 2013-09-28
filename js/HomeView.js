var HomeView = function(store) {

    this.findByName = function() {
        var $this = this;
        store.findByName($('.search-key').val(), function(employees){
            $('.employee-list').html(HomeView.liTemplate(employees));
            
            if (self.iscroll) {
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            } else {
                console.log('New iScroll');
                self.iscroll = new iScroll($($this.el).find('.scroll')[0], {hScrollbar: false, vScrollbar: false });
            }

        });
    };

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.delegate('.search-key','keyup', $.proxy(this.findByName, this));
    };

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    }

    this.initialize();
}
HomeView.template = Handlebars.compile($('#home-tpl').html());
HomeView.liTemplate = Handlebars.compile($('#employee-li-tpl').html());