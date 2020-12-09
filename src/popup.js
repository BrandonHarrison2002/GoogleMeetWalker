function createClassRoom() {
  let c = 'Class' + i
  let form = document.createElement('form');
  form.id = `${c}Form`
  form.innerHTML = `<fieldset id = '${c}Field' style = border-color:#F00> 
    <legend style = color:#F00>${c}</legend>
    <p>
      <input type = "text"
            id = "${c}Text"
            value = "enter meet link" />
      <input type = "text"
            id = "${c}Time"
            value = "enter time" />
    </p>
  </fieldset>`
  document.getElementById('before').appendChild(form);
}

function deleteClassRoom() {
  let field = document.getElementById(`Class${i}Field`)
  field.remove()
}
var i = 0;
var alarmClock = {

  onHandler: function (e) {
    chrome.alarms.create("myAlarm", { delayInMinutes: 0.1, periodInMinutes: 0.2 });
    window.close();
  },

  offHandler: function (e) {
    chrome.alarms.clear("myAlarm");
    window.close();
  },

  setup: function () {
    // let c1 = 'Class1';
    // createClassRoom(c1);
    document.getElementById('button1').onclick = function () {
      i++;
      createClassRoom();
    }    
    document.getElementById('button2').onclick = function () {
      if(i > 0 ){
        deleteClassRoom();
        i--;
      }
    }
    
  }
};


document.addEventListener('DOMContentLoaded', function () {
  alarmClock.setup();
});