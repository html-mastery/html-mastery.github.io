import BrowserWindow from "@site/src/components/BrowserWindow";
import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
// import Image from "@theme/IdealImage";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  BrowserWindow,
  DocCardList,
//   Image,
  TabItem,
  Tabs,
};
