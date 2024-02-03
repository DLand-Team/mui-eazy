import type { TreeItemProps } from "mui-eazy";
import { useMemo, useState } from "react";
import {
  useFormConfigCreater_general,
  useFormConfigCreater_root,
} from "./formConfig";
export enum DealType {
 CAPITAL_RAISING = "capital_raising",
 EQUITY = "equity",
 STARTUP_PITCH = "startup_pitch",
 PARTNERSHIPS = "partnerships",
 SELL_A_BUSINESS = "sell_a_business",
}
const useTreeConfig = (): TreeItemProps => {
 const [new_draft_type] = useState(DealType.CAPITAL_RAISING);
 const rootFromConfigCreater = useFormConfigCreater_root();
 const generalFormConfigCreater = useFormConfigCreater_general();
 return useMemo(() => {
  return {
   depth: 0,
   label: "Deal Basics",
   active: true,
   isCurrent: true,
   formConfig: rootFromConfigCreater(),
   sections: [
    {
     depth: 0,
     label: "Business Details",
     name: "businessDetails",
     active: false,
     type: "object",
     sections: [
      {
       depth: 2,
       label: "Executive Summary",
       name: "executive_summary",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Problem / Gap",
       name: "problem_to_be_solved",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Vision / Strategy",
       name: "vision",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Product / Service",
       name: "product",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Traction",
       name: "traction",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Business Model",
       name: "business_model",
       judeShow: () => {
        return ![
         DealType.SELL_A_BUSINESS,
         DealType.PARTNERSHIPS,
        ].includes(new_draft_type);
       },
       active: false,
       formConfig: generalFormConfigCreater(),
      },
     ],
    },
    {
     depth: 0,
     label: "Market & Competition",
     name: "marketCompetition",
     active: false,
     type: "object",
     judeShow: () => {
      return ![
       DealType.SELL_A_BUSINESS,
       DealType.PARTNERSHIPS,
      ].includes(new_draft_type);
     },
     sections: [
      {
       depth: 2,
       label: "Custormers",
       name: "custormers",
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Market",
       name: "market",
       active: false,
       formConfig: generalFormConfigCreater(),
      },
      {
       depth: 2,
       label: "Competition",
       name: "competition",
       active: false,
       formConfig: generalFormConfigCreater(),
      },
     ],
    },
    {
     depth: 0,
     label: "Media",
     name: "media",
     judeShow: () => {
      return ![
       DealType.SELL_A_BUSINESS,
       DealType.PARTNERSHIPS,
      ].includes(new_draft_type);
     },
     active: false,
     formConfig: generalFormConfigCreater(),
    },
    {
     depth: 0,
     label: "FAQ",
     name: "faq",
     judeShow: () => {
      return ![
       DealType.SELL_A_BUSINESS,
       DealType.PARTNERSHIPS,
      ].includes(new_draft_type);
     },
     active: false,
     formConfig: generalFormConfigCreater(),
    },
   ],
  };
 }, [new_draft_type]);
};

export default useTreeConfig;
