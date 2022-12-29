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
      } else if ((level <= 20) & !batt.charging) {
        batteryStatus.innerHTML = `Full battery <i class="ri-plug-line animated-red"></i>`;
      } else if (batt.charging) {
        batteryStatus.innerHTML = `Charging <i class="ri-flashlight-line animated-green"></i>`;
      } else {
        batteryStatus.innerHTML = "";
      }
      if (level <= 20) {
        batteryLiquid.classList.add("gradient-color-red");
        batteryLiquid.classList.remove(
          "gradient-color-orange",
          "gradient-color-yellow",
          "gradient-color-green"
        );
      } else if (level <= 40) {
        batteryLiquid.classList.add("gradient-color-orange");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-yellow"
        );
      } else if (level <= 80) {
        batteryLiquid.classList.add("gradient-color-yellow");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-orange",
          "gradient-color-yellow"
        );
      } else {
        batteryLiquid.classList.add("gradient-color-green");
        batteryLiquid.classList.remove(
          "gradient-color-red",
          "gradient-color-orange",
          "gradient-color-yellow"
        );
      }
    };
    updateBattery();

    batt.addEventListener("chargingcharge", () => {
      updateBattery();
    });
    batt.addEventListener("levelcharge", () => {
      updateBattery();
    });
  });
}


// theme light and dark mode

const themeLightDark = () => {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  const themeMode = () => {
    if (localStorage.getItem("theme-dark") == "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  };
  darkModeCheckbox.addEventListener("click", function () {
    localStorage.setItem("theme-dark", this.checked);
    themeMode();
  });
  //   check for saved user preference, if any, on load of the website

  if (localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if (document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
};
themeLightDark();