var triangleTracker = function(side1, side2, side3) {
    if ((side1 >= (side2 + side3)) || (side2 >= (side1 + side3)) || (side3 >= (side1 + side2))){
        return false;
    }
    if ((side1 === side2)  && (side2 === side3)){
        return "Equilateral";
    } else if (((side1 === side2) && (side2 !== side3)) || ((side1 === side3) && (side2 !== side3)) || ((side2 === side3) && (side3 !== side1))){
        return "Isosceles";
    } else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
        return "Scalene";
    } else {
        return false;
    }
};

$(document).ready(function() {
    $("form#triangle-tracker").submit(function(event) {

        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        var result = triangleTracker(side1, side2, side3);

        $('.side1').text(side1);
        $('.side2').text(side2);
        $('.side3').text(side3);

        if (!result) {
            $('.not').text('not');
            $('.triangleType').empty();
        } else {
            $('.not').empty();
            $('.triangleType').text(result);
        }

        $("#result").show();
        event.preventDefault();
    });
});
