/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */


	getTweets: function(){
		 var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2827,-123.1207&radius=500&types=food&key=AIzaSyCBb71jS1dDn7_23LWBQUhx_Ra_3z98tBs";
		//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle';
		console.log(url);
		result = Meteor.http.call('GET', url);
		console.log("results from server");
		//console.log(result);
		return result;
	}



	
});
