'use client';

import { Divider, Typography, Button } from 'antd';
import { useState } from 'react';
import ProgressStepper from '../components/ProgressStepper';
import ChallengeCard from '../components/ChallengeCard';
import ChallengeRules from '../components/ChallengeRules';
import { initialChallenges, Challenge } from '../lib/challengeData';

const { Title, Text } = Typography;

export default function Home() {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChallenge = challenges[currentIndex];

  const handleTaskToggle = (taskId: number) => {
    if (!currentChallenge.isUnlocked) return;

    const updatedChallenges = [...challenges];
    const challenge = updatedChallenges[currentIndex];
    const taskIndex = challenge.tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
      challenge.tasks[taskIndex].isCompleted = !challenge.tasks[taskIndex].isCompleted;
      
      const allTasksCompleted = challenge.tasks.every(t => t.isCompleted);
      if (allTasksCompleted && !challenge.isCompleted) {
        challenge.isCompleted = true;
        
        if (currentIndex + 1 < challenges.length) {
          updatedChallenges[currentIndex + 1].isUnlocked = true;
        }
        
        alert(`🎉 恭喜完成【${challenge.title}】！${currentIndex + 1 < challenges.length ? '下一个挑战已解锁！' : '所有挑战已完成！'}`);
      }
      
      setChallenges(updatedChallenges);
    }
  };

  const handleStartChallenge = () => {
    if (currentChallenge.isUnlocked && !currentChallenge.isCompleted) {
      alert(`开始记录第${currentIndex + 1}个挑战的数据...\n\n系统将读取你最近5场亚索对局，分析是否完成挑战要求。`);
    }
  };

  const handleStepChange = (index: number) => {
    if (challenges[index].isUnlocked) {
      setCurrentIndex(index);
    } else {
      alert(`请先完成第${index}关才能解锁此挑战`);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0 && challenges[prevIndex].isUnlocked) {
      setCurrentIndex(prevIndex);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < challenges.length && challenges[nextIndex].isUnlocked) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>
        🎮 亚索专属训练营
      </Title>
      <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 30 }}>
        5个关卡,循序渐进提升技术
      </Text>

      <ProgressStepper 
        challenges={challenges}
        currentIndex={currentIndex}
        onStepChange={handleStepChange}
      />

      <Divider />

      <ChallengeCard 
        challenge={currentChallenge}
        onTaskToggle={handleTaskToggle}
        onStartChallenge={handleStartChallenge}
      />

      <ChallengeRules />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
        <Button disabled={currentIndex === 0} onClick={handlePrev}>
          上一关
        </Button>
        <Button
          type="primary"
          disabled={currentIndex === challenges.length - 1 || !challenges[currentIndex + 1]?.isUnlocked}
          onClick={handleNext}
        >
          下一关
        </Button>
      </div>
    </div>
  );
}