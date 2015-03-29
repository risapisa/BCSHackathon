Template.Recommend.events({
});

Template.Recommend.helpers({

	places: function(){
		return ["JapaDog is open from 9:00am to 9:00pm"];
	}
});

Template.Recommend.places = function(){
	Meteor.call('getTweets', function(error,result){
		if(error){
			console.log(" client error" + error);
		}else{
		console.log("No Errors, Should be able to get results");
		//console.log(result.content);


		console.log(JSON.parse(result.content).results[0].name);
		//Session.set("tweets", result);
		return Session.set('answer', JSON.parse(result.content).results[0].name);
	}
	});
}

// if(Meteor.isClient){
	
// }

// if(Meteor.isServer){
	

	
// }