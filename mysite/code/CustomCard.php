<?php
class CustomCard extends DataObject {

	private static $db = array(
		"RecipientName" => "Text",
		"RecipientEmail" => "Text",
		"SenderName" => "Text",
		"Message" => "Text",
		"ChosenGlobe" => "Text",
		"URLSegment" => "Text",
	
	);

	private static $has_one = array(
	);
	
	private function AbsoluteLink(){
		
		$card_holder = DataObject::get_one('CardPage');	
		$card_url = $card_holder->AbsoluteLink().'view/'.$this->ID;
		
		return $card_url;
	}

}
