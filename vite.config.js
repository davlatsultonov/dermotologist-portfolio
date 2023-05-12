import {defineConfig} from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
    const isProduction = mode === 'production';

    return {
        base: isProduction ? '/dermotologist-portfolio/' : '',
        server: {
            open: isProduction ? "/dermotologist-portfolio/index.html" : "index.html",
            hot: true,
        },
        preview: {
            open: isProduction ? "/dermotologist-portfolio/index.html" : "index.html"
        }
    }
});
