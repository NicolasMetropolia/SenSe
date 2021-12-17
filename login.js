function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "admin" && password == "metropolia")
    {
        alert("Successful login");
        window.location.href ("home.html");
        return;
    }
    else
    {
        alert("Login failed, wrong username or password")
    }
}

function showPassW()
{
    var x = document.getElementById("password");
    if (x.type === "password")
    {
        x.type = "text";
    } else
    {
        x.type = "password";
    }
}
