export const nav_link = [
    {
        id: 1,
        title: 'Movies',
        children: [
        {
            title: "Popular",
            path: "/movie/popular"
        },
        {
            title: "Now Playing",
            path: "/movie/now_playing"
        },
        {
            title: "Upcoming",
            path: "/movie/upcoming"
        },
        {
            title: "Top Rated",
            path: "/movie/top_rated"
        }
        ]
    },
    {
        id: 2,
        title: 'TV Shows',
        children: [
            {
                title: 'Popular',
                path: '/tv/popular'
            },
            {
                title: 'Airing Today',
                path: '/tv/airing_today'
            },
            {
                title: 'On TV',
                path: '/tv/on_the_air'
            },
            {
                title: 'Top Rated',
                path: '/tv/top_rated'
            }
        ]
    },
    {
        id: 3,
        title: 'People',
        children:[
            {
                title: 'Popular People',
                path: '/person'
            }
        ]
    },
    {
        id: 4,
        title: 'More',
        children: [
            {
                title: 'Discussions',
                path: '/discuss'
            },
            {
                title: 'Leaderboard',
                path: '/leaderboard'
            },
            {
                title: 'Support',
                path: '/talk'
            },
            {
                title: 'Api',
                path: '/docs'
            }
        ]
    }
]