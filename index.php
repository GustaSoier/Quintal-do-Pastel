<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quintal do Pastel</title>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="css/index.css">
    </head>
    <body>

    <?php require_once('header.php'); ?>
        
    <main>

        <?php require_once('sobre.php'); ?>
        <?php require_once('queridinhos.php'); ?>
        <?php require_once('cardapio-conteudo.php'); ?>
        <?php require_once('avaliacao.php'); ?>
        <?php require_once('instagram.php'); ?>
        <?php require_once('ifood.php'); ?>
        <?php require_once('localizacao.php'); ?>

    </main>

    <?php require_once('rodape.php'); ?>

        <div class="whatsapp">
            <a onclick="linkWhats()" href="#"><img src="img/icon-whatsapp.png"
                alt="Icone Whatsapp"></a>
        </div>


        <script src="js/script.js"></script>
    </body>
</html>