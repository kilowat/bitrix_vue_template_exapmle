
<? define("NOT_CHECK_FILE_PERMISSIONS", true); ?>
<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}

//mobile init
if (!CModule::IncludeModule("mobileapp"))
{
    die();
}
CMobile::Init();
?>

<!DOCTYPE html >
<html class="<?= CMobile::$platform; ?>">
<head>
    <? $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/script.js"); ?>

    <? $APPLICATION->ShowHead(); ?>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">

    <meta http-equiv="Content-Type" content="text/html;charset=<?= SITE_CHARSET ?>"/>
    <meta name="format-detection" content="telephone=no">
<link href="/local/templates/NewMobileTemplate/dist/js/about.js" rel="prefetch"><link href="/local/templates/NewMobileTemplate/dist/js/chunk-vendors.js" rel="preload" as="script"><link href="/local/templates/NewMobileTemplate/dist/js/index.js" rel="preload" as="script"></head>
<body>
<div id="app">
<script type="text/javascript" src="/local/templates/NewMobileTemplate/dist/js/chunk-vendors.js"></script><script type="text/javascript" src="/local/templates/NewMobileTemplate/dist/js/index.js"></script>