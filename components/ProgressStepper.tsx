'use client';

import { Steps, Typography } from 'antd';
import { Challenge } from '../lib/challengeData';

const { Text } = Typography;

interface ProgressStepperProps {
  challenges: Challenge[];
  currentIndex: number;
  onStepChange: (index: number) => void;
}

export default function ProgressStepper({ 
  challenges, 
  currentIndex, 
  onStepChange 
}: ProgressStepperProps) {
  const currentChallenge = challenges[currentIndex];
  const completedCount = challenges.filter(c => c.isCompleted).length;
  const unlockedCount = challenges.filter(c => c.isUnlocked).length;

  // 修复：明确指定 status 的类型
  const stepItems = challenges.map((challenge, index) => ({
    title: `第${index + 1}关`,
    description: challenge.title,
    status: (challenge.isCompleted ? 'finish' : 
            challenge.isUnlocked ? 'process' : 'wait') as 'finish' | 'process' | 'wait',
  }));

  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ margin: 0 }}>训练进度</h3>
        <Text type="secondary">
          完成: {completedCount}/{challenges.length} | 解锁: {unlockedCount}/{challenges.length}
        </Text>
      </div>
      
      <Steps 
        current={currentIndex}
        onChange={onStepChange}
        items={stepItems}
        responsive={false}
      />
      
      <div style={{ 
        marginTop: 20, 
        padding: '12px 16px', 
        backgroundColor: currentChallenge.isCompleted ? '#f6ffed' : 
                        currentChallenge.isUnlocked ? '#e6f7ff' : '#fafafa',
        border: `1px solid ${currentChallenge.isCompleted ? '#b7eb8f' : 
                         currentChallenge.isUnlocked ? '#91d5ff' : '#d9d9d9'}`,
        borderRadius: 6
      }}>
        <Text strong>
          {currentChallenge.isCompleted ? '✅ 已完成' : 
           currentChallenge.isUnlocked ? '🎯 进行中' : '🔒 未解锁'} · 
          第{currentIndex + 1}关: {currentChallenge.title}
        </Text>
      </div>
    </div>
  );
}