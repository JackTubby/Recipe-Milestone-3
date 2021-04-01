// Materialize jQuery
$(document).ready(function () {
    $('.sidenav').sidenav({ inDuration: 800, outDuration: 800 });
    $(".dropdown-trigger").dropdown(
        {
            'closeOnClick': false
        });
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({
        'transitionMovement': 80
    });
    $('input.autocomplete').autocomplete({
        data: {
            "Indian": null,
            "Chinese": null,
            "Italian": null
        },
    });
});

// https://stackoverflow.com/questions/5371089/count-characters-in-textarea
// Add Recipe Char Countdown
function countChar(val) {
    var len = val.value.length;
    if (len >= 500) {
        val.value = val.value.substring(0, 49);
    } else {
        $('#charNum').text(49 - len);
    }
}

/* Ingredient/Step add field script */
// https://www.sanwebe.com/2013/03/addremove-input-fields-dynamically-with-jquery

// Ingredient input addition //
$(document).ready(function () {
    var max_fields = 20; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap_ingredient"); //Fields wrapper
    var add_button = $(".add_field_button_ingredient"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (ingredient) { //on add input button click
        ingredient.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" id="recipe_ingredient" name="recipe_ingredient" placeholder="Add Ingredient" required/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

// Step input addition //
$(document).ready(function () {
    var max_fields = 20; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap_step"); //Fields wrapper
    var add_button = $(".add_field_button_step"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (step) { //on add input button click
        step.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" id="recipe_method" name="recipe_method" placeholder="Add Step" required/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});