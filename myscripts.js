var age = document.getElementById("age").value;
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;

var maintenanceCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5;
var maintenanceCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161;

var deficitCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5 - 400;
var deficitCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161 - 400;

var surplusCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5 + 400;
var surplusCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161 + 400;

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

  var deficitCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5 - 400;
  var deficitCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161 - 400;

  var surplusCalculationMale = 10 * weight + 6.25 * height - 5 * age + 5 + 400;
  var surplusCalculationFemale = 10 * weight + 6.25 * height - 5 * age - 161 + 400;

  if (document.getElementById("inlineFormCustomSelectPref").value == "2")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.2;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.2;
    deficitCalculationMale = deficitCalculationMale * 1.2;
    deficitCalculationFemale = deficitCalculationFemale * 1.2;
    surplusCalculationMale = surplusCalculationMale * 1.2;
    surplusCalculationFemale = surplusCalculationFemale * 1.2;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "3")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.375;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.375;
    deficitCalculationMale = deficitCalculationMale * 1.375;
    deficitCalculationFemale = deficitCalculationFemale * 1.375;
    surplusCalculationMale = surplusCalculationMale * 1.375;
    surplusCalculationFemale = surplusCalculationFemale * 1.375;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "4")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.55;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.55;
    deficitCalculationMale = deficitCalculationMale * 1.55;
    deficitCalculationFemale = deficitCalculationFemale * 1.55;
    surplusCalculationMale = surplusCalculationMale * 1.55;
    surplusCalculationFemale = surplusCalculationFemale * 1.55;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "5")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.725;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.725;
    deficitCalculationMale = deficitCalculationMale * 1.725;
    deficitCalculationFemale = deficitCalculationFemale * 1.725;
    surplusCalculationMale = surplusCalculationMale * 1.725;
    surplusCalculationFemale = surplusCalculationFemale * 1.725;
  }

  if (document.getElementById("inlineFormCustomSelectPref").value == "6")
  {
    maintenanceCalculationMale = maintenanceCalculationMale * 1.9;
    maintenanceCalculationFemale = maintenanceCalculationFemale * 1.9;
    deficitCalculationMale = deficitCalculationMale * 1.9;
    deficitCalculationFemale = deficitCalculationFemale * 1.9;
    surplusCalculationMale = surplusCalculationMale * 1.9;
    surplusCalculationFemale = surplusCalculationFemale * 1.9;
  }

  document.getElementById("maintenanceCalculationMale").innerHTML = maintenanceCalculationMale;
  document.getElementById("maintenanceCalculationFemale").innerHTML = maintenanceCalculationFemale;

  document.getElementById("deficitCalculationMale").innerHTML = deficitCalculationMale;
  document.getElementById("deficitCalculationFemale").innerHTML = deficitCalculationFemale;

  document.getElementById("surplusCalculationMale").innerHTML = surplusCalculationMale;
  document.getElementById("surplusCalculationFemale").innerHTML = surplusCalculationFemale;
}
