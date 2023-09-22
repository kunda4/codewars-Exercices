/**
DESCRIPTION:
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
 */

export function meeting(s: string): string {
    // your code
    let mySrt: any[] = [];
  let  string = "";
  s.split(";").map((str) => {
    let name = str.split(":");
    mySrt.push([name[1].toUpperCase(), name[0].toUpperCase()]);
  });
 mySrt.sort().map((name) => {
    string += `(${name[0]}, ${name[1]})`;
  });
  return string
}