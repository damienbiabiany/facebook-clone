import Image from 'next/image';

function SidebarRow({src, Icon, title}) {
  return (
    <div className="flex items-center p-4 space-x-2 cursor-default sidebarRow--component hover:bg-gray-200 rounded-xl">
        {/* if the src attribut is defined then render the Image component */}
        {src && (
            <Image  className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                    alt=""
                  />
        )}
        {/* if the Icon attribut is defined then render the Image component */}
        {Icon && (
            <Icon className="w-8 h-8 text-blue-500"/>
        )}
        <p className="hidden font-medium sm:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow