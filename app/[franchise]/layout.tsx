import classes from "./layout.module.css";

export default function FranchiseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={classes.mainColor}>{children}</div>;
}
