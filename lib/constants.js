import dotenv from "dotenv";

dotenv.config();

if (process.env.CLOUDFLARE_API_KEY) {
  console.warn(
    "Using Global API Key is very risky for your Cloudflare account. It is strongly recommended to create an API Token with scoped permissions instead."
  );
}

export const API_KEY = process.env.CLOUDFLARE_API_KEY;

export const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const BLOCK_PAGE_ENABLED = !!parseInt(process.env.BLOCK_PAGE_ENABLED, 10);

export const BLOCK_BASED_ON_SNI = !!parseInt(process.env.BLOCK_BASED_ON_SNI, 10);

export const DEBUG = !!parseInt(process.env.DEBUG, 10);

export const CLOUDFLARE_RATE_LIMITING_COOLDOWN_TIME = 2 * 60 * 1000;
export const RATE_LIMITING_HTTP_ERROR_CODE = 429;

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  ? process.env.ALLOWLIST_URLS.split("\n").filter((x) => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter((x) => x)
  : undefined;

// These are the default blocklists and allowlists that are used by the script if the user doesn't provide any URLs by themselves.
// The files are dynamically fetched from the internet, therefore it's important to choose only the most reliable sources.
// Commented out lists are subject to removal.

// You can have an unlimited number of allowlists, unlike blocklists.
export const RECOMMENDED_ALLOWLIST_URLS = [
  // Torrent trackers
  "https://raw.githubusercontent.com/im-sm/Pi-hole-Torrent-Blocklist/main/all-torrent-trackres.txt",
  // Banks
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  // Official Discord domains
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  // macOS specific
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  // Windows specific
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/windows.txt",
  // URL shorteners
  "https://raw.githubusercontent.com/boutetnico/url-shorteners/master/list.txt",
  // Firefox sync, add-ons, etc.
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/firefox.txt",
  // Android apps
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/android.txt",

  // General allowlists
  "https://raw.githubusercontent.com/TogoFire-Home/AD-Settings/main/Filters/whitelist.txt",
  "https://raw.githubusercontent.com/DandelionSprout/AdGuard-Home-Whitelist/master/whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/exclusions.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/issues.txt",
  // Uncomment the line below to use OISD's most commmonly whitelisted list
  // https://local.oisd.nl/extract/commonly_whitelisted.php,
];

// The default blocklist settings are optimized for performance while still blocking a lot.
// WARNING: Combining all these lists will likely exceed Cloudflare's 300,000 domain limit on the free plan.
// If you hit the limit, remove one or more lists or use a smaller variant.
// ======= AGGRESSIVE BLOCKLISTS FOR MAXIMUM AD BLOCKING =======
// These lists are the most comprehensive and up-to-date as of July 2025.
// They block nearly every ad, tracker, and mobile ad network (including Viber ads).
// WARNING: Using more than one of these lists will almost certainly exceed Cloudflare's 300,000 domain limit on the free plan.
// If you hit the limit, use only one (preferably Hagezi Pro++ or OISD Big) or switch to a paid plan.
// For more info: https://github.com/hagezi/dns-blocklists
//
// Hagezi Pro++: Maximum protection, balanced/aggressive, includes mobile ads
// Hagezi Ultimate: Even more aggressive, may break some sites/apps
// OISD Big: Very large, highly trusted, covers most ad/tracker domains
// StevenBlack: Well-maintained, broad coverage, good as a supplement
//
// You can rotate between these to find the best fit for your needs.
export const RECOMMENDED_BLOCKLIST_URLS = [
  // Hagezi Pro++ (Maximum Protection, recommended for "block everything")
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.plus.txt",
  // Hagezi Ultimate (Aggressive, blocks even more, may break some sites)
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/ultimate.txt",
  // OISD Big (very large, highly trusted)
  // "https://big.oisd.nl/",
  // StevenBlack hosts (broad, well-maintained)
  // "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
  // Firebog "Tough" lists (optional, see https://firebog.net/ for URLs)
];
