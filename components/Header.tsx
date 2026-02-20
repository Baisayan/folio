"use client";

import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="text-sm text-primary-foreground">IN {time}</div>
        </div>
        <div className="text-sm text-primary-foreground flex items-center gap-2">
          <MapPin className="size-4 text-emerald-500" /> Delhi, India
        </div>
      </div>
    </header>
  );
};

export default Header;
