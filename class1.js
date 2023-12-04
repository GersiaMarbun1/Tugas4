class Mobil {
    constructor() {
      this.merk = "Honda"
      this.warna = "hitam"
      this.jenis = "sedan"
      this.roda = 4
    }
  
    hitungRoda() {
      console.log(this.roda)
    }
  
    tambahRoda() {
      this.roda++
      this.hitungRoda()
    }
  }
  
  // Inisiasi object instance
  const mobilku = new Mobil()
  mobilku.hitungRoda() // log: 4
  mobilku.tambahRoda() // log: 5

