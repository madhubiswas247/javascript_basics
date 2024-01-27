
var num = new Number(1000000).toLocaleString("en-IN");//indian english
var num1 = new Number(1000000).toLocaleString("hi-IN");  //Hindi (India)
var num2 = new Number(1000000).toLocaleString("bn-IN");  //Bangla (India)
var num3 = new Number(1000000).toLocaleString("en-GB"); //British English
console.log(num);  //10,00,000
console.log(num1);  //10,00,000
console.log(num2);  //১০,০০,০০০
console.log(num3);  //1,000,000

var n = new Number(1000000);
var myObj = {
  style: "currency",
  currency: "EUR"
}

x = n.toLocaleString("en-GB", myObj);
console.log(x);  //€1,000,000.00
/*
The toLocaleString() method converts a number into a string, using a local language format.
The default language depends on the locale setup on your computer.

syntax
number.toLocaleString(locales, options)

locales
Optional. Which language specific format to use.
Click on the "Try it" button to see all values in action.
Legal Values:
ar-SA Arabic (Saudi Arabia)
bn-BD Bangla (Bangladesh)
bn-IN Bangla (India)
cs-CZ Czech (Czech Republic)
da-DK Danish (Denmark)
de-AT Austrian German
de-CH "Swiss" German
de-DE Standard German (as spoken in Germany)
el-GR Modern Greek
en-AU Australian English
en-CA Canadian English
en-GB British English
en-IE Irish English
en-IN Indian English
en-NZ New Zealand English
en-US US English
en-ZA English (South Africa)
es-AR Argentine Spanish
es-CL Chilean Spanish
es-CO Colombian Spanish
es-ES Castilian Spanish (as spoken in Central-Northern Spain)
es-MX Mexican Spanish
es-US American Spanish
fi-FI Finnish (Finland)
fr-BE Belgian French
fr-CA Canadian French
fr-CH "Swiss" French
fr-FR Standard French (especially in France)
he-IL Hebrew (Israel)
hi-IN Hindi (India)
hu-HU Hungarian (Hungary)
id-ID Indonesian (Indonesia)
it-CH "Swiss" Italian
it-IT Standard Italian (as spoken in Italy)
jp-JP Japanese (Japan)
ko-KR Korean (Republic of Korea)
nl-BE Belgian Dutch
nl-NL Standard Dutch (as spoken in The Netherlands)
no-NO Norwegian (Norway)
pl-PL Polish (Poland)
pt-BR Brazilian Portuguese
pt-PT European Portuguese (as written and spoken in Portugal)
ro-RO Romanian (Romania)
ru-RU Russian (Russian Federation)
sk-SK Slovak (Slovakia)
sv-SE Swedish (Sweden)
ta-IN Indian Tamil
ta-LK Sri Lankan Tamil
th-TH Thai (Thailand)
tr-TR Turkish (Turkey)
zh-CN Mainland China, simplified characters
zh-HK Hong Kong, traditional characters
zh-TW Taiwan, traditional characters

options	
Optional. An object were you can set some properties.

currency:-	Legal values: any currency code (like "EUR", "USD", "INR", etc.)
currencyDisplay:-
Legal values:
"symbol" (default)
"code"
"name"
localeMatcher:-
Legal values:
"best-fit" (default)
"lookup"
maximumFractionDigits:-
A number from 0 to 20 (default is 3)
maximumSignificantDigits:-
A number from 1 to 21 (default is 21)
minimumFractionDigits:-
A number from 0 to 20 (default is 3)
minimumIntegerDigits:-
A number from 1 to 21 (default is 1)
minimumSignificantDigits:-
A number from 1 to 21 (default is 21)
style:-
Legal values:
"currency"
"decimal" (default)
"percent"
useGrouping:-
Legal values:
"true" (default)
"falsel"
*/
