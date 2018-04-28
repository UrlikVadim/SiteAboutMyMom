var slideDone = true; //О ГОСПОДИ СКОЛЬКО ЖЕ ЗДЕСЬ КОСТЫЛЕЙ!!!!!!!!
var nonehover = 0;
var mainFotoCount = 22;
var dreamsCount = 10;
var goldHandsCount = 10;
var idFoto2 = 1;
var margin_left = 0;
var margin_top11 = 0;
var margin_top12 = 0;
var margin_top21 = 0;
var margin_top22 = 0;

var font1;
var font2;
var font3;
var color1 = false;
var color2 = false;
var color3 = false;
var dreamstext = ['Настя. Я мечтаю… Чтоб у меня был маленький щенок, ноутбук', 'Ваня.Я мечтаю о киндерах, хочу играть в планшет целый день', 'Лиза.Я мечтаю, чтоб у меня был игрушечный котик и пластилин.', 'Мила.Я мечтаю покататься на коньках с Машей, а ещё пойти в аквапарк', 'Катя.Я мечтаю кота завести.', 'Рома.Мечтаю? Это уже вопрос к учёному. Я сам не знаю о чём я мечтаю. Я хочу увидеть имперцев из звёздных войн.', 'Дионис.Я мечтаю,  ну как там…  Я всё хочу.', 'Эмир.Мечтаю себе лазерный меч взять.  А ещё с Настей подружиться.', 'Назар.Я мечтаю о планшете, о змее игрушечной.', 'Алина.Я мечтаю,  чтоб Мила в садике не кричала, Мила командует всегда'];
$("#fotogalery").click(function() {
    window.open('res/kek2.pptx');
});
$("#bar > th").click(function() {
    if (slideDone) {
        slideDone = false;
        openContent(this.id.split('-')[1]);
    }
});



$("#rightScroll").click(function() {
    margin_left -= 1000;
    if ($("#mainFotogaleryContent").width() + margin_left < $("#mainContent").width()) {
        margin_left = -1 * ($("#mainFotogaleryContent").width() - $("#mainContent").width());
    }
    $("#mainFotogaleryContent").animate({ 'margin-left': margin_left }, 1000);
});
$("#leftScroll").click(function() {
    margin_left += 1000;
    if (margin_left > 0) {
        margin_left = 0;
    }
    $("#mainFotogaleryContent").animate({ 'margin-left': margin_left }, 1000);
});
//////////////////////////////////

$("#con3up1").click(function() {
    margin_top11 += 200;
    if (margin_top11 > 0) {
        margin_top11 = 0;
    }
    $("#dreamsSlide1").animate({ 'margin-top': margin_top11 }, 100);
});
$("#con3down1").click(function() {
    margin_top11 -= 200;
    if ($("#dreamsSlide1").height() - $("#content2and3").height() < margin_top11 * -1) {
        margin_top11 = -1 * ($("#dreamsSlide1").height() - $("#content2and3").height());
    }
    $("#dreamsSlide1").animate({ 'margin-top': margin_top11 }, 100);
}); //////
$("#con3up2").click(function() {
    margin_top12 += 200;
    if (margin_top12 > 0) {
        margin_top12 = 0;
    }
    $("#goldHandsSlide1").animate({ 'margin-top': margin_top12 }, 100);
});
$("#con3down2").click(function() {
    margin_top12 -= 200;
    if (($("#goldHandsSlide1").height()) - $("#content2and3").height() < margin_top12 * -1) {
        margin_top12 = -1 * ($("#goldHandsSlide1").height() - $("#content2and3").height());
    }
    $("#goldHandsSlide1").animate({ 'margin-top': margin_top12 }, 100);
}); //////

