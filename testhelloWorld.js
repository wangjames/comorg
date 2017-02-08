
  

var ContainerModel = Backbone.Model.extend({
});

var ContainerView = Backbone.View.extend({

el: "#container",
events:
    {
        "click button" : "changeview"
    },
initialize: function() {
    _.bindAll(this, 'changeview', 'render');
    this.$el.html("<button>hi</button>");

},
changeview: function() {
    var newSecond = new SecondView();
    this.model.set({'viewState': newSecond});
    this.render();
},
render: function(){
    var view = this.model.get('viewState')
    var newView = view.render();
    var newYe = view.render();
    this.$el.append(newYe);
}
});



var FirstView = Backbone.View.extend({
    template: _.template($("#tmp1").html()),
    id: "yes",
    
     events:
        {
            "click button" : "changeview"
        },
    initialize: function() {

    },
    changeview: function() {
        alert('Hi');
    },
    render: function() {
        this.$el.html(this.template())
        return this.el;
    }
    
});

var SecondView = Backbone.View.extend({
    template: _.template("<h1> yes </h1>"),
    id: "yes",
    initialize: function() {

    },
    
    render: function() {
        this.$el.html(this.template())
        return this.el;
    }
    
    
});

$(document).ready(function(){
var newModel = new ContainerModel({viewState : new FirstView()})
var containView = new ContainerView({model: newModel});
containView.render();
});
