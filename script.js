"use strict";

// #1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// #2
const addSubmission = (array, newName, newScore, newDate) => {
  // let ifPassed = null;
  let newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

// For testing purposes:
addSubmission(submissions, `Tara`, 100, `2020-01-27`);
console.log(submissions);
// testing done

// #3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// #4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  deleteSubmissionByIndex(array, index);
};

// For testing purposes:
deleteSubmissionByName(submissions, `Tara`);
console.log(submissions);
// testing done

// #5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  let ifPassed = null;
  if (score >= 60) {
    ifPassed = true;
  } else {
    ifPassed = false;
  }
  array[index].passed = ifPassed;
};

// For testing purposes:
addSubmission(submissions, `Tara`, 100, `2020-01-27`);
console.log(submissions);
editSubmission(submissions, 4, 50);
console.log(submissions);
// testing done

// #6
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

// For testing purposes:
console.log(findSubmissionByName(submissions, `Tara`));
// testing done

// #7
const findLowestScore = (array) => {
  let lowestScore = 100;
  array.forEach((item) => {
    if (item.score < lowestScore) {
      lowestScore = item.score;
    }
  });
  return lowestScore;
};

// For testing purposes:
console.log(findLowestScore(submissions));
// testing done

// #8
const findAverageScore = (array) => {
  let total = 0;
  let numItems = 0;
  array.forEach((item) => {
    total += item.score;
    numItems++;
  });
  return total / numItems;
};

// For testing purposes:
console.log(findAverageScore(submissions));
// testing done

// #9
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.score >= 60;
  });
};

// For testing purposes:
console.log(filterPassing(submissions));
// testing done

// #10
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

// For testing purposes:
console.log(filter90AndAbove(submissions));
// testing done

// Extended challenges
const createRange = (start, end) => {
  let array = [];
  while (start <= end) {
    array.push(start);
    start++;
  }
  return array;
};

// For testing purposes:
console.log(createRange(1, 10));
// testing done

// const countElements = (array) => {
//   let object = {};
//   for (i = 0; i < array.length; i++) {
//       for (j = 0, j < object.length; j++) {
//         if (array[i] === object.entries(j)[0]) {
//             let key = array[i];

//         }
//       })
//   }
// };

const countElements = (array) => {
  let object = {};
  array.forEach((string) => {
    if (object[string] === undefined) {
      object[string] = 1;
    } else {
      object[string]++;
    }
  });
  return object;
};

console.log(
  countElements([
    "a",
    "b",
    "a",
    "c",
    "a",
    "b",
    "tara",
    "mitch",
    "tru",
    "tru",
    "lua",
  ])
);
