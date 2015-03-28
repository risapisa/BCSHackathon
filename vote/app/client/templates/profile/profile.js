Template.Profile.events({
	'submit form#edit-profile': function(e,tmpl){
		e.preventDefault();

		var displayname=tmpl.find('input[name=displayname]').value;
		var group=tmpl.find('input[name=group]').value;
		var picurl=tmpl.find('input[name=picurl]').value;

		// console.log(displayname);
		// console.log(group);
		// console.log(picurl);

		var id = Meteor.user()._id;
		console.log(id);

		var record =  Profile.find({userId: id}).fetch()[0];
		console.log (record);

		if(record){
			Profile.update({_id: record._id} ,{
				$set : {
					displayname: displayname,
					group: group,
					picurl: picurl,
				}
			});
		}else{
			Profile.insert({
				displayname: displayname,
				group: group,
				picurl: picurl,
				userId: Meteor.user()._id				
			});
		};

		var form = tmpl.find('form');
		form.reset();
	}
});

Template.Profile.helpers({
	displayname: function(){
		var x =
		Profile.find({userId: Meteor.user()._id}).fetch()[0];
		//console.log(x);
		return x.displayname;
	},

	group: function(){
		var x =
		Profile.find({userId: Meteor.user()._id}).fetch()[0];
		//console.log(x);
		return x.group;
	},

	

	picurl: function(){
		var x =
		Profile.find({userId: Meteor.user()._id}).fetch()[0];
		//console.log(x);
		return x.picurl;
	},

});
