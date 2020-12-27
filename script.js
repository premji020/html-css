var main_body = document.createElement('body');
main_body.setAttribute("class",'card');
var input_element = 'disabled';

//html element fn
function createHTMLelement(elename,classname = ' ',id = ' ')
{
var e = document.createElement(elename);
e.setAttribute("class", classname);
e.setAttribute("id",id);
return e;
}

//input range fn
function createInputrange(elename ,style =' ',type = ' ',maxlength = ' ',minlength = ' ' , value = ' ', id = ' ', disabled =' ' )
{
    var i = document.createElement(elename);
    i.setAttribute("style", style);
    i.setAttribute("type", type);
    i.setAttribute("maxlength", maxlength);
    i.setAttribute("minlength", minlength);
    i.setAttribute("value", value);
    i.setAttribute("id", id);
    i.setAttribute("disabled", true);
    
    
   
   
    return i;

}

//header

var header = createHTMLelement('div','upper-card');
var imagetag = createHTMLelement('div','image');
var image = createHTMLelement('img');
image.src = "profile.jpg"
imagetag.append(image);
var stripe = createHTMLelement('div','lower-stripe');
var title = createHTMLelement('div','title-card');
var titlename = createHTMLelement('h1');
titlename.innerHTML = 'HARRISON WELLS';
title.append(titlename);
stripe.append(title);

header.append(imagetag,stripe);
//document.body.append(header);

//address

var address = createHTMLelement('p','text1');
address.innerHTML = 'Darmen avenue,Chicago,Illinois,60050 | 9876543210 | Hello@mail.com |www.abc.com ';
//document.body.append(address);

//border

var border = createHTMLelement('table','border');
var tbody = createHTMLelement('tbody');
var tbody_tr = createHTMLelement('tr');
tbody.append(tbody_tr);
border.append(tbody);
//document.body.append(border);

//space
var space = document.createElement("BR");
var space1 = document.createElement("BR");
document.body.append(space);
document.body.append(space1);


//main content

var main_row = createHTMLelement('div','row');
main_row.setAttribute('style','margin-left:20px;');
var left_column = createHTMLelement('div','column');


//profile
var prof_block = createHTMLelement('h2');
prof_block.innerHTML ='<i class="fa fa-user-circle fa-1x" aria-hidden="true"></i>Profile'


//profile descp
var prof_descp = createHTMLelement('section');
prof_descp.innerHTML = 'Innovative optimized solution seeker. Excited to be at the deployment phase of my career as a web developer.I am ambitious, adventerous , animated and an alliteration advocate.';


//skills title
var skills_block = createHTMLelement('h2');
skills_block.innerHTML = '<i class="fa fa-calculator" aria-hidden="true"></i>Skills';

//skills descp
var skills_descp = createHTMLelement('section')



//technical skills
var tech_skills_block = createHTMLelement('h4');
tech_skills_block.innerHTML='Technical Skills';

//js
var tech_js_label = document.createElement('label');
tech_js_label.setAttribute('class','skills');
tech_js_label.setAttribute('for','js1');
tech_js_label.innerHTML = 'Javascript';
var tech_js_input = createInputrange('input','margin-left:120px','range','100','0','75','js1');



//css
var tech_cs_label = document.createElement('label');
tech_cs_label.setAttribute('class','skills');
tech_cs_label.setAttribute('for','cs1');
tech_cs_label.innerHTML = 'CSS';
var tech_cs_input = createInputrange('input','margin-left:167px','range','100','0','75','cs1');

//html
var tech_ht_label = document.createElement('label');
tech_ht_label.setAttribute('class','skills');
tech_ht_label.setAttribute('for','ht1');
tech_ht_label.innerHTML = 'HTML';
var tech_ht_input = createInputrange('input','margin-left:154px','range','100','0','75','ht1');


//react
var tech_rt_label = document.createElement('label');
tech_rt_label.setAttribute('class','skills');
tech_rt_label.setAttribute('for','rt1');
tech_rt_label.innerHTML = 'React';
var tech_rt_input = createInputrange('input','margin-left:153px','range','100','0','75','rt1');

//redux
var tech_rd_label = document.createElement('label');
tech_rd_label.setAttribute('class','skills');
tech_rd_label.setAttribute('for','rd1');
tech_rd_label.innerHTML = 'Redux';
var tech_rd_input = createInputrange('input','margin-left:150px','range','100','0','75','rd1');

