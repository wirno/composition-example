export default function(errorMessage) {
  return (value) => {
    if (value === null || value === undefined) {
      return errorMessage || 'This value is required';
    }
    if (typeof value === 'string' && value.trim() === '') {
      return errorMessage || 'This value is required';
    }
  };
}
