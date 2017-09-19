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
                              main: {
                                      class: 'sccl-login-main-header',
                                      logoSection: {
                                          t1: 'School',
                                          t2: 'Cloudy',
                                          logoName: 'sccl_logo',
                                          path: '/administrator/dashboard'
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
