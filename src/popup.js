function createClassRoom() {
  let c = 'Class' + i
  let form = document.createElement('form');
  form.id = `${c}Form`
  form.innerHTML = `<fieldset id = '${c}Field' style = border-color:#F00> 
    <legend style = color:#F00>${c}</legend>
    <p>
      <input type = "text"
            id = "${c}Text"
            value = ""
            placeholder="Meet Link"/>
      <input type = "text"
            id = "${c}Time"
            value = "" 
            placeholder="Enter Time"/>
    </p>
  </fieldset>`
  document.getElementById('before').appendChild(form);
  let key = `${c}Text`
  document.getElementById(key).addEventListener("change", function (){
    console.log(`Stored ${key}`)
    chrome.storage.local.set({key: document.getElementById(key).value}, function() {
      
    });
  });
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
      if(i == 0){
        i++;
        createClassRoom();
      }
      else if(document.getElementById(`Class${i}Text`).value.length >= "https://meet.google.com/".length){
        i++;
        createClassRoom();
      }
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