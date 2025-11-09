import { Bell, Menu, Wifi, Battery } from "lucide-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="bg-transparent">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-2">
        <span className="text-white text-sm">9:41</span>
        <div className="flex items-center gap-1">
          <Wifi size={16} className="text-white" />
          <Battery size={16} className="text-white" />
        </div>
      </div>
      
      {/* App Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Menu size={20} className="text-white" />
        <span className="text-white text-[16px] font-medium tracking-wide">{title}</span>
        <Bell size={20} className="text-white" />
      </div>
    </div>
  );
}
