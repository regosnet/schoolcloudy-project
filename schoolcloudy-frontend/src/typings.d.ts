/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
    slimScroll: {
        (any): JQuery;
        (options: any): JQuery;
    };
}
