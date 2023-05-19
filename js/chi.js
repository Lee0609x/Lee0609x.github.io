(function () {
    let date = new Date();
    let hour = date.getHours();
    if (6 <= hour && hour <= 9) {
        $("#time").text("早饭");
    } else if (10 <= hour && hour <= 13) {
        $("#time").text("午饭");
    } else if (14 <= hour && hour <= 16) {
        $("#time").text("下午茶");
    } else if (17 <= hour && hour <= 20) {
        $("#time").text("晚饭");
    } else if (21 <= hour && hour <= 23) {
        $("#time").text("夜宵");
    } else {
        $("#time").text("都这个点了，你还想");
    }
})()
$(function () {
    var count = 0;
    var run = 0,
    heading = $("h1"),
    timer;
    $("#roll-button").click(function () {
        if (count == 22) {
            alert("这么作？这顿别吃了！");
            $("#what").html("");
            heading.html("这顿不吃了");
            $(this).val("别吃了，该减肥了");
            count ++;
            return;
        }
		if (count > 22) {
		    return;
		}
        var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
        if (!run) {
            heading.html(heading.html().replace("吃这个！", "吃什么？"));
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    food = list[r - 1];
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
           heading.html(heading.html().replace("吃什么？", "吃这个！"));
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        };
        count ++;
    });
});