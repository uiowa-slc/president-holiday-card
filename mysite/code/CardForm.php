<?php

class CardForm extends BootstrapForm {
 
    public function __construct($controller, $name) {
		//$recaptchaField = new RecaptchaField('MyCaptcha');
		//$recaptchaField->jsOptions = array('theme' => 'clean'); // optional
		
		$cardPage = CardPage::get()->First();
		
		//$message_options = array($cardPage->Message1, $cardPage->Message2, $cardPage->Message3);

        $uploadField = FileField::create("Image","Upload Your Photo");
		
        $fields = new FieldList(
        
            TextField::create("SenderName", "Enter Your Name")->setAttribute('placeholder', 'Your Name'),
            EmailField::create("SenderEmail", "Enter Your Email Address")->setAttribute('placeholder', 'Your Email Address'),
            $uploadField
            //EmailField::create("RecipientEmail")->setAttribute('placeholder', 'Recipient\'s Email Address (optional)'),
            /*TextareaField::create("Message")->setAttribute('placeholder', 'Sincerely, ')->setAttribute('maxlength', '400')*/
            //DropdownField::create("Message", "Message", $message_options),
                  
            
            //$recaptchaField
            
        );

        $actions = new FieldList(FormAction::create("doCreateCard")->setTitle("Create Your Card!"));
        $requiredFields = new RequiredFields("SenderName","SenderEmail", "Image");
        
        parent::__construct($controller, $name, $fields, $actions, $requiredFields);
    }
     
    public function forTemplate() {
        return $this->renderWith(array($this->class, 'Form'));
    }
}


?>