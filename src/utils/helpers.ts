export const getBackgroundColor = (weatherType: string) => {
  switch (weatherType) {
    case 'Clear':
      return '#FFC107';
    case 'Clouds':
      return '#607D8B';
    case 'Rain':
      return '#2196F3';
    default:
      return '#4CAF50';
  }
};
