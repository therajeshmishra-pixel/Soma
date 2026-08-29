const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // skip _v1_clinical
      if (file !== '_v1_clinical') {
        processDir(fullPath);
      }
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<SEO ') || file === 'Admin.jsx' || file === 'Portal.jsx') continue;
      
      const relativeDepth = fullPath.split('src/pages/')[1].split('/').length - 1;
      const importPath = relativeDepth === 0 ? '../components/SEO' : '../../components/SEO';
      
      if (!content.includes(`import SEO from`)) {
          content = content.replace(/(import .* from '.*';\n)/, `$1import SEO from '${importPath}';\n`);
      }
      
      const pageName = file.replace('.jsx', '');
      let slug = pageName.toLowerCase();
      if (relativeDepth > 0) {
         const folder = fullPath.split('src/pages/')[1].split('/')[0];
         slug = `${folder}/${slug}`;
      }
      if (slug === 'home') slug = '';

      const seoTag = `\n      <SEO \n        title="${pageName} | SOMA" \n        description="Discover ${pageName} programs and therapies at Soma Mukherjee Wellness." \n        canonical="https://www.somamukherjee.com/${slug}" \n      />`;
      
      // Inject after the first return ( <element>
      content = content.replace(/(return\s*\(\s*<[a-zA-Z]+[^>]*>)/, `$1${seoTag}`);
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated ' + fullPath.replace(__dirname, ''));
    }
  }
}

processDir(path.join(__dirname, 'src/pages'));
