chrome.storage.local.get(['curencyObg'], function(result) {
          console.log('Value currently is ' + result.curencyObg);
   $("#data").html(result.curencyObg);
        });


  
  
 
  
