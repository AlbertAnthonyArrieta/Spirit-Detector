
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleMotion);
    } else {
        alert("sorry your browser does not support this");
    }

    var entityz = Math.random() * (360 - 0) + 0;
    var entityx = Math.random() * (110 - 0) + 0;
        $("#entity-textz").text(entityz);
        $("#entity-textx").text(entityx);

    function handleMotion(event) {

        
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;

        $("#z").text("z: " + z);
        $("#x").text("x: " + x);
        $("#y").text("y: " + y);

        if (z < entityz + 2 && z > entityz - 2 && x < entityx + 2 && x > entityx - 2) {
            $("#i5").css("background", "red");
            $("#i4").css("background", "yellow");
            $("#i3").css("background", "yellow");
            $("#i2").css("background", "rgb(21, 241, 72)");
            $("#i1").css("background", "rgb(21, 241, 72)");
        } else if (z < entityz + 25 && z > entityz - 25 && x < entityx + 25 && x > entityx - 25){
            $("#i5").css("background", "rgb(130, 21, 21)");
            $("#i4").css("background", "yellow");
            $("#i3").css("background", "yellow");
            $("#i2").css("background", "rgb(21, 241, 72)");
            $("#i1").css("background", "rgb(21, 241, 72)");
        } else if (z < entityz + 50 && z > entityz - 50 && x < entityx + 50 && x > entityx - 50) {
            $("#i5").css("background", "rgb(130, 21, 21)");
            $("#i4").css("background", "rgb(142, 126, 0)");
            $("#i3").css("background", "yellow");
            $("#i2").css("background", "rgb(21, 241, 72)");
            $("#i1").css("background", "rgb(21, 241, 72)");
        } else if (z < entityz + 75 && z > entityz - 75 && x < entityx + 75 && x > entityx - 75) {
            $("#i5").css("background", "rgb(130, 21, 21)");
            $("#i4").css("background", "rgb(142, 126, 0)");
            $("#i3").css("background", "rgb(142, 126, 0)");
            $("#i2").css("background", "rgb(21, 241, 72)");
            $("#i1").css("background", "rgb(21, 241, 72)");
        } else if (z < entityz + 100 && z > entityz - 100 && x < entityx + 100 && x > entityx - 100) {
            $("#i5").css("background", "rgb(130, 21, 21)");
            $("#i4").css("background", "rgb(142, 126, 0)");
            $("#i3").css("background", "rgb(142, 126, 0)");
            $("#i2").css("background", "rgb(11, 92, 30)");
            $("#i1").css("background", "rgb(21, 241, 72)");
        } 

       


    }

}
