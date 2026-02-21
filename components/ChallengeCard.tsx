'use client';

import { Card, Checkbox, Tag, Typography, Button } from 'antd';
import { CheckCircleOutlined, PlayCircleOutlined, LockOutlined } from '@ant-design/icons';
import { Challenge } from '../lib/challengeData';

const { Title, Text } = Typography;

interface ChallengeCardProps {
  challenge: Challenge;
  onTaskToggle: (taskId: number) => void;
  onStartChallenge: () => void;
}

export default function ChallengeCard({ 
  challenge, 
  onTaskToggle, 
  onStartChallenge 
}: ChallengeCardProps) {
  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {challenge.isCompleted ? (
            <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />
          ) : challenge.isUnlocked ? (
            <PlayCircleOutlined style={{ color: '#1890ff', fontSize: 20 }} />
          ) : (
            <LockOutlined style={{ color: '#999', fontSize: 20 }} />
          )}
          <Title level={4} style={{ margin: 0 }}>
            {challenge.title}
          </Title>
        </div>
      }
      style={{ 
        borderColor: challenge.isCompleted ? '#52c41a' : 
                    challenge.isUnlocked ? '#1890ff' : '#d9d9d9',
        borderWidth: 2
      }}
      extra={
        <Tag color={
          challenge.isCompleted ? 'success' :
          challenge.isUnlocked ? 'blue' : 'default'
        }>
          {challenge.isCompleted ? '已完成' :
           challenge.isUnlocked ? '进行中' : '已锁定'}
        </Tag>
      }
    >
      <div style={{ marginBottom: 20 }}>
        <Text>{challenge.description}</Text>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Title level={5}>挑战任务</Title>
        {challenge.tasks.map((task) => (
          <div 
            key={task.id}
            style={{ 
              padding: '10px 0',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
              opacity: challenge.isUnlocked ? 1 : 0.6
            }}
          >
            <Checkbox 
              checked={task.isCompleted}
              disabled={!challenge.isUnlocked}
              onChange={() => onTaskToggle(task.id)}
              style={{ 
                flex: 1,
                textDecoration: task.isCompleted ? 'line-through' : 'none',
                color: task.isCompleted ? '#999' : '#000',
              }}
            >
              {task.text}
            </Checkbox>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        {challenge.isUnlocked && !challenge.isCompleted ? (
          <Button 
            type="primary" 
            size="large"
            icon={<PlayCircleOutlined />}
            onClick={onStartChallenge}
            style={{ minWidth: 180 }}
          >
            开始挑战
          </Button>
        ) : challenge.isCompleted ? (
          <Button 
            type="default" 
            size="large"
            disabled
            style={{ minWidth: 180 }}
          >
            ✅ 已完成
          </Button>
        ) : (
          <Button 
            type="default" 
            size="large"
            disabled
            icon={<LockOutlined />}
            style={{ minWidth: 180 }}
          >
            已锁定
          </Button>
        )}
      </div>
    </Card>
  );
}