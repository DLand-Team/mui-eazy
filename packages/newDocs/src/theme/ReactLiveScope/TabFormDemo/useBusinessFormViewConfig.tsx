import { FormConfig } from 'mui-eazy';
import { useMemo } from 'react';
import { Yup, getValueByPath } from '../components';
import { getPresetConfig } from './getPreSetConfig';
import { FromWrapper } from './wrapper';

export const useBusinessFormViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    const executive_summary = getPresetConfig({
      defaultValues,
      name: 'components.executive_summary',
      tipInfo:
        'Summarise your deal in a concise manner. Provide an overview of your opportunity, including its key benefits and potential impact.',
      titleLabel: 'Executive summary',
    });
    const problem_to_be_solved = getPresetConfig({
      defaultValues,
      name: 'components.problem_to_be_solved',
      titleLabel: 'Problem / Gap',
      tipInfo:
        'Describe the problem your deal addresses or the gap it fills in the market. Help others understand the need your deal fulfills.',
    });
    const vision = getPresetConfig({
      defaultValues,
      name: 'components.vision',
      tipInfo:
        'Share your long-term vision and strategy. Describe where you see your project or business heading in the future.',
      titleLabel: 'Vision / Strategy',
    });
    const product = getPresetConfig({
      defaultValues,
      name: 'components.product',
      tipInfo:
        "Detail your product, service, or solution. Explain what it does, how it works,and why it's valuable. Focus on its unique features.",
      titleLabel: 'Product / Service',
    });

    const traction = getPresetConfig({
      defaultValues,
      name: 'components.traction',
      tipInfo:
        'Share any relevant milestones or achievements your project or business has reached. Traction can include customer acquisitions, revenue growth,partnerships, or successful pilot programs.',
      titleLabel: 'Traction',
    });

    const business_model = getPresetConfig({
      defaultValues,
      name: 'components.business_model',
      tipInfo:
        'Explain how your venture generates revenue or plans to do so. Detail your pricing strategy, target customers, and any monetization methods. You can also pload any images or slides that may help your pitch.',
      titleLabel: 'Business model',
    });

    const funding = getPresetConfig({
      defaultValues,
      name: 'components.funding',
      tipInfo:
        'Specify your existing funding position &/or your funding requirements and how you plan to utilise the funds. Investors need to know where their investment will go.',
      titleLabel: 'Funding',
    });

    return {
      ...executive_summary,
      ...problem_to_be_solved,
      ...product,
      ...traction,
      ...business_model,
      ...funding,
      team: {
        name: 'components.team',
        label: 'Sub-heading',
        type: 'multiple',
        defaultValue: defaultValues?.['components']?.['team'],
        schema: Yup.array().of(Yup.object().shape({
          name: Yup.string().optional().test({
            test(value: any, ctx) {
              if (ctx.parent.image) {
                if (
                  value
                ) {
                  return true;
                } else {
                  return ctx.createError({ message: 'This is required!' });
                }
              }
              return true
            },
          }),
          title: Yup.string().test({
            test(value: any, ctx) {
              if (ctx.parent.image) {
                if (
                  value
                ) {
                  return true;
                } else {
                  return ctx.createError({ message: 'This is required!' });
                }
              }
              return true
            },
          })
        })),
        fieldConfig: {
          mulType: 'obj',
          childFieldConfig: {
            image: {
              label: 'Upload team member image (optional)',
              type: 'upload',
              fieldConfig: {
                uploadAction: async (file) => {
                  return 'https://qiniu.moderate.run/img/1687610945521';
                },
              },
            },
            name: {
              label: 'Team member name (optional)',
              watch(props) {
                const { info: { name: eventName }, values, currentConfig } = props;
                const { name = "", fieldConfig = {} } = currentConfig;
                let mulId = name.split(".").slice(-2, -1)[0]
                const teamArr = getValueByPath('components-team', values, {})
                let targetEventKey = `components.team.${mulId}.image`;
                const imageValue = teamArr[Number(mulId)]?.image

                if (eventName == targetEventKey) {
                  if (!currentConfig.fieldConfig) {
                    currentConfig.fieldConfig = {}
                  }
                  if (imageValue) {
                    currentConfig.fieldConfig!.required = true
                    currentConfig.label = 'Team member name'
                  } else {
                    currentConfig.fieldConfig!.required = false
                    currentConfig.label = 'Team member name (optional)'
                  }
                }
              }
            },
            title: {
              label: 'Team member role (optional)',
              watch(props) {
                const { info: { name: eventName }, values, currentConfig } = props;
                const { name = "", fieldConfig = {} } = currentConfig;
                let mulId = name.split(".").slice(-2, -1)[0]
                const teamArr = getValueByPath('components-team', values, {})
                let targetEventKey = `components.team.${mulId}.image`;
                const imageValue = teamArr[Number(mulId)]?.image
                if (eventName == targetEventKey) {
                  if (!currentConfig.fieldConfig) {
                    currentConfig.fieldConfig = {}
                  }
                  if (imageValue) {
                    currentConfig.fieldConfig!.required = true
                    currentConfig.label = 'Team member name'
                  } else {
                    currentConfig.fieldConfig!.required = false
                    currentConfig.label = 'Team member name (optional)'
                  }
                }
              }
            },
          } as FormConfig,
        },
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              isShowDivider={false}
              name="Team"
              tipInfo="Introduce the key members of your team. Highlight their relevant experience
              and expertise. A strong team can significantly boost investor and partner
              confidence."
            >
              {children}
            </FromWrapper>
          );
        },
      },
    };
  }, [defaultValues]);
};
