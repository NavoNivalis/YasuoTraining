import { AntdRegistry } from '@ant-design/nextjs-registry';
// 1. 从 antd 中导入需要的组件
import { Menu } from 'antd';  // 这里！
import { HomeOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode  // 明确告诉TS：children是React节点
}) {
  // 2. 使用正确的数据结构
  const menuItems = [
    { 
      key: 'home', 
      label: <Link href="/">首页</Link>,
      icon: <HomeOutlined />
    },
    { 
      key: 'challenges', 
      label: <Link href="/challenges">挑战列表</Link>,
      icon: <TrophyOutlined />
    },
    { 
      key: 'profile', 
      label: <Link href="/profile">个人资料</Link>,
      icon: <UserOutlined />
    },
  ];

  return (
    <html lang="zh">
      <body style={{ 
      margin: 0,  // 去掉默认边距
      minHeight: '100vh',  // 确保body至少和视窗一样高
      display: 'flex',  // 使用flex布局
      flexDirection: 'column'  // 垂直排列
      }}>
        <AntdRegistry>
          <Menu 
            mode="horizontal" 
            items={menuItems}  // 这里使用 items
            style={{ padding: '0 20px' }}
          />
          <div>
            {children}
          </div>
          <footer style={{ textAlign: 'center', padding: '20px' }}>
            © 2026 LOL亚索训练营 开发者:Navo
          </footer>
        </AntdRegistry>
      </body>
    </html>
  );
}