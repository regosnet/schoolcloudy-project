export const SCCL_ADMINISTRATOR_MENU =
    [
         {
            path: 'administrator',
            children:
                [
                 {
                     path: 'dashboard',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.dashboard',
                             icon: 'ion-android-home',
                             selected: false,
                             expanded: false,
                             order: 0
                         }
                     }
                 },
                 {
                     path: 'academics',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.academics',
                             icon: 'ion-university',
                             selected: false,
                             expanded: false,
                             order: 23
                         }
                     }
                 }
             ]
         }
    ];

export const SCCL_HEADER_MENU =
    [
         {scclHeader: {
             topHeader:  {
                 session: {
                    week: 11,
                    semester: 2
                 },
                 currentDay: {
                    day: new Date().toDateString()
                 },
                 lastLogin: '12/04/2017'
             },
             mainHeader: {
                 status: 'sccl.menu.header.main_header.status',
                 route: '/administrator/dashboard'
             },
             contentTop: {
                 home: 'sccl.menu.header.content_top.home',
                 dashboard: 'sccl.menu.left_side_bar.dashboard'
             }
         }}
     ];



