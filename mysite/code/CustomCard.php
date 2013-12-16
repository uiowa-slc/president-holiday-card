<?php
class CustomCard extends DataObject {

	private static $db = array(

		"SenderName" => "Text",
		"SenderEmail" => "Text",
		"Approved" => "Boolean"
	
	);

	private static $has_one = array(
		"Image" => "Image"
	);

	private static $searchable_fields = array (
		"SenderName", "SenderEmail", "Approved"

	);
	private static $summary_fields = array('SenderName', 'SenderEmail', 'Thumbnail', 'Approved');

	function getThumbnail() { 
      return $this->Image()->CMSThumbnail(); 
   	}
	
	public function Link(){
		
		$card_holder = DataObject::get_one('CardPage');	
		$card_url = $card_holder->AbsoluteLink().'view/'.$this->ID;
		
		return $card_url;
	}

	public function onAfterWrite(){

		$approved = $this->Approved;

		if($approved == true){

				$email = new Email(); 
			    $email->setTo($this->SenderEmail); 
			    $email->setFrom('The University of Iowa <no-reply@uiowa.edu>'); 
			    $email->setSubject('Your Greeting Card is Finished!'); 
			    $email->setBody('The link will go here.'); 
			    $email->send();  

		}

		parent::onAfterWrite();


	}

}
