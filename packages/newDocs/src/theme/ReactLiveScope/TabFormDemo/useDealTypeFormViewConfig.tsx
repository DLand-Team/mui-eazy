import { useMemo } from 'react';
import { FromWrapper } from './wrapper';
import { FormConfig } from 'mui-eazy';
import { Yup } from '../components';
import { DealType } from '../TreeDemo/treeConfig';

const DealTypeOption = [
  {
    label: 'Capital Raising',
    value: DealType.CAPITAL_RAISING,
    info: 'Outline your business, growth goals and the debt funding needed for expansion.',
  },
  {
    label: 'Equity',
    value: DealType.EQUITY,
    info: 'Share your business journey, goals and the specific support you seek in exchange for equity.',
  },
  {
    label: 'Startup Pitch',
    value: DealType.STARTUP_PITCH,
    info: 'Create high value synergies by seeking suppliers, distribution channels, or collaborative opportunities for mutual growth.',
  },
  {
    label: 'Partnerships',
    value: DealType.PARTNERSHIPS,
    info: 'Present your idea-stage business, seeking support in funding, products, or valuable feedback.',
  },
  {
    label: 'Sell A Business',
    value: DealType.SELL_A_BUSINESS,
    info: 'Find a new owner to take your business forward. Describe the story so far and the price you have in mind to start the conversation. ',
  },
];
export const useDealTypeFormViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    return {
      title: {
        label: 'Deal Name',
        defaultValue: defaultValues?.['title'],
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              name="Deal Name"
              tipInfo="This is the headline for your opportunity. It should be attention-grabbing and
          concise. Whether it's your company name or a catchy tagline, make it memorable.
          This is the first thing potential investors or partners will see, so choose
          something that reflects the essence of your opportunity. Keep it short and
          impactful!"
            >
              {children}
            </FromWrapper>
          );
        },
        schema: Yup.string().max(12),
        fieldConfig: {
          required: true,
        },
      },
      type: {
        type: 'radio',
        label: 'Deal Type',
        defaultValue: defaultValues?.['type'],
        wrapper: ({ children }) => {
          return <FromWrapper name="Select your deal type*">{children}</FromWrapper>;
        },
        config: {
          options: Object.values(DealTypeOption).map((item) => {
            return {
              key: item.value.toString(),
              value: item.value.toString(),
              label: item.label,
              info: item.info,
            };
          }),
        },
        fieldConfig: {
          required: true,
        },
      },
    };
  }, [defaultValues]);
};
