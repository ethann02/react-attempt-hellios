function calcGenerateMiniMap(map, count, content, store, parent) {

    if (content) {
    content.map((comp) => {
      map[count] = comp;
      map[count]['id'] = count;
      if(parent !== null) {
        map[count]['parent'] = parent
      } else {
        map[count]['parent'] = null;
      }
      count+=1;
    });
    content.map((comp) => {
        calcGenerateMiniMap(map, count, comp.children, store, map[count-1]);
    });
  }
  return map;
}

function GenerateMiniMap(content, store)
{

    var count = 0;
    var map = [];

    const minimap = calcGenerateMiniMap(map, count, content, store, null)
    console.log(minimap)
    return minimap;
}

export default GenerateMiniMap