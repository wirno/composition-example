export default function(errorMessage) {
  return (value) => {
    if (typeof value === 'string' && value.trim() !== '' && value.trim().length < 12) {
      return errorMessage || 'This value is too short';
    }
  };
}
