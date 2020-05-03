/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 
var canConstruct = function(ransomNote, magazine) {
  let ransomMap = new Map();
  let magazineMap = new Map();
  for(let i = 0 ; i < ransomNote.length; i++) {
    if(!ransomMap.has(ransomNote.charAt(i))) ransomMap.set(ransomNote.charAt(i), 1);
    else {
      let s = ransomMap.get(ransomNote.charAt(i));
      ransomMap.set(ransomNote.charAt(i), ++s);
    }
  }

  for(let i = 0 ; i < magazine.length; i++) {
    if(!magazineMap.has(magazine.charAt(i))) magazineMap.set(magazine.charAt(i), 1);
    else {
      let s = magazineMap.get(magazine.charAt(i));
      magazineMap.set(magazine.charAt(i), ++s);
    }
  }

  let flag = 1;
  ransomMap.forEach((val, key) => {
    if(magazineMap.has(key)) {
       if(magazineMap.get(key) < ransomMap.get(key)) {
         flag = 0;
       }
    } else {
      flag = 0;
    }
  });

  if(flag === 1) return true;
  else return false;
};
