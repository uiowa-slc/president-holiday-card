<?php
class CardPage extends Page {

	private static $db = array(
		"Message1" => "Text",
		"Message2" => "Text",
		"Message3" => "Text"
	);

	private static $has_one = array(
	);
	
	public function getCMSFields(){
		$fields = parent::getCMSFields();	
		
		$fields->removeFieldFromTab("Root.Main", "Content");
		
		$fields->addFieldToTab("Root.Main", new TextField("Message1"));
		$fields->addFieldToTab("Root.Main", new TextField("Message2"));
		$fields->addFieldToTab("Root.Main", new TextField("Message3"));
		
		return $fields;
		
	}

}
class CardPage_Controller extends Page_Controller {

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
		"view",
		"preview",
		"CardForm",
		"doCreateCard",
		"index"
	);
	private static $url_handlers = array(
        'view/$ID' => 'view'
    );

	public function init() {
		parent::init();
	}

	public function index(){
		$this->redirect(Director::AbsoluteBaseURL());
	}
	

	public function view($request){
		$card_id = htmlspecialchars($request->param('ID'));
		//$card = DataObject::get_by_id("CustomCard",$card_id);
		//$card = DataObject::get_one("CustomCard", "'URLSegment' = ".$card_id."");
	
		$card = CustomCard::get()->filter(array('ID' => $card_id))->First();
		
		if(($card) && ($card->Approved == true)){
			return $this->customise($card)->renderWith(array('CardPage_view', 'Page'));
		}else{
			$this->redirect(Director::AbsoluteBaseURL());
			
		}
	}
	
	public function preview($request){
		$card_id = htmlspecialchars($request->param('ID'));
		$card = CustomCard::get()->filter(array('ID' => $card_id))->First();
		
		if(($card) && (Member::currentUserID())){
			return $this->customise($card)->renderWith(array('CardPage_preview', 'Page'));
		}else{
			$this->redirect(Director::AbsoluteBaseURL());
		}
	}

	
	public function StatusMessage(){
		$message = $this->getRequest()->getVar('message');
		
		if($message == 'sent'){
			return 'Your card was successfully sent! Preview and share it below:';
			print("success");
		}
		
		if($message == 'saved'){
			return 'Your card is saved below. Share it with your loved ones!';
			
		}
				
		
	}
	

}