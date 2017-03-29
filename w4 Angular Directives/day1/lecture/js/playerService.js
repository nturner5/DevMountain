angular.module('app')
.service('playerService', function() {
  var players = [
    {
      id: 1,
      name: 'Chris Paul',
      image: 'http://images.performgroup.com/di/library/sporting_news/5b/59/chris-paul-getty-ftr-010516_ifl1w3gzvaps1jgwobqsazzyu.jpg?t=321171290'
    },
    {
      id: 2,
      name: 'Deandre Jordan',
      image: 'http://images.performgroup.com/di/library/sporting_news/c5/7a/deandre-jordan-ftr-21515_19z5dnd0fk3ta1rhqs4us022us.jpg?t=-1910838957'
    },
    {
      id: 3,
      name: 'Blake Griffin',
      image: 'http://www.trbimg.com/img-564ceff7/turbine/la-sp-cn-blake-griffin-reveals-what-inspired-him-to-become-avid-reader-20151118'
    }
  ]

  this.getPlayers = function() {
    return players;
  }
  
  this.getPlayerById = function(id) {
    return players.filter(function(player) {
      return player.id == id;
    })[0];
  }
})