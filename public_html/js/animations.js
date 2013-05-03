/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var facebookLink = function()
{
    var fbObject = $('#facebookLogo');     
    var animationTimer;
    var currentLogoDeg = 0;
    
    this.initialize = function()
    {
        animationTimer = setTimeout();
        $('#facebookLogo').on('mouseover',function(){
                    $(this).animate({width:'35px'},100);
        });
        $('#facebookLogo').on('mouseout',function(){
            $(this).animate({width:'29px'},100);
        });
        this.animate();
    };
    
    this.animate = function()
    {
        
    };
    
    
    this.rotate = function(deg)
    {
        currentLogoDeg = currentLogoDeg + 5;
        $(fbObject).css({WebkitTransform:'rotate('+currentLogoDeg+'deg)'});               
        if(currentLogoDeg <= deg)
        {
            currentLogoDeg = currentLogoDeg + 10;                
        }    
    };
    
};