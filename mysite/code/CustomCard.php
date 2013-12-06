<?php
class CustomCard extends DataObject {

	private static $db = array(

		"SenderName" => "Text",
		"Approved" => "Boolean"
	
	);

	private static $has_one = array(
		"Image" => "Image"
	);

	private static $summary_fields = array('SenderName', 'Image');
	
	public function AbsoluteLink(){
		
		$card_holder = DataObject::get_one('CardPage');	
		$card_url = $card_holder->AbsoluteLink().'view/'.$this->ID;
		
		return $card_url;
	}

}
