<?php

class Submission extends DataObject {

	private static $db = array(
		'EmailAddress' => 'Varchar(254)',
		'Approved' => 'Boolean'
	); 

	private static $has_one = array(
		'Photo' => 'Image'
	);

	private static $summary_fields = array(
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
        if($this->Approved) {
            $f->addFieldToTab("Root.Main", new LiteralField("ApprovedMessage",
                "<p class=\"message good\">This post has been approved, <a href='".$this->AbsoluteLink()."' target='_blank'>view it here &rarr;</a></p>"), "EmailAddress");
        }else{
            $f->addFieldToTab("Root.Main", new LiteralField("DeniedMessage",
                "<p class=\"message bad\">This post has NOT been approved,  <a href='".$this->EmailPreviewLink()."' target='_blank'>preview the email sent to the user when it's approved here &rarr;</a></p>"), "EmailAddress");            
        }
		$f->removeByName('Approved');
		$f->addFieldToTab('Root.Main', LiteralField::create('FullSizedImageLink','<a href="'.$this->obj('Photo')->URL.'" target="_blank">View full sized image &rarr;</a>'));

		return $f;
	}
    public function canView($member = null) {
    	if( Permission::check('CMS_ACCESS_CMSMain', 'any', $member) || $this->Approved){
    		return true;
    	}
        return false;
    }
	public function AbsoluteLink(){
		$url = Director::absoluteBaseURL().'home/start/'.$this->ID;
		return $url;		
	}
	public function Link(){
		$url = Director::baseURL().'home/start/'.$this->ID;
		return $url;		
	}
	public function CMSLink(){
		$url = Director::absoluteBaseURL().'admin/submissions/Submission/EditForm/field/Submission/item/'.$this->ID.'/edit';

		return $url;
	}

    public function EmailPreviewLink(){
        $url = Director::baseURL().'submissions/previewEmail/UserApprovalNotification/'.$this->ID;
        return $url;              
    }

	public function isApproved(){
		return $this->Approved;
	}
		
    public function approve() {
        $this->Approved = true;
        $this->sendUserApprovalNotification($this);
        $this->write();
    }

    public function ApprovalEmailBody(){
    	$config = SiteConfig::current_site_config(); 
    	return $config->EmailApprovalText;
    }

    private function sendUserApprovalNotification($submission){
        $adminEmailAddress = Config::inst()->get('email', 'admin_email');
        $siteConfig = SiteConfig::current_site_config(); 

        $email = new Email();
        $subject = $siteConfig->EmailApprovalSubject;

        $email
            ->setFrom($adminEmailAddress)
            ->setTo($submission->EmailAddress)
            ->setSubject($subject)
            ->setTemplate('UserApprovalNotification')
            ->populateTemplate($submission);

        // if ((SS_ENVIRONMENT_TYPE == "live")) {
        //     $email->send(); 
        // }

        $email->send(); 
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