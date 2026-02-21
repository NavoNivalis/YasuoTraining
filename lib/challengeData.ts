export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

// Conditions 接口，只包含这4个字段
export interface Conditions {
  csAt8min: number;        // 8分钟补刀数
  noDeathBefore: number;   // 几分钟内不死
  getKillBefore?: number;   // 几分钟内单杀（可选）
  takeTowerBefore?: number; // 几分钟内推塔（可选）
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isUnlocked: boolean;
  tasks: Task[];
  conditions: Conditions;  // 添加 conditions 属性
}

export const initialChallenges: Challenge[] = [
  {
    id: 1,
    title: '基础补刀生存训练',
    description: '建立补刀基本功，保持生存意识',
    isCompleted: false,
    isUnlocked: true,
    tasks: [
      { id: 1, text: '8分钟补刀数达到70个', isCompleted: false },
      { id: 2, text: '8分钟内不死亡', isCompleted: false },
    ],
    conditions: {
      csAt8min: 70,
      noDeathBefore: 8,
    },
  },
  {
    id: 2,
    title: '进阶对线压制训练',
    description: '在补刀生存基础上，练习对线压制',
    isCompleted: false,
    isUnlocked: false,
    tasks: [
      { id: 1, text: '8分钟补刀数达到70个', isCompleted: false },
      { id: 2, text: '8分钟内不死亡', isCompleted: false },
      { id: 3, text: '8分钟内完成单杀', isCompleted: false },
      { id: 4, text: '10分钟内推掉线上第一座防御塔', isCompleted: false },
    ],
    conditions: {
      csAt8min: 70,
      noDeathBefore: 8,
      getKillBefore: 8,
      takeTowerBefore: 10,
    },
  },
  {
    id: 3,
    title: '游走支援训练',
    description: '掌握中路游走节奏，建立全局意识',
    isCompleted: false,
    isUnlocked: false,
    tasks: [
      { id: 1, text: '15分钟内完成3次有效游走', isCompleted: false },
      { id: 2, text: '20分钟前推掉中路一塔', isCompleted: false },
      { id: 3, text: '全局支援评分达到A以上', isCompleted: false },
    ],
    conditions: {
      csAt8min: 0,      // 这个挑战不关注补刀
      noDeathBefore: 0, // 这个挑战不关注死亡
      // 游走支援训练不需要 getKillBefore 和 takeTowerBefore
    },
  },
  {
    id: 4,
    title: '团战处理训练',
    description: '掌握亚索团战进场时机和技能连招',
    isCompleted: false,
    isUnlocked: false,
    tasks: [
      { id: 1, text: '单场团战打出3次以上击飞', isCompleted: false },
      { id: 2, text: '大招命中率达到80%以上', isCompleted: false },
      { id: 3, text: '团战生存率达到70%以上', isCompleted: false },
    ],
    conditions: {
      csAt8min: 0,      // 这个挑战不关注补刀
      noDeathBefore: 0, // 这个挑战不关注死亡
      // 团战处理训练不需要 getKillBefore 和 takeTowerBefore
    },
  },
  {
    id: 5,
    title: '终结比赛训练',
    description: '掌握比赛节奏，在优势时结束比赛',
    isCompleted: false,
    isUnlocked: false,
    tasks: [
      { id: 1, text: '30分钟内结束比赛', isCompleted: false },
      { id: 2, text: '对位经济领先5000以上', isCompleted: false },
      { id: 3, text: '单场拿到10个人头以上', isCompleted: false },
    ],
    conditions: {
      csAt8min: 0,      // 这个挑战不关注补刀
      noDeathBefore: 0, // 这个挑战不关注死亡
      // 终结比赛训练不需要 getKillBefore 和 takeTowerBefore
    },
  },
];