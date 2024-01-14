import { resolve } from "path";
import {defineConfig} from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
    const isProduction = mode === 'production';

    return {
        base: isProduction ? 'dermotologist-portfolio/' : '',
        server: {
            open: isProduction ? "dermotologist-portfolio/" : "index.html",
            hot: true,
        },
        preview: {
            open: isProduction ? "dermotologist-portfolio/" : "index.html"
        },
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    about: resolve(__dirname, 'about.html')
                }
            }
        }
    }
});
