---
name: google-stitch
description: "Google Stitch 专用 UI 提示词生成器。支持小程序/App 系统级适配（胶囊区、安全区），并将已审计的 PRD 逻辑转化为 Stitch 布局组件描述。"
argument-hint: "PRD 路径或页面功能简要"
allowed-tools: Read, Write, Skill, Glob
---

# Google Stitch AI 提示词生成器 v1.1

## 核心设计原则
1. **系统层优先 (System Layer First)**：强制预留状态栏、小程序胶囊区、底部安全区，防止 UI 遮挡。
2. **组件化描述 (Component-Based)**：使用 Google Stitch 偏好的 Flexbox/Grid 逻辑描述，而非图层。
3. **逻辑对齐 (PRD Alignment)**：生成前必须读取 `[Audit-Refined]` 标记的 PRD，确保 UI 逻辑与文档 100% 一致。

## 全局系统规范 (Mobile & Mini-Program)
- **小程序胶囊区 (Capsule)**：顶部右侧预留 `87px * 32px` 避让区（右距 7px），导航标题不得与之重叠。
- **状态栏 (Status Bar)**：顶部预留 `44px` (iOS) 或 `24px` (Android) 信号栏占位。
- **底部安全区 (Safe Area)**：移动端底部强制预留 `34px` 空间，所有固定操作按钮必须置于此区域上方。
- **PC端规范**：画布宽度固定 `1440px`，主内容区 `1200px` 居中，侧边栏宽度建议 `200-240px`。

## 执行流程
1. **上下文读取**：调用 `Read` 读取 PRD 和现有的 `figma-make-ai-*.md` 文件。
2. **规格转换**：将旧的 Figma 描述迁移至 Google Stitch 布局协议，补齐胶囊区和安全区逻辑。
3. **需求对照**：根据 `prd-auditor` 的审计结果，对比并更新缺失的页面（如：降级页、空状态、二次确认弹窗）。
4. **增量写回**：将结果保存至 `docs/plans/google-stitch-*.md`。

## 提示词输出结构模板

### [页面名称] - Google Stitch Prompt

**【Stitch Layout Engine 强制约束】**
- Viewport: [375px / 1440px]
- System Area: [必须标注：已预留右侧胶囊避让区 / 已预留底部34px安全区]
- Scrolling: Main Content area scroll-y, Navigation bars static

**页面描述：** [一句话说明用途，引用 PRD 模块]

**组件层级 (Component Hierarchy):**
1. **System_Layer**: Status Bar + Capsule Menu Placeholder (87x32px)
2. **Header_Nav**: Height 44px, Center: Title, Left: Back Action
3. **Scrollable_Body**: 
   - [Component A]: Props, spacing, and text style mapping.
   - [Component B]: Data fields and logic defined in PRD.
4. **Bottom_Safety_Bar**: Height (Action_Button_Height + 34px Safe Area).

**交互逻辑 (Interaction):**
- **Trigger**: [来源操作]
- **States**: [Normal / Loading / Empty / Error]
- **Logic**: [严格遵循 PRD 定义的跳转或反馈]

**视觉变量 (Visual Tokens):**
- Colors: Primary #xxxxxx, Dangerous #xxxxxx
- Safe_Insets: bottom-34px
