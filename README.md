# Cycle

## <b>[Wire frame diagram](./project_docs/cycle_wire_frame.pdf)</b>

## <u>Background</u>

Cycle is a data visualization that grabs data from the VisualCrossing weather api  https://www.visualcrossing.com/; it includes several different datapoints such as moon index, sunrise/sunset, and other weather statistics. The goal of this API is to visualize these statistics in series of circular like elements that can be interacted with on the page. 

In cycle, the users will be able to click on an element such as the "sunrise/sunset" bar and see a visualization of this data in the form of a circle that will be drawn based on the percentage/value of the statistic being shown. ie, the sunrise/sunset bar will animate based on time of day and will display when sunset is,and will display when sunrise is. Other features include a realtime clock that will animate using setinterval, and grabbing data from prevous dates. This API allows us to grab data from up to several decades. Users should also be able to input their zipcode so to see data for their current location. 

See [here](./project_docs/cycle_wire_frame.pdf) to see a drafted visualization of the project. 


## <u>Libraries</u>
As of now I'm going to be using D3 to visualize some of the data that will multi-segmented such as sunrise/sunset and moonphases/seasons. Canvas and vanillajavascript will also be implemented to accomplish the desired animation effects. 
Other libraries that I'm interested in using/ or will take inspration from include: 

https://kimmobrunfeldt.github.io/progressbar.js/ 
-a js library for making progress bars 

https://github.hubspot.com/odometer/docs/welcome/
a js library for making odometer effect, possible use for clock/time date 




## <u>Implementation timeline</u>
3/9 to 3/12 -Complete initial research on how to animate certain elements and how to set up skeleton for grabbing data from API and utilizing them in project. Build documentation on javscript implementations I want to use and plan 
Create basic visualization of data in project and be able to ouput data in any form.

3/13-  Try to utilize D3 to create a simple graph. Make sure project can render data without reloading page. Make real time clock using setInterval. Finish basic skeleton for page. 

3/14- Complete visualization for at least one element, begin to add logic for other elements. Begin working on animating logic for each element. Make sure logic can work on data from past dates.

3/15- Complete visualization for all desired elements, try to work on animation logic for each element. Put final touches on CSS and colors.







