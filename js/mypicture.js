hexo.extend.tag.register(‘plant’, function(args, content){
  var id = args[0];
  return ‘http://plant.xxx.com‘;
});
hexo.extend.tag.register(‘animal’, function(args, content){
  var id = args[0];
  return ‘http://animal.xxx.com‘;
});