$("#con4up1").click(function() {
    margin_top21 += 200;
    if (margin_top21 > 0) {
        margin_top21 = 0;
    }
    $("#dreamsSlide2").animate({ 'margin-top': margin_top21 }, 100);
});
$("#con4down1").click(function() {
    margin_top21 -= 200;
    if ($("#dreamsSlide2").height() - $("#content2and3").height() < margin_top21 * -1) {
        margin_top21 = -1 * ($("#dreamsSlide2").height() - $("#content2and3").height());
    }
    $("#dreamsSlide2").animate({ 'margin-top': margin_top21 }, 100);
}); //////
$("#con4up2").click(function() {
    margin_top22 += 200;
    if (margin_top22 > 0) {
        margin_top22 = 0;
    }
    $("#goldHandsSlide2").animate({ 'margin-top': margin_top22 }, 100);
});
$("#con4down2").click(function() {
    margin_top22 -= 200;
    if ($("#goldHandsSlide2").height() - $("#content2and3").height() < margin_top22 * -1) {
        margin_top22 = -1 * ($("#goldHandsSlide2").height() - $("#content2and3").height());
    }
    $("#goldHandsSlide2").animate({ 'margin-top': margin_top22 }, 100);
}); //////

//////////////////////////////////////////////////////////////////////////
$(window).load(function() {
    $("#content").width($("#content").parent().parent().width());
    openContent(1);
    kek();
    font1 = $("#main").css('font-size').split('px', 1) - 0;
    font2 = font1 * 1.2;
    font3 = font1 * 1.4;

    $("#mainContent").height($("#foto").width() / 6);
    $("#mainFotogaleryContent").height($("#mainContent").height());
    $("#content2and3").width($("#content").width() / 5);
    $(".goldHands , .dreams").width($("#content").width() / 5);
    $(".minContent").height($("#content2and3").width() / 2.5);
    $("#dreamsSlide1, #dreamsSlide2").height($("#content").width() / 5 / 2.5 * dreamsCount);
    $("#goldHandsSlide1, #goldHandsSlide2").height($("#content").width() / 5 / 2.5 * dreamsCount);
    for (i = 1; i <= dreamsCount; i++) {
        $("#dreamsSlide1,#dreamsSlide2").append('<div class = "minContent"><div class = "minContentImage"><img id = "dreaM-' + i + '" src="res/dreams/min/dream-' + i + '.png" width="100%" height="100%" alt="kek"></div><p>' + dreamstext[(i - 1)].split('.')[0] + '</p><p>' + dreamstext[(i - 1)].split('.')[1] + '</p></div>');
    }
    for (i = 1; i <= goldHandsCount; i++) {
        $("#goldHandsSlide1,#goldHandsSlide2").append('<div class = "minContent" ><img id = "goldHanded-' + i + '" src="res/goldHands/min/goldHand-' + i + '.png" width="100%" height="100%" alt="kek"></div>');
    }

    $(".fiveSlide").width($("#content-5").width() / 7);
    $("#five2 .fiveSlide").width($("#content-5").width() / 8);

    $(".fiveSlide").height($(".fiveSlide").width() * 1.5);
    $("#five2 .fiveSlide").height($("#five2 .fiveSlide").width() * 1.1);
    for (i = 1; i <= mainFotoCount; i++) {
        $("#mainFotogaleryContent").append('<div class = "slideFoto" id ="imgId-' + i + '"><img src="res/minData/min-' + i + '.png" width="100%" height="100%" alt="kek"></div>');
    }
    $(".slideFoto").width($("#mainFotogaleryContent").height() * 1.5);
    $("#mainFotogaleryContent").width($(".slideFoto").width() * mainFotoCount);
    $("#mainFotogaleryContent div.slideFoto,.fiveSlide").click(function() {
        var format = ".JPG";
        var stringRes = "res/bigData/big-";
        if (this.id.split('-')[0] == 'imgId') {
            stringRes = "res/bigData/big-";
            format = ".JPG";
            if (this.id.split('-')[1] != '17' && this.id.split('-')[1] != '19' && this.id.split('-')[1] != '20' && this.id.split('-')[1] != '21') {
                $("#bigFoto").css('height', $("#fullFoto").height() / 100 * 90);
                $("#bigFoto").css('width', $("#bigFoto").height() * 1.5);
            } else {
                $("#bigFoto").css('height', $("#fullFoto").height() / 100 * 90);
                $("#bigFoto").css('width', $("#bigFoto").height() / 1.2);
            }
        } else {
            $("#bigFoto").css('height', $("#fullFoto").height() / 100 * 90);
            $("#bigFoto").css('width', $("#bigFoto").height() / 1.5);
        }
        if (this.id.split('-')[0] == 'achiv') {
            stringRes = "res/achievements/img-";
            format = ".jpg";
        }
        if (this.id.split('-')[0] == 'inter') {
            stringRes = "res/interest/interes-";
            format = ".png";
            $("#bigFoto").css('width', $("#bigFoto").height() / 1.2);
        }
        $('#imgID').attr('alt', 'error-' + this.id.split('-')[1] + '- image');
        $('#imgID').attr('src', stringRes + this.id.split('-')[1] + format);
        $("#fullFoto").css('display', 'block');

    });


});
var colorconst2 = "rgb(255,153,0)";
var colorconst = "rgb(0, 255, 200)";

