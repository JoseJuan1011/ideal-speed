# ideal-speed

Ideal Speed it's a web app prepared to show you the differences of time between different speeds.

## Objective

Create an app which raise awareness of speeding, and a tool for truck drivers to calculate how many minutes they need to reach their destination, between other uses. 
The app itself will use Kilometers as the main metric on their calculations. 

**PD**: The app will be prepared for cases were the speed limit it's uniform along the length of the track.

## TODOs

* Add onClick action for Reset Button.
* Fix bug with [Charts](https://github.com/JoseJuan1011/ideal-speed/tree/state-management/src/components/Chart) Component, where the component itself doesn't update after further state change [(Issue)](https://github.com/JoseJuan1011/ideal-speed/issues/10).
* Add tests for better understanding of the application.
* Add more and better styles to the application.
* Add better support for mobile devices.
* Add imperial metric support (mile).
* Add Eliminate Track Length Functionality (With the respective Chart).
* Add Feature to save data in localStorage when *Crtl* + *S* is clicked.

## Deployment

If you want a build for deployment you only need to execute this in your terminal:
```
npm run build
```
