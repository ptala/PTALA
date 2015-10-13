angular.module('ptala',['ngRoute','bootstrapLightbox'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/',{             
			controller: 'HomeController',
			templateUrl: 'home.html'     
		}).when('/about', {
			controller: 'AboutController',
			templateUrl: 'partials/about.html'
		}).when('/clients', {
			controller: 'ClientsController',
			templateUrl: 'partials/clients.html'
		}).when('/gallery', {
			controller: 'GalleryController',
			templateUrl: 'partials/gallery.html'
		}).when('/contact', {
			controller: 'ContactController',
			templateUrl: 'partials/contact.html'
		}).otherwise({                        
			redirectTo:'/'                
		});                                   	
	}); 
