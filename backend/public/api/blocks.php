<?php
header('Content-Type: application/json');

$blocksRoot = realpath(__DIR__ . '/../../../blocks');
$blocksUrl = '/blocks';

$result = [];

foreach (scandir($blocksRoot) as $template) {
    if ($template === '.' || $template === '..') continue;

    $sectionsPath = "$blocksRoot/$template/sections";
    if (!is_dir($sectionsPath)) continue;

    foreach (scandir($sectionsPath) as $block) {
        if ($block === '.' || $block === '..') continue;

        $metaPath = "$sectionsPath/$block/meta.json";
        if (!file_exists($metaPath)) continue;

        $meta = json_decode(file_get_contents($metaPath), true);
        if (!$meta) continue;

        $result[] = [
            'id' => $meta['id'] ?? $block,
            'name' => $meta['name'] ?? $block,
            'category' => $meta['category'] ?? 'uncategorized',
            'template' => $template,
            'screenshot' => "$blocksUrl/$template/sections/$block/preview.jpg",
            'html' => "$blocksUrl/$template/sections/$block/index.html"
        ];
    }
}

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

