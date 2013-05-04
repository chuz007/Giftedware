/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var facebookLink = function()
{
    var fbObject = $('#facebookLogo');     
    var animationTimer;
    var currentLogoDeg = 0;
    var rotDeg = 30;
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
        this.rotate();
    };
    
    
    this.rotate = function()
    {
        $(fbObject).css({WebkitTransform:'rotate('+currentLogoDeg+'deg)'});               
            if(currentLogoDeg <= rotDeg)
            {
                currentLogoDeg = currentLogoDeg + 5;                   
            }
        setTimeout(this.rotate,500);            
    };
    
};