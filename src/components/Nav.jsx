import React from "react";

function Nav() {
  return (
    <>
      <div className="flex justify-between mt-20">
        <div className="flex justify-center item-center gap-3">
          <span className="text-4xl">TypeCat</span>
          <span className="p-1">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z"
                fill="#FFFFFF"
              />
              <path
                d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
                fill="#FFFFFF"
              />
              <path
                d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z"
                fill="#FFFFFF"
              />
              <path
                d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"
                fill="#FFFFFF"
              />
              <path
                d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                fill="#FFFFFF"
              />
              <path
                d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                fill="#FFFFFF"
              />
              <path
                d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z"
                fill="#FFFFFF"
              />
              <path
                d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z"
                fill="#FFFFFF"
              />
              <path
                d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z"
                fill="#FFFFFF"
              />
              <path
                d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
                fill="#FFFFFF"
              />
              <path
                d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
              />
              <path
                d="M7 16H17"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
        <div>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="9" r="3" stroke="#FFFFFF" stroke-width="1.5" />
            <path
              d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="time flex justify-between mt-8">
        <span>15</span>
        <span>15s 30s 60s</span>
      </div>

      <div className="mt-10 fixed max-w-6xl">
        <code className="flex flex-wrap text-left text-2xl leading-10 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore
          voluptate eum nisi doloremque enim atque placeat sapiente
          necessitatibus distinctio iste nemo itaque commodi, pariatur
          recusandae autem eligendi? Dolorum facilis tempora, eum dolor fugiat
          nesciunt quasi repellat consequuntur? Voluptatum voluptatem omnis,
          rerum maiores placeat architecto est! Iste minus culpa ducimus.
        </code>
      </div>

      <div className="button-section fixed left-1/3 bottom-10">
        <center className="">
          <button className="bg-white text-black rounded-xl p-1 mb-4 w-10 border-none">
            esc
          </button>
          <span className="ml-3">- reset</span>
          <div className="flex items-center">
            <button className="bg-white text-black rounded-xl p-1 m-1 w-10 border-none">
              10
            </button>
            <button className="bg-white text-black rounded-xl p-1 m-1 w-10 border-none">
              50
            </button>
            <button className="bg-white text-black rounded-xl p-1 m-1 w-10 border-none">
              80
            </button>
            <button className="bg-white text-black rounded-xl p-1 m-1 w-10 border-none">
              100
            </button>
            <span className="ml-3">- no. of words</span>
          </div>
        </center>
      </div>

      <div className="footer fixed flex justify-between items-center gap-4 bottom-0 mr-auto ml-auto">
        <div className="links">
          
        </div>

        <div className="theme box-border">
          <select data-te-select-init>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Nav;
