fetch('/products/data')
  .then(res => {
    if (!res.ok) throw new Error('Server response was not OK');
    return res.json();
  })

  .then(data => {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    data.forEach(product => {
      const card = document.createElement('div');
      
      card.className = "bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between h-full";


      // Products Cards' HTML Design
      card.innerHTML = `
        <div>
          <h3 class="text-[#006633] font-semibold text-lg mb-1 leading-tight">${product.name}</h3>
        </div>


        <div>
          <p class="text-[#000000] font-bold text-xl mb-4">$${product.price}</p>

          <h6 class="text-[#808080] text-sm mb-4">Measure in ${product.measure}</h6>

          <button class="w-full bg-[#008543] hover:bg-[#006633] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm cursor-pointer">
            Add Product
          </button>
        </div>
      `;

      container.appendChild(card);
    })
    });