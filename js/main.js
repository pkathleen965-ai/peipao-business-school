// 陪跑者官网 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    initMobileMenu();
    
    // 表单提交处理
    initFormSubmission();
    
    // 平滑滚动
    initSmoothScroll();
    
    // FAQ 折叠交互
    initFaqToggle();
    
    // 订阅表单
    initSubscribeForm();
});

// 移动端菜单切换
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切换汉堡图标
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // 点击遮罩关闭菜单
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }
}

// 表单提交处理
function initFormSubmission() {
    const form = document.getElementById('diagnosis-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                company: formData.get('company'),
                contact: formData.get('contact'),
                problem: formData.get('problem'),
                submitTime: new Date().toISOString()
            };
            
            // 简单的验证
            if (!data.name || !data.company || !data.contact) {
                alert('请填写必填信息');
                return;
            }
            
            // 这里可以添加AJAX提交逻辑
            // 现在使用localStorage模拟保存
            const submissions = JSON.parse(localStorage.getItem('diagnose_submissions') || '[]');
            submissions.push(data);
            localStorage.setItem('diagnose_submissions', JSON.stringify(submissions));
            
            // 跳转到成功页面
            window.location.href = 'success.html';
        });
    }
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// FAQ 折叠交互
function initFaqToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const heading = item.querySelector('h4');
        const content = item.querySelector('p');
        
        if (heading && content) {
            heading.addEventListener('click', function() {
                // 关闭其他项
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('p');
                    if (otherItem !== item && otherContent) {
                        otherItem.classList.remove('active');
                        otherContent.style.display = 'none';
                    }
                });
                
                // 切换当前项
                item.classList.toggle('active');
                content.style.display = item.classList.contains('active') ? 'block' : 'none';
            });
            
            // 初始化为折叠状态
            content.style.display = 'none';
        }
    });
}

// 订阅表单
function initSubscribeForm() {
    const subscribeForm = document.getElementById('subscribe-form');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(subscribeForm);
            const email = formData.get('email');
            
            if (!email) {
                alert('请输入邮箱地址');
                return;
            }
            
            // 保存订阅数据
            const subscriptions = JSON.parse(localStorage.getItem('email_subscriptions') || '[]');
            subscriptions.push({
                email: email,
                subscribeTime: new Date().toISOString()
            });
            localStorage.setItem('email_subscriptions', JSON.stringify(subscriptions));
            
            alert('订阅成功！我们会定期发送最新文章到您的邮箱。');
            subscribeForm.reset();
        });
    }
}

// 工具函数：获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 工具函数：设置Cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

// 工具函数：获取Cookie
function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// 埋点函数（模拟）
function trackEvent(eventName, eventData) {
    console.log('Track Event:', eventName, eventData);
    // 这里可以添加实际的埋点代码
    // 例如：_hmt.push(['_trackEvent', ...]);
}

// 页面浏览埋点
function trackPageView(pageName) {
    trackEvent('page_view', { page: pageName });
}

// 按钮点击埋点
function trackButtonClick(buttonName, pageName) {
    trackEvent('button_click', { button: buttonName, page: pageName });
}