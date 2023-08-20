const parent = document.getElementById("parent");
const child = document.getElementById("child");
const child2 = document.getElementById("child2");

const handleParent = () => {
  console.log("clicked parent");
};
const handleChild = () => {
  console.log("clicked Child");
};
const handleChild2 = () => {
  console.log("clicked Child2");
};

parent.addEventListener("click", handleParent, true);
child.addEventListener("click", handleChild, true);
child2.addEventListener("click", handleChild2, true);
