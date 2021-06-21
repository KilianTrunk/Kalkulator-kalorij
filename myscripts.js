var age = document.getElementById("age").value;
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;

var maintenanceCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5;
var maintenanceCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161;

var deficitCalculationMale = maintenanceCalculationMale - 400;
var deficitCalculationFemale = maintenanceCalculationFemale - 400;

var surplusCalculationMale = maintenanceCalculationMale + 400;
var surplusCalculationFemale = maintenanceCalculationFemale + 400;

document.getElementById("maintenanceCalculationMale").innerHTML = maintenanceCalculationMale;
document.getElementById("maintenanceCalculationFemale").innerHTML = maintenanceCalculationFemale;

document.getElementById("deficitCalculationMale").innerHTML = deficitCalculationMale;
document.getElementById("deficitCalculationFemale").innerHTML = deficitCalculationFemale;

document.getElementById("surplusCalculationMale").innerHTML = surplusCalculationMale;
document.getElementById("surplusCalculationFemale").innerHTML = surplusCalculationFemale;

function doFunction() {
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var maintenanceCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5;
  var maintenanceCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161;

  if (document.getElementById("inlineFormCustomSelectPref").value == "2")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.2;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.2;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "3")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.375;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.375;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "4")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.55;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.55;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "5")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.725;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.725;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "6")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.9;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.9;
  }

  var deficitCalculationMale = maintenanceCalculationMale - 400;
  var deficitCalculationFemale = maintenanceCalculationFemale - 400;

  var surplusCalculationMale = maintenanceCalculationMale + 400;
  var surplusCalculationFemale = maintenanceCalculationFemale + 400;

  document.getElementById("maintenanceCalculationMale").innerHTML = maintenanceCalculationMale;
  document.getElementById("maintenanceCalculationFemale").innerHTML = maintenanceCalculationFemale;

  document.getElementById("deficitCalculationMale").innerHTML = deficitCalculationMale;
  document.getElementById("deficitCalculationFemale").innerHTML = deficitCalculationFemale;

  document.getElementById("surplusCalculationMale").innerHTML = surplusCalculationMale;
  document.getElementById("surplusCalculationFemale").innerHTML = surplusCalculationFemale;
}
