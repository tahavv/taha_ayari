export default defineNitroPlugin((nitroApp) => {
  const port = process.env.PORT || 3000; // ✅ Render provides PORT dynamically
  nitroApp.hooks.hook("listen", (server: any) => {
    console.log(`🚀 Server running on port ${port}`);
  });
});
