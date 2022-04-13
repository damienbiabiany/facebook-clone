// component props => Icon, active
function HeaderIcon({Icon, active}) {
  return (
    // Hover state for header Icon on medium device=> hover:
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
       {/* Change the color of the icon on hover with 500 shades */}
       {/* The text is going to be gray by default */}
       {/* If active props is true or exists => change the color of the text */}
       <Icon className={`h-5 mx-auto text-center text-gray-500 sm:h-7 group-hover:text-blue-500 ${active && "text-blue-500"}`}/>
    </div>
  )
}

export default HeaderIcon