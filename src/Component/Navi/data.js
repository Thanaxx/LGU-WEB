import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SideData = [
    {
        title: 'HOME',
        path: '/home',
    },

    {
        title: 'GOVERNMENT',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subnav: [
            {
                title: 'Municipality Council',
                path: '/government/council',
            },
            {
                title: 'Municipality Profile',
                path: '/government/profile',
            },
            {
                title: 'Municipality Mayor',
                path: '/government/mayor',
            },
            {
                title: 'Municipality Vice Mayor',
                path: '/government/vice',
            }

        ]
    },

    {
        title: 'NEWS',
        path: '/news',
    },

    {
        title: 'SERVICES',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subnav: [
            {
                title: 'Health Services',
                path: '/services/health',
            },
            {
                title: 'Social Welfare',
                path: '/services/social',
            },
            {
                title: 'Senir Citizen',
                path: '/services/senior',
            },
            {
                title: 'Public Works',
                path: '/services/works',
            }
        ]
    },

    {
        title: 'JOBS',
        path: '/jobs'
    },

    {
        title: 'TOURISM',
        path: '/tourism'
    },

    {
        title: 'CONTACT US',
        path: '/contact'
    },

    {
        title: 'FAQ',
        path: '/faq'
    }
]