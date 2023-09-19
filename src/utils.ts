export function sendEmail(user: string, email: string, payload: string) {

    const title = 'os2edu社区建设意见'
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.maodouketang.com/api/v1/email", true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    let time = new Date().toLocaleString();
    let con = "";
    con += "用户:" + user + "<br>\n";
    con += "联系邮箱:" + email + "<br>\n";
    con += "发送时间:" + time + "<br>\n";
    con += "发送内容:" + "<br>\n";
    con += payload;

    const body = [
      {
        userName: user,
        email: "limingth@qq.com",
        title: title,
        content: con
      }
    ];

    xhttp.send(JSON.stringify(body));

}