const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, // Enable runtime compiler
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('v-slot'), // Adjust as needed
  },
});
