function removeRotten(bagOfFruits){
  if (bagOfFruits && bagOfFruits.length) {
    return bagOfFruits.map(f => f.toLowerCase().replace('rotten', ''));
  } else {
    return [];
  }
}