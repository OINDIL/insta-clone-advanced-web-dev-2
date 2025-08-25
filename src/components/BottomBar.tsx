import { navItems } from "@/assets/data"
import { Link } from "react-router-dom"

function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full bg-white">
    <div className="flex gap-2 items-center justify-between px-8 border-t py-4 shadow">
        {navItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
            
            <Link to={item.href} >
                <item.icon />
            </Link>
        </div>
    ))}</div>
    </div>
  )
}

export default BottomBar