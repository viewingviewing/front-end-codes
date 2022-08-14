function duplicationCheck() {
    var users = ["뷰잉뷰잉", "UMC"];
    var user_nickName = document.getElementById("nickName").value;

    for(var i=0; i < users.length; i++) {
        if (user_nickName == users[i]) {
            //document.getElementById("nickName").value = "";
            return warning.innerHTML = "이미 존재하는 닉네임입니다.";
        }
    }
}