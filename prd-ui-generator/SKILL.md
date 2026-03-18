---
name: prd-ui-generator
description: 生成可长期演进的原型（包含UI Schema + React页面）- 根据PRD文档生成完整的React项目结构
argument-hint: "PRD文档路径（绝对路径）"
allowed-tools: Skill, Write, Glob, Bash, Read, Grep
---

# 原型生成器 V2

根据 PRD 文档生成完整的 React + Tailwind 原型项目，支持长期迭代。

**输出目录**：`docs/ui-html/`
**样式主题**：默认蓝色主题
**数据获取**：本地 JSON 文件模拟
**页面范围**：按 PRD 文档中的页面清单生成（平台后台/商家后台/小程序）

---

## 核心原则

- **Schema 是最重要的** - 结构化数据优先于代码
- **React 只是渲染结果** - 可随时替换
- **支持 100+ 页面扩展** - 模块化设计

---

## 输出结构

```
project-name/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── layouts/
    │   └── AdminLayout.jsx
    └── pages/
        ├── 模块名/
        │   ├── list/
        │   │   ├── index.jsx
        │   │   └── schema.json
        │   └── detail/
        │       ├── index.jsx
        │       └── schema.json
        └── ...
```

---

## 工作流程

### 1. 读取 PRD 文档

分析文档中的：
- 页面清单（UI 页面清单章节）
- 功能说明
- 交互要点
- 字段定义

### 2. 生成 UI Schema

每个页面生成 `schema.json`：

```json
{
  "name": "页面名称",
  "path": "/path",
  "description": "页面描述",
  "modules": [
    {
      "type": "组件类型",
      "props": {
        "字段": "值"
      }
    }
  ]
}
```

### 3. 生成 React 页面

- 使用 React 18 + Vite + Tailwind CSS
- 使用 lucide-react 图标
- 遵循现有组件模式
- 包含完整的交互逻辑

### 4. 配置路由

在 App.jsx 中配置路由：

```jsx
<Route path="/admin" element={<AdminLayout />}>
  <Route path="wxapp" element={<WxappList />} />
  <Route path="wxapp/create" element={<WxappDetail />} />
  <Route path="wxapp/:id" element={<WxappDetail />} />
</Route>
```

---

## 常见页面模板

> ⚠️ 以下为默认模板，**实际生成时必须遵循 PRD 文档的交互描述**

### 列表页（默认结构）

- 页面头部（标题 + 描述 + 新增按钮）
- 数据表格（支持分页）
- 删除确认弹窗
- **搜索栏/筛选器**：仅当 PRD 明确列出时添加

### 详情页（默认结构）

- 页面头部（返回按钮）
- 表单（输入框、开关、下拉选择）
- 操作按钮组

> ⚠️ **编辑交互**：根据 PRD 选择 - 可为弹窗表单或跳转详情页

### 状态降级页

- 大图标 + 标题 + 描述
- 返回按钮

---

## 运行项目

```bash
cd <project-path>
npm install
npm run dev
```

---

## 强制功能补全规则

当 PRD 文档**未明确列出**功能时，按以下规则补全。**如果 PRD 文档已明确列出，则遵循 PRD**：

### 列表页自动补全（如 PRD 未明确列出）
- **新增按钮**：页面右上角必须有"新增"按钮
- **编辑按钮**：每行必须有"编辑"操作
- **删除按钮**：每行必须有"删除"操作，带二次确认弹窗
- **分页**：表格底部必须有分页组件（每页 10/20/50 条）
- **加载状态**：仅当 PRD 明确要求时显示 Loading
- **空状态**：无数据时显示"暂无数据"提示
- **错误处理**：请求失败时显示错误提示

> ⚠️ **搜索栏、筛选器** - 仅当 PRD 明确列出时才添加

### 详情页自动补全（如 PRD 未明确列出）
- **返回按钮**：页面左上角必须有返回按钮
- **保存按钮**：底部必须有"保存"按钮，提交表单
- **表单校验**：必填字段必须有红色星号标识
- **字段完整性**：基本字段（名称、状态、排序、创建时间）必须包含
- **操作反馈**：保存成功/失败必须有 Toast 提示

> ⚠️ **重置按钮** - 仅当 PRD 明确要求时才添加

### 所有页面必须包含
- **空数据状态**：列表为空时必须显示空状态提示
- **错误处理**：接口报错时必须显示错误信息

## 注意事项

1. **不要使用不存在的图标** - lucide-react 中没有 Wechat，使用 Smartphone 替代
2. **不要混用组件库** - 使用纯 Tailwind 实现布局
3. **Schema 与代码分离** - 便于后期自动化生成
4. **包含完整交互** - 表单提交、弹窗、状态切换等
5. **遵循 PRD 优先** - 生成时必须严格遵循 PRD 文档的交互描述，强制补全规则仅在 PRD 未明确时才生效
