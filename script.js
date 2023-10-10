function checkCashRegister(price, cash, cid) {
	// Panduan pecahan dan nominal uang dollar
	const dollar = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		"ONE HUNDRED": 100
	};

	// Hitung total uang kembalian
	let uangKembalian = cash - price;

	// Hitung total uang di laci kasir
	let uangDiLaciKasir = cid
		.map((nominal) => nominal[1])
		.reduce((total, nominal) => total + nominal, 0);

	// Status
	// - Jika total uang di laci kasir tidak cukup untuk uang kembalian
	if (uangDiLaciKasir < uangKembalian) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}

	// - Jika total uang di laci kasir sama dengan uang kembalian
	else if (uangDiLaciKasir === uangKembalian) {
		return { status: "CLOSED", change: cid };
	}

	// - Jika total uang kembalian lebih kecil dari uang di laci kasir, berikan uang kembalian berurutan dari nominal besar ke kecil. Misalnya jika customer memberikan uang cash $10 dan dia membelanjakan uangnya seharga $8.65, kembalikan uang customer berupa satu lembar $1 dan masing-masing satu keping $0.25 dan $0.1. Customer tidak suka dengan kembalian uang recehan yang banyak apalagi diganti dengan permen!

	// -- Urutkan uang dari nominal besar ke kecil
	else {
		cid = cid.reverse();
	}

	// -- Siapkan array untuk menampung uang kembalian
	let kembalianArray = [];

	// -- Di dalam laci kasir biasanya terdapat slot untuk masing - masing nominal uang agar memudahkan kasir dalam menyortir uang yang diterima (pembayaran) dan uang kembalian

	// -- Telusuri setiap slot uang di laci kasir
	cid.forEach((slot) => {
		// -- Ketika kasir menerima uang dari customer serta mengembalikan uang sisa belanjaan customer tentu kondisi masing - masing slot sebelum dan sesudah terjadinya transaksi berbeda. Misalnya customer memberikan uang cash $10 dan dia membelanjakan uangnya $8.65, maka kasir akan mengembalikan uang customer sebesar $1.35 berupa satu lembar $1 dan masing-masing satu keping $0.25 dan $0.1. Uang pada slot $10 akan bertambah satu lalu uang pada slot $0.25 dan $0.1 akan berkurang satu. Oleh sebab itu, kita perlu memastikan ketersediaan uang dalam laci kasir pada setiap slotnya yang tentu akan mempengaruhi status ada atau tidaknya uang kembalian.

		// -- Kondisi slot sebelum terjadi transaksi
		let slotUpdate = [slot[0], 0];

		// -- Pecahan uang dollar
		const pecahan = slot[0];

		// -- Nominal uang dollar
		let nominal = slot[1];

		// -- Misal kasir harus mengembalikan uang customer sebesar $1.35. Cek uang berdasarkan pecahan uang yang memenuhi. Maksudnya adalah tidak mungkin $1.35 kembaliannya $5, maka periksalah dimana uang kembalian lebih besar atau sama dengan pecahan uang yang tersedia di laci kasir seperti pecahan $1, $0.25, dan $0.1 dan seterusnya

		while (uangKembalian >= dollar[pecahan] && nominal > 0) {
			// -- Pembulatan hasil kalkulasi menjadi 2 desimal
			uangKembalian = Number(uangKembalian.toFixed(2));
			// -- Uang kembalian diambil dari slot
			uangKembalian -= dollar[pecahan];
			nominal -= dollar[pecahan];
			// -- Kondisi slot setelah terjadi transaksi
			slotUpdate[1] += dollar[pecahan];
		}

		// -- Uang kembalian disimpan ke dalam array
		if (slotUpdate[1] > 0) {
			kembalianArray.push(slotUpdate);
		}
	});

	// - Jika uang tersedia di laci kasir tapi pecahan uang kembalian tidak tersedia. Misal di laci kasir tersedia pecahan 20$ tapi uang kembalian cuma $5
	if (uangKembalian > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}

	// Hasil uang kembalian
	return { status: "OPEN", change: kembalianArray };
}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100]
	])
); // Output: {status: "OPEN", change: [["QUARTER", 0.5]]}