//mongo
var tech_mg_label = document.createElement('label');
tech_mg_label.setAttribute('class','skills');
tech_mg_label.setAttribute('for','mg1');
tech_mg_label.innerHTML = 'Mongo';
var tech_mg_input = createInputrange('input','margin-left:149px','range','100','0','75','mg1');

//deployment
var tech_dp_label = document.createElement('label');
tech_dp_label.setAttribute('class','skills');
tech_dp_label.setAttribute('for','dp1');
tech_dp_label.innerHTML = 'Deployment';
var tech_dp_input = createInputrange('input','margin-left:109px','range','100','0','75','dp1');

//additional skills
var add_skills_block = createHTMLelement('h4');
add_skills_block.innerHTML='Additional Skills';


//pm
var ad_pm_label = document.createElement('label');
ad_pm_label.setAttribute('class','skills');
ad_pm_label.setAttribute('for','pm1');
ad_pm_label.innerHTML = 'Project Management';
var ad_pm_input = createInputrange('input','margin-left:59px','range','100','0','75','pm1');

//rc
var ad_rc_label = document.createElement('label');
ad_rc_label.setAttribute('class','skills');
ad_rc_label.setAttribute('for','rc1');
ad_rc_label.innerHTML = 'Recruitment';
var ad_rc_input = createInputrange('input','margin-left:110px','range','100','0','75','rc1');


//bd
var ad_bd_label = document.createElement('label');
ad_bd_label.setAttribute('class','skills');
ad_bd_label.setAttribute('for','bd1');
ad_bd_label.innerHTML = 'Business Development';
var ad_bd_input = createInputrange('input','margin-left:40px','range','100','0','75','bd1');

//ed
var ad_ed_label = document.createElement('label');
ad_ed_label.setAttribute('class','skills');
ad_ed_label.setAttribute('for','ed1');
ad_ed_label.innerHTML = 'Editing';
var ad_ed_input = createInputrange('input','margin-left:150px','range','100','0','75','ed1');

//fd
var ad_fd_label = document.createElement('label');
ad_fd_label.setAttribute('class','skills');
ad_fd_label.setAttribute('for','fd1');
ad_fd_label.innerHTML = 'Fundraising';
var ad_fd_input = createInputrange('input','margin-left:117px','range','100','0','75','fd1');



//work exp
var work_block = createHTMLelement('h2');
work_block.innerHTML = '<i class="fa fa-briefcase fa-1x" aria-hidden="true"></i>Work Experience';


//work title
var work_title1 = createHTMLelement('section');
var work_desp1 = createHTMLelement('h3');
work_desp1.innerHTML = 'Software Developer, Johnson & Johnson, San Francisco, CA';
var work_date1 = createHTMLelement('h4');
work_date1.innerHTML = 'November 2017 — November 2019'

var work_nature1 = 'Johnson & Johnson is a Fortune 500 Medical Device and Manufacturing company in the US. As a Software Developer, I work on their eCommerce platform in an Agile environment. My daily responsibilities include:';

var work_list_main=createHTMLelement('ul');
//lists
var work_list1 = createHTMLelement('li');
work_list1.innerHTML = 'Participating in daily stand up meetings, led by our Scrum Master';

var work_list2 = createHTMLelement('li');
work_list2.innerHTML = 'Utilizing the MEAN stack to enhance and maintain our eCommerce platform';

var work_list3 = createHTMLelement('li');
work_list3.innerHTML = 'Conducting code peer reviews with other members in my team';

var work_list4 = createHTMLelement('li');
work_list4.innerHTML = 'Participating in product demos';

var work_list5 = createHTMLelement('li');
work_list5.innerHTML = 'Documenting all code changes, following J&J change protocols';


/////////////////////////////////


work_list_main.append(work_list1,work_list2,work_list3,work_list4,work_list5)

work_title1.append(work_desp1,space,work_date1,space1,work_nature1,work_list_main);



var sp1 = document.createElement("BR");
var sp2 = document.createElement("BR");
var sp3 = document.createElement("BR");
var sp4 = document.createElement("BR");
var sp5 = document.createElement("BR");
var sp6 = document.createElement("BR");
var sp7 = document.createElement("BR");
var sp8 = document.createElement("BR");
var sp9 = document.createElement("BR");
var sp10 = document.createElement("BR");
var sp11 = document.createElement("BR");
var sp12 = document.createElement("BR");

