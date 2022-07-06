<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <title>Ecomuseo della Provincia di Cremona</title>
        <meta name="robots" content="index, follow">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="shortcut icon" href="img/favicons/favicon.ico">
        <link rel="icon" href="img/favicons/favicon.png">
        <link rel="stylesheet" href="assets/dist/spectre.css" media="all">
        <link rel="stylesheet" href="assets/dist/spectre-exp.css" media="all">
        <link rel="stylesheet" href="assets/icomoon/style.css" media="all">
    </head>
    <body>
        <header class="navbar testata">
            <section class="navbar-section">
                <a href="https://ecomuseo.provincia.cremona.it" title="L'Ecomuseo della Provincia di Cremona"><img src="./img/logoEcomuseo80.png" alt="Logo Ecomuseo" /></a>
                &nbsp;
                <span class="testata-titolo">&nbsp;Il territorio come Ecomuseo</span>
            </section>
            <section class="navbar-section">
                <form action="https://duckduckgo.com/" class="hide-md">
                    <div class="input-group input-inline">
                        <input type="hidden" name="sites" value="ecomuseo.provincia.cremona.it">
                        <label class="cerca-label" for="cerca-barra">Cerca nel sito &nbsp;</label>
                        <input class="form-input" type="text" name="q" placeholder="Cerca nel sito" aria-label="Cerca nel sito">
                        <button class="btn btn-error input-group-btn s-rounded"><span class="icon icon-search"></span></button>&nbsp;
                    </div>
                </form>
                <button class="btn btn-search input-group-btn show-md btn-error s-circle" id="md-search" type="submit" aria-label="Visualizza ricerca"  onclick=toggleSearchBox() onkeydown=toggleSearchBox() tab-index="0"><span class="icon icon-search"></span></button>
            </section>
        </header> 
        <br class="divider">
        <div id="mobileSearch" class="columns">
            <form action="https://duckduckgo.com/" class="column col-8 col-mx-auto">
                <input type="hidden" name="sites" value="ecomuseo.provincia.cremona.it">
                <label for="cerca-mobile">Cerca nel sito&nbsp;</label>
                <div class="input-group input-inline">
                    <input class="form-input col-12" type="text" name="q" id="cerca-mobile" placeholder="cerca" aria-label="Cerca nel sito" title="Cerca nel sito">
                    <button class="btn btn-search btn-error input-group-btn" type="submit" aria-label="Cerca" tab-index="0"><span class="icon icon-search"></span></button>&nbsp;
                </div>
            </form>
            <br class="divider">
        </div>
        <div class="container grid-xl">
