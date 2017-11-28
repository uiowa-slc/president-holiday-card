<?php

class Submission extends DataObject {

	private static $db = array(
		'From' => 'Varchar(254)',
		'EmailAddress' => 'Varchar(254)',
		'Approved' => 'Boolean'
	); 

	private static $has_one = array(
		'Photo' => 'Image'
	);

	private static $summary_fields = array(
		'From',
		'EmailAddress',
		'Photo.CMSThumbnail',
		'Created'
	);

	private static $better_buttons_actions = array (
        'approve',
        'deny'
    );

	public function getCMSFields(){

		$f = parent::getCMSFields();

		$f->addFieldToTab('Root.Main', LiteralField::create('Link','<a href="'.$this->Link().'">'.$this->AbsoluteLink().'</a>'));

		return $f;
	}
    public function canView($member = null) {
    	if( Permission::check('CMS_ACCESS_CMSMain', 'any', $member) || $this->Approved){
    		return true;
    	}
        return false;
    }
	public function AbsoluteLink(){
		$url = Director::absoluteBaseURL().'submissions/view/'.$this->ID;
		return $url;		
	}
	public function Link(){
		$url = Director::baseURL().'submissions/view/'.$this->ID;
		return $url;		
	}
	public function CMSLink(){
		$url = Director::absoluteBaseURL().'admin/submissions/Submission/EditForm/field/Submission/item/'.$this->ID.'/edit';

		return $url;
	}

	public function isApproved(){
		return $this->Approved;
	}
		
    public function approve() {
        $this->Approved = true;
        //$this->sendApprovalEmail();
        $this->write();
    }

    public function deny() {
        $this->Approved = false;
        $this->write();
    }
    public function getBetterButtonsActions() {
        $fields = parent::getBetterButtonsActions();
        if($this->Approved) {
            $fields->push(BetterButtonCustomAction::create('deny', 'Deny'));
        }
        else {
            $fields->push(BetterButtonCustomAction::create('approve', 'Approve'));
        }
        return $fields;
    }
	public function onBeforeWrite() {
	    // check on first write action, aka "database row creation" (ID-property is not set)
	    parent::onBeforeWrite();
	  }	
}