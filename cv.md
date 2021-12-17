# **Mariia Ushakova**

## **Frontend Developer**

***

## Contact Details

Location: Tczew

Phone: +48 729402417

E-mail: m.ushakova22@gmail.com

[Github] (https://github.com/Mariia22)

(LinkedIn) [https://www.linkedin.com/in/mariia-ushakova-7b73b33a/]
***

## About me

I have experience in production and sales automation as a 1C Programmer and Lead Support Specialist 1C. After relocation to Poland, I've decided to change the technology stack. My interests are in Front-End Engineering because I love to create beautiful performant products.
Now I'm looking for a job as a Junior Frontend Developer or internship.

I have work permit in Poland (karta pobytu z adnotacją "dostęp do rynku pracy")
***

## General Skills

* HTML
* CSS
* JS
* React
* Redux
* SASS
* Gulp
* Git
* Figma
  
***

## Code example

**Codewars**

**Task** Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

```function solution(roman){
 function equalsRomanToArabic(numer){
   switch(numer){
   case "I": return 1;
   case "V": return 5;
   case "X": return 10;
   case "L": return 50;
   case "C": return 100;
   case "D": return 500;
   case "M": return 1000;
   default: return -1
   }
  }
  const romanArr = roman.split('');
  let result = 0;
  for(let i=1; i<=romanArr.length;; i++){
    let currNumber = equalsRomanToArabic (romanArr[i-1]);
    let nextNumber = equalsRomanToArabic(romanArr[i]);
    if(currNumber >= nextNumber){
      result += currNumber;
    }
    else{
      result += nextNumber - currNumber;
      if(i === romanArr.length - 1){
        break;
      }
    }
  }
  return result;
}
```

***

## Hobby Projects

1. TODO List  (React/Redux/Typescript/Hooks) https://github.com/Mariia22/todo-react
2. Window Company (Vanilla JS) https://github.com/Mariia22/SiteForWindowCompanyJS
3. Cat Energy (HTML5/CSS3) https://github.com/Mariia22/953431-cat-energy-18
***
## Education

* Taganrog Institute of Technology of Southern Federal University Applied informatics in psychology | 2007 - 2012
* Taganrog College of Aviation Ind. Accounting | 2014 - 2015
  
***

## Courses

* CODE:ME JS6/React | July 2019
* CODE:ME HTML5\CSS3 | May 2019
* RS Schools Course «JavaScript/Front-end. Stage 0» (in progress)
  
***

## Languages

* English - Intermediate
* Russian - Native
* Polish - Pre-Intermidiate
