import React from "react";
const Header = () => {
  return (
  <header className="md:max-w-8/12 mx-auto flex justify-between p-3 bg-white ">
    <h1>CS — Ticket System</h1>
    <nav>
        <ul className="flex gap-5">
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <div>
        <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus preview-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg></span>New Ticket</button>
    </div>
  </header>
  );
};

export default Header;
