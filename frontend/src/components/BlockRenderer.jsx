import React, { useEffect, useRef } from 'react';
import loadBlockAssets from '../utils/loadBlockAssets';

export default function BlockRenderer({ block, themeColor}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            loadBlockAssets(containerRef.current, `/blocks/${block.template}/sections/${block.name}`);

            // Применим цветовую тему
            containerRef.current.querySelectorAll('[data-theme="primary"]').forEach(el => {
                el.style.color = themeColor;
            });
            containerRef.current.querySelectorAll('[data-theme-bg="primary"]').forEach(el => {
                el.style.backgroundColor = themeColor;
            });
            containerRef.current.querySelectorAll('[data-theme-border="primary"]').forEach(el => {
                el.style.borderColor = themeColor;
            });
        }
    }, [block, themeColor]);
    console.log(block)
    if (!block || !block.html) return null;
    return (
        <div
            ref={containerRef}
            dangerouslySetInnerHTML={{ __html: block.html }}
        />
    );
}
