<?php

/**
 * Provides a component to the {@link GridField} which shows the publish status of a page.
 *
 * @package silverstripe
 * @subpackage lumberjack
 *
 * @author Michael Strong <mstrong@silverstripe.org>
**/
class GridFieldSubmissionState implements GridField_ColumnProvider
{

    public function augmentColumns($gridField, &$columns)
    {
        // Ensure Actions always appears as the last column.
        $key = array_search("State", $columns);
        if ($key !== false) {
            unset($columns[$key]);
        }

        $columns = array_merge($columns, array(
            "State"
        ));
    }

    public function getColumnsHandled($gridField)
    {
        return array("State");
    }

    public function getColumnContent($gridField, $record, $columnName)
    {
        Requirements::css(LUMBERJACK_DIR . "/css/lumberjack.css");
        if ($columnName == "State") {
            if ($record->hasMethod("isApproved")) {
                $published = $record->isApproved();
                if (!$published) {
                    return '<i class="btn-icon gridfield-icon btn-icon-pencil"></i> Not approved';
                } else {
                    return '<i class="btn-icon gridfield-icon btn-icon-accept"></i> Approved';
                }
            }
        }
    }

    public function getColumnAttributes($gridField, $record, $columnName)
    {
        if ($columnName == "State") {
            if ($record->hasMethod("isApproved")) {
                $published = $record->isApproved();
                if (!$published) {
                    $class = "gridfield-icon draft";
                } else {
                    $class = "gridfield-icon published";
                }
                return array("class" => $class);
            }
        }
        return array();
    }

    public function getColumnMetaData($gridField, $columnName)
    {
        switch ($columnName) {
            case 'State':
                return array("title" => _t("GridFieldSiteTreeState.StateTitle", "State", "Column title for state"));
        }
    }
}
