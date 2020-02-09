<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Orchestra calendar</title>

        <!-- Fonts -->
        <link href={{ asset('/css/app.css') }} rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap&subset=cyrillic" rel="stylesheet">
    </head>
    <body>
       <div class="app">
            <section class="header">
                <div class="container">
                    <div class="header-content">
                        <div class="header-content_text">
                            <h1>Календарь <br> <span class="fs-sm">учета произведений</span></h1>
                            <div class="form-title">Подтвердить членство</div>
                            <form id="sign_in">
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
                        </div>
                        <div class="header-content_image">
                            <img src={{ asset('/image/bg-home.jpg') }}>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="container">
                        <h2 class="section-title">Календарь учета произведений</h2>
                        <form class="search" id="search">
                            <label>
                                <input type="text" name="search_s">
                                <span class="placeholder">Введите название</span>
                            </label>
                            <div class="search-reset">&times;</div>
                            <button>Поиск</button>
                        </form>
                <div class="content-table">
                    <div class="content-table_head">
                        <div class="content-table_head-cell content-table_head-cell-title filter-btn" data-filter="title">Название произведения<div class="icon filter-order" data-value="asc"><img src={{ asset('/image/sort.svg') }} /></div></div>
                        <div class="content-table_head-cell content-table_head-cell-tags">Теги</div>
                        <div class="content-table_head-cell content-table_head-cell-updated_at filter-btn" data-filter="date">Дата исполнения <div class="icon filter-order" data-value="asc"><img src={{ asset('/image/sort.svg') }} /></div></div>
                    </div>
                    <div class="content-table_row">
                        <div class="content-table_row-cell content-table_row-cell-title">Название произведения1</div>
                        <div class="content-table_row-cell content-table_row-cell-tags">
                            <ul>
                                <li>Тег 1</li>
                                <li>Тег 2</li>
                                <li>Тег 3</li>
                                <li>Тег 4</li>
                                <li>Тег 5</li>
                            </ul>
                        </div>
                        <div class="content-table_row-cell content-table_row-cell-date">22 сентября 2019</div>
                    </div>
                </div>
                </div>
            </section>
       </div>
       <script src="{{ asset('/js/app.js') }} "></script>
    </body>
</html>
