# Local Storage Event Delegation

## 🌮 Description:
+ Local Tapas restaurant order form created with HTMl5, CSS3, ES6, local storage, and event delegation.

### 🌮 DOM event delegation:

+ `DOM event delegation` is when an `EventTarget.addEventListener()` method is attached to a single common parent element rather than each child of that parent, made possible through `event bubbling` (aka `event propagation`).

+ `Event Bubbling` provides the `foundation` for `event delegation` in `browsers`. Now you can bind an `event handler` to a `single parent element`, and that handler will get executed whenever the event occurs `on any of its child nodes` (and any of `their children`).

+ If `event delegation` was ***not*** used, instead just adding an event listener to a single (child) element, you would have to bind an event listener to each child in order for it to act the same way as its other bound siblings. With `event delegation` you don't need to do anything. Just add the new child element (i.e., `<li>`) to the parent (i.e., `<ul>`), and you're done. that is what was done in this project.

### 🌮 [Benefit of event delegation:](https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)

+ With `event delegation`, the number of `event bindings` can be drastically decreased by moving them to a common parent element, and the code that dynamically creates new elements on the fly can be detatched from the logic of `binding` their `event handlers`.

+ Another benifit of `event delegation` is that the total `memory footprint` used by event listeners decreases since the number of event bindings decreases as well. This might not matter so much with pages that are unloaded often (in other words users navigate to different pages often). But for long-lived applications the difference can be significant. Sometimes when elements are `removed from the DOM` they still `claim memory` (aka `memory leak`), and often this `memory leak` is `tied` to an `event binding`. With `event delegation`, you can destroy child elements without risk of forgetting to `unbind` their `event listeners` since the event listener is on the parent. These types of memory leaks can then be contained if not eliminated, which can be very hard sometimes.

### 🌮 localStorage:

+ `localStorage` is the same as `sessionStorage` with the same same origin rules, but persistent. With `sessionStorage`, data stored gets cleared when the page session ends. `Local Storage` was implemented in this project.

+ Because of `event delegation`, I am able to clear the items in the local tapas (`<ul>`) list in one fell swoop with the click of a `Clear All` button, and all that is left in localStorage is `items = []`. That much does persist, BUT, when I go into the `Application` tab in the browser Console, in the sidebar to the left of the `Application` tab is a sidebar in which there is a `Clear Storage` option. When you click on it, it removes `items = []`. That is how you can remove all persisting traces from your `localStorage`.

[View Local Storage on Github](https://interglobalmedia.github.io/local-storage-event-delegation/)