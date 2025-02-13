import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAvatarFallbackLetters(str: string = '') {
  const [first, second] = str.split(' ');

  let result = capitalizeFirstLetter(first.charAt(0));

  if (second) {
    result += capitalizeFirstLetter(second.charAt(0));
  }

  return result;
}

export function formatDisplayName(displayName: string | null) {
  const firstName = (displayName || '').split(' ')[0];
  let result = firstName;
  if (firstName.length > 15) {
    result = firstName.slice(0, 15) + '...';
  }
  return capitalizeFirstLetter(result);
}
