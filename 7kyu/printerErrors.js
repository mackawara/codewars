/* Printer Errors
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
Solution

Steps
1. Use split to generate an array from the string
2.get lenght of the string array and save as denominator
3 create a second array of the allowed colors/letters.
4. loop through the string array and filter those elements not present in second array (array includes)

*/
function printerError(s) {
 const denominator=s.length
 const aMC=["a","b","c","d","e","f","g","h","i","j","k","l","m"]
 let numerator=0
 s.split("").forEach(element => {
    aMC.includes(element)?console.log("genuine"):numerator++
    
 });
 console.log(`${numerator}/${denominator}`)
}
printerError("aaabbbbhaijjjm")
printerError("aaaxbbbbyyhwawiwjjjwwm")