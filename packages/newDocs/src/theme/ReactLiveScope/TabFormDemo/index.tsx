import { useMemo, useRef, useState } from "react";
import { TabForm, useBoolean } from "../components";
import { useDealTypeFormViewConfig } from "./useDealTypeFormViewConfig";
import { useDealBasicsFormViewConfig } from "./useDealBasicsFormViewConfig";
import { useBusinessFormViewConfig } from "./useBusinessFormViewConfig";
import { useMarketFormViewConfig } from "./useMarketFormViewConfig";
import { useMediaFormViewConfig } from "./useMediaFormViewConfig";
import { useFaqFromViewConfig } from "./useFaqFromViewConfig";
import LiveCode from "@site/src/components/liveCode";
//@ts-ignore
import Tabs from "@theme/Tabs";
//@ts-ignore
import TabItem from "@theme/TabItem";
//@ts-ignore
import CodeBlock from "@theme/CodeBlock";
import BrowserWindow from "@site/src/components/BrowserWindow";
export * from "./config";
import { codeConfig } from "./config";

// ----------------------------------------------------------------------
export type EventType = "Create" | "Draft" | "Update" | "Submit" | "Publish";

export default function Demo() {
  const isShowModal = useBoolean(false);
  const [tabId, setTabId] = useState("1");
  const tabFormRef = useRef();
  const defaultValues = {};
  const dealTypeFormViewConfig = useDealTypeFormViewConfig({ defaultValues });
  const dealBasicsFormViewConfig = useDealBasicsFormViewConfig({
    defaultValues,
  });
  const businessFormViewViewConfig = useBusinessFormViewConfig({
    defaultValues,
  });
  const marketFormViewonfig = useMarketFormViewConfig({ defaultValues });
  const mediaFormViewConfig = useMediaFormViewConfig({ defaultValues });
  const faqFromViewConfig = useFaqFromViewConfig({ defaultValues });
  const tabConfig = useMemo(() => {
    return [
      {
        id: "1",
        label: "Deal Type",
        node: dealTypeFormViewConfig,
      },
      {
        id: "2",
        label: "Deal Basics",
        node: dealBasicsFormViewConfig,
      },
      {
        id: "3",
        label: "Business Details",
        node: businessFormViewViewConfig,
      },
      {
        id: "4",
        label: "Market & Competition",
        node: marketFormViewonfig,
      },
      {
        id: "5",
        label: "Uploads & Media",
        node: mediaFormViewConfig,
      },
      {
        id: "6",
        label: "FAQs",
        node: faqFromViewConfig,
      },
    ];
  }, [dealTypeFormViewConfig, dealBasicsFormViewConfig, businessFormViewViewConfig, marketFormViewonfig, mediaFormViewConfig, faqFromViewConfig]);
  return (
    <BrowserWindow
      handleCodeClick={() => {
        isShowModal.onTrue();
      }}
      url="">
      <TabForm
        //@ts-ignore
        tabId={tabId}
        handleTabChange={(newTabId) => {
          setTabId(newTabId);
        }}
        tabConfig={tabConfig}
        ref={tabFormRef}
      />
      <LiveCode codeConfig={codeConfig} isShowModal={isShowModal}></LiveCode>
    </BrowserWindow>
  );
}

export const CodeView = () => {
  return (
    <Tabs>
      {
        codeConfig.map((item, index) => {
          return <TabItem key={index} value={item.title}>
            <CodeBlock language="tsx" showLineNumbers>{item.code}</CodeBlock>
          </TabItem>
        })
      }
    </Tabs>
  );
};
