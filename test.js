

$(document).ready(function() {
    
    var ContainerModel = Backbone.Model.extend({
    });

    var ContainerView = Backbone.View.extend({
    
    el: "container",
    
    initialize: function() {
        console.log(this)
    },
    
    render: function(){
        var view = this.model.get('viewState')
        this.$(el).html(view.render().html)
    }
    });



var FirstView = Backbone.View.extend({
    template: _.template("<h1> boooo </h1>"),
    
    initialize: function() {

    },
    
    render: function() {
        this.$(el).html(this.template());
        return this;
    }
    
});

var SecondView = Backbone.View.extend({
    
});
    var newModel = new ContainerModel({viewState : new FirstView()})
    var containView = new ContainerView({model: newModel});
    containView.render();

  
});