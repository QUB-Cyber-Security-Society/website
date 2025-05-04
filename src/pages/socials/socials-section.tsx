import React, { forwardRef } from "react";
import ContactContainer from "./contact/contact-container";

const SocialsSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
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
        <h2>Socials Section</h2>
        <p>This is the socials section of the website.</p>
        <p>Here you can find information about our social media.</p>
        <p>Stay tuned for more updates!</p>
        <ContactContainer />
        </div>
    );
    }
);

export default SocialsSection;