var colorconst1 = "rgb(0, 162, 255)";

function openContent(idContent) {
    nonehover = idContent;
    $("#content").height($("#con").height());
    for (i = 1; i < 6; i++) {
        $("#content-" + i).slideUp(500);
    }
    if (color1 != true && color2 != true && color3 != true) {

        for (i = 1; i < 6; i++) {
            $("#bar-" + i).css("color", colorconst2);;
            $("#bar-" + i).css("background-color", colorconst);

        }

        $("#bar-" + idContent).css("color", colorconst);
        $("#bar-" + idContent).css("background-color", colorconst2);
    } else {
        if (color1 == true) {
            for (i = 1; i < 6; i++) {
                $("#bar-" + i).css("color", "black");;
                $("#bar-" + i).css("background-color", "white");
            }
            $("#bar-" + idContent).css("color", "white");
            $("#bar-" + idContent).css("background-color", "black");
        }
        if (color2 == true) {
            for (i = 1; i < 6; i++) {
                $("#bar-" + i).css("color", "white");;
                $("#bar-" + i).css("background-color", "black");
            }
            $("#bar-" + idContent).css("color", "black");
            $("#bar-" + idContent).css("background-color", "white");
        }
        if (color3 == true) {
            for (i = 1; i < 6; i++) {
                $("#bar-" + i).css("color", "blue");;
                $("#bar-" + i).css("background-color", colorconst1);
            }
            $("#bar-" + idContent).css("color", colorconst1);
            $("#bar-" + idContent).css("background-color", "blue");
        }
    }
    $("#content").slideUp(500);
    if (idContent == "1") {
        $("#ref").slideDown(500);
    } else {
        $("#ref").slideUp(500);
    }
    if (idContent == "5") {
        $("#footer").slideDown(500);
    } else {
        $("#footer").slideUp(500);
    }
    $("#content").slideDown(0, function() {
        $("#content-" + idContent).width($("#content").width());

        if (idContent == 1) {

            $("#rightfoto").width($("#content-1").width() / 100 * 23);
            $("#leftfoto").width($("#content-1").width() / 100 * 23);
            $("#rightfoto").height($("#rightfoto").width() * 1.5);
            $("#leftfoto").height($("#leftfoto").width() * 1.5);
        }
        if (idContent == 2) {
            $("#con-2-img").width($("#content-2").width() / 100 * 23);
            $("#con-2-img").height($("#con-2-img").width() * 1.5);
            $("#con2content").width($("#content-2").width() / 100 * 40);
            $("#con2content").height($("#con2content").width() / 3 * 2);
            $("#con2content").css("padding-bottom", 50);
        }
        if (idContent == 3) {

            $("#content-" + idContent).height($("#content-" + idContent).width() * 0.78);

        }
        if (idContent == 4) {

        }
        if (idContent == 5) {
            accesskey = null;
            clickMod = false;
            loadComments();
        }
        $("#content-" + idContent).slideDown(500, dreamsAndGoldHands());

        slideDone = true;
    });
}

