<?php

class SiteConfigExtension extends DataExtension{

    private static $db = array(
    	'EmailApprovalSubject' => 'Text',
        'EmailApprovalText' => 'HTMLText'
    );

    public function updateCMSFields(FieldList $fields) {
        $fields->addFieldsToTab("Root.EmailApproval", 

        	array(
                new LiteralField("EmailApprovalPreviewLink", ' <a href="submissions/previewEmail/UserApprovalNotification/1" target="_blank">Preview email sent to user &rarr;</a>'),
        		new TextField("EmailApprovalSubject", "Email Approval Subject (sent to user when a submission is approved)"),
        		new HTMLEditorField("EmailApprovalText", "Email Approval Text (sent to user when a submission is approved)"),


        	)
            
        );
    }

}