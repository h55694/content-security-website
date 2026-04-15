// ========================================
// 内容安全内参 - 交互脚本
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // 切换汉堡菜单动画
            this.classList.toggle('active');
        });

        // 点击导航链接后关闭菜单
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // 技术洞察分类筛选
    const categoryBtns = document.querySelectorAll('.category-btn');
    const articleCards = document.querySelectorAll('.article-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;

            // 筛选文章
            articleCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    // 添加淡入动画
                    card.style.animation = 'none';
                    card.offsetHeight; // 触发重排
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 资讯标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const newsPanels = document.querySelectorAll('.news-panel');
    const lawsPanels = document.querySelectorAll('.laws-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新标签状态
            const parent = this.closest('.news-tabs, .laws-tabs');
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const tab = this.dataset.tab;

            // 切换资讯面板
            if (newsPanels.length > 0) {
                newsPanels.forEach(panel => {
                    if (panel.id === `${tab}-panel`) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }

            // 切换法律法规面板
            if (lawsPanels.length > 0) {
                lawsPanels.forEach(panel => {
                    if (panel.id === `${tab}-panel`) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // 向下滚动，隐藏导航栏
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动，显示导航栏
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // 订阅表单处理
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.email-input').value;
            
            if (email) {
                // 模拟提交
                const btn = this.querySelector('.btn-subscribe');
                const originalText = btn.textContent;
                btn.textContent = '订阅中...';
                btn.disabled = true;

                setTimeout(() => {
                    alert('订阅成功！感谢您的关注。');
                    this.querySelector('.email-input').value = '';
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 1000);
            }
        });
    }

    // 懒加载图片（如果有）
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // 返回顶部按钮（可选）
    const createBackToTop = () => {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', '返回顶部');
        btn.style.cssText = `
            position: fixed;
            bottom: 32px;
            right: 32px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--color-primary);
            color: white;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
        `;

        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                btn.style.opacity = '1';
                btn.style.visibility = 'visible';
            } else {
                btn.style.opacity = '0';
                btn.style.visibility = 'hidden';
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    createBackToTop();

    // 文章卡片点击效果
    articleCards.forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加跳转到文章详情页的逻辑
            console.log('文章被点击:', this.querySelector('.card-title').textContent);
        });
    });

    // 新闻项点击效果
    document.querySelectorAll('.news-item').forEach(item => {
        item.addEventListener('click', function() {
            // 这里可以添加跳转到新闻详情页的逻辑
            console.log('新闻被点击:', this.querySelector('.news-title').textContent);
        });
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动菜单
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // 性能优化：防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 窗口大小改变时的处理
    window.addEventListener('resize', debounce(() => {
        // 在大屏幕上关闭移动菜单
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }, 250));

    console.log('内容安全内参网站已加载完成 ✓');
});
