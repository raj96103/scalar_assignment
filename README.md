Cab System
==========

About
-----

It is a system in which user can enter source and destination and it will tell shortest distance and estimated cost.

How to run
----------

*   Fork and clone the repository on your system.
*   Open index.html and you will be able to see the application.

Working
-------

We let the user input the preferred mode of transport and source and destination points. Then this data is extracted using javascript when submit button is clicked and these values are input in a dijkstra function and shortest path is found. Then it is multiplied by a factor according to preferred mode of transport and results are shown on screen.