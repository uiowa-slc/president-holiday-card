<?php

class CardForm extends Form {
 
    public function __construct($controller, $name) {
		$recaptchaField = new RecaptchaField('MyCaptcha');
		$recaptchaField->jsOptions = array('theme' => 'clean'); // optional
		
		$cardPage = CardPage::get()->First();
		
		$message_options = array($cardPage->Message1, $cardPage->Message2, $cardPage->Message3);
		
        $fields = new FieldList(
        
            HiddenField::create("ChosenGlobe"),
            TextField::create("RecipientName")->setAttribute('placeholder', 'Recipient\'s Name (optional)'),
            EmailField::create("RecipientEmail")->setAttribute('placeholder', 'Recipient\'s Email Address (optional)'),
            /*TextareaField::create("Message")->setAttribute('placeholder', 'Sincerely, ')->setAttribute('maxlength', '400')*/
            DropdownField::create("Message", "Message", $message_options),
            TextField::create("SenderName")->setAttribute('placeholder', 'Your Name')->setAttribute('maxlength', '25')          
            
            //$recaptchaField
            
        );

        $actions = new FieldList(FormAction::create("doCreateCard")->setTitle("Send and Share your Card")->setAttribute('src', 'themes/holiday2012/images/send_button.png'));
        $requiredFields = new RequiredFields("ChosenGlobe","Message");
        
        parent::__construct($controller, $name, $fields, $actions);
    }
     
    public function forTemplate() {
        return $this->renderWith(array($this->class, 'Form'));
    }
}


?>