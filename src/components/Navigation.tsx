import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import React from "react";
import tw from "twin.macro";

const Trigger = tw(
  NavigationMenuPrimitive.Trigger
)`rounded-md px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 `;

const Content = tw(
  NavigationMenuPrimitive.Content
)`absolute top-0 left-0 w-auto bg-gray-100 rounded-lg radix-motion-from-start:animate-enter-from-left radix-motion-from-end:animate-enter-from-right radix-motion-to-start:animate-exit-to-left radix-motion-to-end:animate-exit-to-right`;

const Root = tw(NavigationMenuPrimitive.Root)`relative`;

const List = tw(
  NavigationMenuPrimitive.List
)`flex flex-row space-x-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-800`;

const Viewport = tw(
  NavigationMenuPrimitive.Viewport
)`relative mt-2 overflow-hidden rounded-md bg-gray-100 shadow-lg dark:bg-gray-800 w-radix-navigation-menu-viewport h-radix-navigation-menu-viewport origin-[top_center] transition-[width_height] duration-300 ease-[ease] radix-state-open:animate-scale-in-content radix-state-closed:animate-scale-out-content`;

const Indicator = tw(
  NavigationMenuPrimitive.Indicator
)`z-10 top-[100%] flex h-2 items-end justify-center overflow-hidden transition-[width_transform] duration-[250ms] ease-[ease]`;

const IndicatorInner = tw.div`relative top-1 h-2 w-2 rotate-45 bg-gray-100 dark:bg-gray-800`;

const Link = tw(
  NavigationMenuPrimitive.Link
)`rounded-md px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-100`;

const Skeleton = tw.div`h-12 w-full rounded-md bg-gray-200 dark:bg-gray-700`;

const SkeletonWrapper = tw.div`col-span-4 flex w-full flex-col space-y-3 rounded-md bg-gray-100 p-4 dark:bg-gray-900`;

const NavigationWrapper = tw.div`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full flex items-center justify-center`;

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Root>
        <List>
          {/* <NavigationMenuPrimitive.Item className="flex items-center justify-center">
            <Link href="/">
              <img
                src="https://uploads-ssl.webflow.com/6331d579cfc14f02a29e1f65/63330d2538eafd792ccf6a6e_logo_01.png"
                className="w-20"
              />
            </Link>
          </NavigationMenuPrimitive.Item> */}
          <NavigationMenuPrimitive.Item>
            <Trigger>Overview</Trigger>
            <Content>
              <div className="w-[21rem] p-3 lg:w-[23rem]">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-2 w-full rounded-md bg-gray-200 p-4 dark:bg-gray-900"></div>
                  <SkeletonWrapper>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </SkeletonWrapper>
                </div>
              </div>
            </Content>
          </NavigationMenuPrimitive.Item>

          <NavigationMenuPrimitive.Item>
            <Trigger>Resources</Trigger>
            <Content>
              <div className="w-[16rem] p-3 lg:w-[18rem]">
                <div className="flex w-full flex-col space-y-2">
                  <Link href="https://tailwindcss.com">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Tailwind CSS
                    </span>
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                      A utility-first CSS framework for rapidly building custom
                      user interfaces.
                    </div>
                  </Link>
                  <Link href="https://www.radix-ui.com">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Radix UI
                    </span>
                    <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                      An open-source UI component library for building
                      high-quality, accessible design systems and web apps.
                    </div>
                  </Link>
                </div>
              </div>
            </Content>
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item asChild>
            <Link href="https://github.com/ecklf/tailwindcss-radix">
              GitHub
            </Link>
          </NavigationMenuPrimitive.Item>
          <Indicator>
            <IndicatorInner />
          </Indicator>
        </List>
        <div
          className={cx(
            "absolute flex justify-center",
            "left-[-20%] top-[100%] w-[140%]"
          )}
          style={{
            perspective: "2000px",
          }}
        >
          <Viewport />
        </div>
      </Root>
    </NavigationWrapper>
  );
};
