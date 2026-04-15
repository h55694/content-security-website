#!/bin/bash

# 内容安全内参 - 定时任务设置脚本
# 设置每月自动更新网站内容

set -e

echo "=========================================="
echo "内容安全内参 - 定时任务设置"
echo "=========================================="
echo ""

# 检查是否有 root 权限
if [ "$EUID" -ne 0 ]; then
    echo "提示：需要 root 权限来设置系统 cron 任务"
    echo "正在使用 OpenClaw 的 cron 功能..."
    echo ""
fi

# 获取脚本路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
UPDATE_SCRIPT="$SCRIPT_DIR/update-content.sh"

# 确保 update-content.sh 有执行权限
chmod +x "$UPDATE_SCRIPT"

echo "更新脚本位置: $UPDATE_SCRIPT"
echo ""

# 使用 OpenClaw 的 cron 功能
echo "正在设置 OpenClaw 定时任务..."
echo ""

# 每月1号凌晨2点执行更新
openclaw cron add "0 2 1 * *" "$UPDATE_SCRIPT" --label "content-security-monthly-update"

if [ $? -eq 0 ]; then
    echo "✅ 定时任务设置成功！"
    echo ""
    echo "定时任务详情："
    echo "  - 执行时间：每月1号凌晨2点"
    echo "  - 执行脚本：$UPDATE_SCRIPT"
    echo "  - 日志文件：$SCRIPT_DIR/update.log"
    echo ""
    echo "查看定时任务："
    echo "  openclaw cron list"
    echo ""
    echo "手动执行更新："
    echo "  $UPDATE_SCRIPT"
    echo ""
    echo "查看更新日志："
    echo "  tail -f $SCRIPT_DIR/update.log"
else
    echo "❌ 定时任务设置失败"
    echo ""
    echo "请手动设置定时任务："
    echo "1. 编辑 crontab：crontab -e"
    echo "2. 添加以下行："
    echo "   0 2 1 * * $UPDATE_SCRIPT"
    echo ""
    echo "或者使用 OpenClaw cron 命令："
    echo "   openclaw cron add '0 2 1 * *' '$UPDATE_SCRIPT'"
fi

echo ""
echo "=========================================="
echo "设置完成"
echo "=========================================="
