const config = {
  default: {
    override: {
      wrapper: "cloudflare",
    },
  },
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-middleware",
    },
  },
};

export default config;
