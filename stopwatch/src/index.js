import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
let stopwatch = 1;
var myInterval;
let action="Start";
let t = [{ hour: 0, minute: 0, second: 0, milisecond: 0 }];
function iterator()
{
if (stopwatch % 2 !== 0) {
  action="Stop";
  console.log(Stopwatch);
  myInterval = setInterval(function () {
    Stopwatch(`${t[0].hour }:${t[0].minute}:${t[0].second}:${parseInt(t[0].milisecond/10)}`);
    if (t[0].milisecond === 1000) {
        t[0].second += 1;
        t[0].milisecond = 0;
    } if (t[0].second === 60) {
        t[0].minute += 1;
        t[0].second = 0
    }
    if (t[0].minute === 60) {
        t[0].hour += 1;
        t[0].minute = 0
    }
    if (t[0].hour === 13) {
        // t[0].hour+=1;
        t[0].minute = 0
    }
    t[0].milisecond += 1;

}, 1);
}
else{
  action="Start";
  clearInterval(myInterval);
  Stopwatch(`${t[0].hour }:${t[0].minute}:${t[0].second}:${t[0].milisecond}`);
  
 
}
stopwatch++;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function Stopwatch(time)
{
  root.render(
    <div className='card'>
      <h1><span>S</span>top<span>W</span>atch</h1>
    <div className="flex">
        <div>{time}</div>
    </div>
    <div className="flex bt">
       <button onClick={reset}>Reset</button>
     
       <button className='stopwatch' id='stopwatch' onClick={iterator}>{action}</button>
    </div>

    </div>
    );
}
function reset()
{
  Stopwatch("00:00:00:00");
  stopwatch=1;
  clearInterval(myInterval);
  t=[{ hour: 0, minute: 0, second: 0, milisecond: 0 }];
}
Stopwatch("00:00:00:00");
reportWebVitals();
