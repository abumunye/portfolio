export interface IRoute {
  name: string;
  path: string;
}

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
  },
];
