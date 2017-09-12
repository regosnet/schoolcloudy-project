const dateToday = new Date();
export const SCCL_HEADER_MENU =
    [
       {
           path: '/',
           children:
               [
                    {
                        path: 'administrator',
                        data: {
                            menu: {

                            }
                        }
                    },
                    {
                        path: 'administrator',
                        data: {
                            menu: {
                                main: {
                                        class: 'sccl-login-main-header',
                                        logoSection: {
                                            t1: 'School',
                                            t2: 'Cloudy',
                                            logoName: 'sccl_log',
                                            path: ''
                                        },
                                        search: {
                                            icon: 'ion-ios-search-strong',
                                            placeHolder: 'sccl.menu.header.main_header.search'
                                        }
                                  }// main ends
                              } // menu end
                        }// data ends
                    }
                ]
           }
     ];
