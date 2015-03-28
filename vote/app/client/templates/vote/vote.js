Template.Vote.events({
 'click [name=choice]': function (e, tmpl) {
    //prevent the default behaviour

    e.preventDefault();
    var id = this._id;
    var new_likes = this.likes;
    var userID = Meteor.userId();
    var new_likedUsers = this.likedUsers;
     
    console.log(new_likedUsers[0]);
    for (var i=0; i<new_likedUsers.length; i++) {
        if(userID == new_likedUsers[i]) {
            break;
        }else if((i == (new_likedUsers.length - 1)) && 
                 userID != new_likedUsers[i]) {
            new_likes++;     
            new_likedUsers.push(Meteor.userId());
        };
    };
     
    console.log(id);
    //find the item in the choice, then add the user 1, then add the user name -1

   	Choices.update( {_id:id},{
   		$set:{
   			likes: new_likes,
   			likedUsers: new_likedUsers
   		}
   	})

   	console.log(this);

  }
});

Template.Vote.helpers({
	foodChoice: function(){
		return Choices.find();
	},

	voters: function(){
		return this.likedUsers;
	}
});
