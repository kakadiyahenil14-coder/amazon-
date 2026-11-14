document.addEventListener("DOMContentLoaded", () => {
    // 1. Add to Cart Counter Functionality
    let cartCount = 0;
    const cartCountElement = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Visual feedback on button click
            const originalText = button.textContent;
            button.textContent = "Added ✓";
            button.style.backgroundColor = "#a8f0c6";
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = "#ffd814";
            }, 800);
        });
    });

    // 2. Search Bar Functionality
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const categorySelect = document.getElementById("category-select");

    function handleSearch() {
        const query = searchInput.value.trim();
        const category = categorySelect.value;

        if (query === "") {
            alert("Please enter a product name to search.");
        } else {
            alert(`Searching for "${query}" in category: ${category.toUpperCase()}`);
        }
    }

    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

    // 3. Smooth Scroll "Back to Top"
    const backToTopBtn = document.getElementById("back-to-top");
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
