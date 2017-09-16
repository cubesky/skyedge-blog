<?php
header("Content-Encoding: gzip");
header("Content-Length: ".filesize('10G.gzip'));

//Turn off output buffering
if (ob_get_level()) ob_end_clean();

readfile('10G.gzip');
?>