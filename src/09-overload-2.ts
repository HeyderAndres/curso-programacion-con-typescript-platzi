// Nombre => [N,o,m,b,r,e]
// [N,o,m,b,r,e] => Nombre
export function parseString(value: string): string[];
export function parseString(value: string[]): string;

export function parseString(value: string | string[]): string | string[] {
  if (typeof value === 'string') {
    return value.split('');
  }
  return value.join('');
}

console.log(parseString('Heider'));
console.log(parseString(['H', 'e', 'i', 'd', 'e', 'r']));
