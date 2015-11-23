function getCharacters(obj, key, val) {
  return obj.characters.filter( (item) => {
    return item[key] && item[key].toLowerCase() === val.toLowerCase();
  });
}

/*TODO: 
get object, which key equals some val (provided), else return []*/

let characters = {"characters": [
    {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
    // ......
]};
