'use client';

import { Alert } from 'antd';

export default function ChallengeRules() {
  return (
    <Alert
      message="挑战规则"
      description={
        <div>
          <p>1. 点击「开始挑战」后，系统会自动读取你最近5场亚索对局数据</p>
          <p>2. 连续3场对局达到当前挑战所有要求，即可完成挑战</p>
          <p>3. 完成当前挑战后，下一个挑战自动解锁</p>
          <p>4. 点击上方进度条可切换查看已解锁的挑战</p>
        </div>
      }
      type="info"
      style={{ marginTop: 30 }}
    />
  );
}