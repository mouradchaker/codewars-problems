function DNAStrand(dna) {
  let newDna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i].toUpperCase() == "A") {
      newDna += "T";
    } else if (dna[i].toUpperCase() == "C") {
      newDna += "G";
    } else if (dna[i].toUpperCase() == "T") {
      newDna += "A";
    } else {
      newDna += "C";
    }
  }
  return newDna;
}
DNAStrand("AGCT");
