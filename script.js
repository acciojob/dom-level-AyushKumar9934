//your JS code here. If required.
let element = document.getElementById('level');
let level = 0;

while (element) {
	console.log(element);
  level++;
  element = element.parentNode;
}
level-=1;
alert('The level of the element is: ' + level);