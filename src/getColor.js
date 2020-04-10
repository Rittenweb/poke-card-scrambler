export default function getColor(type) {
  switch (type) {
    default:
      return `repeating-linear-gradient(10deg, #dcdfe3 0px, #c4bdc5 50px, #a5a1a1 100px, #dcdfe3 150px)`;
    case 'Grass':
      return 'repeating-linear-gradient(70deg, #4d8b3d 0px, #538e4d 40px, #5e905e 100px, #4d8b3d 150px)';
    case 'Fire':
      return 'repeating-linear-gradient(50deg, #d54425 0px, #c15130 40px, #ad5a3b 100px, #d54425 150px)';
    case 'Water':
      return 'repeating-linear-gradient(60deg, #2288c0 0px, #4ba2ba 40px, #80a5a8 100px, #2288c0 150px)';
    case 'Lightning':
      return 'repeating-linear-gradient(80deg, #dfb01f 0px, #d0ab3d 40px, #c3a859 100px, #dfb01f 150px)';
    case 'Fighting':
      return 'repeating-linear-gradient(30deg, #8c3909 0px, #944817 40px, #995728 100px, #8c3909 150px)';
    case 'Psychic':
      return 'repeating-linear-gradient(20deg, #815381 0px, #8c618c 40px, #967096 100px, #815381 150px)';
    case 'Colorless':
      return `repeating-linear-gradient(10deg, #dcdfe3 0px, #c4bdc5 50px, #a5a1a1 100px, #dcdfe3 150px)`;
    case 'Darkness':
      return 'repeating-linear-gradient(40deg, #262222 0px, #2a2626 50px, #2f2929 100px, #262222 150px)';
    case 'Metal':
      return 'repeating-linear-gradient(100deg, #5c5959 0px, #6a6868 50px, #777777 100px, #5c5959 150px)';
  }
}