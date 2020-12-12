# UFOs

## Overview
The purpose of this analysis is to assist users in looking at UFO sightings by allowing users to filter on different criteria. We want users to be able to filter on date, city, state, country, and shape.

To do this, I used an index.html file to display the page. The page referenced an application JavaScript file. The data source was a JavaScript file. 
## Results
Here's how to use the page:
- You have 5 input boxes: date, city, state, country and shape. Each box contains a default example item.
- When you first get to the screen, it shows you all the data in the database. 
- Type your criteria/criterion in the boxes:
  - It needs to be in lower case. 
  - Use the format of the gray default text.
  - Press enter. It will bring up the filtered choices. 
  - If you want to go back to see all the values, clear your choices and press enter and the page will refresh with the full table. 
  - For example, let's say I want to search on Roswell, New Mexico. I would type "Roswell" in the city box and "NM" in the state box. Then you press enter and the results come up:

![](./Resources/search_example.png)  

## Summary
This webpage is very simple and provides the user with quick information. One drawback is that if a user types in criterion which is not in the database, nothing is returned and there is no message.

Here are two recommendations for improvement:
- Add a message telling the users when no data is present for the criterion they are trying to search on.
- Be able to sort on the column headers.



