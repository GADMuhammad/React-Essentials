import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Features = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  // const buttonClickSelect = (selectedButton) => setSelectedTopic(selectedButton);

  let tabContent = <p>Please select a topic to display.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples:" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              className={selectedTopic === "components" ? "active" : null}
              onClick={() => setSelectedTopic("components")}
            >
              Components
            </TabButton>
            <TabButton
              className={selectedTopic === "jsx" ? "active" : null}
              onClick={() => setSelectedTopic("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              className={selectedTopic === "props" ? "active" : null}
              onClick={() => setSelectedTopic("props")}
            >
              Props
            </TabButton>
            <TabButton
              className={selectedTopic === "state" ? "active" : null}
              onClick={() => setSelectedTopic("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Features;
