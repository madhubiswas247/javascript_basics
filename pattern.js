for(i = 0;i <5;i++)
{
    var chr='';
    for(j=0;j<=i;j++)
    {
        if(j%2== 0)
        {
            chr = chr + "*";
        }
        else{
            chr= chr + "#";
        }
    }
    console.log(chr);
   chr =" "
}

/*

*
*#
*#*
*#*#
*#*#*

*/