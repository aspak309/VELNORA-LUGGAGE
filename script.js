const photos=[
 ['IMG_20260831_182059_855.jpg','Product Photo 1','trolley'],
 ['IMG_20260831_182105_521.jpg','Product Photo 2','trolley'],
 ['IMG_20260831_182140_937.jpg','Product Photo 3','trolley'],
 ['IMG_20260831_182148_229.jpg','Product Photo 4','trolley'],
 ['IMG_20260831_182156_553.jpg','Product Photo 5','trolley'],
 ['IMG_20260831_182216_339.jpg','Product Photo 6','trolley'],
];
const grid=document.getElementById('galleryGrid');
function render(filter='all'){grid.innerHTML=photos.filter(p=>filter==='all'||p[2]===filter).map(p=>`<article class="card"><img src="assets/${p[0]}" alt="${p[1]}" loading="lazy"><div class="card-body"><strong>${p[1]}</strong><small>Available for wholesale & bulk orders</small></div></article>`).join('')}
render();
document.querySelectorAll('.categories button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.categories button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
document.querySelector('.categories button').classList.add('active');
document.getElementById('bulkForm').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value,p=document.getElementById('phone').value,pr=document.getElementById('product').value,q=document.getElementById('qty').value,c=document.getElementById('city').value;const msg=`Hello VELNORA LUGGAGE,\n\nI want a bulk order.\nName: ${n}\nMobile: ${p}\nProduct: ${pr}\nQuantity: ${q} pcs\nDelivery City: ${c}`;window.open(`https://wa.me/919653181917?text=${encodeURIComponent(msg)}`,'_blank')});
document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='62px';nav.style.left='0';nav.style.right='0';nav.style.background='#0b2743';nav.style.padding='18px';nav.style.flexDirection='column';nav.style.alignItems='stretch'});
