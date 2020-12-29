

// create a request variable. req variable issue the http req.
//by creating an instance of xml http req

var request = new XMLHttpRequest();


//open connection
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true)


//send req

request.send();

// load response when it is ready 

request.onload = function (){
    var data = JSON.parse(this.response)
    console.log(data);

    var navbar = createHTMLelement('nav','navbar navbar-collapse navbar-dark bg-transparent');
    navbar.setAttribute = ('aria-label','Page navigation example');
    
    var ul = createHTMLelement('ul','pagination');
    
    var li1 = createHTMLelement('li','page-item');
    li1.innerHTML = '<button class="page-link" onclick = "chg()" value = "0" id="btn-pre">Previous</button>';
    
    var li2 = createHTMLelement('li','page-item');
    li2.innerHTML = '<button class="page-link" href="#" value = "1"  id="btn-1">1</button>';
    
    var li3 = createHTMLelement('li','page-item');
    li3.innerHTML = '<button class="page-link" href="#" value = "2"  id="btn-2">2</button>';
    
    var li4 = createHTMLelement('li','page-item');
    li4.innerHTML = '<button class="page-link" href="#" value = "3" id="btn-3">3</button>';
    
    var li5 = createHTMLelement('li','page-item');
    li5.innerHTML = '<button class="page-link" href="#" value = "4" id="btn-4">4</button>';
    
    var li6 = createHTMLelement('li','page-item');
    li6.innerHTML = '<button class="page-link" href="#" value = "5" id="btn-5">5</button>';
    
    var li7 = createHTMLelement('li','page-item');
    li7.innerHTML = '<button class="page-link" href="#" value = "6" id="btn-6">6</button>';
    
    var li8 = createHTMLelement('li','page-item');
    li8.innerHTML = '<button class="page-link" href="#" value = "7" id="btn-7">7</button>';
    
    var li9 = createHTMLelement('li','page-item');
    li9.innerHTML = '<button class="page-link" href="#" value = "8" id="btn-8">8</button>';
    
    var li10 = createHTMLelement('li','page-item');
    li10.innerHTML = '<button class="page-link" href="#" value = "9" id="btn-9">9</button>';
    
    var li11 = createHTMLelement('li','page-item');
    li11.innerHTML = '<button class="page-link" href="#" value = "10" id="btn-10">10</button>';
    
    var li12 = createHTMLelement('li','page-item');
    li12.innerHTML = '<button class="page-link" href="#" value = "11" id="btn-nxt">Next</button>';

var button = document.querySelectorAll('button');

var j = 90;

function createHTMLelement(elename,classname = ' ',id = ' ')
{
var e = document.createElement(elename);
e.setAttribute("class", classname);
e.setAttribute("id",id);
return e;
}

function createTHelement(elename,scope = ' ',id = ' ')
{
var e = document.createElement(elename);
e.setAttribute("scope", scope);
e.setAttribute("id",id);
return e;
}

var main = createHTMLelement('div','container');


var main_table = createHTMLelement('table','table table-dark');
var table_head = createHTMLelement('thead');
var table_head_tr = createHTMLelement('tr');

var table_head_th1 = createTHelement('th','col');
table_head_th1.innerHTML = 'Id';

var table_head_th2 = createTHelement('th','col');
table_head_th2.innerHTML = 'Name';

var table_head_th3 = createTHelement('th','col');
table_head_th3.innerHTML = 'Email';

table_head_tr.append(table_head_th1,table_head_th2,table_head_th3);
table_head.append(table_head_tr);
///body
var table_body = createHTMLelement('tbody');
///row1
var_tbody_r1 = createHTMLelement('tr');

var r1_id = createTHelement('th','row');
r1_id.innerHTML = data[j].id;

var r1_name = createHTMLelement('td');
r1_name.innerHTML = data[j].name;

var r1_email = createHTMLelement('td');
r1_email.innerHTML = data[j].email;

var_tbody_r1.append(r1_id,r1_name,r1_email);

///row2
var_tbody_r2 = createHTMLelement('tr');

var r2_id = createTHelement('th','row');
r2_id.innerHTML = data[j+1].id;

var r2_name = createHTMLelement('td');
r2_name.innerHTML = data[j+1].name;

var r2_email = createHTMLelement('td');
r2_email.innerHTML = data[j+1].email;

var_tbody_r2.append(r2_id,r2_name,r2_email);

///row3
var_tbody_r3 = createHTMLelement('tr');

var r3_id = createTHelement('th','row');
r3_id.innerHTML = data[j+2].id;

var r3_name = createHTMLelement('td');
r3_name.innerHTML = data[j+2].name;

var r3_email = createHTMLelement('td');
r3_email.innerHTML = data[j+2].email;

var_tbody_r3.append(r3_id,r3_name,r3_email);

///row4
var_tbody_r4 = createHTMLelement('tr');

var r4_id = createTHelement('th','row');
r4_id.innerHTML = data[j+3].id;

var r4_name = createHTMLelement('td');
r4_name.innerHTML = data[j+3].name;

var r4_email = createHTMLelement('td');
r4_email.innerHTML = data[j+3].email;

var_tbody_r4.append(r4_id,r4_name,r4_email);

///row5
var_tbody_r5 = createHTMLelement('tr');

var r5_id = createTHelement('th','row');
r5_id.innerHTML = data[j+4].id;

var r5_name = createHTMLelement('td');
r5_name.innerHTML = data[j+4].name;

var r5_email = createHTMLelement('td');
r5_email.innerHTML = data[j+4].email;

var_tbody_r5.append(r5_id,r5_name,r5_email);

///row6
var_tbody_r6 = createHTMLelement('tr');

var r6_id = createTHelement('th','row');
r6_id.innerHTML = data[j+5].id;

var r6_name = createHTMLelement('td');
r6_name.innerHTML = data[j+5].name;

var r6_email = createHTMLelement('td');
r6_email.innerHTML = data[j+5].email;

var_tbody_r6.append(r6_id,r6_name,r6_email);

///row7
var_tbody_r7 = createHTMLelement('tr');

var r7_id = createTHelement('th','row');
r7_id.innerHTML = data[j+6].id;

var r7_name = createHTMLelement('td');
r7_name.innerHTML = data[j+6].name;

var r7_email = createHTMLelement('td');
r7_email.innerHTML = data[j+6].email;

var_tbody_r7.append(r7_id,r7_name,r7_email);

///row8
var_tbody_r8 = createHTMLelement('tr');

var r8_id = createTHelement('th','row');
r8_id.innerHTML = data[j+7].id;

var r8_name = createHTMLelement('td');
r8_name.innerHTML = data[j+7].name;

var r8_email = createHTMLelement('td');
r8_email.innerHTML = data[j+7].email;

var_tbody_r8.append(r8_id,r8_name,r8_email);

///row9
var_tbody_r9 = createHTMLelement('tr');

var r9_id = createTHelement('th','row');
r9_id.innerHTML = data[j+8].id;

var r9_name = createHTMLelement('td');
r9_name.innerHTML = data[j+8].name;

var r9_email = createHTMLelement('td');
r9_email.innerHTML = data[j+8].email;

var_tbody_r9.append(r9_id,r9_name,r9_email);

///row10
var_tbody_r10 = createHTMLelement('tr');

var r10_id = createTHelement('th','row');
r10_id.innerHTML = data[j+9].id;

var r10_name = createHTMLelement('td');
r10_name.innerHTML = data[j+9].name;

var r10_email = createHTMLelement('td');
r10_email.innerHTML = data[j+9].email;

var_tbody_r10.append(r10_id,r10_name,r10_email);



table_body.append(var_tbody_r1,var_tbody_r2,var_tbody_r3,var_tbody_r4,var_tbody_r5,var_tbody_r6,var_tbody_r7,var_tbody_r8,var_tbody_r9,var_tbody_r10);

main_table.append(table_head,table_body);



ul.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12);
navbar.append(ul);

main.append(main_table,navbar);
document.body.append(main);



for(i=0;i<100;i++){
    var id_data = data[i].id;
    var name_data = data[i].name;
    var email_data = data[i].email;
    console.log(id_data," ",name_data," ",email_data);
   
}


/* switch(pg){
    case 1:
        j=0;
        console.log("1");
        break;

     case 2:
         j=10;
        break;
    case 3:
        j=20;
        break;
    case 4:
        j=30;
        break;
    case 5:
        j=40;
        break;
    case 6:
        j=50;
        break;
    case 7:
        j=60;
        break;
    case 8:
        j=70;
        break;
    case 9:
        j=80;
        break;
    case 10:
        j=90;
        break;
        case 1:
        break;
        case 1:
        break;

*/





}



window.addEventListener("scroll", bar);




