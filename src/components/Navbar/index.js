import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div class="flex items-center space-x-2 text-base">
        <h4 class="font-semibold text-slate-900">Contributors</h4>
        <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
      </div>
      <div class="mt-3 flex -space-x-2 overflow-hidden">
          <nav className="flex sm:justify-center space-x-4">
            {[
              ['Home', '/dashboard'],
              ['Team', '/team'],
              ['Projects', '/projects'],
              ['Reports', '/reports'],
            ].map(([title, url]) => (
              <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" >{title}</a>
            ))}
          </nav>
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500">+ 198 others</a>
        </div>
      </div>
    );
}