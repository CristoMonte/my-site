import { createI18n } from 'vue-i18n' 

const messages = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      service: 'SERVICE',
      smartDistribution: 'SMART DISTRIBUTION',
      quality: 'QUALITY',
      career: 'CAREER',
      contact: 'CONTACT US'
    },
    home: {
      hero: {
        subtitle: 'INNOVATION AND DATA DRIVEN',
        title: 'Components Supply Chain Partner',
        smartDistribution: 'SMART DISTRIBUTION',
        quality: 'QUALITY'
      },
      value: {
        title1: 'HELPING YOUR SUPPLY CHAIN MORE',
        title2: 'EFFICIENT',
        title3: 'AND',
        title4: 'RELIABLE'
      },
      features: {
        costDown: {
          title: 'COMPONENTS COST DOWN',
          desc: 'Sigma help you compare your current component price vs global distributors and achieve annual cost down goal.'
        },
        spotBuy: {
          title: 'SPOT BUY SUPPLY',
          desc: 'Sigma help you to fix supply chain shortage in the shortest time, and find the EOL or hard to find components to fulfill your project need.'
        },
        streamlining: {
          title: 'SUPPLY CHAIN STREAMLINING',
          desc: 'Sigma help you the total integrate all the non-common suppliers, reduce your workload used in supply chain.'
        }
      },
      advantages: {
        title: 'ADVANTAGE',
        efficient: {
          title: 'EFFICIENT',
          desc: 'Sigma are still on the foundation of Sigma growth, relying on the efficient operation of the various departments to help customers get the best service experience.'
        },
        quality: {
          title: 'HIGH QUALITY GOODS',
          desc: 'Sigma only sell authentic original, to continuously stable quality of the goods to meet the various industries for customer quality requirements.'
        },
        service: {
          title: 'WARM SERVICE',
          desc: 'Sigma offers 24/7 service to sell customers with a warm service attitude at any time.'
        },
        experience: {
          title: 'EXPERIENCE',
          desc: "Sigma's ten-year industry, experienced team helps customers solve the challenges of the supply chain."
        }
      },
      stats: {
        brands: 'Component Brands',
        customers: 'Customers',
        suppliers: 'Global Suppliers',
        parts: 'Part Number Purchased'
      },
      about: {
        title: 'About Us',
        subtitle: 'Over 15 years experience',
        desc: 'SIGMA TECHNOLOGY GROUP (HQ-WGS) certified is a global leading intelligence distributor for electronic components, serving its worldwide customers with professional one-stop supply chain service. Sigma Technology focus on serving customers in Macao of China, Taiwan, Hongkong, Singapore, Taiwan China, USA, Germany, Sigma Technology focus on serving customers in Macao of China, Taiwan, Hongkong, Singapore, Taiwan China, USA, Germany, Control, Power Supply & New Energy, Consumer, Electronics, Medical Equipment, Telecom, etc.',
        button: 'FIND OUT MORE'
      },
      faq: {
        title: 'Frequent Questions',
        q1: {
          question: 'Why should I choose the Sigma as my partner?',
          answer: 'SIGMA offers quality product with warm and professional service, we sustainable offer service at OEM&EMS for the past 15 years.'
        },
        q2: {
          question: 'Does the part sigma sell new and original ?',
          answer: 'Yes, all parts we sell are new and original from authorized distributors.'
        },
        q3: {
          question: 'What services can Sigma provide ?',
          answer: 'We provide comprehensive supply chain solutions including component sourcing, cost optimization, and logistics support.'
        }
      },
      news: {
        title: 'LATEST NEWS',
        item1: 'Vishay and Infineon were severely affected by a fire in Wuxi,China.',
        item2: 'Supply chain: Automotive MCU, MPU demand remains strong',
        item3: 'SIA: Demand for chips in automotive, industrial, consumer markets rose in 2022',
        button: 'MORE NEWS'
      }
    },
    service: {
      hero: {
        title: 'SERVICE'
      },
      tabs: {
        newProject: 'NEW PROJECT',
        riskyBid: 'RISKY BID',
        massProduction: 'MASS PRODUCTION',
        lastOrder: 'LAST ORDER',
        projectEnds: 'PROJECT ENDS'
      },
      sidebar: {
        inquiry: 'CUSTOMER INQUIRY',
        services: 'SIGMA SERVICES'
      },
      phases: {
        title: 'WHAT PROBLEMS CUSTOMER MAY MEET DURING THESE PHASES?',
        problems: [
          'EOL or short supply components',
          'No stock again to be launched',
          'Component shortage',
          'EOL or hard to find components',
          'Annual cost down target high to achieve',
          'Lack of trust in supplier',
          'Admin headache when track',
          'Mass quantity order',
          'Admin suggest problem'
        ]
      },
      solutions: {
        title: 'WHAT WE CAN DO FOR CUSTOMER?',
        items: [
          'Project BOM check',
          'RFQ and price comparable by various brands',
          'Technical support for shortage components',
          'FPI negotiation',
          'Mass quantity to OEM, so we do best consumption',
          'New service develop',
          'Quick delivery',
          'ONE BOM procurement application',
          'Various API connection application'
        ]
      },
      components: {
        active: 'Active Components',
        passive: 'Passive Components',
        memory: 'MEMORY',
        discrete: 'DISCRETE COMPONENTS',
        capacitors: 'CAPACITORS/RESISTORS',
        crystals: 'CRYSTALS',
        relays: 'RELAYS',
        connectors: 'CONNECTORS',
        inductors: 'INDUCTORS',
        switches: 'SWITCHES / FUSES'
      },
      quote: {
        title: 'Warm Service, professional followup, quick delivery',
        subtitle: 'Get a quote now',
        steps: {
          step1: 'DEAL WITH SIGMA IS SO SIMPLE',
          step2: 'SEND INQUIRY TO SIGMA SALES REPRESENTATIVE',
          step3: 'EVALUATE THE QUOTATION FROM SIGMA SALES',
          step4: 'PLACE ORDER TO SIGMA SALES',
          step5: 'RECEIVE PARCEL WITH TRACEABLE DELIVERY'
        },
        button: 'GET A QUOTE NOW'
      },
      contact: {
        title: 'Any Question? Contact us?',
        namePlaceholder: 'Your Name*',
        emailPlaceholder: 'Email Address*',
        messagePlaceholder: 'Your Message*',
        sendButton: 'SEND MESSAGE NOW'
      }
    },
    about: {
      hero: {
        title: 'ABOUT'
      },
      intro: {
        title: 'INTRO TO SIGMA',
        desc: 'SIGMA TECHNOLOGY GROUP (HQ-WGS) certified is a global leading intelligence distributor for electronic components, serving its worldwide customers with professional one-stop supply chain service. Sigma Technology focus on serving customers in Macao of China, Taiwan, Hongkong, Singapore, Taiwan China, USA, Germany, Sigma Technology focus on serving customers in Macao of China, Taiwan, Hongkong, Singapore, Taiwan China, USA, Germany, Control, Power Supply & New Energy, Consumer, Electronics, Medical Equipment, Telecom, etc.'
      },
      industries: {
        title: 'INDUSTRIES WE SERVE',
        auto: 'AUTO ELECTRONIC',
        networking: 'NETWORKING',
        precision: 'PRECISION ASSEMBLY',
        industrial: 'INDUSTRIAL CONTROLS',
        power: 'POWER SUPPLY & NEW ENERGY',
        consumer: 'CONSUMER ELECTRONICS',
        medical: 'MEDICAL EQUIPMENT',
        telecom: 'TELECOM'
      },
      timeline: {
        title: 'TIMELINE',
        year2007: {
          title: 'Sigma established in Hongkong, dedicated to the one-stop trading chain service provider.',
          items: [
            'Set components "Spot Buy" service as the major business of company.'
          ]
        },
        year2008: {
          title: 'Suzhou Branch established',
          items: [
            'Passed ISO9001 quality certification',
            'Authorized license: Littelfuse, Bourns, Muaraer and Curtis',
            'Industries: USA，Canada etc'
          ]
        },
        year2012: {
          title: 'EESI CHINA',
          items: [
            '"the Best Logistics Service Distributor Award" and "the Most Promising Distributor Award"',
            'HSBC "Green Achievement" Award',
            'Authorized License: SEMAYA, IGBT module from japan'
          ]
        },
        year2016: {
          title: 'IESM CHINA',
          items: [
            '"Sustainable Development Distributor Award"',
            '(Logistics For fashion), "Top 10 Global Supply Chain Solution Provider"',
            'Authorized License: SiLA China'
          ]
        },
        year2018: {
          title: 'National High-tech Enterprise China',
          items: [
            'Build Joint Laboratory with China Electronic Development Center (CEDC) Laboratory',
            'Authorized License: INOL, Japan'
          ]
        },
        year2021: {
          title: 'Outstanding Distributors in Supply Capability 2021 awarded by ECPHORIA',
          items: [
            'Chip Insight 2021 Top Asia-Pacific Distribution List by Semi-Hotly',
            'SiLA-Si Lab & Gembasi',
            'Authorized License: HE 62387 MCU, China'
          ]
        }
      },
      honors: {
        title: 'HONORS & MEMBERSHIPS'
      },
      values: {
        title: 'OUR CORE VALUE',
        satisfaction: {
          title: 'CUSTOMER SATISFACTION',
          desc: 'Unbiased customer expectations, Our one from their point, so it is the best factor for continuous collaboration, as we have incorporated as an entire product.'
        },
        efficient: {
          title: 'EFFICIENT',
          desc: 'We are results-oriented, we are devoted to our aggressive and implacable and every direction and following every in place even will be complete at expected time.'
        },
        integrity: {
          title: 'INTEGRITY',
          desc: 'Operating with integrity being ethical and treating people with respect is in every heart of SIGMA culture: the the extension is our actions, how we treat customers and suppliers and how we treat each other.'
        },
        teamwork: {
          title: 'TEAMWORK',
          desc: 'Every member of SIGMA, together to achieve complete goals and work together to lead the company to new peaks or break new standards.'
        },
        innovation: {
          title: 'INNOVATION',
          desc: 'Being innovative and creative is key to our success. We challenge existing methods and look for better ways to do work, by in this way does we see new times.'
        }
      }
    },
    quality: {
      hero: {
        title: 'QUALITY'
      },
      diagram: {
        center: 'QUALITY ZERO RISK',
        system1: 'Quality Assurance System',
        system2: 'Continuous Improvement System',
        system3: 'Supplier Assessment',
        system4: 'Complete Testing Standard & Lab Test'
      },
      resources: {
        title1: 'RESOURCES TO',
        title2: 'ENSURE QUALITY',
        original: {
          title: 'ORIGINAL AUTHORIZED SOURCE',
          desc: '86% of our suppliers from original manufacturer or worldwide distributing. 14% of our suppliers from verified authentic OEM or stockist.'
        },
        traceable: {
          title: 'ALL SHIPMENT TRACEABLE',
          desc: '100% of our shipments are traceability to sources and brands.'
        },
        lab: {
          title: 'IN-HOUSE LAB TEST',
          desc: 'We have a in-house test lab with sufficient test equipment to ensure quality control.'
        }
      },
      testimonial: {
        title1: 'CUSTOMER',
        title2: 'COMMENT',
        quote: '"Been working with Sigma for over 4 years. Sigma always perform very well with quality which I\'ve never worried about. They response as soon as they could for any unexpectedness, and solve the problem at the first place, they show their sincere attitude with speed, this is very commendable and hope they could keep it."'
      }
    },
    contact: {
      hero: {
        title: 'CONTACT US'
      },
      offices: {
        title: 'GLOBALIZE OFFICES, LOCALIZE',
        services: 'SERVICES*'
      },
      locations: {
        hongkong: {
          title: 'HONGKONG, CHINA',
          address: 'Room 1305A, Eastern Centre, 1065 Kings Road Quarry Bay Hong Kong',
          contact: 'Contact person: Becky',
          tel: 'Tel: +852 2904 2977',
          email: 'E-mail'
        },
        shenzhen: {
          title: 'SHENZHEN, CHINA',
          address: 'Room A, 1/F, Ben Yuan Building, No.1601-5 Shen Nan Road, Shenzhen, China',
          contact: 'Contact person: +86 755-3333-1359',
          email: 'E-mail'
        },
        suzhou: {
          title: 'SUZHOU, CHINA',
          address: 'Room 1371, Building B, Suzhou Garden Suzhou Industrial Park, Suzhou City, Jiangsu Province, 215000, China',
          contact: 'Contact person: Cherry',
          tel: 'Tel: +86 512-6564-8056',
          email: 'E-mail'
        },
        singapore: {
          title: 'SINGAPORE',
          address: '18 HOWARD ROAD, #10-01 NOVELTY BIZCENTRE, SINGAPORE 369585',
          contact: 'Contact Person: Vera',
          tel: 'Tel: +65 6909 0376',
          email: 'E-mail'
        },
        usa: {
          title: 'USA',
          address: '3428, Saranade, 1806，USA',
          contact: 'Contact：Clark',
          email: 'E-mail'
        }
      },
      form: {
        title: 'CONTACT OUR LOCAL OFFICE OR SEND MESSAGE TO US*',
        subtitle: 'COMPLETE THE ENQUIRY FORM & WE WILL RESPOND STRAIGHT AWAY',
        namePlaceholder: 'Full Name*',
        emailPlaceholder: 'Email Address*',
        messagePlaceholder: 'Your Message*',
        submitButton: 'SUBMIT'
      },
      social: {
        title: 'KEEPING SOCIAL*'
      }
    },
    footer: {
      copyright: 'Sigma © 2007-2023 | All Rights Reserved'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      service: '服务',
      smartDistribution: '智能分销',
      quality: '质量',
      career: '招聘',
      contact: '联系我们'
    },
    home: {
      hero: {
        subtitle: '创新与数据驱动',
        title: '元器件供应链合作伙伴',
        smartDistribution: '智能分销',
        quality: '质量'
      },
      value: {
        title1: '帮助您的供应链更加',
        title2: '高效',
        title3: '和',
        title4: '可靠'
      },
      features: {
        costDown: {
          title: '元器件成本降低',
          desc: 'Sigma帮助您比较当前元器件价格与全球分销商，实现年度成本降低目标。'
        },
        spotBuy: {
          title: '现货采购供应',
          desc: 'Sigma帮助您在最短时间内解决供应链短缺问题，找到EOL或难以找到的元器件以满足您的项目需求。'
        },
        streamlining: {
          title: '供应链精简',
          desc: 'Sigma帮助您全面整合所有非常见供应商，减少供应链中的工作量。'
        }
      },
      advantages: {
        title: '优势',
        efficient: {
          title: '高效',
          desc: 'Sigma始终以Sigma增长的基础为重点，依靠各部门的高效运作帮助客户获得最佳服务体验。'
        },
        quality: {
          title: '高质量产品',
          desc: 'Sigma只销售正品原装，以持续稳定的产品质量满足各行业客户的质量要求。'
        },
        service: {
          title: '温馨服务',
          desc: 'Sigma提供24/7服务，随时以温馨的服务态度为客户服务。'
        },
        experience: {
          title: '经验',
          desc: 'Sigma十年行业经验，经验丰富的团队帮助客户解决供应链挑战。'
        }
      },
      stats: {
        brands: '元器件品牌',
        customers: '客户',
        suppliers: '全球供应商',
        parts: '已采购零件号'
      },
      about: {
        title: '关于我们',
        subtitle: '超过15年经验',
        desc: 'SIGMA TECHNOLOGY GROUP（总部WGS）认证是全球领先的电子元器件智能分销商，为全球客户提供专业的一站式供应链服务。Sigma Technology专注于为中国澳门、台湾、香港、新加坡、台湾中国、美国、德国的客户提供服务，专注于控制、电源和新能源、消费电子、医疗设备、电信等领域。',
        button: '了解更多'
      },
      faq: {
        title: '常见问题',
        q1: {
          question: '为什么我应该选择Sigma作为我的合作伙伴？',
          answer: 'SIGMA提供优质产品和热情专业的服务，在过去15年中为OEM和EMS提供可持续服务。'
        },
        q2: {
          question: 'Sigma销售的零件是新的和原装的吗？',
          answer: '是的，我们销售的所有零件都是来自授权分销商的新品和原装产品。'
        },
        q3: {
          question: 'Sigma可以提供哪些服务？',
          answer: '我们提供全面的供应链解决方案，包括元器件采购、成本优化和物流支持。'
        }
      },
      news: {
        title: '最新新闻',
        item1: 'Vishay和Infineon在中国无锡遭受严重火灾影响。',
        item2: '供应链：汽车MCU、MPU需求依然强劲',
        item3: 'SIA：2022年汽车、工业和消费市场芯片需求上升',
        button: '更多新闻'
      }
    },
    service: {
      hero: {
        title: '服务'
      },
      tabs: {
        newProject: '新项目',
        riskyBid: '风险投标',
        massProduction: '批量生产',
        lastOrder: '最后订单',
        projectEnds: '项目结束'
      },
      sidebar: {
        inquiry: '客户咨询',
        services: 'SIGMA服务'
      },
      phases: {
        title: '客户在这些阶段可能遇到什么问题？',
        problems: [
          'EOL或供应短缺的元器件',
          '没有库存再次推出',
          '元器件短缺',
          'EOL或难以找到的元器件',
          '年度成本降低目标难以实现',
          '对供应商缺乏信任',
          '跟踪时管理头疼',
          '大量订单',
          '管理建议问题'
        ]
      },
      solutions: {
        title: '我们能为客户做什么？',
        items: [
          '项目BOM检查',
          '询价和各品牌价格比较',
          '短缺元器件的技术支持',
          'FPI协商',
          '向OEM大量供货，以实现最佳消耗',
          '新服务开发',
          '快速交付',
          '一站式BOM采购申请',
          '各种API连接应用'
        ]
      },
      components: {
        active: '有源元件',
        passive: '无源元件',
        memory: '存储器',
        discrete: '分立元件',
        capacitors: '电容器/电阻器',
        crystals: '晶振',
        relays: '继电器',
        connectors: '连接器',
        inductors: '电感器',
        switches: '开关/保险丝'
      },
      quote: {
        title: '温馨服务，专业跟进，快速交付',
        subtitle: '立即获取报价',
        steps: {
          step1: '与SIGMA交易非常简单',
          step2: '向SIGMA销售代表发送询价',
          step3: '评估SIGMA销售的报价',
          step4: '向SIGMA销售下订单',
          step5: '收到可追踪交付的包裹'
        },
        button: '立即获取报价'
      },
      contact: {
        title: '有任何问题？联系我们？',
        namePlaceholder: '您的姓名*',
        emailPlaceholder: '电子邮件地址*',
        messagePlaceholder: '您的留言*',
        sendButton: '立即发送消息'
      }
    },
    about: {
      hero: {
        title: '关于我们'
      },
      intro: {
        title: 'SIGMA简介',
        desc: 'SIGMA TECHNOLOGY GROUP（总部WGS）认证是全球领先的电子元器件智能分销商，为全球客户提供专业的一站式供应链服务。Sigma Technology专注于为中国澳门、台湾、香港、新加坡、美国、德国的客户提供服务，专注于控制、电源和新能源、消费电子、医疗设备、电信等领域。'
      },
      industries: {
        title: '我们服务的行业',
        auto: '汽车电子',
        networking: '网络',
        precision: '精密组装',
        industrial: '工业控制',
        power: '电源和新能源',
        consumer: '消费电子',
        medical: '医疗设备',
        telecom: '电信'
      },
      timeline: {
        title: '时间线',
        year2007: {
          title: 'Sigma在香港成立，致力于成为一站式贸易链服务提供商。',
          desc: '将元器件"现货采购"服务作为公司的主要业务。'
        },
        year2008: {
          title: '苏州分公司成立',
          items: [
            '通过ISO9001质量认证',
            '授权许可：Littelfuse、Bourns、Muaraer和Curtis',
            '行业：美国、加拿大等'
          ]
        },
        year2012: {
          title: 'EESI中国',
          items: [
            '"最佳物流服务分销商奖"和"最具潜力分销商奖"',
            '汇丰银行"绿色成就"奖',
            '授权许可：SEMAYA，来自日本的IGBT模块'
          ]
        },
        year2016: {
          title: 'IESM中国',
          items: [
            '"可持续发展分销商奖"',
            '（时尚物流），"全球十大供应链解决方案提供商"',
            '授权许可：SiLA中国'
          ]
        },
        year2018: {
          title: '国家高新技术企业中国',
          items: [
            '与中国电子技术发展中心（CEDC）实验室共建联合实验室',
            '授权许可：INOL，日本'
          ]
        },
        year2021: {
          title: 'ECPHORIA授予2021年供应能力杰出分销商',
          items: [
            'Semi-Hotly授予Chip Insight 2021年亚太地区分销名单',
            'SiLA-Si实验室和Gembasi',
            '授权许可：HE 62387 MCU，中国'
          ]
        }
      },
      honors: {
        title: '荣誉与会员资格'
      },
      values: {
        title: '我们的核心价值观',
        satisfaction: {
          title: '客户满意',
          desc: '公正的客户期望，从他们的角度出发，这是持续合作的最佳因素，因为我们已经将其融入整个产品中。'
        },
        efficient: {
          title: '高效',
          desc: '我们以结果为导向，致力于积极进取和坚定不移，每个方向和每个环节都会在预期时间内完成。'
        },
        integrity: {
          title: '诚信',
          desc: '诚信经营、道德行为和尊重他人是SIGMA文化的核心：延伸体现在我们的行动、我们对待客户和供应商的方式以及我们彼此相处的方式。'
        },
        teamwork: {
          title: '团队合作',
          desc: 'SIGMA的每个成员共同实现完整的目标，共同引领公司迈向新高峰或突破新标准。'
        },
        innovation: {
          title: '创新',
          desc: '创新和创造力是我们成功的关键。我们挑战现有方法，寻找更好的工作方式，通过这种方式我们看到了新时代。'
        }
      }
    },
    quality: {
      hero: {
        title: '质量'
      },
      diagram: {
        center: '质量零风险',
        system1: '质量保证体系',
        system2: '持续改进体系',
        system3: '供应商评估',
        system4: '完整的测试标准和实验室测试'
      },
      resources: {
        title1: '资源以',
        title2: '确保质量',
        original: {
          title: '原厂授权来源',
          desc: '我们86%的供应商来自原厂制造商或全球分销商。14%的供应商来自经过验证的正品OEM或库存商。'
        },
        traceable: {
          title: '所有货物可追溯',
          desc: '我们100%的货物都可以追溯到来源和品牌。'
        },
        lab: {
          title: '内部实验室测试',
          desc: '我们拥有内部测试实验室，配备充足的测试设备以确保质量控制。'
        }
      },
      testimonial: {
        title1: '客户',
        title2: '评价',
        quote: '"与Sigma合作已超过4年。Sigma在质量方面表现非常出色，我从未担心过。他们会尽快回应任何意外情况，并在第一时间解决问题，他们以速度展现真诚的态度，这非常值得称赞，希望他们能保持下去。"'
      }
    },
    contact: {
      hero: {
        title: '联系我们'
      },
      offices: {
        title: '全球化办公室，本地化',
        services: '服务*'
      },
      locations: {
        hongkong: {
          title: '中国香港',
          address: '香港鲗鱼涌英皇道1065号东达中心1305A室',
          contact: '联系人：Becky',
          tel: '电话：+852 2904 2977',
          email: '邮箱'
        },
        shenzhen: {
          title: '中国深圳',
          address: '中国深圳市深南路1601-5号本源大厦1楼A室',
          contact: '联系人：+86 755-3333-1359',
          email: '邮箱'
        },
        suzhou: {
          title: '中国苏州',
          address: '中国江苏省苏州市苏州工业园区苏州花园B栋1371室，邮编：215000',
          contact: '联系人：Cherry',
          tel: '电话：+86 512-6564-8056',
          email: '邮箱'
        },
        singapore: {
          title: '新加坡',
          address: '新加坡霍华德路18号#10-01新奇商业中心，邮编369585',
          contact: '联系人：Vera',
          tel: '电话：+65 6909 0376',
          email: '邮箱'
        },
        usa: {
          title: '美国',
          address: '美国萨拉纳德3428号，1806',
          contact: '联系人：Clark',
          email: '邮箱'
        }
      },
      form: {
        title: '联系我们的当地办公室或发送消息给我们*',
        subtitle: '填写咨询表格，我们将立即回复',
        namePlaceholder: '姓名*',
        emailPlaceholder: '电子邮件地址*',
        messagePlaceholder: '您的留言*',
        submitButton: '提交'
      },
      social: {
        title: '保持社交*'
      }
    },
    footer: {
      copyright: 'Sigma © 2007-2023 | 版权所有'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n

