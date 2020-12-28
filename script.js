//
function createHTMLelement(elename,classname = ' ',id = ' ',role = '')
{
var e = document.createElement(elename);
e.setAttribute("class", classname);
e.setAttribute("id",id);
e.setAttribute("role",role);
return e;
}

//

function createButton(elename ,type = ' ',classname =' ', value = ' ')
{
    var j = document.createElement(elename);
    j.setAttribute("type", type);
    j.setAttribute("class", classname);
    j.setAttribute("value", value);
    
    return j;

}


//
var container = createHTMLelement('div','container');
var main_row = createHTMLelement('div','row');
var column1 = createHTMLelement('div','col-lg-4');
var column2 = createHTMLelement('div','col-lg-4');
var column3 = createHTMLelement('div','col-lg-4');
/// row 1
var sec_row1 = createHTMLelement('div','row bg-dark');
var sec_col1 = createHTMLelement('div','col-lg-12 md-12 sm-12 xs-12');

var input_space = createHTMLelement('div','bg-secondary input-group input-group-lg');
input_space.innerHTML = '<input type="text" class="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="Input"> </input>';


////2nd row
var sec_row2 = createHTMLelement('div','row');

var sec_row2_col1 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r2c1','group')
var btn_r2c1 = createButton('button','button','btn btn-primary','1')
btn_r2c1.innerHTML = 1;
sec_row2_col1.append(btn_r2c1);

var sec_row2_col2 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r2c2','group')
var btn_r2c2 = createButton('button','button','btn btn-primary','2')
btn_r2c2.innerHTML = 2;
sec_row2_col2.append(btn_r2c2);

var sec_row2_col3 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r2c3','group')
var btn_r2c3 = createButton('button','button','btn btn-primary','3')
btn_r2c3.innerHTML = 3;
sec_row2_col3.append(btn_r2c3);

var sec_row2_col4 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r2c4','group')
var btn_r2c4 = createButton('button','button','btn btn-primary','4')
btn_r2c4.innerHTML = 4;
sec_row2_col4.append(btn_r2c4);

sec_row2.append(sec_row2_col1,sec_row2_col2,sec_row2_col3,sec_row2_col4);

/////3rd row
var sec_row3 = createHTMLelement('div','row');

var sec_row3_col1 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r3c1','group')
var btn_r3c1 = createButton('button','button','btn btn-primary','5')
btn_r3c1.innerHTML = 5;
sec_row3_col1.append(btn_r3c1);

var sec_row3_col2 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r3c2','group')
var btn_r3c2 = createButton('button','button','btn btn-primary','6')
btn_r3c2.innerHTML = 6;
sec_row3_col2.append(btn_r3c2);

var sec_row3_col3 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r3c3','group')
var btn_r3c3 = createButton('button','button','btn btn-primary','7')
btn_r3c3.innerHTML = 7;
sec_row3_col3.append(btn_r3c3);

var sec_row3_col4 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r3c4','group')
var btn_r3c4 = createButton('button','button','btn btn-primary','8')
btn_r3c4.innerHTML = 8;
sec_row3_col4.append(btn_r3c4);

sec_row3.append(sec_row3_col1,sec_row3_col2,sec_row3_col3,sec_row3_col4);



/////4th row
var sec_row4 = createHTMLelement('div','row');

var sec_row4_col1 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r4c1','group')
var btn_r4c1 = createButton('button','button','btn btn-primary','9')
btn_r4c1.innerHTML = 9;
sec_row4_col1.append(btn_r4c1);

var sec_row4_col2 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r4c2','group')
var btn_r4c2 = createButton('button','button','btn btn-primary','0')
btn_r4c2.innerHTML = 0;
sec_row4_col2.append(btn_r4c2);

var sec_row4_col3 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r4c3','group')
var btn_r4c3 = createButton('button','button','btn btn-primary operator','C')
btn_r4c3.innerHTML = 'C';
sec_row4_col3.append(btn_r4c3);

var sec_row4_col4 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r4c4','group')
var btn_r4c4 = createButton('button','button','btn btn-primary','=')
btn_r4c4.innerHTML = '=';
sec_row4_col4.append(btn_r4c4);

sec_row4.append(sec_row4_col1,sec_row4_col2,sec_row4_col3,sec_row4_col4);

/////5th row
var sec_row5 = createHTMLelement('div','row');

var sec_row5_col1 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r5c1','group')
var btn_r5c1 = createButton('button','button','btn btn-warning operator','+')
btn_r5c1.innerHTML = '+' ;
sec_row5_col1.append(btn_r5c1);

var sec_row5_col2 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r5c2','group')
var btn_r5c2 = createButton('button','button','btn btn-warning operator','-')
btn_r5c2.innerHTML = '-';
sec_row5_col2.append(btn_r5c2);

var sec_row5_col3 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r5c3','group')
var btn_r5c3 = createButton('button','button','btn btn-warning operator','*')
btn_r5c3.innerHTML = '*'
sec_row5_col3.append(btn_r5c3);

var sec_row5_col4 = createHTMLelement('div','col-lg-3 md-3 sm-3 xs-4 btn-group btn-group-lg p-1','r4c4','group')
var btn_r5c4 = createButton('button','button','btn btn-warning operator','/')
btn_r5c4.innerHTML = '/'
sec_row5_col4.append(btn_r5c4);

sec_row5.append(sec_row5_col1,sec_row5_col2,sec_row5_col3,sec_row5_col4);







sec_col1.append(input_space,sec_row2,sec_row3,sec_row4,sec_row5);

sec_row1.append(sec_col1);
column2.append(sec_row1);

main_row.append(column1,column2,column3);
container.append(main_row);
document.body.append(container);



/*function func( val ){
    
    if(typeof func.str == 'undefined'){
        func.str = "";
    }
    func.str = func.str+val;

    
    
    document.getElementById("Input").value = func.str ;
    
  
}
*/


const buttons = document.querySelectorAll('button');

const display = document.querySelector('#Input')

var keyboard = document.querySelector('#Input')


buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});




function calculate(event) {
  
  const clickedButtonValue = event.target.value;
 

  if (clickedButtonValue === '=') {
    
    if (display.value !== '') {
    
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    
    display.value = '';
  } else {
    
    display.value += clickedButtonValue; 
    
  }
}
document.onkeydown = function(e){

    if(e.key>=0 & e.key<=9){
    if (e.key === '=') {
       
        if (keyboard.value !== '') {
          
          keyboard.value = eval(keyboard.value);
        }
      } else if (e.key === 'C') {
                keyboard.value = '';
      } else {
        keyboard.value += e.key; 
        }
    
}
   else
    {
       alert("Only numbers allowed")
        
    }
}

