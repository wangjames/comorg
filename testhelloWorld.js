
  

var ContainerModel = Backbone.Model.extend({
});

var ContainerView = Backbone.View.extend({

el: "#container",

initialize: function() {
    _.bindAll(this, 'changeview', 'render');
    this.$el.html("<button>hi</button>");
    this.listenTo(this.model, "change:viewState", this.render, this);
},
changeview: function() {
    var newSecond = new SecondView();
    this.model.set({'viewState': newSecond});
},
render: function(){
    var view = this.model.get('viewState')
    var newView = view.render();
    this.$el.append(newView);
    view.renderChats();
    
}
});

var ChatModel = Backbone.Model.extend({});

var ChatCollection = Backbone.Collection.extend({model: ChatModel})

var HomeModel = Backbone.Model.extend({
    
    
    initialize : function() {
        _.bindAll(this, 'addChat');
        this.set("collectionChat", new ChatCollection([
	    new ChatModel({ sender: '', message: 'Chat Server v.1' })
	]));
        
    },
    
    addChat : function() {
         this.get('collectionChat').add(new ChatModel({ sender: '', message: 'Chat Server v.1' }));
    }
})

var FirstView = Backbone.View.extend({
    template: _.template($("#tmp1").html()),
    id: "yes",
    
    events:{"click #yo" : "addNew"},
        
        
    initialize: function() {
    _.bindAll(this, 'renderChats');
    },
    
    addNew: function(){
        this.model.addChat();
        this.renderChats();
    },
    
    changeview: function() {
        alert('Hi');
    },
    renderChats : function(){
        var template = _.template("<a class='list-group-item'><%= message %></a>");
        console.log("hi");
        console.log(this.model);
        this.model.get("collectionChat").each(function (chat) {
	    $('#chatList').append(template(chat.toJSON()))
	}, this);
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
var newModel = new ContainerModel({viewState : new FirstView({model: new HomeModel() })})
var containView = new ContainerView({model: newModel});
containView.render();
});
