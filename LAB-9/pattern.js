function WithPattern() {
  let pattern = /W.d[a-z]+y/;
  alert(
    "Pattern is First char is W and third char is d and last char is y Memmorize it and enter a word following this pattern"
  );
  let word = prompt("Enter any word");
  if (pattern.test(word)) alert("It follows tha pattern");
  else alert("It doesn't follow the pattern");
}
