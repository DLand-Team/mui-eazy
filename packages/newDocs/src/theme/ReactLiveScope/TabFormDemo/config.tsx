const code1 = `enum DealType {
  CAPITAL_RAISING = "capital_raising",
  EQUITY = "equity",
  STARTUP_PITCH = "startup_pitch",
  PARTNERSHIPS = "partnerships",
  SELL_A_BUSINESS = "sell_a_business",
}
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
 type EventType = "Create" | "Draft" | "Update" | "Submit" | "Publish";
 


function Demo() {
  const [tabId, setTabId] = useState("1")
  const tabFormRef = useRef()
  const defaultValues = {}
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
  // }, [dealTypeFormViewConfig, dealBasicsFormViewConfig, businessFormViewViewConfig, marketFormViewonfig, mediaFormViewConfig, faqFromViewConfig]);
}, []);
  return (
    <>
      <TabForm
        tabId={tabId}
        handleTabChange={(newTabId) => {
          setTabId(newTabId);
        }}
        tabConfig={tabConfig}
        ref={tabFormRef}
      />
      <Button onClick={() => {
        tabFormRef.current!?.validate(Object.values(tabFormRef.current.getTabFormRef()))
      }}>Submit</Button>
    </>
  );
}


render(<Demo />);`;
const code2 = `const useDealBasicsFormViewConfig = ({
  defaultValues,
}: {
  id?: string;
  defaultValues?: any;
}): FormConfig => {

  return useMemo<FormConfig>(() => {
    let config: FormConfig = {
      sub_title: {
        defaultValue: defaultValues?.['sub_title'],
        label: 'Sub-heading',
        schema: Yup.string(),
        fieldConfig: {
          required: true,
        },
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              isShowDivider={false}
              name="Deal details"
              tipInfo="The Sub-heading is your opportunity to complete the headline with a punchy and
                          brief description. This is your chance to provide a little more context or
                          excitement about your deal. Think of it as a tagline that adds flavor to your
                          Deal Title. Keep it concise but compelling, giving potential investors or
                          partners a sneak peek into what makes your opportunity special. Make them want
                           to read more!"
            >
              {children}
            </FromWrapper>
          );
        },
      },
      highlights: {
        name: 'components.highlights',
        defaultValue: defaultValues?.['components']?.['highlights'] || ["", "", ""],
        label: 'Highlights',
        type: 'multiple',
        fieldConfig: {
          addLabel: 'Add highlight',
          label: 'highlights',
          validateFunc: (file) => {
            let flag = true;
            let info = '';
            if (file.size > 6 * 1024 * 1024) {
              flag = false;
              info =
                'The file size cannot be larger than 2M';
            }
            return [flag, info];
          },
          itemFieldConfig: {
            label: "Enter highlights",
            required: true,
          },
        },
        schema: Yup.array().of(Yup.string().max(200).required("This is a required field")).test({
          test(value, ctx) {
            if (
              value!?.length >= 3
            ) {
              return true;
            } else {
              return ctx.createError({ message: 'You need to create at least 3 Highlights!' });
            }
          },
        }),
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              name="Highlights"
              tipInfo="This is your chance to grab attention quickly. Use bullet points to highlight
              the key features or benefits of your deal. Keep it concise and impactful.
              Minimum 3."
            >
              {children}
            </FromWrapper>
          );
        },
      },
      amount: {
        defaultValue: defaultValues?.['amount'] || '0',
        schema: Yup.number().min(0, 'Amount must be greater than or equal to 0'),
        fieldConfig: {
          type: 'number',
        },
        label: 'Amout',
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              isShowDivider={false}
              name="Ask"
              tipInfo="Be explicit about what you're seeking from potential investors or partners.
              Whether it's funding, expertise, resources, or something else, clarity is
              key."
            >
              {children}
            </FromWrapper>
          );
        },
      },
      ask_desc: {
        defaultValue: defaultValues?.['ask_desc'] || '',
        schema: Yup.string().max(1000, 'Description must be less than 1000 characters'),
        fieldConfig: {
          multiline: true,
          minRows: 4,
          type: 'textarea',
        },
        label: 'Ask Description',
        wrapper: ({ children }) => {
          return <FromWrapper isShowDivider={true}>{children}</FromWrapper>;
        },
      },
      pics: {
        type: 'upload',
        label: 'Upload logo (optional)',
        name: 'components.pics',
        defaultValue: defaultValues?.['components']?.['pics'] || [],
        schema: Yup.array().test({
          test(value, ctx) {
            if (
              value!?.length >= 3
            ) {
              return true;
            } else {
              return ctx.createError({ message: 'You need to create at least 3 Pictures!' });
            }
          },
        }),
        fieldConfig: {
          isCrop: true,
          multiple: true,
          validateFunc: (file) => {
            let flag = true;
            let info = '';
            if (file.size > 6 * 1024 * 1024) {
              flag = false;
              info =
                'The file size cannot be larger than 6M';
            }
            return [flag, info];
          },
          uploadAction: async (file) => {
            return 'https://qiniu.moderate.run/img/1687610945521';
          },
        },
      },
      logo: {
        type: 'upload',
        label: 'Upload logo (optional)',
        name: 'components.logo',
        defaultValue: defaultValues?.['components']?.['logo'] || null,
        fieldConfig: {
          required: true,
          sx: {
            width: '200px',
          },
          multiple: false,
          validateFunc: (file) => {
            let flag = true;
            let info = '';
            if (file.size > 2 * 1024 * 1024) {
              flag = false;
              info =
                'The file size cannot be larger than 2M';
            }
            return [flag, info];
          },
          uploadAction: async (file) => {
            return 'https://qiniu.moderate.run/img/1687610945521';
          },
        },
      },
    };

    return config
  }, [defaultValues]);
};`;
const code3 = `const useDealTypeFormViewConfig = ({
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
        fieldConfig: {
          required: false,
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
};`;
const code4 = `
const useBusinessFormViewConfig = ({
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
                let targetEventKey =  "components.team"+mulId+".image";
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
                let targetEventKey = "components.team"+mulId+".image";
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
`
const code5 = `const useMarketFormViewConfig = ({
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
      name: 'components.customers',
      titleLabel: 'Customers',
    });

    const market = getPresetConfig({
      defaultValues,
      name: 'components.market',
      titleLabel: 'Market',
    });

    const competition = getPresetConfig({
      defaultValues,
      name: 'components.competition',
      titleLabel: 'Competition',
    });

    return {
      ...customers,
      ...market,
      ...competition,
    };
  }, [defaultValues]);
};`
const code6 = `
const useMediaFormViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    return {
      attachments: {
        label: 'Upload documents (optional)',
        type: 'upload',
        defaultValue: defaultValues?.['attachments'],
        fieldConfig: {
          multiple: true,
          accept: {},
          uploadAction: async (file) => {
            return 'https://qiniu.moderate.run/img/1687610945521';
          },
        },
      },
      linkedin: {
        defaultValue: defaultValues?.components?.media?.linkedin,
        label: 'LinkedIn (optional)',
        name: 'components.media.linkedin',
      },
      facebook: {
        defaultValue: defaultValues?.components?.media?.facebook,
        label: 'Facebook (optional)',
        name: 'components.media.facebook',
      },
      instagram: {
        defaultValue: defaultValues?.components?.media?.instagram,
        label: 'Instagram (optional)',
        name: 'components.media.instagram',
      },
    };
  }, [defaultValues]);
};
`
const code7 = `
const useFaqFromViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    return {
      faq: {
        name: 'components.faq',
        label: 'Upload documents (optional)',
        type: 'multiple',
        defaultValue: defaultValues?.['components']?.['faq'],
        schema: Yup.array().of(Yup.object().shape({
          question: Yup.string().optional().test({
            test(value: any, ctx) {
              if (ctx.parent.answer) {
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
          answer: Yup.string().test({
            test(value: any, ctx) {
              if (ctx.parent.question) {
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
          addLabel: 'Add Faq',
          mulType: 'obj',
          childFieldConfig: {
            question: {
              label: 'Question (optional)',
              fieldConfig: {
                multiline: true,
                minRows: 2,
                type: 'textarea',
              },
              watch(props) {
                const { info: { name: eventName = "" }, values, currentConfig, api } = props;
                const { name = "", fieldConfig = {} } = currentConfig;
                let mulId = eventName.split(".").slice(-2, -1)[0]
                const arr = values.components.faq;
                let targetEventKey = "components.faq."+mulId+".answer";
                const targetValue = arr[Number(mulId)]?.answer;

                if (eventName == targetEventKey) {
                  console.log(name)
                }
                if (eventName == targetEventKey) {
                  if (!currentConfig.labelMap) {
                    currentConfig.labelMap = {}
                  }
                  if (targetValue) {
                    currentConfig.labelMap[mulId] = 'Question'
                  } else {
                    currentConfig.labelMap[mulId] = 'Question (optional)'
                  }
                }
                api.trigger(targetEventKey)
              }
            },
            answer: {
              label: 'Answer (optional)',
              fieldConfig: {
                multiline: true,
                minRows: 2,
                type: 'textarea',
              },
              watch(props) {
                const { info: { name: eventName = "" }, values, currentConfig, api } = props;
                const { name = "" } = currentConfig;
                let mulId = eventName.split(".").slice(-2, -1)[0]
                const arr = values.components.faq
                let targetEventKey = "components.faq."+mulId+".question";
                const targetValue = arr[Number(mulId)]?.question
                if (eventName == targetEventKey) {
                  if (!currentConfig.labelMap) {
                    currentConfig.labelMap = {}
                  }
                  if (targetValue) {
                    currentConfig.labelMap[mulId] = 'Answer'
                  } else {
                    currentConfig.labelMap[mulId] = 'Answer (optional)'
                  }
                }
                api.trigger(targetEventKey)
              }
            },
          } as FormConfig,
        },
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              name="FAQs"
              tipInfo="Anticipate questions from potential partners or investors and provide answers.
              This helps clarify common queries upfront."
            >
              {children}
            </FromWrapper>
          );
        },
      },
    };
  }, [defaultValues]);
};
`
export const codeConfig = [
  { title: "Main", code: code1 },
  { title: "Basics-Tab", code: code2 },
  { title: "Type-Tab", code: code3 },
  { title: "Business-Tab", code: code4 },
  { title: "Market-Tab", code: code5 },
  { title: "Media-Tab", code: code6 },
  { title: "Faq-Tab", code: code7 }
]