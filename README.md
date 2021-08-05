## FrontEnd Coding Test Template
안녕하세요,  
Tradir.io에 지원해 주셔서 감사합니다.🙏

Tradir.io 주니어 프론트엔드 개발자 코딩 테스트 기본 템플릿입니다.  
해당 repository를 클론 하셔서 아래 명시된 항목들만 완성해 주시면 됩니다.  
과제에만 집중하실 수 있게 기본적인 세팅은 미리 되어있습니다.

### Instructions 📣

Use the following open api to get data for the table: https://api.punkapi.com/v2/beers  
The api returns a list of Beer Objects 🍻.

#### Styling ✨

* Use Styled Components to style your project
* Ant Design can be used for basic components (https://ant.design/components/overview/)

#### Required

* Create a page (/beerlist) with a table for the list of Beers (the material table library should be used https://material-table.com/#/docs/get-started)
  - when a column header is drag and dropped, the new column order should be stored in redux so that the order is maintained even when a user moves between ``/home`` and ``/beerlist``

* Create a filter so that users can filter the beers by ``abv`` range ex)"5-6", "6-7"
  - multiselection should be available
  - The filter is not part of the table. It should be above the table separate from the table component.
  - ``Do not`` use the library's filtering functionality

#### Optional

* ``Redirect`` users to ``/home`` when they first arrive
  - Testers are free to add a bit of personal design😊
  - Create a ``link`` to a ``/beerlist`` page on the homepage

* When a beer name is clicked on, a modal should appear containing all the info of the selected beer

* Create a Shopping basket to add and remove beers from  
  - Shopping basket should be accessible from both ``/home`` and ``/beerlist``
  
### Grading Standards
* Completion of the required functionalities(50%)
* Code Quality (35%)
* UI/UX Design (15%)

*Additional features can be added if the tester wishes to display more than the required functionalities

과제 진행 중 추가적인 문의 사항이 있으실 경우, 언제든지 편하게 연락 주시기 바랍니다.

### ** Do not create a pull request, create a new repository and send the link through email to submit **
### ** 과제 제출 시 개인 github에 repository를 생성하시고 메일로 링크 보내주시면 됩니다 **
