import React, { useState } from 'react';
// import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { darkTheme, lightTheme, darkThemeNav, lightThemeNav } from './themes';
// import { SelectTabData, SelectTabEvent, TabList, Tab, TabValue } from '@fluentui/react-components';
import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
  FluentProvider, webLightTheme, webDarkTheme
} from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import { Toggle, PartialTheme, CommandBar, ICommandBarItemProps, IButtonProps, setVirtualParent, FocusTrapZone, Checkbox, ThemeProvider, initializeIcons } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("2px", "1px"),
    // rowGap: "1px",
  },
});
    
// Initialize icons in case this example uses them
initializeIcons();

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

const CommandBarBasicExample: React.FunctionComponent = () => {

  return (
    <CommandBar
      items={_topNavItems}
      // overflowItems={_overflowItems}
      overflowButtonProps={overflowProps}
      farItems={_farItems}
      ariaLabel="Inbox actions"
      primaryGroupAriaLabel="Email actions"
      farItemsGroupAriaLabel="More actions"
    />
  );
};

const _topNavItems: ICommandBarItemProps[] = [
  {
    key: 'home',
    text: 'Cassie Quach',
    iconProps: { iconName: 'Home' },
    onClick: () => console.log('Home'),
  }
];

const _overflowItems: ICommandBarItemProps[] = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'tile',
    text: 'Grid view',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Grid view',
    iconOnly: true,
    iconProps: { iconName: 'Tiles' },
    onClick: () => console.log('Tiles'),
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info'),
  },
];

// export const TabExample = () => {
//   const [selectedValue, setSelectedValue] = React.useState<TabValue>('conditions');

//   const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
//     console.log(`The ${data.value} tab was selected`);
//     setSelectedValue(data.value);
//   };

//   return (
//     <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
//       <Tab value="tab1">First Tab</Tab>
//       <Tab value="tab2">
//         Second Tab
//       </Tab>
//       <Tab value="tab3">Third Tab</Tab>
//       <Tab value="tab4">Fourth Tab</Tab>
//     </TabList>
//   );
// };

export const TabExample = (props: Partial<TabListProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab value="tab1">Home</Tab>
        <Tab value="tab2">About</Tab>
        <Tab value="tab3">Contact</Tab>
      </TabList>
    </div>
  );
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Folders',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        links: [
          {
            name: 'Inbox',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
            iconProps: { iconName: 'Inbox' },
          },
          {
            name: 'Drafts',
            url: 'http://msn.com',
            // disabled: true,
            key: 'key2',
            target: '_blank',
            iconProps: { iconName: 'Edit' },
          },
          {
            name: 'Sent Items',
            url: 'http://msn.com',
            // disabled: true,
            key: 'key2',
            target: '_blank',
            iconProps: { iconName: 'Send' },
          },
          {
            name: 'Archive',
            url: 'http://msn.com',
            // disabled: true,
            key: 'key2',
            target: '_blank',
            iconProps: { iconName: 'Archive' },
          },
          {
            name: 'Notes',
            url: 'http://msn.com',
            // disabled: true,
            key: 'key2',
            target: '_blank',
            iconProps: { iconName: 'QuickNote' },
          },
        ],
        isExpanded: true,
      },
      // {
      //   name: 'Documents',
      //   url: 'http://example.com',
      //   key: 'key3',
      //   isExpanded: true,
      //   target: '_blank',
      // },
      // {
      //   name: 'Pages',
      //   url: 'http://msn.com',
      //   key: 'key4',
      //   target: '_blank',
      // },
      // {
      //   name: 'Notebook',
      //   url: 'http://msn.com',
      //   key: 'key5',
      //   disabled: true,
      // },
      // {
      //   name: 'Communication and Media',
      //   url: 'http://msn.com',
      //   key: 'key6',
      //   target: '_blank',
      // },
      // {
      //   name: 'News',
      //   url: 'http://cnn.com',
      //   icon: 'News',
      //   key: 'key7',
      //   target: '_blank',
      // },
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export const App: React.FunctionComponent = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (
    <FluentProvider theme={useDarkMode ? webDarkTheme : webLightTheme}>
      <ThemeProvider
        theme={useDarkMode ? darkThemeNav : lightThemeNav}
      >
        <CommandBarBasicExample />
      </ThemeProvider>
      
      <Toggle
        label="Change themes"
        onText="Dark Mode"
        offText="Light Mode"
        onChange={() => setUseDarkMode(!useDarkMode)}
      />
      <TabExample />
      <NavBasicExample />
    </FluentProvider>
  )
}