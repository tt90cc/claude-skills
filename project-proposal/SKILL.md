---
name: project-proposal
description: "面向客户的软件产品功能方案生成技能。自动基于 Claude Code 上下文中的产品规划与方案内容，生成结构清晰、图标友好、美观的 HTML 功能方案文档。适用于各类软件与数字化解决方案。"
---

# 软件产品功能方案生成器（客户展示版）

面向客户的软件产品功能方案生成技能。
自动基于 Claude Code 上下文中的产品规划与方案内容，
生成结构清晰、图标友好、美观的 HTML 功能方案文档。
适用于各类软件与数字化解决方案，不限 AI 领域。

---

## 使用说明

### 何时使用此 Skill

当用户需要以下内容时，使用此 Skill：
- 生成面向客户的软件产品功能方案文档
- 将技术方案转化为客户可理解的业务方案
- 创建产品演示材料或售前文档
- 整理产品功能架构和模块说明

### 使用方式

#### 触发方式

用户可以通过以下方式触发此 Skill：
- 直接请求："帮我生成客户方案"、"写一个产品功能文档"
- 描述需求："我需要向客户展示这个产品的功能"
- 使用 Skill 命令：`/project-proposal`

#### 上下文要求

此 Skill 会从以下来源提取信息：
- **产品名称**: 从 Claude Code 当前上下文中识别
- **客户业务背景**: 从需求描述、对话或方案说明中提取
- **解决方案定位**: 从整体规划与目标中总结
- **规划内容**: 从已有方案、要点或讨论中自动归纳

---

## 输出格式

HTML（适合导出 PDF，内容宽度 1000px）

---

## 核心指令

你是一名资深售前解决方案顾问 + 产品专家。
请基于 Claude Code 当前上下文内容，
自动整理并生成一份【面向客户的软件产品功能方案】HTML 文档。

### 整体写作原则

- 面向客户业务视角，而非技术或实现视角
- 强调"能解决什么问题""带来什么价值"
- 不假设客户具备技术背景
- 使用 emoji 作为视觉图标，风格专业、克制、美观
- 表达清晰、可信，适合正式方案场景
- **HTML 输出要求**：内容宽度固定 1000px，居中显示，适合导出 PDF
- **视觉设计**：使用现代化 CSS 样式，包含渐变色、卡片式布局、阴影效果

---

## 文档结构要求

### 1️⃣ 方案概述

- 📌 产品名称
- 🏢 适用业务场景
- 🎯 方案目标
- 🌟 客户核心收益

### 2️⃣ 整体功能架构

- 以模块化方式描述系统能力
- 每个模块使用一个清晰的 emoji 图标
- 模块命名采用"客户可感知能力"而非技术名词

示例：
- 🧭 业务全流程可视化管理
- 🤝 多角色协同与沟通支持
- ⚙️ 自动化流程与智能辅助

### 3️⃣ 核心功能模块说明（重点）

对每个核心模块，使用统一结构：

#### 🔹 模块名称

**模块价值说明**
- 用通俗语言说明该模块解决的业务问题

**主要能力**
- ✅ 能力点 1（描述业务结果）
- ✅ 能力点 2
- ✅ 能力点 3

**客户收益**
- 📈 提升效率
- 💰 降低成本
- 😊 改善体验
（按实际情况选择）

### 4️⃣ 智能化与自动化能力亮点

- ⚙️ 系统在关键流程中的自动化支持
- 🧠 辅助决策、减少人工操作、降低出错风险
- 不涉及算法、模型或技术实现细节

### 5️⃣ 方案优势总结

- ⭐ 业务层面的核心优势
- 🧩 灵活配置与可扩展能力
- 🔒 稳定可靠，支持长期演进

### 6️⃣ 结语

- 🤝 合作价值与落地前景总结
- 🚀 后续功能扩展与深化方向

---

## 输出限制

- 仅输出最终 HTML 文档内容
- 不输出任何解释、推理或过程说明
- 确保中文内容正确编码（UTF-8）
- HTML 必须包含完整的 `<style>` 标签和响应式设计
- 内容宽度固定为 1000px，居中显示
- 使用现代化 CSS（渐变、卡片布局、阴影效果）
- 添加 `@media print` 样式以支持 PDF 导出

---

