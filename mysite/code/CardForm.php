<?php

class CardForm extends BootstrapForm {
 
    public function __construct($controller, $name) {
		//$recaptchaField = new RecaptchaField('MyCaptcha');
		//$recaptchaField->jsOptions = array('theme' => 'clean'); // optional
		
		$cardPage = CardPage::get()->First();
		
		//$message_options = array($cardPage->Message1, $cardPage->Message2, $cardPage->Message3);

        $uploadField = FileField::create("Image","Upload Your Image");
		
        $fields = new FieldList(
        
            TextField::create("SenderName")->setAttribute('placeholder', 'Your Name'),
            $uploadField
            //EmailField::create("RecipientEmail")->setAttribute('placeholder', 'Recipient\'s Email Address (optional)'),
            /*TextareaField::create("Message")->setAttribute('placeholder', 'Sincerely, ')->setAttribute('maxlength', '400')*/
            //DropdownField::create("Message", "Message", $message_options),
                  
            
            //$recaptchaField
            
        );

        $actions = new FieldList(FormAction::create("doCreateCard")->setTitle("Send and Share your Card"));
        $requiredFields = new RequiredFields("ChosenGlobe","Message");
        
        parent::__construct($controller, $name, $fields, $actions);
    }
     
    public function forTemplate() {
        return $this->renderWith(array($this->class, 'Form'));
    }
}


?>