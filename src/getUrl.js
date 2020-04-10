export default function getUrl() {
  let id = '';
  let suffix;
  switch (Math.floor(Math.random() * 12)) {
    default:
      break;
    case 0:
      id += 'base1-';
      id += Math.ceil(Math.random() * 69).toString();
      break;
    case 1:
      id += 'base2-';
      id += Math.ceil(Math.random() * 63).toString();
      break;
    case 2:
      id += 'base3-';
      id += Math.ceil(Math.random() * 57).toString();
      break;
    case 3:
      id += 'basep-';
      suffix = Math.ceil(Math.random() * 49).toString();
      while (
        suffix === '16' ||
        suffix === '31' ||
        suffix === '40' ||
        suffix === '41' ||
        suffix === '42'
      ) {
        suffix = Math.ceil(Math.random() * 49).toString();
      }
      id += suffix;
      break;
    case 4:
      id += 'base5-';
      suffix = Math.ceil(Math.random() * 70).toString();
      while (suffix === '15' || suffix === '16' || suffix === '17') {
        suffix = Math.ceil(Math.random() * 70).toString();
      }
      id += suffix;
      break;
    case 5:
      id += 'gym1-';
      suffix = Math.ceil(Math.random() * 98);
      while (suffix > 14 && suffix < 20) {
        suffix = Math.ceil(Math.random() * 57);
      }
      suffix = suffix.toString();
      id += suffix;
      break;
    case 6:
      id += 'gym2-';
      suffix = Math.ceil(Math.random() * 99);
      while (suffix === 14 || (suffix > 16 && suffix < 21)) {
        suffix = Math.ceil(Math.random() * 99);
      }
      suffix = suffix.toString();
      id += suffix;
      break;
    case 7:
      id += 'neo1-';
      suffix = Math.ceil(Math.random() * 82).toString();
      while (suffix === "19" || suffix === "22") {
        suffix = Math.ceil(Math.random() * 82).toString();
      }
      id += suffix;
      break;
    case 8:
      id += 'neo2-';
      suffix = Math.ceil(Math.random() * 71).toString();
      while (suffix === "40") {
        suffix = Math.ceil(Math.random() * 71).toString();
      }
      id += suffix;
      break;
    case 9:
      id += 'neo3-';
      suffix = Math.ceil(Math.random() * 66);
      while (suffix > 59 && suffix < 65) {
        suffix = Math.ceil(Math.random() * 66);
      }
      suffix = suffix.toString();
      id += suffix;
      break;
    case 10:
      id += 'neo4-';
      suffix = Math.ceil(Math.random() * 113);
      while (suffix === 16 || (suffix > 91 && suffix < 106)) {
        suffix = Math.ceil(Math.random() * 113);
      }
      suffix = suffix.toString();
      id += suffix;
      break;
    case 11:
      id += 'si1-';
      id += Math.ceil(Math.random() * 18).toString();
  }
  return 'https://api.pokemontcg.io/v1/cards/' + id;
}