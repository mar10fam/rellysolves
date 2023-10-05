import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const SidebarData = [
    {
        icon: <HomeIcon />,
        title: "Home",
        link: "/home"
    },
    {
        icon: <CalculateIcon />,
        title: "Topics",
        link: "/topics"
    },
    {
        icon: <AccountBoxIcon />,
        title: "Profile",
        link: "/profile"
    }
]