function dreamsAndGoldHands() {



}
$("#fullFoto").click(function() {
    $("#fullFoto").css('display', 'none');
});
$("#bar > th")
    .mouseenter(function() {
        if (color1 != true && color2 != true && color3 != true) {
            if (this.id.split('-')[1] != nonehover) {
                $(this).css("color", colorconst2);
                $(this).css("background-color", colorconst);
            }
        }
    })
    .mouseleave(function() {
        if (color1 != true && color2 != true && color3 != true) {
            if (this.id.split('-')[1] != nonehover) {
                $(this).css("color", colorconst2);
                $(this).css("background-color", colorconst);
            }
        }
    });


$("#con2foto").click(function() {
    idFoto2++;
    if (idFoto2 > 11) {
        idFoto2 = 1;
    }
    $("#con2foto").attr("src", "res/con2/con2-" + idFoto2 + ".png");
});
$("#content-3-1").click(function() {

    $("#content-3-1-1,#content-3-1-2").slideDown(500);
});

function kek() {
    $("#con-4-1-content").slideUp(500);
    $("#con-4-2-content").slideUp(500);
    $("#con-4-3-content").slideUp(500);
    $("#con-4-4-content").slideUp(500);
    $("#con-4-5-content").slideUp(500);

}
$("#con-4-1,#con-4-2,#con-4-3,#con-4-4,#con-4-5").click(function() {
    kek();
    $("#keklol").slideUp(500);
    $("#" + this.id + "-content").slideDown(500);
});
$("#content-3-2,#content-3-3,#content-3-4,#content-3-5,#content-3-1").click(function() {
    $(".ahref").slideUp(500);
    $(this).children(".ahref").slideDown(500);
});
$("#content-3-1-1,#content-3-1-2").click(function() {
    $(".ahref").slideUp(500);
    $(this).children(".ahref").slideDown(500);
});


$("#infobardmOpen").click(function() {
    $("#main").css('margin-top', '10%');
    $("#infobardm").slideDown(500);
    $("#infobardmOpen").slideUp();

});
$("#font1").click(function() {
    $("#main").css('font-size', font1);
});
$("#font2").click(function() {
    $("#main").css('font-size', font2);
});
$("#font3").click(function() {
    $("#main").css('font-size', font3);
});
$("#color1").click(function() {
    color1 = true;
    color2 = false;
    color3 = false;
    newColor();
    openContent(1);
});
$("#color2").click(function() {
    color1 = false;
    color2 = true;
    color3 = false;
    newColor();
    openContent(1);
});
$("#color3").click(function() {
    color1 = false;
    color2 = false;
    color3 = true;
    newColor();
    openContent(1);
});
var idReload = "#rightfoto,.dreams,.goldHands,.dreamsHead,.goldHandsHead,.content2and3,.minContent,#ref,#foto,#fotogalery,#footer,#submit,#footer,#addfooter,#addComment,textarea,.Comment";

function newColor() {
    var kekId = idReload.split(',');
    var output = "#main #leftfoto";
    for (i = 0; i < kekId.length; i++) {
        output += ",#main " + kekId[i];
    }
    $("body").css("background-image", "none");
    if (color1 == true) {
        $("#main div").css("color", "black");
        $("#main a").css("color", "black");
        $("#main p").css("color", "black");
        $("#main textarea").css("color", "black");
        $("#main textarea").css("background-color", "white");
        $("body").css("background-color", "white");
        $("#main div").css("background-color", "white");
        $("#main .buttonUp1,#main .buttonUp2,#main .buttonDown1,#main .buttonDown2,#rightScroll,#leftScroll").css("background-color", "transparent");
        $("#main div").css("background-image", "none");
        $(output).css("border", "1px solid black");
        $("#main").css("border", "0px solid black");
        $("#main table").css("border", "1px solid black");
        $("#main tr").css("border", "1px solid black");
        $("#main th").css("border", "1px solid black");
    }
    if (color2 == true) {
        $("#main div").css("color", "white");
        $("#main a").css("color", "white");
        $("#main p").css("color", "white");
        $("#main textarea").css("color", "white");
        $("#main textarea").css("background-color", "black");
        $("body").css("background-color", "black");
        $("#main div").css("background-color", "black");
        $("#main .buttonUp1,#main .buttonUp2,#main .buttonDown1,#main .buttonDown2,#rightScroll,#leftScroll").css("background-color", "transparent");
        $("#main div").css("background-image", "none");
        $(output).css("border", "1px solid white");
        $("#main").css("border", "0px solid white");
        $("#main table").css("border", "1px solid white");
        $("#main tr").css("border", "1px solid white");
        $("#main th").css("border", "1px solid white");
    }
    if (color3 == true) {
        $("#main div").css("color", "blue");
        $("#main a").css("color", "blue");
        $("#main p").css("color", "blue");
        $("#main textarea").css("color", "blue");
        $("#main textarea").css("background-color", colorconst1);
        $("body").css("background-color", colorconst1);
        $("#main div").css("background-color", colorconst1);
        $("#main .buttonUp1,#main .buttonUp2,#main .buttonDown1,#main .buttonDown2,#rightScroll,#leftScroll").css("background-color", "transparent");
        $("#main div").css("background-image", "none");
        $(output).css("border", "1px solid blue");
        $("#main").css("border", "0px solid blue");
        $("#main table").css("border", "1px solid blue");
        $("#main tr").css("border", "1px solid blue");
        $("#main th").css("border", "1px solid blue");
    }

}
$("#backPage").click(function() {
    window.location.reload();
});


