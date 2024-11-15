import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "ta"],
    defaultLocale: "en",
});

export const config = {
    matcher: ["/", "/(en|ta)/:path*"],
};