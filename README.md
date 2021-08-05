## FrontEnd Coding Test Template
Hello!  
Thank you for applying to join us at Tradir.io.🙏

This is a base template for the Junior Frontend Engineer Coding Test @Tradir.io.
Clone this repository and follow the instructions below!
The basic structure is already set up so you can go straight to the main tasks.

### 📣 &nbsp; Instructions

Use the following open api to get data for the table: https://api.punkapi.com/v2/beers  
The api returns a list of Beer Objects 🍻.

#### ✨ &nbsp; Styling

* Use Styled Components to style your project
* Ant Design can be used for basic components (https://ant.design/components/overview/)

#### ⚓ &nbsp; Required

* ``Redirect`` users to ``/home`` when they first arrive
  - Testers are free to add a bit of personal design 😊
  - Create a ``link`` to a ``/beerlist`` page on the homepage

* Create a page (/beerlist) with a table for the list of Beers (the material table library ``must`` be used https://material-table.com/#/docs/get-started)

* Create a filter so that users can filter the beers by ``abv`` range ex)"5-6", "6-7"
  - multiselection should be available
  - The filter is not part of the table. It should be above the table separate from the table component.
  - ``Do not`` use the library's filtering functionality

#### 💡 &nbsp; Optional 

* when a column header is drag and dropped, the new column order should be stored in redux so that the order is maintained even when a user moves between ``/home`` and ``/beerlist``

* When a beer name is clicked on, a modal should appear containing all the info of the selected beer

* Create a Shopping basket to add and remove beers from  
  - Shopping basket should be accessible from both ``/home`` and ``/beerlist``<br />

&nbsp;*&nbsp; Additional features can be added if the tester wishes to display more than the required functionalities
  
### 📝 &nbsp; Grading Standards
* Completion of the required functionalities(50%)
* Code Quality (35%)
* UI/UX Design (15%)

#### 🎈🤖&nbsp; Feel free to contact us anytime if you have additional questions regarding the project &nbsp; 💌🎉
<br /><br />
### *** Do not create a pull request, create a new repository and send the link through email to submit ***
