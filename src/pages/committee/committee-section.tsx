import React, { forwardRef } from "react";

const CommitteeSection = forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>Committee Section</h2>
        <p>This is the committee section of the website.</p>
        <p>Here you can find information about the committee members.</p>
        <p>Stay tuned for more updates!</p>
      </div>
    );
  }
);

export default CommitteeSection;
