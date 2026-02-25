import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  priority?: string;
  hours?: number;
  children?: Task[];
  isPhase?: boolean;
  duration?: string;
}

const mindmapData: Task[] = [
  {
    id: 'root',
    name: '销售单支付方式拆分',
    isPhase: true,
    children: [
      {
        id: 'phase1',
        name: '阶段一：核心功能 - 数据报表',
        isPhase: true,
        duration: '预计2.5天',
        children: [
          {
            id: 'task1',
            name: 'Task 1: 后端API调整',
            children: [
              { id: '1.1', name: '修改经营概况指标接口', priority: 'P0', hours: 2 },
              { id: '1.2', name: '修改员工业绩接口', priority: 'P0', hours: 2 }
            ]
          },
          {
            id: 'task2',
            name: 'Task 2: 前端类型定义',
            children: [
              { id: '2.1', name: '更新经营概况类型定义', priority: 'P0', hours: 0.5 },
              { id: '2.2', name: '更新员工业绩类型定义', priority: 'P0', hours: 0.5 }
            ]
          },
          {
            id: 'task3',
            name: 'Task 3: 经营概况组件改造',
            children: [
              { id: '3.1', name: '修改网格结构(2x2→2x3)', priority: 'P0', hours: 3 }
            ]
          },
          {
            id: 'task4',
            name: 'Task 4: 销售统计优化',
            children: [
              { id: '4.1', name: '更新饼图数据映射', priority: 'P0', hours: 1 },
              { id: '4.2', name: '添加Tooltip显示', priority: 'P2', hours: 1 }
            ]
          }
        ]
      },
      {
        id: 'phase2',
        name: '阶段二：销售单列表优化 + 验证测试',
        isPhase: true,
        duration: '预计1.5天',
        children: [
          {
            id: 'task5',
            name: 'Task 5: 销售单列表优化',
            children: [
              { id: '5.1', name: '后端Order API添加字段', priority: 'P1', hours: 2 },
              { id: '5.2', name: '前端显示支付明细', priority: 'P1', hours: 2 }
            ]
          },
          {
            id: 'task6',
            name: 'Task 6: 支付页面验证',
            children: [
              { id: '6.1', name: '验证submitText和数据提交', priority: 'P1', hours: 1 }
            ]
          },
          {
            id: 'task7',
            name: 'Task 7: 验证测试',
            children: [
              { id: '7.1', name: '测试混合支付订单', priority: 'P0', hours: 0.5 },
              { id: '7.2', name: '测试纯余额支付', priority: 'P0', hours: 0.5 },
              { id: '7.3', name: '测试纯现金支付', priority: 'P0', hours: 0.5 },
              { id: '7.4', name: '边界情况与兼容性测试', priority: 'P1', hours: 2 }
            ]
          }
        ]
      },
      {
        id: 'phase3',
        name: '阶段三：客户欠款列表功能',
        isPhase: true,
        duration: '预计0.5天',
        children: [
          {
            id: 'task8',
            name: 'Task 8: 客户欠款列表',
            children: [
              { id: '8.1', name: '后端API：欠款查询接口', priority: 'P1', hours: 1 },
              { id: '8.2', name: '前端：复用客户列表页面', priority: 'P1', hours: 1 },
              { id: '8.3', name: '客户欠款列表测试', priority: 'P1', hours: 0.5 }
            ]
          }
        ]
      },
      {
        id: 'phase4',
        name: '阶段四：客户充值收款报表功能',
        isPhase: true,
        duration: '预计2天',
        children: [
          {
            id: 'task9',
            name: 'Task 9: 后端API开发',
            children: [
              { id: '9.1', name: '新增充值收款汇总接口', priority: 'P1', hours: 2.5 },
              { id: '9.2', name: '新增充值收款明细接口', priority: 'P1', hours: 2.5 }
            ]
          },
          {
            id: 'task10',
            name: 'Task 10: 前端类型定义与API',
            children: [
              { id: '10.1', name: '新增类型定义和API方法', priority: 'P1', hours: 0.5 }
            ]
          },
          {
            id: 'task11',
            name: 'Task 11: 经营概况页面改造',
            children: [
              { id: '11.1', name: '新增充值收款卡片', priority: 'P1', hours: 1 }
            ]
          },
          {
            id: 'task12',
            name: 'Task 12: MetricCard组件增强',
            children: [
              { id: '12.1', name: '添加点击交互支持', priority: 'P1', hours: 0.5 }
            ]
          },
          {
            id: 'task13',
            name: 'Task 13: 充值收款详情页面',
            children: [
              { id: '13.1', name: '创建充值收款明细查询页', priority: 'P1', hours: 3.5 }
            ]
          },
          {
            id: 'task14',
            name: 'Task 14: 后端测试',
            children: [
              { id: '14.1', name: '充值收款API测试', priority: 'P1', hours: 1.5 }
            ]
          },
          {
            id: 'task15',
            name: 'Task 15: 前端测试',
            children: [
              { id: '15.1', name: '充值收款功能测试', priority: 'P1', hours: 2.5 }
            ]
          },
          {
            id: 'task16',
            name: 'Task 16: UI/UX优化',
            children: [
              { id: '16.1', name: '界面优化和用户体验提升', priority: 'P1', hours: 2 }
            ]
          },
          {
            id: 'task17',
            name: 'Task 17: 性能优化与Bug修复',
            children: [
              { id: '17.1', name: '性能优化和bug修复', priority: 'P1', hours: 1.5 }
            ]
          }
        ]
      }
    ]
  }
];

