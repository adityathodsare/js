// a. UNION – Combine all elements from both sets (no duplicates)
function union(setA, setB) {
  let unionSet = new Set(setA);
  for (let i of setB) {
    unionSet.add(i);
  }
  return unionSet;
}

// b. INTERSECTION – Elements common to both sets
function intersection(setA, setB) {
  let intersectionSet = new Set();
  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}

// c. DIFFERENCE – Elements in setA but not in setB
function difference(setA, setB) {
  let differenceSet = new Set(setA);
  for (let i of setB) {
    differenceSet.delete(i);
  }
  return differenceSet;
}

// d. SUBSET – Check if setB is subset of setA
function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) {
      return false;
    }
  }
  return true;
}

// Example Sets
const setA = new Set(["apple", "mango", "orange"]);
const setB = new Set(["grapes", "apple", "banana"]);

console.log("Union:", union(setA, setB)); // Set { 'apple', 'mango', 'orange', 'grapes', 'banana' }
console.log("Intersection:", intersection(setA, setB)); // Set { 'apple' }
console.log("Difference:", difference(setA, setB)); // Set { 'mango', 'orange' }

// Example for Subset
const setC = new Set(["apple", "orange"]);
console.log("Is Subset:", subset(setA, setC)); // true
