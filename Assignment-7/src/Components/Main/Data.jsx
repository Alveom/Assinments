import React, { use } from "react";
import love from "../assets/love-like-svgrepo-com.svg";
import Love from "../assets/3643770_favorite_heart_like_likes_love_icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = () => toast("Added to the Favorite");
function Data({ data }) {
  const datas = use(data);

  console.log(datas);

  function addItem(e) {
    Notify();
    e.target.src = Love;
    e.target.disabled = true;
    e.target.classList.remove("cursor-pointer");
    e.target.classList.add("cursor-not-allowed");
    const itemId = e.target.id.replace("btn-", "");
    const priceHtml = document.getElementById(`price-btn-${itemId}`);
    const bits = priceHtml.getAttribute("bits");
    const price = priceHtml.innerHTML;
    const description = priceHtml.getAttribute("description");
    const image = priceHtml.getAttribute("image");
    const onto = document.getElementById("onto");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="mt-2 flex gap-2 h-20" id="fovorate">
      <img class="w-[35%] h-full object-scale-down" src='${image}' alt="" />
      <div class="flex-1">
        <h3 class="text-[0.8rem] overflow-hidden h-10 w-full">
          ${description}
        </h3>
        <div class="flex text-[0.8rem] gap-6">
          <p class='price'>${price}</p>
          <p>Bids: ${bits}</p>
        </div>
      </div>
      <button class='remove-btn' price-data="${price}" data-id="${itemId}" id='button'>x</button>

    </div>
  `;
    document.getElementById("-").classList.add("hidden");
    const newPrice = price;
    onto.appendChild(div);
    const totalAmount = document.getElementById("total-amount");
    let currentTotal = totalAmount.textContent.replace("$", "") || "0";
    currentTotal = parseFloat(currentTotal);
    const numericPrice = parseFloat(newPrice.replace("$", ""));
    let newTotal = currentTotal + numericPrice;
    totalAmount.textContent = "$" + newTotal.toFixed(2);
    const closeBtn = div.querySelector(".remove-btn");
    closeBtn.addEventListener("click", (e) => {
      const close = e.target.parentElement;
      let usePrice = parseFloat(
        e.target.getAttribute("price-data").replace("$", "") || 0
      );
      let currentTotal =
        parseFloat(totalAmount.textContent.replace("$", "")) || 0;
      let versualTotal = currentTotal - usePrice;
      totalAmount.textContent = "$" + versualTotal.toFixed(2);

      const itemId = e.target.getAttribute("data-id");
      const btnElement = document.getElementById(`btn-${itemId}`);
      if (btnElement) {
        btnElement.src = love;
        btnElement.disabled = false;
        btnElement.classList.remove("cursor-not-allowed");
        btnElement.classList.add("cursor-pointer");
      }

      close.remove();

      if (onto.querySelectorAll("#fovorate").length === 0) {
        document.getElementById("-").classList.remove("hidden");
      }
    });
  }

  return (
    <>
      <div className="sota px-5 py-20">
        <div className="text-xl text-[#0E2954] ">Active Auctions</div>
        <p className="text-[#0E2954] sora">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="bg-inherit flex sora w-full">
        <div className="flex-[3] py-10 px-5">
          <div className="overflow-x-auto">
            <table className="bg-white w-full rounded-xl text-left">
              <thead className="border-b-gray-200 border-b-2">
                <tr>
                  <th className="w-[50%] px-10 py-5 text-left p-2">Item</th>
                  <th className="w-[16%]">Current Bit</th>
                  <th className="w-[16%]">Time left</th>
                  <th className="w-[16%]">Bit Now</th>
                </tr>
              </thead>
              <tbody>
                {datas.bits.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="p-2 px-10 text-left flex items-center gap-2"
                      id={`img-btn${item.id}`}
                    >
                      <img
                        className="w-[10vh] h-[8vh] object-cover"
                        src={item.image}
                        alt=""
                      />
                      <p>{item.title}</p>
                    </td>
                    <td
                      id={`price-btn-${item.id}`}
                      bits={`${item.bidsCount}`}
                      description={`${item.description}`}
                      image={`${item.image}`}
                    >
                      {"$" + item.currentBidPrice}
                    </td>
                    <td>{item.timeLeft}</td>
                    <td>
                      <button>
                        <img
                          className="w-5 cursor-pointer disabled"
                          id={`btn-${item.id}`}
                          src={love}
                          alt=""
                          onClick={addItem}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-[1.7] py-10 px-0 pr-5 sora ">
          <div className="bg-white rounded-xl p-5 ">
            <div className="flex items-center justify-center border-b-gray-200 border-b-2 ">
              <img className="w-5" src={love} alt="" />{" "}
              <h3 className="font-bold text-lg px-2">Favorite Items</h3>
            </div>
            <div className="flex-[4] border-b-2 border-b-gray-200 " id="onto">
              <div id="-">
                <h3 className="text-xl text-center font-bold py-4">
                  No favorites yet{" "}
                </h3>
                <p className="text-sm text-center font-light">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="pt-5 font-bold text-2xl">Total Amount: </h3>
              <p className="px-2 pt-5" id="total-amount">
                $0.00
              </p>
            </div>
          </div>
        </div>
        ;
        <ToastContainer />
      </div>
    </>
  );
}

export default Data;
