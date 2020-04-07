export default function getType(string) {
  switch (string) {
    default:
      return;
    case 'Grass':
      return 'grass.png';
    case 'Fire':
      return 'fire.png';
    case 'Water':
      return 'water.png';
    case 'Lightning':
      return 'lightning.png';
    case 'Fighting':
      return 'fighting.png';
    case 'Psychic':
      return 'psychic.png';
    case 'Colorless':
      return 'colorless.png';
    case 'Darkness':
      return 'darkness.png';
    case 'Metal':
      return 'metal.png';
  }
}