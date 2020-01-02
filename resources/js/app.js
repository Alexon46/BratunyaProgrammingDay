var form_field = document.querySelectorAll('form label');
[...form_field].forEach(element => {
    let label = element.querySelector('.placeholder');
    let field = element.querySelector('input');
    field.onfocus = function () {
        label.classList.add('active');
    }
    field.onblur = function () {
        if (field.value.length == 0) {
            label.classList.remove('active');
        }
    }
});


function requestDate(url, proxy = '') {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', proxy + url, true);
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send();
    })
}

var sign_in = document.querySelector('#sign_in button');
sign_in.addEventListener('click', function (event) {
    event.preventDefault();
    authorisation();
});

function authorisation() {
    let form = document.getElementById('sign_in');
    let params = 'username=' + encodeURIComponent(form.name.value) +
        '&password=' + encodeURIComponent(form.instrument.value);
    requestDate('/api/login?' + params)
        .then(result => {
                let json = JSON.parse(result.response);
                if (json.error) {
                    let errorText = document.createElement('span');
                    errorText.classList.add('error');
                    errorText.innerHTML = json.error;
                    form.append(errorText);
                    errorText.classList.add('show');
                } else {
                    if (json.length) {
                        generateTable(json);
                    }
                }
            },
            error => {
                console.log("Rejected: " + error);
            }
        )
        .catch(error => {
            console.log("Catch: " + error);
        })
}

var search_btn = document.querySelector('#search button');
search_btn.addEventListener('click', function (event) {
    event.preventDefault();
    search();
});

function search() {
    let form = document.getElementById('search');
    let params = 'search_s=' + encodeURIComponent(form.search_s.value);
    requestDate('/api/compositions?' + params)
        .then(result => {
                let json = JSON.parse(result.response);
                if (json.response.error) {
                    let errorText = document.createElement('span');
                    errorText.classList.add('error');
                    errorText.innerHTML = json.error;
                    form.append(errorText);
                    errorText.classList.add('show');
                } else {
                    if (json.length) {
                        generateTable(json);
                    }
                }
            },
            error => {
                console.log("Rejected: " + error);
            }
        )
        .catch(error => {
            console.log("Catch: " + error);
        })
}

function generateTable(date) {
    let table = new DocumentFragment();
    let row_example = document.createElement('div');
    row_example.classList.add('content-table_row');
    let cell_example = document.createElement('div');
    cell_example.classList.add('content-table_row-cell');
    date.forEach(element => {
        let row = row_example.cloneNode(false);
        for (key in element) {
            let cell = cell_example.cloneNode(false);
            cell, classList.add('content-table_row-cell-' + key);
            cell.innerHTML(element[key]);
            row.append(cell);
        }
        table.append(row);
    })
    document.querySelector('.content-table').append(table);
}