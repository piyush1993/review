<?php
$con =mysqli_connect("localhost","root","","review");
$result = mysqli_query($con, "select * from signup");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>