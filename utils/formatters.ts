/**
 * Formats a raw 10-digit phone number string into (XXX) XXX-XXXX
 */
export function formatPhone(phone: string): string {
  const cleaned = ("" + phone).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Converts a text string into a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

/**
 * Strips @ or full URL from an Instagram handle
 */
export function cleanInstagramHandle(input: string): string {
  if (!input) return "";
  let handle = input.trim();
  if (handle.includes("instagram.com/")) {
    handle = handle.split("instagram.com/")[1].split("/")[0].split("?")[0];
  }
  if (!handle.startsWith("@")) {
    handle = `@${handle}`;
  }
  return handle;
}

/**
 * Formats a number to USD currency representation
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}