## 示例输出模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[产品名称] 功能方案</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 50px;
            text-align: center;
        }

        .header h1 {
            font-size: 42px;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .header .subtitle {
            font-size: 20px;
            opacity: 0.95;
        }

        .content {
            padding: 50px;
        }

        .section {
            margin-bottom: 50px;
        }

        .section-title {
            font-size: 32px;
            color: #667eea;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
            font-weight: 600;
        }

        .card {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }

        .info-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .info-label {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }

        .info-value {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }

        .module-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 25px;
        }

        .module-item {
            background: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .module-item:hover {
            transform: translateY(-5px);
        }

        .module-icon {
            font-size: 48px;
            margin-bottom: 15px;
        }

        .module-name {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }

        .feature-card {
            background: white;
            border-radius: 15px;
            padding: 35px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
            border: 2px solid #f0f0f0;
        }

        .feature-title {
            font-size: 24px;
            color: #667eea;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .feature-value {
            background: #f8f9ff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            color: #555;
            line-height: 1.8;
        }

        .ability-list {
            list-style: none;
            margin-bottom: 20px;
        }

        .ability-item {
            padding: 12px 0;
            padding-left: 35px;
            position: relative;
            color: #444;
            font-size: 16px;
        }

        .ability-item:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
            font-size: 20px;
        }

        .benefit-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }

        .benefit-item {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 15px;
        }

        .highlight-list {
            list-style: none;
        }

        .highlight-item {
            background: white;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 10px;
            border-left: 5px solid #667eea;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .advantage-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .advantage-item {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .advantage-icon {
            font-size: 36px;
            margin-bottom: 12px;
        }

        .advantage-text {
            font-size: 16px;
            font-weight: 500;
        }

        .footer {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 50px;
            text-align: center;
        }

        .footer p {
            margin-bottom: 15px;
            font-size: 17px;
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            .section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>[产品名称] 功能方案</h1>
            <p class="subtitle">数字化转型 · 智能升级 · 价值创造</p>
        </div>

        <div class="content">
            <!-- 1️⃣ 方案概述 -->
            <div class="section">
                <h2 class="section-title">1️⃣ 方案概述</h2>
                <div class="card">
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">📌 产品名称</div>
                            <div class="info-value">[产品名称]</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">🏢 适用场景</div>
                            <div class="info-value">[场景描述]</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">🎯 方案目标</div>
                            <div class="info-value">[目标说明]</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">🌟 核心收益</div>
                            <div class="info-value">[收益说明]</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2️⃣ 整体功能架构 -->
            <div class="section">
                <h2 class="section-title">2️⃣ 整体功能架构</h2>
                <div class="module-list">
                    <div class="module-item">
                        <div class="module-icon">🧭</div>
                        <div class="module-name">[模块名称 1]</div>
                    </div>
                    <div class="module-item">
                        <div class="module-icon">🤝</div>
                        <div class="module-name">[模块名称 2]</div>
                    </div>
                    <div class="module-item">
                        <div class="module-icon">⚙️</div>
                        <div class="module-name">[模块名称 3]</div>
                    </div>
                </div>
            </div>

            <!-- 3️⃣ 核心功能模块说明 -->
            <div class="section">
                <h2 class="section-title">3️⃣ 核心功能模块说明</h2>

                <div class="feature-card">
                    <div class="feature-title">🔹 [模块 1 名称]</div>
                    <div class="feature-value">
                        <strong>模块价值说明：</strong>[说明该模块解决的业务问题]
                    </div>
                    <div style="margin-bottom: 15px;"><strong>主要能力：</strong></div>
                    <ul class="ability-list">
                        <li class="ability-item">[能力点 1]</li>
                        <li class="ability-item">[能力点 2]</li>
                        <li class="ability-item">[能力点 3]</li>
                    </ul>
                    <div style="margin: 20px 0 15px 0;"><strong>客户收益：</strong></div>
                    <div class="benefit-grid">
                        <div class="benefit-item">📈 [收益 1]</div>
                        <div class="benefit-item">💰 [收益 2]</div>
                        <div class="benefit-item">😊 [收益 3]</div>
                    </div>
                </div>
            </div>

            <!-- 4️⃣ 智能化与自动化能力亮点 -->
            <div class="section">
                <h2 class="section-title">4️⃣ 智能化与自动化能力亮点</h2>
                <ul class="highlight-list">
                    <li class="highlight-item">
                        ⚙️ <strong>自动化流程：</strong>[自动化说明]
                    </li>
                    <li class="highlight-item">
                        🧠 <strong>智能辅助：</strong>[智能辅助说明]
                    </li>
                </ul>
            </div>

            <!-- 5️⃣ 方案优势总结 -->
            <div class="section">
                <h2 class="section-title">5️⃣ 方案优势总结</h2>
                <div class="advantage-grid">
                    <div class="advantage-item">
                        <div class="advantage-icon">⭐</div>
                        <div class="advantage-text">[优势 1]</div>
                    </div>
                    <div class="advantage-item">
                        <div class="advantage-icon">🧩</div>
                        <div class="advantage-text">[优势 2]</div>
                    </div>
                    <div class="advantage-item">
                        <div class="advantage-icon">🔒</div>
                        <div class="advantage-text">[优势 3]</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>🤝 [合作价值总结]</p>
            <p>🚀 [未来扩展方向]</p>
        </div>
    </div>
</body>
</html>
```

---

## 完成标准

使用此 Skill 生成的方案文档应满足：

- [ ] 包含完整的 6 个部分结构
- [ ] 所有模块都有清晰的价值说明
- [ ] 使用客户可理解的语言，避免技术术语
- [ ] emoji 图标风格统一、使用恰当
- [ ] 客户收益明确、具体
- [ ] 文档排版清晰、层次分明
- [ ] 符合输出限制要求（UTF-8 编码，无过程说明）
- [ ] HTML 格式正确，包含完整 CSS 样式
- [ ] 内容宽度为 1000px，居中显示
- [ ] 包含现代化视觉设计（渐变、卡片、阴影）
- [ ] 支持 PDF 导出（包含 @media print 样式）
