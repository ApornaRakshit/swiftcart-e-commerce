## WELCOME TO SwiftCart E-Commerce

- **Live Link :** "https://graceful-nasturtium-93ecd4.netlify.app/"

---
## 🛍️ API Endpoints
---
1. Get 🛍️ All Products
```bash
https://fakestoreapi.com/products
```

2. Get 🛍️ All Categories
```bash
https://fakestoreapi.com/products/categories
```

3. Get 🛍️ Products by Category
```bash
https://fakestoreapi.com/products/category/${category}
```

4. Get 🛍️ Single Product Detail
```bash
https://fakestoreapi.com/products/${id}
```

---

## 🎯 Project Specifications (UI/UX)

#### 1) Navbar
- Website **logo/name** ("SwiftCart") on the **left**
- **Menu items** (Home, Products, About, Contact) in the **center**
- **Cart Icon/Button** on the **right** (showing item count is a bonus)

#### 2) Banner / Hero Section
- A **background image** (related to shopping/fashion/electronics)
- A **title** (e.g., "Best Collection For You") and **subtitle**
- A **centered button** (e.g., "Shop Now")

#### 3) Features / Why Choose Us
- **Section heading**
- **3-4 items** highlighting features like "Fast Delivery", "24/7 Support", "Secure Payment", etc. (Icon + Title + Short Text)

#### 4) Trending / Top Rated Section
- Show **3 top-rated products** (you can filter by rating or just pick the first 3) based on API data or hardcoded for layout practice.

#### 5) Newsletter & Footer
- **Newsletter Subscription Form**: Email input + Subscribe button.
- **Footer** with copyright info, social links, and quick links.

#### 6) Responsiveness
- Website must be **mobile responsive** 

---
#### 7) Create a README file to answer the following questions-

#### 1) What is the difference between `null` and `undefined`?
- **null**: (typeof null === object), no value or "empty" means null is `an intentional absence of value` which is `assigned by developer`. When we want to set `no value on purpose`, we use null setting `object` propertices. 
- **undefied**: (not defined) undefined means `a variable exists` but has `no value assigned` means value missing, type undefined. Function parameters are missing. JSON ignored.    <br>
let money;     <br>
console.log(money); // undefined

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
- **map()**: map() হলো একটি array method যা একটি array এর প্রতিটি element এর উপর কাজ করে `নতুন value` তৈরি করে এবং একটি `নতুন array return` করে অর্থাৎ, map() ব্যবহার করা হয় যখন আমরা `একটি array থেকে আরেকটি modified নতুন array বানাতে চাই`...  <br>
let numbers = [1,2,3,4,5,6,7];  <br>
let add = numbers.map(value => value + 1);   <br>
console.log(numbers);   // 2,3,4,5,6,7,8    <br>
- **forEach**: forEach()ও array এর প্রতিটি element এর উপর কাজ করে, কিন্তু এটি কোনো নতুন array return করে না শুধু loop চালায়| সাধারণত side effect কাজের জন্য ব্যবহার হয় 
(console.log, DOM change ইত্যাদি)  
- **Difference**: map() ব্যবহার করা হয় array থেকে নতুন transformed array তৈরি করার জন্য।
অন্যদিকে, forEach() ব্যবহার করা হয় শুধু প্রতিটি element এর উপর কাজ করার জন্য, এটি কোনো নতুন array return করে না।
#### 3) What is the difference between `==` and `===`?
- **== vs ===**: == value compare করার সময় type convert করে নেয়, কিন্তু === value এবং type দুটোই check করে এবং কোনো conversion করে না। `== (Double Equal)` হলো Loose Equality Operator। এটি দুইটি value compare করার সময় প্রয়োজন হলে type conversion করে। অর্থাৎ data type আলাদা হলেও JavaScript নিজে থেকে type পরিবর্তন করে তুলনা করে। 
- console.log(5 == "5")   → true; string "5" কে number এ convert করে compare করা হয়েছে।
অন্যদিকে, === (Triple Equal) হলো Strict Equality Operator। এটি value এবং type দুটোই compare করে এবং কোনো type conversion করে না।
- console.log(5 === "5")  → false; কারণ এখানে একটি number এবং অন্যটি string, তাই type আলাদা হওয়ায় ফলাফল false।
#### 4) What is the significance of `async`/`await` in fetching API data?
- **Ans**:    <br>
const loadProducts = async () => {   <br>
const response = await fetch("https://fakestoreapi.com/products");   <br>
const data = await response.json();     <br>
console.log(data);      <br>
};                <br>
এখানে async function-কে asynchronous করেছে। await ব্যবহার করার ফলে fetch() শেষ না হওয়া পর্যন্ত পরের লাইন execute হবে না। অর্থাৎ, await Promise resolve হওয়ার জন্য অপেক্ষা করে, তাই code sequential ভাবে চলে এবং .then() ব্যবহার করার তুলনায় বেশি readable হয়। async/await API fetching-কে সহজ, পরিষ্কার এবং error handling-friendly করে তোলে।           
#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
- **Ans**: Global scope এ declare করা variable পুরো program জুড়ে ব্যবহার করা যায়। Function scope এ declare করা variable শুধু সেই function এর ভিতরে কাজ করে। আর Block scope (let, const) দিয়ে declare করা variable শুধু { } ব্লকের ভিতরে সীমাবদ্ধ থাকে এবং বাইরে থেকে access করা যায় না।

## ⚡ Dynamic Features & Functionalities

1) Category Loading
Load Product Categories dynamically on the UI (e.g., as filter buttons or a dropdown).

2) Category Click → Product Data 
On clicking a category: load products of that specific category.
Display in a grid layout (e.g., 3 or 4 columns).

3) Card Contents
Each product card must include:
- **Image** (from API)
- **Title** (truncated if too long)
- **Price** ($ value)
- **Category** (badge or text)
- **Rating** (Visualize stars or just show the number)
- **Details Button**
- **Add to Cart button**

4) Modal on "Details" Click
Clicking the "Details" button on a card opens a modal with full product details:
- Full Title
- Full Description
- Price & Rating
- "Buy Now" or "Add to Cart" button in modal.

## 🧪 Challenges (Optional)

    1) Add to Cart Interaction
    Clicking "Add to Cart":
    - Adds the product to a Cart list/array.
    - Updates a Cart Count in the Navbar.
    - (Optional) Persist in LocalStorage.

    2) Cart Calculation
    Show a summary (maybe in a sidebar or a separate section/modal) that lists added items and calculates the **Total Price**.

    3) Remove from Cart
    Ability to remove an item from the cart and update the Total Price instantly.

    4) Loading Spinner
    Show a loading spinner or skeleton loader while fetching data from the API.

    5) Active State
    Highlight the currently selected category button.

🧰 Technology Stack:
    HTML
    CSS (Vanilla / Tailwind / DaisyUI)
    JavaScript
