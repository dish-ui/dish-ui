// This used for generate 'name' for form element
// Actually it may be repeating, but its chance is really small

export default function generateId(length = 8): string {
  const chars = '0123465789abcdef'.split('');
  return '_'.repeat(length).replace(/_/g, () => {
    return chars[Math.floor(Math.random() * 16)];
  });
}
