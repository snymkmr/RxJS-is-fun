// **** JS ****
// document.addEventListener("click", () => {
//   console.log("JSclicked");
// });

// **** RxJS ****
// import { fromEvent } from 'rxjs'; // can use observable instead of fromEvent
//
// fromEvent(document, "click").subscribe(() => console.log("RxJSclicked"));

// **** "The flow" ****
// import { fromEvent } from "rxjs";
// import { scan } from "rxjs/operators";
//
// fromEvent(document, "click")
//   .pipe(scan(count => count + 1, 0))
//   .subscribe(count => console.log(`RxJSclick action ${count}`));

// **** Observable & Observers ****
// import { Observable, Subscriber } from "rxjs";

// const observable = new Observable(subscriber => {
//   subscriber.next("s");
//   subscriber.next("a");
//   subscriber.next("n");

//   setTimeout(() => {
//     subscriber.next("y");
//     subscriber.complete();
//   }, 2000);
// });

// console.log("I'm about to subscribe");

// const subscriber = observable.subscribe({
//   next(x) {
//     console.log(x);
//   },
//   error(err) {
//     console.error("something wrong occurred: " + err);
//   },
//   complete() {
//     console.log("done");
//   }
// });

// console.log("subscribed");

// **** Subscription ****

import { from } from "rxjs";

const observable = from([10, 20, 30, 40]);

const subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();
