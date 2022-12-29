/*=============== BATTERY ===============*/
initBattery();

function initBattery() {
  const batteryLiquid = document.querySelector(".battery__liguid"),
    batteryStatus = document.querySelector(".battery__status"),
    batteryPercentage = document.querySelector(".battery__percentage");

  navigator.getBattery().then((batt) => {
    updateBattery = () => {
      let level = Math.floor(batt.level * 100);
      batteryPercentage.innerHTML = level + " %";
      batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;

      if (level == 100) {
        batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`;
        batteryStatus.innerHTML = `Low battery`;
      }
      else if(level <= 20 &! batt.charging){
        batteryStatus.innerHTML = `Full battery <i class="ri-plug-line animation-red"></i>`;

      }
    };
    updateBattery();
  });
}
