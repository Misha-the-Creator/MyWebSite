declare module "*.mdx" {
  import { ComponentType } from "react";
  const component: ComponentType<{ components?: Record<string, any> }>;
  export default component;
}
