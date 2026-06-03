#!/bin/bash
# 内容安全内参 - 自动更新脚本
# 由小艺Claw触发，每月1号凌晨2点自动执行

set -e

WEBSITE_DIR="$HOME/.openclaw/workspace/repo/content-security-website"
LOG_FILE="$WEBSITE_DIR/update.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "开始自动更新内容安全内参网站"
log "=========================================="

cd "$WEBSITE_DIR"

# 1. Pull 最新代码
log "拉取最新代码..."
git pull origin main 2>&1 || log "拉取失败，可能无远程变更"

# 2. 通知主 session 由 AI 执行内容更新
log "内容更新需由小艺Claw主agent执行联网搜索后刷新"
log "请运行: 小艺，请刷新内容安全内参网站数据"

log "=========================================="
log "自动更新脚本完成 - 内容更新触发指令已发出"
log "=========================================="
