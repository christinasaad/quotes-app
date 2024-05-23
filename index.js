
function randomquotes(){

var authors= ["Oscar Wilde" ,
             "Frank Zappa" , 
             "Marcus Tullius" , 
             "Mae West",
             "Mahtma Ghandi",
             "Robert Fros",
             "Mark Twain",    
            ];
var quotes= [" “Be yourself; everyone else is already taken.” " ,
             " “So many books, so little time.” " , 
             " “A room without books is like a body without a soul.” " , 
             " “You only live once, but if you do it right, once is enough.” ",
             " “Be the change that you wish to see in the world.” ",
            " “In three words I can sum up everything I've learned about life: it goes on.” ",
             " “If you tell the truth, you don't have to remember anything.” ",
            
            ];
        
        
var num = Math.floor(   Math.random ()  * authors.length )
            
        
document.getElementById("main").innerHTML= (quotes[num]  + "  ....  " + authors[num]);

    }




