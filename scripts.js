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
      for (var i = 0; i < classArray.length; i++) {
        if (today == classArray[i].day) {
          var theClass = '<div class="classToday row">';
          theClass += '<span class="name">' + classArray[i].title + '</span>';
          theClass += '<span class="hours">' + classArray[i].time + '</span>';
          theClass += '</div>';
          allClasses += theClass;
        }
      }
      if (allClasses == '') {
        allClasses = '<div class="classToday row"><span class="name">No classes today</span></div>'
      }
      allClasses += '<a class="link" href="/schedule">See Full Schedule</a>'
      return allClasses;
    }


    //append html to sidebar 
    var sideBar;
    if (document.querySelector('body.brazilian-jiu-jitsu') !== null) {
      sideBar = document.querySelector('.sideBar');
      var bjj = [
        { day: 'Monday', title: 'All Levels', time: '12:00 - 1:00pm' },
        { day: 'Monday', title: 'All Levels', time: '6:30 - 8:00pm' },
        { day: 'Monday', title: 'Beginners', time: '8:00 - 9:00pm' },
        { day: 'Tuesday', title: 'All Levels', time: '7:00 - 8:00am' },
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
        { day: 'Sunday', title: 'Open Mat', time: '10:00am - 12:00pm' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(bjj));
    } else if (document.querySelector('body.judo') !== null) {
      sideBar = document.querySelector('.sideBar');
      var judo = [
        { day: 'Monday', title: 'Adults Judo', time: '5:30 - 6:30pm' },
        { day: 'Tuesday', title: 'Adults & kids', time: '8:00 - 9:30pm' },
        { day: 'Wednesday', title: 'Adults Judo', time: '5:30 - 6:30pm' },
        { day: 'Thursday', title: 'Adults & kids', time: '8:00 - 9:30pm' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(judo));
    } else if (document.querySelector('body.no-gi-grappling') !== null) {
      sideBar = document.querySelector('.sideBar');
      var noGi = [
        { day: 'Thursday', title: 'No Gi Grapplling', time: '6:30 - 8:00pm' },
        { day: 'Saturday', title: 'No Gi Grapplling', time: '10:30 - 11:30am' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(noGi));
    } else if (document.querySelector('body.kids-jiu-jitsu') !== null) {
      sideBar = document.querySelector('.sideBar');
      var kidsBjj = [
        { day: 'Monday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
        { day: 'Monday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
        { day: 'Tuesday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
        { day: 'Wednesday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
        { day: 'Wednesday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
        { day: 'Thursday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
        { day: 'Friday', title: 'Ages 5-7', time: '3:45 - 4:30pm' },
        { day: 'Friday', title: 'Ages 8-14', time: '4:30 - 5:30pm' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(kidsBjj));
    } else if (document.querySelector('body.wrestling') !== null) {
      sideBar = document.querySelector('.sideBar');
      var wrestling = [
        { day: 'Tuesday', title: 'Wrestling', time: '6:30 - 8:30pm' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(wrestling));
    } else if (document.querySelector('body.mobility-training') !== null) {
      sideBar = document.querySelector('.sideBar');
      var mobilityTraining = [
        { day: 'Tuesday', title: 'Mobility Training', time: '11:00am - 12:00pm' },
        { day: 'Thursday', title: 'Mobility Training', time: '11:00am - 12:00pm' },
      ]
      sideBar.insertAdjacentHTML('beforeend',showClasses(mobilityTraining));
    }