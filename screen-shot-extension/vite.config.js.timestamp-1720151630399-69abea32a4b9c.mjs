// vite.config.js
import { defineConfig } from "file:///D:/Zimo%20Project/screen-shot-extension/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Zimo%20Project/screen-shot-extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { crx } from "file:///D:/Zimo%20Project/screen-shot-extension/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Screen Shot Extension",
  version: "1.0.0",
  permissions: ["tabs", "activeTab", "storage", "scripting"],
  action: { default_popup: "index.html" },
  host_permissions: ["http://*/*", "https://*/*"],
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["content.js"],
      run_at: "document_idle"
    }
  ]
};

// vite.config.js
var vite_config_default = defineConfig({
  plugins: [react(), crx({ manifest: manifest_default })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibWFuaWZlc3QuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFppbW8gUHJvamVjdFxcXFxzY3JlZW4tc2hvdC1leHRlbnNpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFppbW8gUHJvamVjdFxcXFxzY3JlZW4tc2hvdC1leHRlbnNpb25cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1ppbW8lMjBQcm9qZWN0L3NjcmVlbi1zaG90LWV4dGVuc2lvbi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBjcnggfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgbWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuanNvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGNyeCh7IG1hbmlmZXN0IH0pXSxcbn0pO1xuIiwgIntcclxuICBcIm1hbmlmZXN0X3ZlcnNpb25cIjogMyxcclxuICBcIm5hbWVcIjogXCJTY3JlZW4gU2hvdCBFeHRlbnNpb25cIixcclxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxyXG4gIFwicGVybWlzc2lvbnNcIjogW1widGFic1wiLCBcImFjdGl2ZVRhYlwiLCBcInN0b3JhZ2VcIiwgXCJzY3JpcHRpbmdcIl0sXHJcbiAgXCJhY3Rpb25cIjogeyBcImRlZmF1bHRfcG9wdXBcIjogXCJpbmRleC5odG1sXCIgfSxcclxuICBcImhvc3RfcGVybWlzc2lvbnNcIjogW1wiaHR0cDovLyovKlwiLCBcImh0dHBzOi8vKi8qXCJdLFxyXG4gIFwiY29udGVudF9zY3JpcHRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJtYXRjaGVzXCI6IFtcIjxhbGxfdXJscz5cIl0sXHJcbiAgICAgIFwianNcIjogW1wiY29udGVudC5qc1wiXSxcclxuICAgICAgXCJydW5fYXRcIjogXCJkb2N1bWVudF9pZGxlXCJcclxuICAgIH1cclxuICBdXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UyxTQUFTLG9CQUFvQjtBQUN0VSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxXQUFXOzs7QUNGcEI7QUFBQSxFQUNFLGtCQUFvQjtBQUFBLEVBQ3BCLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWUsQ0FBQyxRQUFRLGFBQWEsV0FBVyxXQUFXO0FBQUEsRUFDM0QsUUFBVSxFQUFFLGVBQWlCLGFBQWE7QUFBQSxFQUMxQyxrQkFBb0IsQ0FBQyxjQUFjLGFBQWE7QUFBQSxFQUNoRCxpQkFBbUI7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsU0FBVyxDQUFDLFlBQVk7QUFBQSxNQUN4QixJQUFNLENBQUMsWUFBWTtBQUFBLE1BQ25CLFFBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGOzs7QURSQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSwyQkFBUyxDQUFDLENBQUM7QUFDdEMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
