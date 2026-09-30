// دالة فلترة المنتجات حسب الدائرة المختارة
function filterCategory(category, element) {
	const items = document.querySelectorAll('.category-item');
	items.forEach(item => item.classList.remove('active'));
	element.classList.add('active');

	const products = document.querySelectorAll('.product-card');
	const sectionTitle = document.getElementById('section-title');

	if (category === 'all') {
		sectionTitle.textContent = "كل المنتجات";
	} else if (category === 'cars') {
		sectionTitle.textContent = "إطارات السيارات";
	} else if (category === 'football') {
		sectionTitle.textContent = "إطارات كرة القدم";
	} else if (category === 'cities') {
		sectionTitle.textContent = "إطارات المدن";
	}

	products.forEach(product => {
		const productCategory = product.getAttribute('data-category');
		if (category === 'all' || productCategory === category) {
			product.style.display = 'block';
		} else {
			product.style.display = 'none';
		}
	});
}

// دالة طلب المنتج عبر الواتساب مع رقمك الخاص 0562262419
function orderWhatsApp(productName, productPrice) {
	const phoneNumber = "213562262419";
	const message = `السلام عليكم ( 𝒍𝒂𝒘𝒉𝒂 )، حاب نطلب هذا المنتج:\n\n📦 المنتج: ${productName}\n💰 السعر: ${productPrice}\n\nممكن تفاصيل أكثر حول التوصيل؟`;
	const encodedMessage = encodeURIComponent(message);
	const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

	window.open(whatsappURL, '_blank');
}
