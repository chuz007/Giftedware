/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var facebookLink = function()
{
    var fbObject = $('#facebookLogo');             
    var timer; 
    var cssRotatorName;
    this.initialize = function()
    {        
        $('#facebookLogo').on('mouseover',function(){
                    $(this).animate({width:'35px'},100);
        });
        $('#facebookLogo').on('mouseout',function(){
            $(this).animate({width:'29px'},100);
        });        
        timer = setInterval(this.animate,10000,this.rotate);        
        var browser = $.browser;             
    };   
    
    this.animate = function(rotateFunc)
    {
        //var localRotate = rotateFunc;
        rotateFunc(15);        
        setTimeout(function(){
            rotateFunc(0);
            setTimeout(function(){
                rotateFunc(-15);
                setTimeout(function(){
                    rotateFunc(0);
                },100);
            },100);
        },100);        
    };
    
    
    this.rotate = function(deg)
    {
        setTimeout(function(){                                    
            $(fbObject).css({WebkitTransform:'rotate('+deg+'deg)'});            
            $(fbObject).css({'-moz-transform':'rotate('+deg+'deg)'});
            $(fbObject).css({'-ms-transform':'rotate('+deg+'deg)'});            
        },250);                 
    };        
    
};