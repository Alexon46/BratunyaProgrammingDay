var form_field = document.querySelectorAll('form label');
[...form_field].forEach(element => {
    let label = element.querySelector('.placeholder');
    let field = element.querySelector('input');
    field.onfocus = function(){
        label.classList.add('active');
    }
    field.onblur = function(){
        if(field.value.length == 0){
            label.classList.remove('active');
        }
    }
});


function requestDate(url, proxy = ''){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', proxy + url, true);
        xhr.onload = function() {
          if (this.status == 200) {
            resolve(this);
          } else {
            var error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
          }
        };
		xhr.onerror = function() {
      		reject(new Error("Network Error"));
        };
		xhr.send();
	})
}

var sign_in = document.querySelector('#sign_in button');
sign_in.addEventListener('click', function(event){
    event.preventDefault();
    authorisation();
});
function authorisation(){
    let form = document.getElementById('sign_in');
    let params = 'username=' + encodeURIComponent(form.name.value) +
    '&password=' + encodeURIComponent(form.instrument.value);
    requestDate('/api/login?'+params)
        .then(result => {
            console.log(result);
            },
            error => {
                console.log("Rejected: " + error);
            }
        )
        .catch(error => {
            console.log("Catch: " + error);
        })
}