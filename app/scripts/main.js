window.addEventListener('load', function(){
    'use strict';

    var button = document.getElementById('submitButton');
    var appIDInput = document.getElementById('appIDInput');
    var urlInput = document.getElementById('siteURLInput');

    var baseURL = 'http://www.facebook.com/dialog/pagetab?app_id=';
    var urlNextPrefix = '&next=';

    var updateSubmitButton = function() {
        if(!!validateTextInput.call(appIDInput) && !!validateTextInput.call(urlInput)) {
            button.className = button.className.replace(' is-disabled', '');
        } else if(button.className.indexOf('is-disabled') < 0) {
            button.className += ' is-disabled';
        }
    };

    var onSubmit = function(e) {
        e.preventDefault();

        if(!!validateTextInput.call(appIDInput) && !!validateTextInput.call(urlInput)) {
            openURL();
        }
    };

    var openURL = function() {
        var url = baseURL + appIDInput.value + urlNextPrefix + urlInput.value;
        window.open(url);
    };

    appIDInput.addEventListener('keyup', function(e){
        inValidateTextInput.call(e.currentTarget);
        validateTextInput.call(e.currentTarget);
        updateSubmitButton();
    });
    appIDInput.addEventListener('change', function(e){
        validateTextInput.call(e.currentTarget);
        updateSubmitButton();
    });

    urlInput.addEventListener('keyup', function(e){
        inValidateTextInput.call(e.currentTarget);
        validateTextInput.call(e.currentTarget);
        updateSubmitButton();
    });
    urlInput.addEventListener('change', function(e){
        validateTextInput.call(e.currentTarget);
        updateSubmitButton();
    });

    var inValidateTextInput = function() {
        var field = this;

        if(field.value.length === 0) {
            field.className = field.className.replace(' has-error', '');
            field.className = field.className.replace(' is-valid', '');
        }
    };

    var validateTextInput = function() {
        var field = this;
        var pattern = field.getAttribute('pattern');
        var isValid = true;

        field.className = field.className.replace(' has-error', '');
        field.className = field.className.replace(' is-valid', '');

        if(field.value.length === 0) {
            isValid = false;
        }

        if(!!!field.value.match(pattern)) {
            if(field.value.length > 0) {
                field.className += ' has-error';
                isValid = false;
            }
        } else if (field.value.length > 0) {
            field.className += ' is-valid';
        }

        return isValid;
    };

    button.addEventListener('click', onSubmit);
    updateSubmitButton();
});