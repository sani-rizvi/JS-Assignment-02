//Question no:01
function createAdder(num) {
    return function (x) {
      return x + num;
    };
  }
  
  // Ex:
  const addFive = createAdder(5);
  console.log(addFive(3));
  console.log(addFive(10)); 

// //Question no:02
function searchArray(arr, val) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === val) {
      return true;
    } else {
      return searchArray(arr.slice(1), val);
    }
  }
  const myArray = [1, 2, 3, 4, 5];
  console.log(searchArray(myArray, 3));
  console.log(searchArray(myArray, 6));

//Question no:03
function addNewParagraph(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}


//Question no : 04
function addListItem(text) {
    var list = document.getElementById("myList");
    var newItem = document.createElement("li");
    var itemText = document.createTextNode(text);
    newItem.appendChild(itemText);
    list.appendChild(newItem);
  }
  

// //Question no : 05
  function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.backgroundColor = color;
    }
  }
  let myElement = "xyzzz" ;
  changeBackgroundColor("myElement", "red");
  
  
//Question no: 06
function saveObject(key, obj) {
    const object = JSON.stringify(obj);
    localStorage.setItem(key, object);
}
const myObj = { name: "Ameen", age: 25 };
saveObject("myObj", myObj);


//Question no : 07
function getObject(key) {
    const object = localStorage.getItem(key);
    const obj = JSON.parse(object);
    return obj;
  }
  const myObject = getObject("myObj");


 //Question no :08
 let prevStudents = localStorage.getItem("students");
 let students = prevStudents ? JSON.parse(prevStudents): [];
 function provideStudent() {
   let std = {
       name: prompt("Enter Name"),
       rollNo: +prompt("Enter roll no."),
       teacher: prompt("Enter Teacher Name")
   };
   students.push(std);
   console.log(students);
   let stringifiy = JSON.stringify(students);
   localStorage.setItem("students", stringifiy);

 } 
      