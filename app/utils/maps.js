/**
 * Detects if the current device is an Apple device (iOS, iPadOS, macOS)
 * @returns {boolean} True if the device is an Apple device
 */
export function isAppleDevice() {
  if (typeof window === "undefined") return false;

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  return (
    /iphone|ipad|ipod/.test(userAgent) ||
    /macintosh|mac os x/.test(userAgent) ||
    platform.includes("mac") ||
    platform.includes("iphone") ||
    platform.includes("ipad")
  );
}

/**
 * Gets the appropriate maps URL based on the device type
 * @param {number} latitude - Latitude coordinate
 * @param {number} longitude - Longitude coordinate
 * @param {string} address - Optional address or business name
 * @returns {string} Maps URL (Apple Maps for Apple devices, Google Maps for others)
 */
export function getMapsUrl(
  latitude = 42.33829,
  longitude = -122.89063,
  address = "Sky Auto Body"
) {
  if (isAppleDevice()) {
    // Apple Maps URL format
    return `https://maps.apple.com/?q=${encodeURIComponent(address)}&ll=${latitude},${longitude}`;
  } else {
    // Google Maps URL format
    return `https://www.google.com/maps?ll=${latitude},${longitude}&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=${encodeURIComponent(address + " OR")}@${latitude},${longitude}`;
  }
}
