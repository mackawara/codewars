/* A triangle can be made from 3 legnhts if 2 sides of the triangle are always greater than the 3rd lenght */

function isTriangle(a,b,c)
{
   return a+b>c&&a+c>b&&b+c>a
}
