Template.Results.events({
});

Template.Results.helpers({
	foodChoice: function(){
		return Choices.find();
	},

	voters: function(){
		return this.likedUsers;
	}
});
