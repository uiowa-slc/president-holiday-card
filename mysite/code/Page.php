<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	function get_user_browser() { 
		
	}
	

		
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
		"doCreateCard",
		"usingIE8orLess",
		"CardForm",
		"doCreateCard"
	);
	
	function usingIE8OrLess(){
		$browser = new Browser();
		//print_r($browser);
	    if( $browser->getBrowser() == Browser::BROWSER_IE && $browser->getVersion()  <= 8 ) {
	    	return true;
	    }else{
		    return false;
	    }
	}
	
	public function doCreateCard($data,$form){
		$base = Director::baseURL();

		$card = new CustomCard();
		$form->saveInto($card);
		$card->write();
		
		//Send card email and redirect to the card
		if($card){
			if($card->SenderEmail){
				$body = 'Someone has submitted a greeting card to the President\'s 2013 Holiday Card site <br />

						 <a href="'.$base.'admin/cards/CustomCard?q%5BSenderName%5D=&q%5BSenderEmail%5D=&q%5BApproved%5D=0&action_search=Apply+Filter">View all unapproved cards</a> <br />
				';
			    
		        $email = new Email(); 
			    $email->setTo('dustin-quam@uiowa.edu; ann-goff@uiowa.edu'); 
			    $email->setFrom('The University of Iowa Office of the President<no-reply@uiowa.edu>'); 
			    $email->setSubject('Someone submitted a greeting card'); 
			    $email->setBody($body); 
			    $email->send();  
			    $this->redirect($base.'thanks/');
			}
			
		}

	}
	
	public function CardForm() {
		$form = new CardForm($this, "CardForm"); 
		$protector = SpamProtectorManager::update_form($form, 'Message');
	    return $form;
	}
	

	public function init() {
		parent::init();

		$stylesheets = array();
		$themeDir = $this->owner->ThemeDir();
		$baseFolder = Director::baseFolder();

		$stylesheets[] = 'themes/bootstrap3/css/bootstrap.css';
		$stylesheets[] = $themeDir . "/vendor/flexslider/flexslider.css";
	    $stylesheets[] = $themeDir . "/css/site.css";

	   
	    Requirements::set_combined_files_folder($themeDir. '/_combined');
		Requirements::combine_files('allStyles.css', $stylesheets);

		$scripts = array();
		
		$scripts[] = $themeDir . "/vendor/jquery-1.10.2.js";
		$scripts[] = 'themes/bootstrap3/js/bootstrap.js';
		$scripts[] = $themeDir . "/vendor/jplayer/jquery.jplayer.min.js";
		$scripts[] = $themeDir . "/js/script.js";

		
		Requirements::combine_files('allScripts.js', $scripts);

	}

	public function customCards(){
		$cards = CustomCard::get()->filter('Approved', '1')->sort('RAND()');

		return $cards;

	}

}