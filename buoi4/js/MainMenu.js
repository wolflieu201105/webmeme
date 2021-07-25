//HTML Template: tạo bộ khung ban đầu cho component
// tên biến có $ => trỏ vào 1 DOM
const $template = document.createElement('template');
$template.innerHTML = `
    <div class = "main-menu">
        <div class="menu-item"><a href="index.html">Trang chủ</a></div>
        <div class="menu-item"><a href="about.html">Giới thiệu</a></div>
        <div class="menu-item"><a href="contact.html">Liên hệ</a></div>
        <div class="menu-item"><a href="help.html">Trợ giúp</a></div>
    </div>
`;

//DOM
export default class MainMenu extends HTMLElement{
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true)); //trong tài liệu tham khảo
    }

    connectedCallback() {
        console.log('main menu xuất hiện trên trang web');
    }

    disconnectedCallback() {
        console.log('main menu bị xóa khỏi trang web');
    }
}

// Custom Element: tự tạo một thẻ với tên tự chọn

window.customElements.define('main-menu', MainMenu);