skills_descp.append(tech_skills_block,sp1,tech_js_label,tech_js_input
    ,sp2,tech_cs_label,tech_cs_input,sp3,tech_ht_label,tech_ht_input,sp4,tech_rt_label,
    tech_rt_input,sp5,tech_rd_label,tech_rd_input,sp6,tech_mg_label,tech_mg_input,
    sp7,tech_dp_label,tech_dp_input,sp8,add_skills_block,sp9,ad_pm_label,ad_pm_input,
    sp10,ad_rc_label,ad_rc_input,sp11,ad_bd_label,ad_bd_input,sp12,ad_ed_label,
    ad_ed_input,space,ad_fd_label,ad_fd_input,space1);


    left_column.append(prof_block,prof_descp,space1,skills_block,skills_descp,space1,work_block,work_title1);
    
//////////border  

   var vertical_border = createHTMLelement('div','vertical-line');

///////////right column

   var right_column = createHTMLelement('div','column');
   right_column.setAttribute('style','margin-left:15px');


 //work exp
var work2 = createHTMLelement('h2');
work2.innerHTML = '<i class="fa fa-user-circle fa-1x" aria-hidden="true"></i>Work Experience';


//work title
var work_title2 = createHTMLelement('section');
var work_desp2 = createHTMLelement('h3');
work_desp2.innerHTML = 'Software Developer, PIH Unlimited, San Francisco, CA';
var work_date2 = createHTMLelement('h4');
work_date2.innerHTML = 'May 2016 — November 2017'

var work_nature2 = 'As a Software Developer at PIH Unlimited, I worked on a small Agile team in a startup environment to prototype and build mobile applications. My daily responsibilities included:';

var work_list2_main=createHTMLelement('ul');
//lists
var work2_list1 = createHTMLelement('li');
work2_list1.innerHTML = 'Brainstorming with team members to come up with new mobile application concepts';

var work2_list2 = createHTMLelement('li');
work2_list2.innerHTML = 'Working with stakeholders to gather functional and technical requirements';

var work2_list3 = createHTMLelement('li');
work2_list3.innerHTML = 'Creating wireframes and prototypes to test our ideas';

var work2_list4 = createHTMLelement('li');
work2_list4.innerHTML = 'Writing code to develop iOS and Android applications, primarily using Java and Swift';

var work2_list5 = createHTMLelement('li');
work2_list5.innerHTML = 'Utilizing automated and manual methods to test our code';

var work2_list6 = createHTMLelement('li');
work2_list6.innerHTML = 'Facilitating releases of software upgrades ';

work_list2_main.append(work2_list1,work2_list2,work2_list3,work2_list4,work2_list5,work2_list6)


   
////////////////////////////////
//work title
var work3_title1 = createHTMLelement('section');
var work3_desp1 = createHTMLelement('h3');
work3_desp1.innerHTML = 'IT Intern, Fidelity National Financial, San Francisco, CA';
var work3_date1 = createHTMLelement('h4');
work3_date1.innerHTML = 'January 2014 — May 2016'

var work3_nature1 = 'At Fidelity National Financial, I participated in an IT internship, during which I rotated between their infrastructure, data analytics, and software engineering departments. My daily activities included:';

var work3_list_main=createHTMLelement('ul');
//lists
var work3_list1 = createHTMLelement('li');
work3_list1.innerHTML = 'Shadowing senior team members to get a feel for their day-to-day responsabilities';

var work3_list2 = createHTMLelement('li');
work3_list2.innerHTML = 'Taking on small software development projects then presenting my work to the leadership team';

var work3_list3 = createHTMLelement('li');
work3_list3.innerHTML = 'Assisting with process improvements, making suggestions on workflow changes where needed';

var work3_list4 = createHTMLelement('li');
work3_list4.innerHTML = 'Participating in weekly meetings with the entire internship team';



/////////////////////////////////


work3_list_main.append(work3_list1,work3_list2,work3_list3,work3_list4)

work3_title1.append(work3_desp1,space,work3_date1,space1,work3_nature1,work3_list_main);

work_title2.append(work_desp2,space,work_date2,space1,work_nature2,work_list2_main,work3_title1);



/////////////////////////////////

//work exp
var ed = createHTMLelement('h2');
ed.innerHTML = '<i class="fa fa-book" aria-hidden="true"></i>Education';


//work title
var ed_title = createHTMLelement('section');
var ed_desp = createHTMLelement('h3');
ed_desp.innerHTML = 'BS in Computer Science, San Francisco State University, San Francisco, CA';

 

var ed_nature = 'May 2016 — November 2017';
ed_title.append(ed_desp,space,ed_nature);


right_column.append(work2,work_title2,space,work_title2,space1,ed,ed_title);


main_row.append(left_column,vertical_border,right_column);
document.body.append(main_row);
main_body.append(header,address,border,main_row);
document.body.append(main_body);