const getPriorityColor = (priority?: string) => {
  switch (priority) {
    case 'P0': return 'bg-red-100 text-red-700 border-red-300';
    case 'P1': return 'bg-orange-100 text-orange-700 border-orange-300';
    case 'P2': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    default: return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

const TreeNode: React.FC<{ node: Task; level: number }> = ({ node, level }) => {
  const [expanded, setExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div className="flex items-start gap-2 py-2">
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 p-0.5 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
          >
            {expanded ? (
              <ChevronDown size={18} className="text-gray-600" />
            ) : (
              <ChevronRight size={18} className="text-gray-600" />
            )}
          </button>
        )}
        {!hasChildren && <div className="w-6" />}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-medium text-sm leading-relaxed ${
                node.isPhase ? 'text-blue-900 font-bold' : 'text-gray-800'
              }`}
            >
              {node.name}
            </span>
            {node.duration && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {node.duration}
              </span>
            )}
            {node.priority && (
              <span className={`text-xs px-2 py-1 rounded border ${getPriorityColor(node.priority)}`}>
                {node.priority}
              </span>
            )}
            {node.hours && (
              <span className="text-xs text-gray-600 flex items-center gap-1">
                <Clock size={12} />
                {node.hours}h
              </span>
            )}
          </div>
        </div>
      </div>

      {expanded && hasChildren && (
        <div className="ml-6 border-l-2 border-gray-200 pl-4">
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            销售单支付方式拆分 - 功能脑图
          </h1>
          <p className="text-gray-600">
            完整的开发任务分解，包含4个阶段、17个任务、48个子任务
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="space-y-1">
            {mindmapData.map((node) => (
              <TreeNode key={node.id} node={node} level={0} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">开发阶段</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-orange-600">17</div>
            <div className="text-sm text-gray-600">主要任务</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-red-600">48</div>
            <div className="text-sm text-gray-600">子任务</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">~50h</div>
            <div className="text-sm text-gray-600">总工时</div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">优先级说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-red-100 text-red-700 border border-red-300">P0</span>
              <span className="text-gray-700">关键任务 - 必须完成</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 border border-orange-300">P1</span>
              <span className="text-gray-700">重要任务 - 优先完成</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 border border-yellow-300">P2</span>
              <span className="text-gray-700">可选任务 - 后续完成</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
