import React from 'react';

interface AuthLayoutPropsTypes {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: AuthLayoutPropsTypes): JSX.Element => (
  <section className="auth-layout">
    <main className="main">{children}</main>
  </section>
);

export default DashboardLayout;
