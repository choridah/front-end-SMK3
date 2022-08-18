
<?php 
include "../connects.php";

$fullName=$_POST["fullName"];
$username=$_POST["username"];
$email=$_POST["email"];
$address=$_POST["address"];
$contactNumber=$_POST["contactNumber"];
$company=$_POST["company"];
$password=md5($_POST["password"]);
$refresh_token=null;
$createdAt=DATE();
$updatedAt=DATE();

// menyeleksi data user dengan email dan no_telp yang ada
$result = mysqli_query($connects,"SELECT * FROM users where username='$username'");
$check = mysqli_num_rows($result);
$data = mysqli_fetch_assoc($result);

$sql = "INSERT INTO users (fullName, username, email, address, contactNumber, company, password, refresh_token, createdAt, updatedAt) VALUES ('$fullName', '$username', '$email', '$address', '$contactNumber', '$company', '$password', '$refresh_token', '$createdAt', '$updatedAt')";

$res = mysqli_query($connects, $sql);
if ($res){
	header("location:../../template/Dashboard.js?register=Register success ...");
	exit;
}
else {
	header("location:../../auth/Register.js?message=Save A Member Failed");
	exit;
}
?>