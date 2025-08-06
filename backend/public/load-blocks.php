<?php
header('Content-Type: application/json');

$basePath = realpath(__DIR__ . '/../../../blocks');
$template = $_GET['template'] ?? 'cluster';

$sectionPath = "$basePath/$template/sections";
$blocks = [];

foreach (scandir($sectionPath) as $dir) {
    if ($dir === '.' || $dir === '..') continue;

    $blockDir = "$sectionPath/$dir";
    $htmlFile = "$blockDir/index.html";

    if (is_dir($blockDir) && file_exists($htmlFile)) {
        $html = file_get_contents($htmlFile);
        $blocks[] = [
            'template' => $template,
            'name' => $dir,
            'html' => $html
        ];
    }
}

echo json_encode($blocks);
