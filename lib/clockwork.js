/**
*   clockwork   
*
*   Author Laurent Guyard <lguyard@gmail.com>
*   (c) 2014 Laurent Guyard, u-prod (www.u-prod.com) 	
*    		
*/
(function($){
    
    $.fn.clockwork = function(options){
        
        var defaults = {
            background: '#322',
            textColor: '#FFF',
            hourColor: 'orange'
        };
        
        var params = $.extend(defaults, options);
        
        return this.each(function(){
            
            var $clock = $(this);
            var $clockwidth = 210;
            $clock.css({
                'font-family': 'arial',
                'width': $clockwidth,
                'padding': '7px',
                'border': '3px solid '+params.background,
                'text-align': 'justify',
                'font-size': '1.3em', //120%
                'background': params.background,
                'color': params.textColor,
                'display': 'inline-block',
                'line-height': 1
                
            });
            var key = new Array(
                's0', 'm30', 'm10', 'm15', 'm20',
                'm5', 'mn', 'to', 'past', 'ho1', 'ho3',
                'ho2', 'ho4', 'ho5', 'ho6', 'ho7', 'ho8',
                'ho9', 'ho10', 'ho11', 'ho12', 'oclock');
            
            var ctem = new Array(
                'IT IS', 'HALF', 'TEN', 'QUARTER',
                 'TWENTY', 'FIVE', 'MINUTES', 'TO', 
                 'PAST', 'ONE', 'THREE', 'TWO',
                 'FOUR', 'FIVE', 'SIX', 'SEVEN',
                 'HEIGHT', 'NINE', 'TEN', 'ELEVEN',
                 'TWELVE', 'O\'CLOCK'); 
            
            var line = new Array(1, 0, 2, 1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 2);
            
            var pos = new Array('center', 'left', 'right');
            
            for(var i=0;i<ctem.length;++i){        
                var $span = '<span class="'+key[i]+' '+pos[line[i]]+'">'+ctem[i]+'</span>';
                $clock.append($span);                
                if(line[i] == 2 && line[i-1] == 0){
                    var $width = 0;
                    $width = $width + $('span.'+key[i-2]).width();
                    $width = $width + $('span.'+key[i]).width();
                    $('span.'+key[i-1]).width(200-$width-30);
                }                
            }
            
            
            /**************************************************/
            
            setInterval(function(){
                
                var date = new Date(), heure = '', minute = '';    
                heure = date.getHours();
                minute = date.getMinutes();    
                $('.clock span').removeClass('active');
                $('.s0').addClass('active');    
                if(minute > 30){
                $('.to').addClass('active');
                heure = heure+1;
                }else if(minute < 30 && minute >= 5)
                $('.past').addClass('active');
                
                if(heure>12) heure = heure-12;
                $('.ho'+heure).addClass('active');
                
                if(minute >= 0 && minute < 5){
                $('.oclock').addClass('active');
                }else if(minute >=5 && minute < 10 ){
                $('.m5').addClass('active');
                }else if(minute >=10 && minute < 15 ){
                $('.m10').addClass('active');
                }else if(minute >=15 && minute < 20 ){
                $('.m15').addClass('active');
                }else if(minute >=20 && minute < 25 ){
                $('.m20').addClass('active');
                }else if(minute >=25 && minute < 30 ){
                $('.m20').addClass('active');
                $('.m5').addClass('active');
                }else if(minute >=30 && minute < 35 ){
                $('.m30').addClass('active');    
                }else if(minute >=35 && minute < 40 ){
                $('.m20').addClass('active');
                $('.m5').addClass('active');
                }else if(minute >=40 && minute < 45 ){
                $('.m20').addClass('active');
                }else if(minute >=45 && minute < 50 ){
                $('.m15').addClass('active');
                }else if(minute >=50 && minute < 55 ){
                $('.m10').addClass('active');
                }else if(minute >=55 && minute <= 59 ){
                $('.m5').addClass('active');
                }
                
            },1000);  
            
            /**************************************************/            
            
            var css = '';
                css+= '.clock span {margin:3px;}';
                css+= '.clock span {display:inline-block;}';
                css+= '.clock span.active {color:'+params.hourColor+';}';
                css+= '.clock span.left {float: left;}';
                css+= '.clock span.right {float: right;}';
                css+= '.clock span.center {text-align: center;}';
            var head = document.head;
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet){
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }            
            head.appendChild(style);
            
            
        });
        
    };
    
})(jQuery);
