/**
 * Converts a hex color code to an RGB object with values in the 0-1 range.
 * @param hex - The hex color code (e.g., "#RRGGBB" or "#RGB").
 * @returns An object with red, green, and blue components normalized to the 0-1 range.
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    // Remove the hash symbol if it's present
    hex = hex.replace(/^#/, '');
  
    let r: number, g: number, b: number;
  
    if (hex.length === 3) {
      // 3-digit hex color code
      r = parseInt(hex[0] + hex[0], 16) / 255;
      g = parseInt(hex[1] + hex[1], 16) / 255;
      b = parseInt(hex[2] + hex[2], 16) / 255;
    } else if (hex.length === 6) {
      // 6-digit hex color code
      r = parseInt(hex.substring(0, 2), 16) / 255;
      g = parseInt(hex.substring(2, 4), 16) / 255;
      b = parseInt(hex.substring(4, 6), 16) / 255;
    } else {
      // Invalid hex format
      throw new Error('Invalid hex color format');
    }
  
    return { r, g, b };
  };