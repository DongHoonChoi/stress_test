var num=1;

function startgo() {
    $(".startgo").hide();
    $(".question").show();
    $(".container").hide();
    next();
}

$(document).ready(function() {
    $("#A").click(function(){
        var type1 = $("#type1").val();
        var prevalue1 = $("#"+type1).val();
        $("#"+type1).val(parseInt(prevalue1)+1);
        console.log("A pressed : " + type1, prevalue1);
        next();
    });
});

$(document).ready(function(){
    $("#B").click(function(){
        var type2 = $("#type2").val();
        var prevalue2 = $("#"+type2).val();
        $("#"+type2).val(parseInt(prevalue2)+1);
        next();
    });
});


$(document).ready(function(){
    $("#C").click(function(){
        var type3 = $("#type3").val();
        var prevalue3 = $("#"+type3).val();
        $("#"+type3).val(parseInt(prevalue3)+1);
        next();
    });
});

$(document).ready(function(){
    $("#D").click(function(){
        var type4 = $("#type4").val();
        var prevalue4 = $("#"+type4).val();
        $("#"+type4).val(parseInt(prevalue4)+1);
        next();
    });
});

function next() {

    if (num == 11) {
        $(".question").hide();
        $(".result").show();
        var stress ='';
        var pro = parseInt($('#problem').val());
        var emo = parseInt($('#emotion').val());
        var per = parseInt($('#person').val());
        var ho = parseInt($('#hope').val());
        
        if (pro>=4 && pro>emo && pro > per && pro > ho) {
            stress += 'problem';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        } 
        else if (emo>=4 && emo>pro && emo > per && emo > ho){
            stress += 'emotion';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if (per>=4 && per>pro && per > emo && per > ho){
            stress += 'person';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if (ho>=4 && ho>per && ho > emo && ho > pro){
            stress += 'hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((pro===per) && (pro===5) &&(per===5) )||((pro===per) && (pro===4) &&(per===4) )){
            stress += 'problem & person';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((pro===emo) && (pro===5) &&(emo===5) )||((pro===emo) && (pro===4) &&(emo===4) )){
            stress += 'problem & emotion';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((pro===ho) && (pro===5) &&(ho===5) )||((pro===ho) && (pro===4) &&(ho===4) )){
            stress += 'problem & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((per===emo) && (per===5) &&(emo===5) )||((per===emo) && (per===4) &&(emo===4) )){
            stress += 'person & emotion';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((per===ho) && (per===5) &&(ho===5) )||((per===ho) && (per===4) &&(ho===4) )){
            stress += 'person & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ( ((emo===ho) && (emo===5) &&(ho===5) )||((emo===ho) && (emo===4) &&(ho===4) )){
            stress += 'emotion & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ((pro===per)&& (pro===emo) && (pro===3) ){
            stress += 'problem & person & emotion';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ((pro===per)&& (pro===ho) && (pro===3) ){
            stress += 'problem & person & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ((pro===emo)&& (pro===ho) && (pro===3) ){
            stress += 'problem & emotion & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else if ((per===emo)&& (per===ho) && (per===3) ){
            stress += 'person & emotion & hope';
            $("#img").attr("src", result[stress]["img"]);
            $("#character").html(result[stress]["character"]);
            $("#explain").html(result[stress]["explain"]);
        }
        else { stress += 'all';
        $("#img").attr("src", result[stress]["img"]);
        $("#character").html(result[stress]["character"]);
        $("#explain").html(result[stress]["explain"]);
            
        }
    }
    else{
        $('.progress-bar').attr('style', 'width: calc(100/10*'+num+'%) ');
        $('#title').html(q[num]["title"]);
        $('#type1').val(q[num]["type1"]);
        $('#type2').val(q[num]["type2"]);
        $('#type3').val(q[num]["type3"]);
        $('#type4').val(q[num]["type4"]);            
        $('#A').html(q[num]["A"]);
        $('#B').html(q[num]["B"]);
        $('#C').html(q[num]["C"]);
        $('#D').html(q[num]["D"]);
        num ++;
    }
}