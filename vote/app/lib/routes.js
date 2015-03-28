Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('vote', {
  name: 'vote',
  controller: 'VoteController',
  action: 'action',
  where: 'client'
});

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  action: 'action',
  where: 'client'
});

Router.route('?', {
  name: '?',
  controller: '?Controller',
  action: 'action',
  where: 'client'
});

Router.route('results', {
  name: 'results',
  controller: 'ResultsController',
  action: 'action',
  where: 'client'
});

Router.route('recommend', {
  name: 'recommend',
  controller: 'RecommendController',
  action: 'action',
  where: 'client'
});