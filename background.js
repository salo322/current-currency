$(function () {
    $.ajax({
        url: "https://www.nbg.gov.ge/index.php?m=582&lng=geo",
        type: "post",
        dataType: "html",
        success: function (data) {
    let value  = $(data).find('#currency_id').html()
            chrome.storage.local.set({curencyObg:  value}, function() {
          console.log('Value is set to ' + value);
        });
        },
       
    });
});