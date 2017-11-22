<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);
    /**
     * Return a list of all the pages to cache
     *
     * @return array
     */
    public function allPagesToCache() {
        // Get each page type to define its sub-urls
        $urls = array();

        // memory intensive depending on number of pages
        $pages = Page::get();

        foreach($pages as $page) {
            $urls = array_merge($urls, (array)$page->subPagesToCache());
        }

        // add any custom URLs which are not SiteTree instances
        $urls[] = "sitemap.xml";

        return $urls;
    }

    /**
     * Get a list of URLs to cache related to this page.
     *
     * @return array
     */
    public function subPagesToCache() {
        $urls = array();

        // add current page
        $urls[] = $this->Link();

        // cache the RSS feed if comments are enabled
        if ($this->ProvideComments) {
            $urls[] = Director::absoluteBaseURL() . "CommentingController/rss/SiteTree/" . $this->ID;
        }

        return $urls;
    }

    /**
     * Get a list of URL's to publish when this page changes
     */
    public function pagesAffectedByChanges() {
        $urls = $this->subPagesToCache();
        if($p = $this->Parent) $urls = array_merge((array)$urls, (array)$p->subPagesToCache());
        return $urls;
    }

}
class Page_Controller extends ContentController {

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
    private static $allowed_actions = array(
        'SubmitForm',
        
    );


	public function init() {
		parent::init();
		// You can include any CSS or JS required by your project here.
		// See: http://doc.silverstripe.org/framework/en/reference/requirements
	}

    public function Submissions(){
        return Submission::get()->filter(array('Approved' => 1));
    }

    public function SubmitForm() {
        $fields = new FieldList(
            TextField::create('From', 'Your Name'),
            EmailField::create('EmailAddress', 'Your Email'),
            FileField::create('Photo', 'Attach a photo of your cookie or creation')
        );

        $actions = new FieldList(
            FormAction::create("doSubmit")->setTitle("Submit")
        );

        $required = new RequiredFields('Name', 'Email');

        $form = new Form($this, 'SubmitForm', $fields, $actions, $required);

        // $form->enableSpamProtection()
        //     ->fields()->fieldByName('Captcha')
        //     ->setTitle("Please check the box below");
        return $form;
    }


    public function doSubmit($data, Form $form) {
        $form->sessionMessage('Thank you for submitting your photo. We\'ll email you when it\'s been approved.', 'good');
        $submission = new Submission();
        $form->saveInto($submission);
        $submission->write();
        //write admin email

        $this->sendAdminApprovalNotification($submission);

        //return $this->redirectBack();
    }

    private function sendAdminApprovalNotification($submission){
        $adminEmailAddress = Config::inst()->get('email', 'admin_email');

        $email = new Email();
        $subject = 'Holiday Card Photo Submitted';

        $email
            ->setFrom($adminEmailAddress)
            ->setTo($adminEmailAddress)
            ->setSubject($subject)
            ->setTemplate('AdminApprovalNotification')
            ->populateTemplate($submission);

            // Debug::show($email);
            //print_r($email);
        $email->send(); 

        // if ((SS_ENVIRONMENT_TYPE == "live")) {
        //     $email->send(); 
        // }
    }
}
