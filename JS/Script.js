const orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85641",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "LARVENDER KF102 Drone",
    productNumber: "36524",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "969696",
    paymentStatus: "Paid",
    shipping: "Pending",
  },
  {
    productName: "GPS 4K Drone",
    productNumber: "85641",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "Foldable Mini Drone",
    productNumber: "85641",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Foldable Mini Drone",
    productNumber: "85641",
    paymentStatus: "Due",
    shipping: "Declined",
  },
];

const sideBar = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeLogger = document.querySelector(".theme-logoler");

//show button
menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});
//close button
closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});

//change theme
themeLogger.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variable");

  themeLogger.querySelector("span:nth-child(1)").classList.toggle("active");
  themeLogger.querySelector("span:nth-child(2)").classList.toggle("active");
});

//table ordering
orders.forEach((order) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
  
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${
                  order.shipping === "Declined"
                    ? "danger"
                    : order.shipping === "pending"
                    ? "warning"
                    : "primary"
                }">${order.shipping}</td>
                <td class="primary">Details</td>
              
  `;

  document.querySelector("table tbody").appendChild(tr);
});
