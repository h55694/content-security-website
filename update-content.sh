#!/bin/bash
# 内容安全内参 - 月度自动更新脚本
# 由 cron job 触发，每月1号凌晨2点自动执行
# 依赖 GitHub token 已配置在 git remote origin URL 中

set -e

WEBSITE_DIR="/home/sandbox/.openclaw/workspace/repo/content-security-website"
LOG_FILE="$WEBSITE_DIR/auto-update.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "内容安全内参 - 月度更新启动"
log "=========================================="

cd "$WEBSITE_DIR"

# 1. 拉取最新代码，避免冲突
log "步骤1: 拉取最新代码..."
git pull origin main 2>&1 | tee -a "$LOG_FILE" || log "git pull 完成（可能无变更）"

# 2. 获取当前月份信息
MONTH=$(date '+%Y年%m月')
log "当前月份: $MONTH"

# 3. 验证 git remote 配置（已含 token）
REMOTE_URL=$(git remote get-url origin)
if echo "$REMOTE_URL" | grep -q "github.com"; then
    log "Git remote 已配置"
else
    log "ERROR: remote 未配置"
    exit 1
fi

log "=========================================="
log "✅ 环境检查通过，等待主 Agent 执行联网搜索与内容更新"
log "提示: cron job 将自动调用主 session 完成以下工作："
log "  1. 搜索最近一个月内容安全领域最新动态"
log "  2. 更新 index.html 技术洞察6篇文章"
log "  3. 更新安全资讯5条+法律法规模块"
log "  4. commit 并 push 到 GitHub Pages"
log "=========================================="

# 记录文件状态供 AI 参考
echo "--- git status ---" >> "$LOG_FILE"
git status --short >> "$LOG_FILE" 2>&1
echo "--- last commit ---" >> "$LOG_FILE"
git log -1 --oneline >> "$LOG_FILE" 2>&1

log "自动更新脚本执行完毕"
exit 0
