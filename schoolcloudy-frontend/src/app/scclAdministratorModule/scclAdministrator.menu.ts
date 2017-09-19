

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

const dateToday = new Date();

export const SCCL_HEADER_MENU =
    [
       {
           path: 'administrator',
           children:
               [
                    {
                        data: {
                            menu: {
                                top:
                                      {
                                             session: {
                                                 t1: 'sccl.menu.header.top_header.week',
                                                 d1: 3,
                                                 t2: 'sccl.menu.header.top_header.semester',
                                                 d2: 2,
                                                 icon: 'ion-pie-graph',
                                                 path: '/calendar/school_calendar'
                                             },
                                             dateToday: {
                                                 t1: 'sccl.menu.calendar.day.' + dateToday.getDay(),
                                                 d1: dateToday.getDate(),
                                                 t2: 'sccl.menu.calendar.month.' + dateToday.getMonth(),
                                                 d2: dateToday.getFullYear(),
                                                 icon: 'ion-calendar',
                                                 path: '/settings/today'
                                             },
                                             lastLogin: {
                                                 t1: 'sccl.menu.header.top_header.last_login',
                                                 d1: '12/9/2017',
                                                 icon: 'ion-clock',
                                                 path: '/recent_activities/last_login'
                                             }
                                         }
                            }
                        }
                    },
                    {
                        data: {
                            menu: {
                                main: {
                                        class: 'sccl-header-div',
                                        logoSection: {
                                            t1: 'School',
                                            t2: 'Cloudy',
                                            logoName: 'sccl_logo',
                                            path: '/administrator/dashboard'
                                        },
                                        search: {
                                            icon: 'ion-ios-search-strong',
                                            placeHolder: 'sccl.menu.header.main_header.search'
                                        },
                                        userInfo: {
                                            avatar: 'profile/eric',
                                            status: 'Admin',
                                            icon: 'ion-arrow-down-b',
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
                                        }, // user info ends

                                        contentTop: {

                                        }

                                  }// main ends
                              } // menu end
                        }// data ends
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
