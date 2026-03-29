// --- Data ---
const menuItems = [
    // Starters
    { id: 1, name: "Paneer Tikka", price: 250, category: "Starters", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=1" },
    { id: 2, name: "Samosa (2 pcs)", price: 40, category: "Starters", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=2" },
    { id: 3, name: "Hara Bhara Kabab", price: 180, category: "Starters", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=3" },
    { id: 4, name: "Chicken Tikka", price: 280, category: "Starters", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=4" },
    { id: 5, name: "Chilli Paneer", price: 220, category: "Starters", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=5" },
    { id: 6, name: "Veg Manchurian", price: 200, category: "Starters", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=6" },
    { id: 7, name: "Chicken 65", price: 260, category: "Starters", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=7" },

    // Main Course
    { id: 8, name: "Butter Chicken", price: 350, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=8" },
    { id: 9, name: "Mutton Biryani", price: 400, category: "Main Course", prepTime: "25m", deliveryTime: "45m", img: "https://loremflickr.com/320/240/indianfood?lock=9" },
    { id: 10, name: "Masala Dosa", price: 120, category: "Main Course", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=10" },
    { id: 11, name: "Chole Bhature", price: 150, category: "Main Course", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=11" },
    { id: 12, name: "Dal Makhani", price: 220, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=12" },
    { id: 13, name: "Fish Curry", price: 380, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=13" },
    { id: 14, name: "Veg Pulao", price: 180, category: "Main Course", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=14" },
    { id: 15, name: "Palak Paneer", price: 240, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=15" },
    { id: 16, name: "Kadai Paneer", price: 250, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=16" },
    { id: 17, name: "Chicken Curry", price: 320, category: "Main Course", prepTime: "20m", deliveryTime: "40m", img: "https://loremflickr.com/320/240/indianfood?lock=17" },
    { id: 18, name: "Rajma Chawal", price: 160, category: "Main Course", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=18" },
    { id: 19, name: "Malai Kofta", price: 260, category: "Main Course", prepTime: "25m", deliveryTime: "45m", img: "https://loremflickr.com/320/240/indianfood?lock=19" },
    { id: 20, name: "Egg Curry", price: 190, category: "Main Course", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=20" },

    // Breads
    { id: 21, name: "Garlic Naan", price: 50, category: "Breads", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=21" },
    { id: 22, name: "Tandoori Roti", price: 30, category: "Breads", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=22" },
    { id: 23, name: "Butter Naan", price: 45, category: "Breads", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=23" },
    { id: 24, name: "Lacha Paratha", price: 60, category: "Breads", prepTime: "12m", deliveryTime: "32m", img: "https://loremflickr.com/320/240/indianfood?lock=24" },
    { id: 25, name: "Aloo Paratha", price: 70, category: "Breads", prepTime: "15m", deliveryTime: "35m", img: "https://loremflickr.com/320/240/indianfood?lock=25" },

    // Desserts
    { id: 26, name: "Gulab Jamun", price: 80, category: "Desserts", prepTime: "5m", deliveryTime: "25m", img: "https://loremflickr.com/320/240/indianfood?lock=26" },
    { id: 27, name: "Rasgulla", price: 90, category: "Desserts", prepTime: "5m", deliveryTime: "25m", img: "https://loremflickr.com/320/240/indianfood?lock=27" },
    { id: 28, name: "Jalebi", price: 70, category: "Desserts", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=28" },
    { id: 29, name: "Gajar Ka Halwa", price: 120, category: "Desserts", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=29" },
    { id: 30, name: "Rice Kheer", price: 100, category: "Desserts", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/indianfood?lock=30" },

    // Beverages
    { id: 31, name: "Sweet Lassi", price: 60, category: "Beverages", prepTime: "5m", deliveryTime: "25m", img: "https://loremflickr.com/320/240/drink?lock=31" },
    { id: 32, name: "Masala Chai", price: 25, category: "Beverages", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/drink?lock=32" },
    { id: 33, name: "Cold Coffee", price: 90, category: "Beverages", prepTime: "10m", deliveryTime: "30m", img: "https://loremflickr.com/320/240/drink?lock=33" },
    { id: 34, name: "Virgin Mojito", price: 110, category: "Beverages", prepTime: "5m", deliveryTime: "25m", img: "https://loremflickr.com/320/240/drink?lock=34" }
];

let reviews = [
    { name: "Rahul S.", text: "Absolutely fantastic food! The Butter Chicken is a must-try." },
    { name: "Priya M.", text: "Great ambiance and quick delivery. Loved the Paneer Tikka." },
    { name: "Amit K.", text: "Best restaurant in Ranchi for authentic flavors." },
    { name: "Neha D.", text: "The Chole Bhature reminded me of Delhi. Superb!" },
    { name: "Vikram R.", text: "Good portions and reasonable prices. Will order again." },
    { name: "Sita P.", text: "Very polite staff and the food was served hot." },
    { name: "Karan T.", text: "Loved the Gulab Jamun, perfectly sweet and soft." },
    { name: "Ravi J.", text: "The Mutton Biryani is incredibly aromatic." },
    { name: "Anjali H.", text: "A hidden gem in Jharkhand!" },
    { name: "Mohit B.", text: "Hygienic, tasty, and budget-friendly." }
];

// --- State Variables ---
let cart = [];
let isLoggedIn = false;
let pendingCheckout = false;
let discountApplied = false;
let currentCategory = 'All';

// --- Initialization & Preloader ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.visibility = 'hidden';
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    renderDishes('featured-dishes', menuItems.slice(0, 6));
    renderDishes('all-dishes', menuItems);
    renderReviews();
});

// --- UI Navigation ---
function switchTab(tabId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active', 'hidden'));
    document.querySelectorAll('.page-section').forEach(sec => {
        if(sec.id === tabId) sec.classList.add('active');
        else sec.classList.add('hidden');
    });
    window.scrollTo(0, 0);
    document.getElementById('navLinks').classList.remove('active');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// --- Menu Filtering & Search Logic ---
function setCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    filterMenu();
}

function filterMenu() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(query);
        const matchesCategory = currentCategory === 'All' || item.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    renderDishes('all-dishes', filteredItems);
}

// --- Render Functions ---
function renderDishes(containerId, items) {
    const container = document.getElementById(containerId);
    
    if (items.length === 0) {
        container.innerHTML = "<p style='text-align:center; grid-column: 1 / -1; color: #a8b1b8;'>No dishes found matching your criteria.</p>";
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="card">
            <div class="img-container">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="card-content">
                <span class="category-badge">${item.category}</span>
                <h4>${item.name}</h4>
                <div class="time-info">
                    <span><i class="fas fa-clock"></i> Prep: ${item.prepTime}</span>
                    <span><i class="fas fa-motorcycle"></i> Del: ${item.deliveryTime}</span>
                </div>
                <p style="color: var(--primary); font-weight: bold; font-size: 18px; margin-bottom: 15px;">₹${item.price}</p>
                <button class="btn" onclick="addToCart(${item.id})">Add to Cart 🛒</button>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const container = document.getElementById('review-list');
    container.innerHTML = reviews.map(rev => `
        <div class="review-card">
            <h4 style="color:#fff;">${rev.name}</h4>
            <p style="color:#f1faee;">"${rev.text}"</p>
        </div>
    `).join('');
}

// --- Toast Notification Logic ---
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #2ecc71;"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

// --- Cart Logic ---
function addToCart(id) {
    const item = menuItems.find(m => m.id === id);
    cart.push(item);
    updateCartUI();
    
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.classList.remove('cart-animate');
    void cartBtn.offsetWidth; 
    cartBtn.classList.add('cart-animate');
    
    showToast(`${item.name} added to cart!`);
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById('subTotal').innerText = "0";
        document.getElementById('gstAmount').innerText = "0";
        document.getElementById('finalTotal').innerText = "0";
        return;
    }

    cartItemsDiv.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price} <button style="color:#e74c3c;border:none;background:none;cursor:pointer;font-size:16px;" onclick="removeFromCart(${index})">✖</button></span>
        </div>
    `).join('');

    calculateTotals();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function calculateTotals() {
    const subTotal = cart.reduce((sum, item) => sum + item.price, 0);
    const gst = Math.round(subTotal * 0.18);
    const delivery = 20;
    let finalTotal = subTotal + gst + delivery;

    if (discountApplied) {
        finalTotal = 0;
    }

    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('gstAmount').innerText = gst;
    document.getElementById('finalTotal').innerText = finalTotal;
}

function applyPromo() {
    const code = document.getElementById('promoCode').value.trim().toUpperCase();
    const msg = document.getElementById('promoMessage');
    
    if (code === "IAMIN") {
        discountApplied = true;
        msg.innerText = "Promo Applied! 100% Discount!";
        msg.style.color = "#2ecc71";
    } else if (code !== "") {
        discountApplied = false;
        msg.innerText = "Promo Not Available";
        msg.style.color = "#e74c3c";
    } else {
        discountApplied = false;
        msg.innerText = "";
    }
    calculateTotals();
}

// --- Checkout & Payment Logic ---
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast("Cart is empty!");
        return;
    }
    closeModal('cartModal');
    if (!isLoggedIn) {
        pendingCheckout = true;
        openModal('loginModal');
        showToast("Please log in to place your order.");
    } else {
        openModal('paymentModal');
    }
}

function processPayment() {
    closeModal('paymentModal');
    
    const overlay = document.getElementById('cookingOverlay');
    const cookingText = document.getElementById('cookingText');
    const panContainer = document.getElementById('panContainer');
    
    cookingText.innerHTML = "Cooking your order...";
    panContainer.style.display = 'block';
    
    overlay.classList.remove('hidden');

    setTimeout(() => {
        panContainer.style.display = 'none';
        cookingText.innerHTML = `
            <div class="success-check"><i class="fas fa-check-circle"></i></div>
            <br>Order Placed Successfully!
        `;
        
        setTimeout(() => {
            overlay.classList.add('hidden');
            cart = [];
            discountApplied = false;
            document.getElementById('promoCode').value = "";
            document.getElementById('promoMessage').innerText = "";
            updateCartUI();
            switchTab('home');
        }, 2000);

    }, 3000);
}

// --- Table Reservation Logic ---
function submitReservation(e) {
    e.preventDefault();
    showToast("Checking table availability...");
    setTimeout(() => {
        showToast("✅ Table Reserved Successfully! We will call you shortly.");
        document.getElementById('reservationForm').reset();
    }, 1500);
}

// --- Login & Location Logic ---
function handleLogIn(e) {
    e.preventDefault();
    isLoggedIn = true;
    document.getElementById('loginBtn').innerHTML = `<i class="fas fa-user-check"></i> Logged In`;
    closeModal('loginModal');
    
    if (pendingCheckout) {
        pendingCheckout = false;
        openModal('paymentModal');
    } else {
        showToast("Logged in successfully!");
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            showToast("Location accessed (Simulated). Fields auto-filled.");
            document.getElementById('userLine1').value = "Current GPS Location";
            document.getElementById('userCity').value = "Ranchi";
            document.getElementById('userPin').value = "834001";
        }, () => {
            showToast("Location access denied or unavailable.");
        });
    } else {
        showToast("Geolocation is not supported by this browser.");
    }
}

// --- Review Logic ---
function submitReview(e) {
    e.preventDefault();
    const name = document.getElementById('revName').value;
    const text = document.getElementById('revText').value;
    reviews.unshift({ name, text });
    renderReviews();
    document.getElementById('reviewForm').reset();
    showToast("Review submitted successfully!");
}
