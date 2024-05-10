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

let moves = 0;
towers(3, '1', '2', '3', (f, t) => {
  moves++;
  console.log(`Move #: ${moves}, from: ${f}, to: ${t}`);
});
