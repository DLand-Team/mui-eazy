import { FormConfig } from "mui-eazy";
import { useMemo } from "react";
import { getPresetConfig } from "./getPreSetConfig";

export const useMarketFormViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    const customers = getPresetConfig({
      defaultValues,
      name: "components.customers",
      tipInfo:
        "Describe your target customers. Who will benefit most from your deal?\nUnderstanding your audience is crucial for potential partners or investors.",
      titleLabel: "Customers",
    });
    const market = getPresetConfig({
      defaultValues,
      name: "components.market",
      titleLabel: "Market",
      tipInfo:
        "Discuss the market size, trends, and potential. Highlight opportunities and challenges within your target market.",
    });
    const competition = getPresetConfig({
      defaultValues,
      name: "components.competition",
      tipInfo:
        "Identify your competitors and explain how your deal stands out. What gives you \na competitive advantage?",
      titleLabel: "Competition",
    });

    return {
      ...customers,
      ...market,
      ...competition,
    };
  }, [defaultValues]);
};
