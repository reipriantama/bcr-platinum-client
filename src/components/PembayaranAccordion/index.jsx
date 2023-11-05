import React, { useState } from "react";

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {title}
                    <span className={isOpen ? "arrow-up" : "arrow-down"}></span>
                </button>
            </h2>
            {isOpen && <div className="accordion-body">{children}</div>}
        </div>
    );
}



export function Accordion() {
    return (
        <div className="accordion">
            <AccordionItem title="Item 1">
                <p>Isi dari item 1.</p>
            </AccordionItem>
            <AccordionItem title="Item 2">
                <p>Isi dari item 2.</p>
            </AccordionItem>
        </div>
    );
}
