<?php
class HomePage extends Page {

	private static $db = array(
	);

	private static $has_one = array(
	);

}
class HomePage_Controller extends Page_Controller {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	private static $allowed_actions = array (
	
		//'email_from_president' => 'ADMIN'
	
	);

	public function init() {
		parent::init();
	}
	
	public function emailFromPresident(){
	
			    $email = new Email(); 
			    $email->setTo($card->RecipientEmail); 
			    $email->setFrom('Sally and Ken Mason <president@uiowa.edu>'); 
			    $email->setSubject('Someone Sent You a Holiday Greeting!'); 
			    $email->setBody($body); 
			    
			    
			    //$email->send();  
		
		
		
	}
	

}