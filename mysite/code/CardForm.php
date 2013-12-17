<?php

class CardForm extends BootstrapForm {
 
    public function __construct($controller, $name) {
		
		$cardPage = CardPage::get()->First();
        $uploadField = FileField::create("Image","Upload Your Photo");
        $fields = new FieldList(
        
            TextField::create("SenderName", "Enter Your Name")->setAttribute('placeholder', 'Your Name'),
            EmailField::create("SenderEmail", "Enter Your Email Address")->setAttribute('placeholder', 'Your Email Address'),
            $uploadField
            
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