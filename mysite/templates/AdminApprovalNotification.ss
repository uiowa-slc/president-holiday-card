
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="css/app.css">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Holiday Card Submission</title>
  <!-- <style> -->
</head>
<body>
  <span class="preheader"></span>
  <table class="body">
    <tr>
      <td class="center" align="center" valign="top">
        <center data-parsed="">

            
            <table class="spacer float-center"><tbody><tr><td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td></tr></tbody></table> 
            
            <table align="center" class="container float-center"><tbody><tr><td>
            
              <table class="spacer"><tbody><tr><td height="24px" style="font-size:24px;line-height:24px;">&#xA0;</td></tr></tbody></table> 
              
              <table class="row"><tbody><tr>
                <th class="small-12 large-12 columns first last"><table><tr><th>
            
                <p class="lead">Someone submitted a photo to the <a href="$absoluteBaseURL" target="_blank">2017 Holiday Greeting Card Site:</a></p>
                $SiteConfig.EmailApprovalText
                <p><strong>From: </strong>$From (<a href="mailto:$EmailAddress">$EmailAddress</a>)</p>
                <a href="{$Link}"><img src="$Photo.SetWidth(600).AbsoluteURL"></a>
                <table class="spacer"><tbody><tr><td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td></tr></tbody></table> 
            
                <center data-parsed="">
                  <table class="button float-center"><tr><td><table><tr><td><a href="{$CMSLink}">Approve or deny this photo here</a></td></tr></table></td></tr></table>
                </center>
            
            
                <p><a href="https://www.uiowa.edu" target="_blank">The University of Iowa</a></p>
            
                <table class="spacer"><tbody><tr><td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td></tr></tbody></table> 
            
                </th>
<th class="expander"></th></tr></table></th>
              </tr></tbody></table>
            </td></tr></tbody></table>
            

        </center>
      </td>
    </tr>
  </table>
  <!-- prevent Gmail on iOS font size manipulation -->
  <div style="display:none; white-space:nowrap; font:15px courier; line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>

