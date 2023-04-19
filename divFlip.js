Date.prototype.getDifference = function(d)
{
    // Find the distance between now and the count down date
    var distance = Math.abs(this-d);

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {days:days, hours:hours, minutes:minutes,seconds:seconds};
};


var DivFlip = function(top,topA,bot,botA){
    var root = this;

    this.divs = {
        top:undefined,
        topA:undefined,
        bot:undefined,
        botA:undefined
    };


    this.update = function update(newVal) {
        root.divs.topA.html(root.divs.top.html());
        root.divs.botA.html(newVal);
        root.divs.top.html(newVal);
                        
        root.divs.topA.css({transform: "rotateX(0deg)", visibility:"visible"});
        $({rot:0}).animate(
            {rot:90},
            { 
                duration:200, 
                step:function(){root.divs.topA.css({transform: 'rotateX(' + this.rot + 'deg)'});},
                complete:function() {
                    root.divs.topA.css({visibility:"hidden"});
                    root.divs.botA.css({transform: "rotateX(90deg)", visibility:"visible"});
                    $({rot:90}).animate(
                        {rot:0},
                        { 
                            duration:200, 
                            step:function(){root.divs.botA.css({transform: 'rotateX(' + this.rot + 'deg)'});},
                            complete:function() { 
                                root.divs.bot.html(newVal); 
                                root.divs.botA.css({visibility:"hidden"}); 
                            }
                        });

                }
            }
        );
    }
}