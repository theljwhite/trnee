export const LEADING_ZERO_REGEX = /^0[0-9].*$/;
export const STRIP_SPECIAL_CHARS_REGEX = /[!@#$%^&*|()]/g;
export const SPACE_BETWEEN_CAPITALS_REGEX = /([a-z])([A-Z])/g;
export const NUMBERS_ONLY_REGEX = /^[0-9]*$/;
export const UPPERCASE_FIRST_LETTER = /^\p{Lu}/u;

export const SEED_USER_ENTRY_REGEX = /^\d+\s+\w+$/gm;
export const TRANSLATE_COORD_REGEX = /translate\((\d+)\s(\d+)\)/;

export const SPACE_BETWEEN_CAPITALS_REPLACE = (str) =>
  str.replace(SPACE_BETWEEN_CAPITALS_REGEX, "$1 $2");