function addComents(data) {
    $("#Comments").empty();
    var dataarray = data.split(',');
    if (accesskey == null && clickMod == false) {
        for (i = 0; i < dataarray.length - 1; i += 2) {
            $("#Comments").append('<div class = "Comment"><div class = "nameComment">' + dataarray[i] + '</div><div class = "textComment">' + dataarray[i + 1] + '</div></div>');
        }
    } else {
        alert("Режим модератора")
        for (i = 0; i < dataarray.length - 3; i += 4) {
            var visible = "kek";

            if (dataarray[i + 3] == 0) {
                visible = "Комментарий не показан";
            } else {
                visible = "Комментарий показан";
            }
            var strAdd = '<div class = "Comment"><div class = "nameComment">' + dataarray[i] + '</div><div class = "textComment">' + dataarray[i + 1] + '</div><div id = "commentId-' + dataarray[i + 2] + '"><div class = "deleteComment">Удалить</div><div class = "visibleComment">' + visible + '</div></div></div>';
            $("#Comments").append(strAdd);
        }
        $(".deleteComment").click(function() {
            alert($(this).parent().attr('id').split('-')[1]);
            $.post("src/deleteOrVisible.php", {
                    id: $(this).parent().attr('id').split('-')[1],
                    type: "delete",
                    accessKey: accesskey
                },
                function(data, status) {
                    alert(data);
                    clickMod = true;
                    loadComments()
                });
        });
        $(".visibleComment").click(function() {
            alert($(this).parent().attr('id').split('-')[1]);
            $.post("src/deleteOrVisible.php", {
                    id: $(this).parent().attr('id').split('-')[1],
                    type: "visible",
                    accessKey: accesskey
                },
                function(data, status) {
                    alert(data);
                    clickMod = true;
                    loadComments()
                });
        });
    }
    if (color1 == true || color2 == true || color3 == true) {
        newColor();
    }
}

function loadComments() {
    $.post("src/getComments.php", { accesskey: accesskey },
        function(data, status) {
            addComents(data);
        });
}


var accesskey = null;
var clickMod = false;
$("#submit").click(function() {
    if ("" != $("#name").val() && "" != $("#text").val()) {

        $("#addComment").slideUp(300);
        $("#addfooter").slideDown(300);
        $.post("src/setComment.php", {
                name: $("#name").val(),
                text: $("#text").val()
            },
            function(data, status) {
                accesskey = data;
                clickMod = true;
                loadComments();
            });
    } else {
        alert("Поля не должны быть пустыми");
    }
});












































var out = 0;

function kek(num) {
    if (num > 9) {
        if (out == 0) {
            out += num % 10;
        } else {
            out *= 10;
            out += num % 10;
        }
        num /= 10;
        kek(num);
    } else {
        out *= 10;
        out += num;
    }
    return out;
}