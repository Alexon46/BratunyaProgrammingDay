<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href={{ asset('/css/app.css') }} rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap&subset=cyrillic" rel="stylesheet">
    </head>
    <body>
       <div class="app">
            <section class="header">
                <div class="container">
                    <div class="header-content">
                        <h1>Календарь <br> <span class="fs-sm">учета произведений</span></h1>
                        <div class="form-title">Подтвердить членство</div>
                        <form id="sign_in" onclick="avtorisation();">
                            <label>
                                <input type="text" name="name">
                                <span class="placeholder">Ваше имя</span>
                            </label>
                            <label>
                                <input type="text" name="instrument">
                                <span class="placeholder">Ваш инструмент</span>
                            </label>
                            <button>Войти</button>
                        </form>
                        <div class="header-content_image">
                            <img src={{ asset('/image/bg-home.jpg') }}>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="content-header">
                    <form class="filter">
                        <label class="search">
                            <input type="text" name="search_s">
                            <span class="placeholder">Введите название</span>
                            
                        </label>
                    </form>
                </div>
            </section>
       </div>
       <script src="{{ asset('/js/app.js') }} "></script>
    </body>
</html>
