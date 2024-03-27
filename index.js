const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((item) => {
    let words = item.toUpperCase().split(" ");

    for (let i = 0; i < words.length; i++) {
      if (
        words[i] !== "OO" &&
        words[i] !== "API" &&
        words[i] !== "JSONP?" &&
        words[i] !== "NAN" &&
        words[i] !== "STOPPROPAGATION" &&
        words[i] !== "PREVENTDEFAULT?"
      ) {
        words[i] = words[i].charAt(0) + words[i].substring(1).toLowerCase();
      } else if (words[i] === "STOPPROPAGATION") {
        words[i] =
          words[i].charAt(0) +
          words[i].substring(1, 4).toLowerCase() +
          words[i].charAt(4) +
          words[i].substring(5).toLowerCase();
      } else if (words[i] === "PREVENTDEFAULT?") {
        words[i] =
          words[i].charAt(0) +
          words[i].substring(1, 7).toLowerCase() +
          words[i].charAt(7) +
          words[i].substring(8).toLowerCase();
      } else if (words[i] === "NAN") {
        words[i] =
          words[i].charAt(0) +
          words[i].substring(1, 2).toLowerCase() +
          words[i].charAt(2);
      }
    }
    return words.join(" ");
  });
};

//console.log(titleCased());
