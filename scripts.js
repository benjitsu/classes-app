var bjj = [
  { day: 'Monday', title: 'All Levels', time: '12:00 - 1:00pm' },
  { day: 'Monday', title: 'All Levels', time: '6:30 - 8:00pm' },
  { day: 'Monday', title: 'Beginners', time: '8:00 - 9:00pm' },
  { day: 'Tuesday', title: 'All Levels', time: '07:00 - 8:00am' },
  { day: 'Tuesday', title: 'Competition Training', time: '12:00 - 1:00pm' },
  { day: 'Tuesday', title: 'Beginners', time: '5:00 - 6:30pm' },
  { day: 'Wednesday', title: 'All Levels', time: '12:00 - 1:00pm' },
  { day: 'Wednesday', title: 'All Levels', time: '6:30 - 8:00pm' },
  { day: 'Wednesday', title: 'Beginners', time: '8:00 - 9:00pm' },
  { day: 'Thursday', title: 'All Levels', time: '07:00 - 8:00am' },
  { day: 'Thursday', title: 'Competition Training', time: '12:00 - 1:00pm' },
  { day: 'Thursday', title: 'Beginners', time: '5:00 - 6:30pm' },
  { day: 'Friday', title: 'All Levels', time: '12:00 - 1:00pm' },
  { day: 'Friday', title: 'Beginners', time: '5:30 - 6:30pm' },
  { day: 'Saturday', title: 'All Levels', time: '11:30am - 1:00pm' },
  { day: 'Sunday', title: 'Open Mat', time: '10:00am - 12:00pm' }
]

var judo = [
  { day: 'Monday', title: '& BJJ Takedowns', time: '5:30 - 6:30pm' },
  { day: 'Tuesday', title: 'Adults & kids', time: '8:00 - 9:30pm' },
  { day: 'Wednesday', title: '& BJJ Takedowns', time: '5:30 - 6:30pm' },
  { day: 'Thursday', title: 'Adults & kids', time: '8:00 - 9:30pm' }
]

var noGi = [
   { day: 'Thursday', title: 'No Gi Grapplling', time: '6:30 - 8:00pm' },
   { day: 'Saturday', title: 'No Gi Grapplling', time: '10:30 - 11:30am' }
]

var kidsBjj = [
  { day: 'Monday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
  { day: 'Monday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
  { day: 'Tuesday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
  { day: 'Wednesday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
  { day: 'Wednesday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
  { day: 'Thursday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
  { day: 'Friday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
  { day: 'Friday', title: 'Ages 8-14', time: '4:30 - 5:30pm' }
]

var wrestling = [
  { day: 'Tuesday', title: 'Wrestling', time: '6:30 - 8:30pm' }
]

var mobilityTraining = [
    { day: 'Tuesday', title: 'Mobility Training', time: '11:00am - 12:00pm' },
    { day: 'Thursday', title: 'Mobility Training', time: '11:00am - 12:00pm' }
]

var today = '';

// turn date number to day of week
function getToday() {
var d = new Date();
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';
today = weekday[d.getDay()];
}


// build the class
function showClasses(classArray) {
  getToday();
  var allClasses = '';
  for ( var i = 0; i < classArray.length; i++ ) {
  if (today == classArray[i].day) {
  var theClass = '<div class="classToday row">';
  theClass += '<span class="name">' + classArray[i].title + '</span>';
  theClass += '<span class="hours">' + classArray[i].time + '</span>';
  theClass += '</div>';
  allClasses += theClass;
  }
  }
  if(allClasses == '') {
    allClasses = '<div class="classToday row"><span class="name">No classes today</span></div>'
  }
  return allClasses;
}


//append html to sidebar 
if (document.querySelector('.brazilian-jiu-jitsu .sideBar') !== null) {
  var sideBar = document.querySelector('.brazilian-jiu-jitsu .sideBar');
  sideBar.innerHTML = showClasses(bjj);
} else if (document.querySelector('.judo .sideBar') !== null) {
  var sideBar = document.querySelector('.judo .sideBar');
  sideBar.innerHTML = showClasses(judo);
} else if (document.querySelector('.no-gi-grappling .sideBar') !== null) {
  var sideBar = document.querySelector('.no-gi-grappling .sideBar');
  sideBar.innerHTML = showClasses(noGi);
} else if (document.querySelector('.kids-jiu-jitsu .sideBar') !== null) {
  var sideBar = document.querySelector('.kids-jiu-jitsu .sideBar');
  sideBar.innerHTML = showClasses(kidsBjj);
} else if (document.querySelector('.wrestling .sideBar') !== null) {
  var sideBar = document.querySelector('.wrestling .sideBar');
  sideBar.innerHTML = showClasses(wrestling);
} else if (document.querySelector('.mobility-training .sideBar') !== null) {
  var sideBar = document.querySelector('.mobility-training .sideBar');
  sideBar.innerHTML = showClasses(mobilityTraining);
}