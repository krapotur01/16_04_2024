import CartIcon from "@/public/cart_icon.svg";
import NotificationIcon from "@/public/notification_icon.svg";
import AvatarIcon from "@/public/avatar_icon.svg";
import {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";

export const Cart_block = ({className}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={cn('flex flex-row gap-4', className)}>
      <div className='relative cursor-pointer hover:opacity-70'>
        <CartIcon className='ss:fill-white lg:ss:fill-[#555555]'/>
        <span className='absolute z-10 top-[-2px] right-[-9px] ss:bg-white ss:text-[var(--primary)] lg:text-white lg:bg-[var(--primary)] rounded-xl p-[5px] text-xss'>4</span>
      </div>

      <div className='relative cursor-pointer hover:opacity-70'>
        <NotificationIcon className='ss:stroke-white lg:stroke-[#555555] '/>
        <span className='absolute z-10 top-[-2px] right-[-9px] ss:bg-white ss:text-[var(--primary)] lg:text-white lg:bg-[var(--primary)] rounded-xl p-[5px] text-xss'>3</span>
      </div>
      <div className='relative cursor-pointer hover:opacity-70'>
        <AvatarIcon className='ss:fill-white lg:ss:fill-[#555555]'/>
      </div>
    </div>
  );
};
