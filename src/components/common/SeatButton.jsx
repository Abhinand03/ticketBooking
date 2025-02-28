

function SeatButton({onclick,children,className}) {
  return (
    <button className={`p-2 md:w-12 md:text-base text-xs w-8 cursor-pointer  hover:bg-custum_blue2 ${className}`} onClick={onclick} >{children}</button>
  )
}

export default SeatButton