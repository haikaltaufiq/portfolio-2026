export default {
  default: {
    override: {
      wrapper: "cloudflare",
      converter: "edge",
    },
  },
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-middleware",
    },
  },
};
