import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'

const AdminSidebar = () => {

    const user = {
        firstName: "Admin",
        lastName: "User",
        imageUrl: assets.profile,
    }

    const  adminNavLinks = [
        { name: 'Dashboard', href: '/admin', icon:LayoutDashboardIcon },
        { name: 'Add Shows', href: '/admin/add-shows',icon: PlusSquareIcon },
        { name: 'List Shows', href: '/admin/list-shows', icon: ListIcon},
        { name: 'List Bookings', href: '/admin/list-bookings', icon: ListCollapseIcon },
    ]


  return (
    <div>
        <h1>sidebar</h1>

    </div>
  )
}

export default AdminSidebar