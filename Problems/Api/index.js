

async function fetchProductData() {
    try {
        let response = await fetch('https://dummyjson.com/products/');
        let translatedData = await response.json();
        // console.log(translatedData)
        let actualData = translatedData.products;
        return actualData 
    } catch (error) {
        console.log(error)
    }
}

async function renderProducts() {
    let productDisplay = document.getElementById("products-container")
    let product = await fetchProductData()
    console.log(product)
    product.forEach((stat) => {
        let productList = document.createElement("div")
        productList.innerHTML = `
            <h2>${stat.title}</h2>
            <p>${stat.description}</p>
            <p>Price: $${stat.price}</p>
            <button>Buy Me!</button>
        `
        productList.style.borderTop = "2px solid black"
        // productList.style.borderBottom = "2px solid black"
        productList.style.width = "100%"
        productList.style.margin = "auto"
        productList.style.paddingBottom = "2%"
        productDisplay.appendChild(productList)
    })
}


async function fetchPostData() {
    try {
        let response = await fetch('https://dummyjson.com/posts');
        let translatedData = await response.json();
        // console.log(translatedData)
        let actualData = translatedData.posts;
        return actualData 
    } catch (error) {
        console.log(error)
    }
}

async function renderPosts() {
    let postDisplay = document.getElementById("posts-container")
    let post = await fetchPostData()
    console.log(post)
    post.forEach((stat) => {
        let postList = document.createElement("div")
        postList.innerHTML = `
            <h2>${stat.title}</h2>
            <p>${stat.body}</p>
            <button>Reply</button>
        `
        postList.style.borderTop = "2px solid black"
        postList.style.width = "100%"
        postList.style.margin = "auto"
        postList.style.paddingBottom = "2%"
        postDisplay.appendChild(postList)
    })
}

renderProducts()
renderPosts()