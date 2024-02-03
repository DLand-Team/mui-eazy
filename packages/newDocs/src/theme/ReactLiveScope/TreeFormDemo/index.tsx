import { useMemo } from "react";
import { TreeForm, notify } from "../components";
import useTreeConfig from "./treeConfig";
// ----------------------------------------------------------------------
export type EventType = "Create" | "Draft" | "Update" | "Submit" | "Publish";

const transferInput = (value: any) => {
  const { components } = value;
  const businessDetailsKeys = [
    "highlights",
    "executive_summary",
    "problem_to_be_solved",
    "vision",
    "product",
    "traction",
    "business_model",
    "funding",
    "Ask",
    "team",
  ];
  const marketCompetitionKeys = ["custormers", "market", "competition"];
  if (components) {
    value.businessDetails = {};
    value.marketCompetition = {};
    for (let key in components) {
      const value = components[key];
      if (!value) continue;
      if (key == "faq") {
        value.faq = value;
        delete components.faq;
      } else if (key == "media") {
        value.media = value;
      } else if (key == "highlights") {
        value.highlights = value;
      }
      if (businessDetailsKeys.includes(key)) {
        value.businessDetails[key] = value;
      }
      if (marketCompetitionKeys.includes(key)) {
        value.marketCompetition[key] = value;
      }
    }
    delete value.components;
  }
  return value;
};

const transferResult = (result: any) => {
  const { businessDetails, marketCompetition, faq, media, pics, highlights } =
    result;
  result.components = {
    ...businessDetails,
    ...marketCompetition,
    highlights,
    faq,
    media,
    pics,
  };
  delete result.highlights;
  delete result.businessDetails;
  delete result.marketCompetition;
  delete result.faq;
  delete result.media;
  delete result.pics;
  return result;
};
export default function ProductEditView() {
  const treeFromConfig = useTreeConfig();
  // 封装的函数，用于处理点击事件
  const handleClick = async ({
    type,
    isSuccess,
    result,
  }: {
    type: EventType;
    isSuccess: boolean;
    result: any;
  }) => {
    if (!isSuccess) return;
    switch (type) {
      case "Draft":
        break;
      case "Update":
        break;
      case "Publish":
        break;
      case "Submit":
        notify.success(JSON.stringify(result));
        console.log(JSON.stringify(result));
        break;
      default:
        break;
    }
  };
  const actionBtnArr = useMemo<
    {
      name: "Draft" | "Update" | "Submit" | "Create" | "Publish";
    }[]
  >(() => {
    return [
      {
        name: "Update",
      },
      {
        name: "Submit",
      },
    ];
  }, []);
  return (
    <TreeForm
      handleClick={handleClick}
      treeConfig={treeFromConfig}
      actionBtnArr={actionBtnArr}
      value={null}
      transferInput={(value) => {
        return value;
      }}
      transferResult={(value) => {
        return value;
      }}
    />
  );
}
