//Tạo mảng chứa các tài khoản
let userAcct = []
//Tao lớp chứa thông tin của một tài khoản
class Account {
    constructor(username, sdt, email, password, XNpass) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.sdt = sdt;
        this.XNpass = XNpass;
    }
}
function DangKi(){
    let name = document.getElementById("username").value
    let Sodt = document.getElementById("sdt").value
    let Email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let xnpass = document.getElementById("XNpass").value

    //kiểm tra hợp lệ
    if (name.trim() === "") // cách bỏ khoảng trắng
    {
        alert("Vui lòng nhập tên đăng nhập")
        return;
    }

    if (name.length < 5 || name.length > 50) //kiểm tra số kí tự có hơn 5 nhỏ hơn 50 kí tự ko
    {
        alert("Tên đăng nhập chưa hợp lệ")
        return;
    }
    if(Sodt.trim() ==="")
    {
        alert("VUi lòng nhập số điện thoại")
        return;
    }



    if (pass.trim() === "") {
        alert("Bạn chưa nhập passwork")
        return;
    }
    let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!regex.test(pass)) {
        alert("Password chưa hợp lệ")
        return;
    }
    if (pass != xnpass) {
        alert("Xác nhận mật khẩu của bạn chưa đúng. Vui lòng nhập lại")
    }

    //Lưu thông tin tìa khoản vào localStrorage
    const userLocal = localStorage.getItem("users")
    //trường hợp key "user chưa tồn tại"
    if (!userLocal) {
        const newUser = new Account(name, Sodt, Email, pass, xnpass);
        userAcct.push(newUser)
        //lưu mangr thông tin vào localStorage
        localStorage.setItem("users", JSON.stringify(userAcct))

        alert("Đăng ký thành công")
    }
    //Trường hợp trong localstrorage đã có tài khoản

    else {
        userAcct = JSON.parse(userLocal)
        const found = userAcct.find((user) => user.username === name)
        if (found) {
            alert("tài khoản đã tồn tại")
            return;
        }
        //nếu không trùng
        const newUser = new Account(name, Sodt, Email, pass, xnpass);
        userAcct.push(newUser)
        //lưu mangr thông tin vào localStorage
        localStorage.setItem("users", JSON.stringify(userAcct))

        alert("Đăng ký thành công")
    }
    
}
function DangNhap(event){
    event.preventDefault();
    let Email = document.getElementById("email").value 
    let pass = document.getElementById("password").value
    if(Email.trim() === " " || pass.trim()===""){
        alert("Chưa nhập Email/Mật Khẩu")
        return;
    }
    //Đối chiếu với các tài khoản đang lưu trong localStorage
    const userLocal = localStorage.getItem("users")
    if(userLocal){
        //Dịch từ JSON qua Javarcript
        const userList = JSON.parse(userLocal)
        const found = userList.find((user) => user.email === Email && user.password === pass)
        if(found){
            alert("Đăng nhập thành công")
            location.href="trangchu.html"
        }
        else{
            alert("Tài khoản không tồn tại")
        }
    }
}

