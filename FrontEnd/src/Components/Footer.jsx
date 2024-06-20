import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#281E5D] text-white">
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col md:flex-row justify-around w-full max-w-screen-lg">
          <section className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-bold text-2xl text-center">Kuch-Nahi</h3>
            <br />
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ynAJPcTkuj1gHvWbhQFZ4QHaMV?w=600&h=999&rs=1&pid=ImgDetMain"
              alt="Error"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
            />
          </section>

          <section className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-bold text-2xl text-center">Connections</h3>
            <ul className="mt-4 text-center">
              <li className="mb-2 hover:underline">
                <a href="/login">Login</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/SignUp">SignUp</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/Logout">Logout</a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-bold text-2xl text-center">Facilities</h3>
            <ul className="mt-4 text-center">
              <li className="mb-2">Old Products Selling and Buying</li>
              <li className="mb-2">Tiffins and Groceries</li>
              <li className="mb-2">Stationaries</li>
              <li className="mb-2">Vehicle facilities</li>
              <li className="mb-2">Restaurants</li>
            </ul>
          </section>

          <section className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-bold text-2xl text-center">Contact Details</h3>
            <ul className="mt-4 text-center">
              <li className="mb-2">Location: NIT Agartala, Jirania Agartala</li>
              <li className="mb-2">Pin No: 799122</li>
              <li className="mb-2">Phone Number: 9382xxxxxxx</li>
              <li className="mb-2">E-mail: sudip@6969gmail.com</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="bg-black text-white py-4">
        <p className="text-center">
          © KuchNahi.com 2024. All rights reserved. |{" "}
          <a href="/privacy" className="underline hover:no-underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline hover:no-underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
