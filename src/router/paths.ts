const path = (root: string, sublink: string): string => {
    return `${root}${sublink}`;
  };
  
  const ROOTS = {
    app: "/",
    about:'/about-the-creator',
    map:'/map'
  };
  
  export const PROJECT_PAGE = {
    project: "/mirage",
  };
  
  export const PATH_PAGE = {
    root: ROOTS.app,
    about:ROOTS.about,
    map:ROOTS.map,
    mirage: {
      root: path(PROJECT_PAGE.project, "/about"),
      instructions: path(PROJECT_PAGE.project, "/how-to-use"),
      map:{
        interactive:path(PROJECT_PAGE.project, "/interactive-map"),
        static:path(PROJECT_PAGE.project, "/static-map"),
      }
    },
  };
  