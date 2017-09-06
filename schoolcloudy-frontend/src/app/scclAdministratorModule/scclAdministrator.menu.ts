

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
                             icon: 'ion-ios-speedometer-outline',
                             selected: false,
                             expanded: false,
                             order: 0
                         }
                     }
                 },
                 {
                     path: 'mailbox',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.mailbox',
                             icon: 'ion-email',
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
                             order: 1
                         }
                     },
                     children:
                         [
                                {
                                    path: 'programmes',
                                    data: {
                                        menu: {
                                            title: 'sccl.menu.left_side_bar.programmes',
                                            icon: 'ion-record',
                                            selected: false,
                                            expanded: false,
                                            order: 1.2
                                        }
                                    }
                                },
                                    {
                                        path: 'courses',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.courses',
                                                icon: 'ion-record',
                                                selected: false,
                                                expanded: false,
                                                order: 1.1
                                            }
                                        }
                                    },
                                    {
                                        path: 'masters',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.masters',
                                                icon: 'ion-record',
                                                selected: false,
                                                expanded: false,
                                                order: 1.2
                                            }
                                        }
                                    },
                                    {
                                        path: 'bachelors',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.bachelors',
                                                icon: 'ion-record',
                                                selected: false,
                                                expanded: false,
                                                order: 1.3
                                            }
                                        }
                                    },
                                    {
                                        path: 'exams',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.exams',
                                                icon: 'ion-record',
                                                selected: false,
                                                expanded: false,
                                                order: 1.2
                                            }
                                        }
                                    },
                          ]
                 },
                 {
                     path: 'students',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.students',
                             icon: 'ion-ios-people-outline',
                             selected: false,
                             expanded: false,
                             order: 4
                         }
                     }
                 },
                 {
                     path: 'staffs',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.staffs',
                             icon: 'ion-android-people',
                             selected: false,
                             expanded: false,
                             order: 5
                         }
                     }
                 },
                 {
                     path: 'parents',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.parents',
                             icon: 'ion-ios-person-outline',
                             selected: false,
                             expanded: false,
                             order: 6
                         }
                     }
                 },
                 {
                     path: 'utilities',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.utilities',
                             icon: 'ion-ios-paw-outline',
                             selected: false,
                             expanded: false,
                             order: 7
                         }
                     },
                     children:
                         [
                                {
                                    path: 'Calendar',
                                    data: {
                                        menu: {
                                            title: 'sccl.menu.left_side_bar.calendar',
                                            icon: 'ion-university',
                                            selected: false,
                                            expanded: false,
                                            order: 1.2
                                        }
                                    }
                                },
                                    {
                                        path: 'courses',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.courses',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.1
                                            }
                                        }
                                    },
                                    {
                                        path: 'masters',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.masters',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.2
                                            }
                                        }
                                    },
                                    {
                                        path: 'bachelors',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.bachelors',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.3
                                            }
                                        }
                                    },
                          ]
                 },
                 {
                     path: 'project',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.project',
                             icon: 'ion-android-home',
                             selected: false,
                             expanded: false,
                             order: 8
                         }
                     },
                     children:
                         [
                                {
                                    path: 'programmes',
                                    data: {
                                        menu: {
                                            title: 'sccl.menu.left_side_bar.programmes',
                                            icon: 'ion-university',
                                            selected: false,
                                            expanded: false,
                                            order: 1.2
                                        }
                                    }
                                },
                                    {
                                        path: 'courses',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.courses',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.1
                                            }
                                        }
                                    },
                                    {
                                        path: 'masters',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.masters',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.2
                                            }
                                        }
                                    },
                                    {
                                        path: 'bachelors',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.bachelors',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.3
                                            }
                                        }
                                    },
                          ]
                 },
                 {
                     path: 'settings',
                     data: {
                         menu: {
                             title: 'sccl.menu.left_side_bar.settings',
                             icon: 'ion-ios-gear-outline',
                             selected: false,
                             expanded: false,
                             order: 9
                         }
                     },
                     children:
                         [
                                {
                                    path: 'programmes',
                                    data: {
                                        menu: {
                                            title: 'sccl.menu.left_side_bar.programmes',
                                            icon: 'ion-ios-ionic-outline',
                                            selected: false,
                                            expanded: false,
                                            order: 1.2
                                        }
                                    }
                                },
                                    {
                                        path: 'courses',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.courses',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.1
                                            }
                                        }
                                    },
                                    {
                                        path: 'masters',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.masters',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.2
                                            }
                                        }
                                    },
                                    {
                                        path: 'bachelors',
                                        data: {
                                            menu: {
                                                title: 'sccl.menu.left_side_bar.bachelors',
                                                icon: 'ion-university',
                                                selected: false,
                                                expanded: false,
                                                order: 1.3
                                            }
                                        }
                                    },
                          ]
                 },
             ]
         }
    ];

const currentDay = new Date();

