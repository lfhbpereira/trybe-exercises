const header = document.getElementById('header-container');
header.style.backgroundColor = 'mediumseagreen';

const emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'lightsalmon';

const emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].style.backgroundColor = 'darkorchid';
}

const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'khaki';

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].style.backgroundColor = 'black';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'darkslategray';
