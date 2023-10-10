# [5/5] Cash Register

**SELAMAT!** kamu sudah berhasil menyelesaikan project keempat [Telepon Number Validator](https://github.com/dipintoo/freeCodeCamp_Telephone-Number-Validator) dan akhirnya sekarang perjalanan kamu telah sampai ke project terakhir sehingga selangkah lagi kamu akan meraih sertifikat [JavaScript Algorithm and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) dari freeCodeCamp!  


## Tentang Fungsi Kasir

Kamu akan merancang sebuah fungsi kasir yang akan membantu menghitung kembalian belanja. Fungsi ini akan menerima harga pembelian, pembayaran, dan jumlah uang tunai yang tersedia dalam laci kasir. Fungsi `checkCashRegister()` akan mengembalikan sebuah objek yang berisi dua kunci: `status` dan `change`. Kunci `status` akan memberi tahu apakah transaksi berhasil atau tidak, sedangkan kunci `change` akan berisi rincian kembalian.

Berikut beberapa skenario yang mungkin terjadi:

- Jika jumlah uang tunai dalam laci kasir kurang dari kembalian yang seharusnya diberikan atau tidak dapat memberikan kembalian yang tepat, maka fungsi akan menghasilkan output `{status: "INSUFFICIENT_FUNDS", change: []}`.

- Jika jumlah uang tunai dalam laci kasir sama dengan kembalian yang seharusnya diberikan, maka fungsi akan menghasilkan output `{status: "CLOSED", change: [...]}` dengan jumlah uang tunai dalam laci sebagai kembalian.

- Jika jumlah uang tunai dalam laci kasir lebih dari kembalian yang seharusnya diberikan, maka fungsi akan menghasilkan output `{status: "OPEN", change: [...]}` dengan kembalian yang terdiri dari uang kertas dan koin, diurutkan dari yang tertinggi ke yang terendah.
  

## Panduan Pecahan dan Nominal Uang Dollar

  | Currency Unit    | Amount       |
  | ---------------- | ------------ |
  | PENNY            | $0.01        |
  | NICKEL           | $0.05        |
  | DIME             | $0.1         |
  | QUARTER          | $0.25        |
  | ONE              | $1           |
  | FIVE             | $5           |
  | TEN              | $10          |
  | TWENTY           | $20          |
  | ONE HUNDRED      | $100         |  
  

## Contoh Penggunaan

console.log(  
`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])`  
)

akan menghasilkan output:

`{status: "OPEN", change: [["QUARTER", 0.5]]}`  


## Coding dan Testing

Kamu bisa ngoding dan melakukan testing langsung di [Cash Register project build](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register).  

Semangat dan selamat mencoba! 🚀📜  


## Sertifikat

Setelah berhasil menyelesaikan 5 project sertifikasi **JavaScript Algorithm and Data Structures**, diantaranya:

[***[1] Palindrome Checker***](https://github.com/dipintoo/freeCodeCamp_Palindrome-Checker) - [🔴 Live Demo](https://codepen.io/dipintoo/pen/GRPwvmE)  
[***[2] Roman Numeral Converter***](https://github.com/dipintoo/freeCodeCamp_Roman-Numeral-Converter) - [🔴 Live Demo](https://codepen.io/dipintoo/pen/ZEVmXvO)  
[***[3] Caesars Cipher***](https://github.com/dipintoo/freeCodeCamp_Caesars-Cipher) - [🔴 Live Demo](https://codepen.io/dipintoo/pen/dywQVjK)  
[***[4] Telephone Number Validator***](https://github.com/dipintoo/freeCodeCamp_Telephone-Number-Validator) - [🔴 Live Demo](https://codepen.io/dipintoo/pen/poqQWqb)  
[***[5] Cash Register***](https://github.com/dipintoo/freeCodeCamp_Cash-Register) - [🔴 Live Demo](https://codepen.io/dipintoo/pen/mdaQBvo)

kamu bisa langsung klaim sertifikatnya ke freeCodeCamp. Jika berhasil, kamu akan mendapatkan sertifikat seperti ini atas **Nama Kamu**.

**Selamat ya kamu 🏆🏅**

![Sertifikat kamu](https://github.com/dipintoo/freeCodeCamp_Cash-Register/blob/main/Sertifikat.png)