export const SCCL_HEADER_MENU =
    [
       {
           path: 'administrator',
           children:
               [
                    {
                        path: 'calendar',
                        data: {
                            menu: {
                                top:
                                    [
                                         {
                                             titles:
                                                 [
                                                      {
                                                          title: 'sccl.menu.header.top_header.week',
                                                          data: 3
                                                      },
                                                      {
                                                          title: 'sccl.menu.header.top_header.semester',
                                                          data: 3
                                                      }
                                                  ],
                                             selected: false,
                                             expanded: false,
                                             icon: 'ion-pie-graph',
                                             class: 'session',
                                             route: {
                                                 path: '/school_calendar'
                                             }
                                         }
                                     ]
                            }
                        }
                    },
                    {
                        path: 'calendar',
                        data: {
                            menu: {
                                top:
                                    [
                                        {
                                            titles:
                                                [
                                                     {
                                                         title: 'sccl.menu.calendar.day.' + currentDay.getDay(),
                                                         data: currentDay.getDate()
                                                     },
                                                     {
                                                         title: 'sccl.menu.calendar.month.' + currentDay.getMonth(),
                                                         data: currentDay.getFullYear()
                                                     }
                                                 ],
                                            icon: 'ion-calendar',
                                            class: 'currentDay',
                                            selected: false,
                                            expanded: false,
                                            route: {
                                                path: '/today'
                                            }
                                        }
                                     ]
                            }
                        }
                    },
                    {
                        path: 'recent_activities',
                        data: {
                            menu: {
                                top:
                                    [
                                        {
                                            titles:
                                                [
                                                     {
                                                         title: 'sccl.menu.header.top_header.last_login',
                                                         data: currentDay.toDateString()
                                                     },
                                                 ],
                                            icon: 'ion-clock',
                                            class: 'lastLogin',
                                            selected: false,
                                            expanded: false,
                                            route: {
                                                path: '/last_login'
                                            }
                                        }
                                     ]
                            }
                        }
                    },
                    {
                        path: '/',
                        data: {
                            menu: {
                                main:
                                    [
                                        {
                                            titles:
                                                [
                                                     {title1: 'School', title2: 'Cloudy'}
                                                 ],
                                            selected: false,
                                            expanded: false,
                                            img: {
                                                name: 'logo'
                                            },
                                            route: {
                                                path: 'dashboard'
                                            }
                                        },
                                        {
                                            search: {
                                                class: 'search',
                                                icon: 'ion-ios-search-strong',
                                                placeHolder: 'sccl.menu.header.main_header.search'
                                            }
                                        },
                                        {
                                            rightSideHeader: {
                                                button: {
                                                    divClass: 'rightSideBarBtn',
                                                    icon: 'collapse-right-sidebar ion-navicon'
                                                },
                                                class: 'user-profile',
                                                userInfo: {
                                                    user: {
                                                      avatar: 'profile/eric',
                                                      status: 'Admin',
                                                      icon: 'ion-arrow-down-b'
                                                    },
                                                    children:
                                                        [
                                                           {
                                                               title: 'Messages',
                                                               icon: 'fa fa-user',
                                                               route: '/messages',
                                                               badge: {
                                                                   icon: 'badge badge-info',
                                                                   value: 2
                                                               }
                                                           },
                                                           {
                                                               title: 'Project',
                                                               icon: 'fa fa-user',
                                                               route: '/notifications',
                                                               badge: {
                                                                   icon: 'badge badge-info',
                                                                   value: 0
                                                               }
                                                           },
                                                           {
                                                               title: 'Profile',
                                                               icon: 'fa fa-user',
                                                               route: '/notifications',
                                                               badge: {
                                                                   icon: 'badge badge-info',
                                                                   value: 0
                                                               }
                                                           },
                                                           {
                                                               title: 'Settings',
                                                               icon: 'fa fa-user',
                                                               route: '/notifications',
                                                               badge: {
                                                                   icon: 'badge badge-info',
                                                                   value: 0
                                                               }
                                                           },
                                                           {
                                                               title: 'Sign Out',
                                                               icon: 'fa fa-user',
                                                               route: '',
                                                               badge: {
                                                                   icon: 'badge badge-info',
                                                                   value: 0
                                                               }
                                                           }
                                                         ]
                                                }
                                            }
                                        }
                                     ],
                                     contentTop:
                                         []
                            }
                        }
                    }
                ]
           }
     ];


/*
 * {scclHeader: {
             topHeader:  {
                 data: {
                     menu: {
                         section1: {
                             title: 'Week' + 1 + 'Semester' + 2,
                             icon: null
                         }
                         titleOne: '',
                         titleTwo: 'Friday 1 September 2017',
                         titleThree: '12/04/2017'
                          }
                     }
             },
             mainHeader: {
                 status: 'sccl.menu.header.main_header.status',
                 route: '/administrator/dashboard',
                 ddUserMenu:
                     [
                        
                      ],
             },
             contentTop: {
                 data: {
                     title: 'sccl.menu.header.content_top.home',
                 }
             }
         }}
 * */
