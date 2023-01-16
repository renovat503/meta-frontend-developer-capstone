import * as React from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer } from "src/components";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      {children}
    </AppShell>
  );
};

export default Layout;
