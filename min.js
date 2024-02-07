var selectFontSize = document.querySelector('#selectFontSize');
var selectBgColor = document.querySelector('#selectBgColor');
var resetButton = document.querySelector('#resetButton');
var mainElement = document.querySelector('main');
// console.log(main);


var changeFontSize = (e) =>{
  var selectedFontsize =  e.target.value
  mainElement.style.fontSize = selectedFontsize ;
  localStorage.setItem("fontSize",selectedFontsize);
};
selectFontSize.addEventListener("change",changeFontSize);


var changeBgColor = (e) =>{
  var selectedBgColor = e.target.value;
 mainElement.style.backgroundColor = selectedBgColor;
 localStorage.setItem("bgColor",selectedBgColor);

};
selectBgColor.addEventListener("change",changeBgColor);



var clearLocalStorage = () =>{
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontSize");
  setValues("16px","aqua");
};
resetButton.addEventListener("click",clearLocalStorage);



// locall storeg value

var setValues = (fontSize,bgColor) =>{
selectFontSize.value = fontSize;
   selectBgColor.value = bgColor;
   mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
};



var initialSetup = () =>{
  var bgColor = localStorage.getItem("bgColor");
  var fontSize = localStorage.getItem("fontSize");
  

 if (fontSize && bgColor){
   setValues(fontSize,bgColor);
 }
 if (!fontSize && !bgColor){
   setValues("16px","aqua");
 }
 if (fontSize && !bgColor){
   setValues("fontSize","aqua");
 }
 if (!fontSize && bgColor){
   setValues("16px","bgColor");
 }

};
initialSetup();


// resetButton

