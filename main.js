var MainView = Backbone.View.extend({

    el: #container,
    
    render: function()
    {
        this.$el.html(this.model.render());
    }
})


var ControllerMain = function()
{

}
    