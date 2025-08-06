export default function loadBlockAssets(container, blockPath) {
    const templateMatch = blockPath.match(/\/blocks\/([^/]+)/);
    const template = templateMatch ? templateMatch[1] : '';

    const adjustPath = (el, attr) => {
        const original = el.getAttribute(attr);
        if (
            original &&
            !original.startsWith('http') &&
            !original.startsWith('data:') &&
            original.startsWith('../../')
        ) {
            const cleaned = original.replace(/^(\.\.\/)+/, '');
            el.setAttribute(attr, `/blocks/${template}/${cleaned}`);
        }
    };

    // Заменяем пути в HTML (src, href)
    container.querySelectorAll('[src]').forEach(el => adjustPath(el, 'src'));
    container.querySelectorAll('img[srcset]').forEach(img => {
        const srcset = img.getAttribute('srcset');
        if (srcset) {
            const updatedSrcset = srcset
                .split(',')
                .map(item => {
                    const [url, size] = item.trim().split(/\s+/);
                    if (url.startsWith('../../')) {
                        const cleaned = url.replace(/^(\.\.\/)+/, '');
                        return `/blocks/${template}/${cleaned} ${size}`;
                    }
                    return item.trim();
                })
                .join(', ');
            img.setAttribute('srcset', updatedSrcset);
        }
    });
    container.querySelectorAll('[href]').forEach(el => adjustPath(el, 'href'));

    // Подключаем CSS из блока, заменяя пути внутри него
    const styleEl = container.querySelector('link[rel="stylesheet"]');
    if (styleEl) {
        const href = styleEl.getAttribute('href');
        if (href) {
            const cssPath = `${blockPath}/${href.replace(/^(\.\.\/)+/, '')}`;

            fetch(cssPath)
                .then(res => res.text())
                .then(css => {
                    const fixedCSS = css.replace(/url\((['"]?)(\.\.\/\.\.\/[^'")]+)\1\)/g, (match, quote, relPath) => {
                        const cleaned = relPath.replace(/^(\.\.\/)+/, '');
                        return `url(${quote}/blocks/${template}/${cleaned}${quote})`;
                    });

                    const styleTag = document.createElement('style');
                    styleTag.textContent = fixedCSS;
                    document.head.appendChild(styleTag);
                })
                .catch(err => console.error('Ошибка загрузки CSS:', err));
        }
    }
}
