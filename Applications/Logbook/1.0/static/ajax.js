/* ====================================================================================================== */
/* =========== Login Page =========== */
// Login form
$(document).ready(function() {
    if ($(".login-form").length) {
        $(".login-form").submit(function(event) {
            var form = $(this);
            var url = form.attr('action');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function(data) {
                    if (data == "Success") {
                        window.location.href = "logbook";
                    } else {
                        $(".msg").text(data);
                    }
                }
            });
            event.preventDefault();
        });
    }
});
/* ====================================================================================================== */
/* =========== Logbook Page =========== */
// I know it's duplicate! More functionalities will be added to it, to differentiate the response from
// other forms.
// Logbook form
$(document).ready(function() {
    if ($(".logbook-form").length) {
        $(".logbook-form").submit(function(event) {
            var form = $(this);
            var url = form.attr('action');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function(data) {
                    if (data == "Success") {
                        window.location.href = "logbook";
                    } else {
                        $(".msg").text(data);
                    }
                }
            });
            event.preventDefault();
        });
    }
});
