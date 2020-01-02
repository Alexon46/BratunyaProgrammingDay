<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href={{ asset('/css/app.css') }} >
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
       <div class="app">
            <div class="start">
                <div class="start-text">
                    <h1>Календарь <br> <span class="fs-sm">учета произведений</span></h1>
                    <div class="form-title">Подтвердить членство</div>
                    <form id="sign_in">
                        <label>
                            <span class="placeholder">Ваше имя</span>
                            <input type="text" name="name">
                        </label>
                        <label>
                            <span class="placeholder">Ваш инструмент</span>
                            <input type="text" name="instrument">
                        </label>
                        <button>Вход</button>
                    </form>
                </div>
            </div>
       </div>
       <script src="{{ asset('/js/app.js') }} ">
    </body>
</html>
