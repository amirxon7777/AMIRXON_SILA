// Vaqtni yangilash funksiyasi
function updateTime() {
    const currentTimeDisplay = document.getElementById('currentTime');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Budilnikni sozlash
let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    
    if (alarmInput) {
        const current = new Date();
        const alarm = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 
                              ...alarmInput.split(':'));
        
        const timeToAlarm = alarm.getTime() - current.getTime();
        
        if (timeToAlarm >= 0) {
            alarmTime = alarmInput;
            document.getElementById('message').textContent = `Alarm set for ${alarmInput}`;
            
            if (alarmTimeout) {
                clearTimeout(alarmTimeout);
            }

            alarmTimeout = setTimeout(() => {
                alert('Alarm ringing!');
                document.getElementById('message').textContent = '';
            }, timeToAlarm);
        } else {
            document.getElementById('message').textContent = 'Please select a future time!';
        }
    } else {
        document.getElementById('message').textContent = 'Please set a valid time!';
    }
}

// Har soniyada vaqtni yangilash
setInterval(updateTime, 1000);

// Budilnikni o'rnatish tugmasi funksiyasi
document.getElementById('setAlarmBtn').addEventListener('click', setAlarm);
