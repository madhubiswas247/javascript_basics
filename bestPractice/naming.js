/*
This is a no-brainer but it is scary how often you will come across variables like x1, fe2 or xbqne
 in JavaScript, or — on the other end of the spectrum — variable names like 
 incrementorForMainLoopWhichSpansFromTenToTwenty or createNewMemberIfAgeOverTwentyOneAndMoonIsFull.

None of these make much sense — good variable and function names should be easy to understand and
 tell you what is going on — not more and not less. One trap to avoid is marrying values and 
 functionality in names. A function called isLegalDrinkingAge() makes more sense than
  isOverEighteen() as the legal drinking age varies from country to country, and there are
   other things than drinking to consider that are limited by age.

Hungarian notation is a good variable naming scheme to adopt (there are other naming schemes to consider),
 the advantage being that you know what something is supposed to be and not just what it is.

For example, if you have a variable called familyName and it is supposed to be a string, you would 
write it as sFamilyName in “Hungarian”. An object called member would be oMember and a Boolean called
 isLegal would be bIsLegal. It is very informative for some, but seems like extra overhead to 
 others — it is really up to you whether you use it or not.

Keeping to English is a good idea, too. Programming languages are in English, so why not keep this as 
a logical step for the rest of your code. Having spent some time debugging Korean and Slovenian code,
 I can assure you it is not much fun for a non-native speaker.

See your code as a narrative. If you can read line by line and understand what is going on, well done.
 If you need to use a sketchpad to keep up with the flow of logic, then your code needs some work. 
 Try reading Dostojewski if you want a comparison to the real world — I got lost on a page with 14
  Russian names, 4 of which were pseudonyms. Don't write code like that — it might make it more art 
  than product, but this is rarely a good thing.
*/