(function() {
  'use strict';
  
  //Wait for DOM to completely load
  document.addEventListener("DOMContentLoaded", function(event) {

    //DOM Variable declarations
    var user = {},
        userData = [],
        genderSelect = document.querySelector('#gendervalidation'),
        ageSelect = document.querySelector('#agevalidation'),
        licenseSelect = document.querySelector('#licensevalidation'),
        carSelect = document.querySelector('#carvalidation'),
        endSurvey = document.querySelector('.end'),
        surveySuccess = document.querySelector('#success'),
        mainForm = document.querySelector('#surveyform'),
        Button1 = document.querySelector('#myBtn'),
        Button2 = document.querySelector('#myBtn2'),
        Button3 = document.querySelector('#myBtn3'),
        Button4 = document.querySelector('#myBtn4'),
        reloadBtn = document.querySelector('#reloadBtn'),
        adolescents = localStorage.getItem("adolescents"),
        unlicensedUsers = localStorage.getItem("unlicensedUsers"),
        firstcarUsers = localStorage.getItem("firstcarUsers");

        //Other elements hidden by default so only one element is visible at a time
        genderSelect.classList.add('hide');
        licenseSelect.classList.add('hide');
        endSurvey.classList.add('hide');
        surveySuccess.classList.add('hide');
        carSelect.classList.add('hide');

    //EventListener for button to validate age field and save results.
    Button1.addEventListener("click", function() {
        var userAge = document.querySelector('#userage').value;

        //Conditional statement checking if field is empty or not an integer value
        if (userAge == "" || isNaN(userAge)) {
            document.querySelector('#validationerror').innerHTML = "Incorrect format"; //Validate if field is empty or not an integer value
            return false;
        }
        //Conditional statement checking if user is less than 18 years or older than 81. Then end the survey
        if (userAge < 18 || userAge > 80) {        
          //If the user is less than 18 then save the count to localstorage and end the survey
          if (userAge < 18) {
            adolescents ++;
            localStorage.setItem("adolescents", adolescents); //Save count of under 18 users to localstorage
            endSurvey.classList.remove('hide');
            mainForm.classList.add('hide');
            endSurvey.classList.add('show');
          }
          endSurvey.classList.remove('hide');
          mainForm.classList.add('hide');
          endSurvey.classList.add('show');
          // document.querySelector('#survey-total').innerHTML = "Total adolescents who participated in this survey: " + adolescents;
          return false;
        }

        //Save user data in object and array
        else {
          user.age = userAge; //Saving value to object
          userData.push(parseInt(user.age)); //Saving value to array
          ageSelect.classList.add('hide');
          genderSelect.classList.add('show');
          document.querySelector('#validationerror').innerHTML = ""; //Hide validation error
        }
    }); 

    //EventListener for getting gender.
    Button2.addEventListener("click", function() {
      var userGender = document.getElementsByName('gender');

      //Loop through radio buttons, get the value and save it
      for (var i = 0, length = userGender.length; i < length; i++)
      {
       if (userGender[i].checked)
       {
        user.gender = userGender[i].value;
        userData.push(user.gender);
        genderSelect.classList.add('hide');
        genderSelect.classList.remove('show');
        licenseSelect.classList.add('show');
       }
      }
    }); 

    //EventListener for checking if user has license.
    Button3.addEventListener("click", function() {
      var userLicense = document.getElementsByName('haslicense');

      //Loop through radio buttons, get the value and save it
      for (var i = 0, length = userLicense.length; i < length; i++)
      {
       if (userLicense[i].checked)
       {
         //If the user is unlicensed then save the count to localstorage and end the survey.
         if (userLicense[i].value === 'no' || userData[i] > 25) {
            user.hasLicense = userLicense[i].value; //Saving value to object
            userData.push(user.hasLicense); //Saving object to array
            mainForm.classList.add('hide');
            endSurvey.classList.add('show');
            unlicensedUsers ++;
            localStorage.setItem("unlicensedUsers", unlicensedUsers); //Save count of unlicensed users to localstorage
            return false;
         }
         else {
           user.hasLicense = userLicense[i].value; //Saving value to object
           userData.push(user.hasLicense); //Saving object to array
           carSelect.classList.add('show');
           licenseSelect.classList.remove('show');
           licenseSelect.classList.add('hide');
         }
       }
      }
    });

    //EventListener for checking if this is the users first car.
    Button4.addEventListener("click", function() {
      var userCar = document.getElementsByName('hascar');

      //Loop through radio buttons, get the value and save it
      for (var i = 0, length = userCar.length; i < length; i++)
      {
       if (userCar[i].checked)
       {
         //If this i users first car then save the count to localstorage and end the survey.
         if (userCar[i].value === 'yes') {
           user.firstCar = userCar[i].value; //Saving value to object
           userData.push(user.firstCar); //Saving value to array
           mainForm.classList.add('hide');
           endSurvey.classList.add('show');
           firstcarUsers ++;
           localStorage.setItem("firstcarUsers", firstcarUsers); //Save count of first car users to localstorage
           return false;
         }
         else {
           user.firstCar = userCar[i].value; //Saving value to object
           userData.push(user.firstCar); //Saving value to array
           surveySuccess.classList.add('show');
           mainForm.classList.add('hide');
         }
       }
      }
    });

    //Click event to reload the survey and try again.
    reloadBtn.addEventListener("click", function() {
        location.reload();
    });

  });
})();