var link = "http://api.tumblr.com/v2/blog/ptalamedia.tumblr.com/posts?";
var apiKey = "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4";
var offset = 0;
var posts = [];
angular.module('ptala')
	.factory('galleryFactory', function galleryFactory() {
		var posts = [];
		return {
			getAll: function(callback) {
				getAllPosts(callback);
			}
		}

		function getAllPosts(callback) {
				      //$http.get(url).success(callback);
				$.ajax({
				  type: "GET",
				  url : link,
				  dataType: "jsonp", 
				  data: {
				      api_key: apiKey,
				      limit: 20,
				      offset:offset
				  }
				}).done(function( data ) {
					$.merge(posts,data.response.posts);
					if(data.response.total_posts > posts.length) {
						offset += 20;
						getAllPosts(callback);
					} else {
						callback(posts);
					}
				});
		}
	});
