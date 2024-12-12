// // // import React from "react";
// // import React, { useState } from 'react';

// // export default function Clock() {
// //   const [time, setTime] = useState(new Date().toLocaleTimeString());

// //   function timer() {
// //     setTimeout(
// //       () => {
// //         setTime(new Date().toLocaleTimeString());
// //         timer();
// //       }, 1000)
// //   }

// //   timer();

// //   return (
// //     <div style={{ border: "1px solid black", margin: 4 }}>
// //       <p>The time is FN component</p>
// //       <div>{time}</div>
// //     </div>
// //   );
// // }


// // export default class Clock extends React.Component {
// //   constructor(...args) {
// //     super(...args);
// //     this.state = {
// //       time: new Date().toLocaleTimeString(),
// //       asd: 1,
// //       dsa: 100,
// //     };
// //     window.asd = this;
// //   }
// //   componentDidMount() {
// //     console.log("componentDidMount");
// //     this.timer = setInterval(() => {
// //       this.setState({
// //         time: new Date().toLocaleTimeString(),
// //         asd: this.state.asd + 1,
// //       });
// //     }, 1000);
// //   }
// //   componentDidUpdate() {
// //     console.log("componentDidUpdate");
// //   }
// //   componentWillUnmount() {
// //     console.log("componentWillUnmount");
// //     clearInterval(this.timer);
// //   }
// //   onBtnClick = () => {
// //     this.setState({
// //       dsa: this.state.dsa + 1,
// //     });
// //   };
// //   render() {
// //     console.log("render");
// //     return (
// //       <div style={{ border: "1px solid black", margin: 4 }}>
// //         {this.props.qwe}
// //         <p>the time is class component</p>
// //         <div>{this.state.time}</div>
// //         <div>{this.state.asd}</div>
// //         <div>{this.state.dsa}</div>
// //         <button onClick={this.onBtnClick}>add dsa field</button>
// //       </div>
// //     );
// //   }
// // }


// import React, { useState, useEffect } from 'react';

// export default function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const asd = 1;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);

//   return (
//     <div style={{ border: "1px solid black", margin: 4 }}>
//       <p>The time is FN component</p>
//       <div>{time}</div>
//       <div>{asd}</div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// const globalState = {
//   state1: {
//     value: 2,
//     setValue(newValue) {
//       this.value = newValue;
//     },
//   },
//   state2: {
//     value: undefined,
//   },
// };
// function useState1(initialValue) {
//   if (globalState.state1.value === undefined) {
//     globalState.state1.value = initialValue;
//   }
//   return [globalState.state1.value, globalState.state1.setValue];
// }
// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [asd, setAsd] = useState(1);
//   const [count, setCount] = useState(1);
//   const [timerId, setTimerId] = useState(null);
//   function startInterval() {
//     const t = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     setTimerId(t);
//   }
//   useEffect(function () {
//     startInterval();
//     return () => {
//       clearInterval(timerId);
//     };
//   }, []);
//   const decrement = function (a) {
//     if (a === "count") {
//       setCount(count - 1);
//     } else {
//       setAsd(asd - 1);
//     }
//   };
//   const increment = function (a) {
//     if (a === "count") {
//       setCount(count + 1);
//     } else {
//       setAsd(asd + 1);
//     }
//   };
//   function onStartStopInterval() {
//     if (timerId) {
//       clearInterval(timerId);
//       setTimerId(null);
//     } else {
//       startInterval();
//     }
//   }
//   return (
//     <div style={{ border: "1px solid black", margin: 4 }}>
//       <button onClick={() => decrement("count")}>-</button>
//       <div>count = {count}</div>
//       <button onClick={() => increment("count")}>+</button>
//       <br />
//       <button onClick={onStartStopInterval}>
//         {timerId ? "Stop" : "Start"} interval
//       </button>
//       <br />
//       <br />
//       <button onClick={() => decrement("asd")}>-</button>
//       <div>asd - {asd}</div>
//       <button onClick={() => increment("asd")}>+</button>
//       <br />
//       <br />
//       <br />
//       <div>{time}</div>
//     </div>
//   );
//  }
// export class ClockClass extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//       count: 1,
//       asd: 2,
//     };
//   }
//   componentDidMount() {
//     this.t = setInterval(() => {
//       this.setState({
//         time: new Date().toLocaleTimeString(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.t);
//   }
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div style={{ border: "1px solid black", margin: 4 }}>
//         <button onClick={this.decrement}>-</button>
//         <div>{this.state.count}</div>
//         <button onClick={this.increment}>+</button>
//         <div>{this.state.time}</div>
//       </div>
//     );
//   }
// }
// export default Clock;


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
        
//         setNumber(number + 1);
//         console.log("count 1");
        
//         setNumber(number + 2);
//         console.log("count 1");

//         setNumber(number + 3);
//         console.log("count");

//       }}>+3</button>
//     </>
//   )
// }









