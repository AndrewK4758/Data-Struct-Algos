class Disk {
  size: number;
  name: string;
  constructor(size: number, name: string) {
    this.size = size;
    this.name = name;
  }
}

class Tower {
  name: string;
  location: number;
  disks: Disk[];
  constructor(name: string, location: number, disks: Disk[]) {
    this.name = name;
    this.location = location;
    this.disks = disks;
  }
}

//iterative following rules

const moveFromTo = (from: number[], to: number[]): void => {
  const topDiskFrom = from[from.length - 1] ?? 0;
  const topDiskTo = to[to.length - 1] ?? 0;

  if (topDiskFrom > topDiskTo) to.push(from.pop() as number);
  else from.push(to.pop() as number);
};

const moveFromAux = (from: number[], aux: number[]): void => {
  const topDiskFrom = from[from.length - 1] ?? 0;
  const topDiskAux = aux[aux.length - 1] ?? 0;

  if (topDiskFrom > topDiskAux) aux.push(from.pop() as number);
  else from.push(aux.pop() as number);
};

const moveAuxTo = (aux: number[], to: number[]): void => {
  const topDiskAux = aux[aux.length - 1] ?? 0;
  const topDiskTo = to[to.length - 1] ?? 0;

  if (topDiskAux > topDiskTo) to.push(aux.pop() as number);
  else aux.push(to.pop() as number);
};

const towersIter = (
  disks: number,
  from: number[],
  to: number[],
  aux: number[]
) => {
  const maxMoves = disks ** 2 - 1;
  let moveCount = 0;
  while (to.length < disks) {
    for (let i = 1; i < maxMoves; i++) {
      if (i % disks === 1) {
        moveFromTo(from, to);
        moveCount++;
      }
      if (i % disks === 2) {
        moveFromAux(from, to);
        moveCount++;
      }
      if (i % disks === 0) {
        moveAuxTo(aux, to);
        moveCount++;
      }
    }
  }
  return moveCount;
};

console.log(towersIter(3, [3, 2, 1], [], []));
//Recursive not following all rules
export function towers(
  disks: number,
  from: string,
  to: string,
  aux: string,
  counter: (f: string, t: string) => void
) {
  if (disks > 0) {
    towers(disks - 1, from, aux, to, counter);
    counter(from, to);
    towers(disks - 1, to, aux, from, counter);
  }
}

// let moves = 0;
// towers(3, '1', '2', '3', (f, t) => {
// moves++;
// console.log(`Move #: ${moves}, from: ${f}, to: ${t}`);
// });
