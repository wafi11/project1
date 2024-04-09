interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export const MenuItems: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 w-full hover:bg-neutral-900 bg-gray-200  transition font-semibold text-gray-800 hover:text-gray-200">
      {label}
    </button>
  );
};
