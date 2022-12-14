<?php 
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'localhost'; /*'sql.freesqldatabase.com';*/
		private $dbname = 'yoga form'; /*'sql6584432';*/
		private $user = 'root'; /*'sql6584432';*/
		private $pass = ''; /*CNGlxjUYqz';*/

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
	}
 ?>