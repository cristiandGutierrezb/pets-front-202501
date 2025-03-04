import { CiShoppingCart } from "react-icons/ci";

interface IconProps {
  color: string;
  size: number;
}

export const ShoppingCartIcon = ({ color, size }: IconProps) => <CiShoppingCart color={color} size={size} />;



