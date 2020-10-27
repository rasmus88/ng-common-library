import { relative } from 'path';  
import bundlerPkg from 'scss-bundle';
import fxExtraPkg from 'fs-extra';
 
/** Bundles all SCSS files into a single file */
async function bundleScss() {
  const { Bundler } = bundlerPkg;
  const { writeFile } = fxExtraPkg;

  const { found, bundledContent, imports } = await new Bundler()
    .bundle('./src/_theme.scss', ['./src/**/*.scss']);
   
  if (imports) {
    const cwd = process.cwd();

    const filesNotFound = imports
      .filter(x => !x.found)
      .map(x => relative(cwd, x.filePath));

      console.log("path")
      console.log(filesNotFound);

    if (filesNotFound.length) { 
      console.error(`SCSS imports failed \n\n${filesNotFound.join('\n - ')}\n`);
      throw new Error('One or more SCSS imports failed');
    }
  }

  if (found) { 
    await writeFile('../../dist/common-ui-library/_theme.scss', bundledContent); 
  }
}

bundleScss();