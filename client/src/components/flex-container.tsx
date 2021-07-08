import { CSSProperties } from "react";

export type FlexContainerProps = {
  className?: string;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "inherit";
  alignItems?: "center" | "flex-end" | "flex-start" | "inherit";
};

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  ...props
}) => {
  const styles: CSSProperties = {
    display: "flex",
    flexDirection: props.flexDirection || "row",
    justifyContent: props.justifyContent || "flex-start",
    alignItems: props.alignItems || "flex-start",
  };

  return (
    <div style={styles} className={props.className}>
      {children}
    </div>
  );
};

export default FlexContainer;
