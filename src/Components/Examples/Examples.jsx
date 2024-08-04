import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tab from "../Tab";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState();

  let tabContent = <p>Please select a topic.</p>;
  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tab
        buttons={CORE_CONCEPTS.map((concept) => (
          <TabButton
            key={concept.title}
            isSelected={selectedButton === concept.title.toLowerCase()}
            onClick={() => setSelectedButton(concept.title.toLowerCase())}
          >
            {concept.title}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tab>
    </Section>
  );
}
