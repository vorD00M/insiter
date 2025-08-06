<?php
header('Content-Type: application/json');

$basePath = realpath(__DIR__ . '/../../blocks');
$baseUrl = 'https://insiter.solution-studio.ru/blocks';

$result = [];

$templates = scandir($basePath);
foreach ($templates as $template) {
    if ($template === '.' || $template === '..') continue;

    $sectionsPath = "$basePath/$template/sections";
    if (!is_dir($sectionsPath)) continue;

    $blocks = scandir($sectionsPath);
    foreach ($blocks as $block) {
        if ($block === '.' || $block === '..') continue;

        $blockPath = "$sectionsPath/$block";
        if (!is_dir($blockPath)) continue;

        // Проверка наличия index.html
        if (!file_exists("$blockPath/index.html")) continue;

        // Название блока по умолчанию
        $name = ucfirst($block);

        // meta.json (если есть)
        $metaFile = "$blockPath/meta.json";
        if (file_exists($metaFile)) {
            $meta = json_decode(file_get_contents($metaFile), true);
            if (isset($meta['name'])) {
                $name = $meta['name'];
            }
        }

        $result[] = [
            'id' => $block,
            'name' => $name,
            'template' => $template,
            'html' => "$baseUrl/$template/sections/$block/index.html",
            'css' => "$baseUrl/$template/sections/$block/style.css",
            'preview' => "$baseUrl/$template/sections/$block/preview.jpg",
        ];
    }
}

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
