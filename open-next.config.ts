export default {
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
