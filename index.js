// What subject will Bolatito take as an Art student in Greenfield High School

let subject = 'art';
let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

if (subject == 'science') {
    console.log (generalSubjects + ' ' + scienceSubjects);
} else if (subject == 'socialscience') {
    console.log (generalSubjects + ' ' + socialScienceSubjects);
} else if (subject == 'art') {
    console.log (generalSubjects + ' ' + artSubjects);
    
} else {
    console.log (generalSubjects);
}

// Bolatito will be taking the following subjects
// English, Mathematics Government, Economics, Literature, History

// No 5 Assignment



const num = 11;
let pwr = 1;

while(pwr < num){
      if(num - pwr < Math.floor(pwr / 2)){
         break;
      };
      pwr *= 2;
   };
   console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num);

