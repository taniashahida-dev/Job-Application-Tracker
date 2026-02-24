1. Difference between getElementById, getElementsByClassName, querySelector and querySelectorAll.

Ans: getElementById selects one element using its id.
document.getElementById("id-name");

getElementsByClassName selects all elements with the same class name.
document.getElementsByClassName("card")

querySelector selects the first element that matches a CSS selector.
document.querySelector(".card")

querySelectorAll selects all elements that match a CSS selector.
document.querySelectorAll("#card")


2. How to create and insert a new element into the DOM

Ans: First, we create a new element using JavaScript.
Then, we add text or content to it.
Finally, we insert it into a parent element in the webpage.
This allows us to update the page without reloading.
let div = document.createElement("div");
div.innerText = "Text";
document.body.appendChild(div);


3. What is Event Bubbling? How does it work?

Ans: Event bubbling is a process where an event starts from the target element and moves up to its parent elements.
When we click a child element, the event first works on the child, then goes to the parent, and continues upward.

4. What is Event Delegation? Why is it useful?

Ans: Event delegation is a technique where we add one event listener to a parent element instead of adding many listeners to child elements.
It is useful because it reduces code, improves performance, and works for dynamically added elements.

5. Difference between preventDefault() and stopPropagation()

Ans: preventDefault() stops the browser’s default action, like stopping a link from opening.
stopPropagation() stops the event from moving to parent elements.