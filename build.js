const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');

// Build configuration
const config = {
    srcDir: './src',
    distDir: './dist',
    htmlOptions: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    }
};

// Create dist directory
if (!fs.existsSync(config.distDir)) {
    fs.mkdirSync(config.distDir, { recursive: true });
}

// Process HTML files
function processHTML() {
    const htmlFiles = fs.readdirSync(config.srcDir).filter(file => file.endsWith('.html'));
    
    htmlFiles.forEach(file => {
        const content = fs.readFileSync(path.join(config.srcDir, file), 'utf8');
        const minified = minify(content, config.htmlOptions);
        fs.writeFileSync(path.join(config.distDir, file), minified);
        console.log(`✓ Processed ${file}`);
    });
}

// Process CSS files
function processCSS() {
    const cssContent = fs.readFileSync(path.join(config.srcDir, 'index.css'), 'utf8');
    const minified = new CleanCSS({}).minify(cssContent);
    fs.writeFileSync(path.join(config.distDir, 'index.css'), minified.styles);
    console.log('✓ Processed CSS');
}

// Process JavaScript files
function processJS() {
    const jsContent = fs.readFileSync(path.join(config.srcDir, 'index.js'), 'utf8');
    const minified = UglifyJS.minify(jsContent);
    fs.writeFileSync(path.join(config.distDir, 'index.js'), minified.code);
    console.log('✓ Processed JavaScript');
}

// Copy static assets
function copyAssets() {
    const assetsDir = path.join(config.srcDir, 'assets');
    const distAssetsDir = path.join(config.distDir, 'assets');
    
    if (fs.existsSync(assetsDir)) {
        fs.cpSync(assetsDir, distAssetsDir, { recursive: true });
        console.log('✓ Copied assets');
    }
}

// Run build
console.log('Starting build process...');
processHTML();
processCSS();
processJS();
copyAssets();
console.log('Build complete!');