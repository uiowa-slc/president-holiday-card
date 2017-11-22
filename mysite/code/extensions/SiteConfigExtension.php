<?php

class SiteConfigExtension extends DataExtension{

    private static $db = array(
        'EmailApprovalText' => 'HTMLText'
    );

    public function updateCMSFields(FieldList $fields) {
        $fields->addFieldToTab("Root.EmailApproval", 
            new HTMLEditorField("EmailApprovalText", "Email Approval Text (when a submission is approved")
        );
    }

}