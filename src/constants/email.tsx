export const welcomeEmail = (email: string): string => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

  <head></head>
  <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Welcome to Team8s! ✨<div></div>
  </div>

  <body style="margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;background-color:rgb(255,255,255);font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:40px;width:465px;border-radius:0.25rem;border-width:1px;border-style:solid;border-color:rgb(234,234,234);padding:20px">
      <tr style="width:100%">
        <td>
          <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" style="margin-top:32px">
            <tbody>
              <tr>
                <td><img alt="Teameights" src="https://i.ibb.co/qyHj40P/logo.png" width="100" height="100" style="display:block;outline:none;border:none;text-decoration:none;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px" /></td>
              </tr>
            </tbody>
          </table>
          <h1 style="margin-left:0px;margin-right:0px;margin-top:30px;margin-bottom:30px;padding:0px;text-align:center;font-size:24px;font-weight:400;color:rgb(0,0,0)">Welcome to <strong>Teameights</strong> 🎉</h1>
          <p style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Hello <span style="font-size:14px;font-weight:500;color:#46A11B">Teameighter</span>,</p>
          <p style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)"><strong>Congratulations!</strong> We've added you to our mailing list. Get ready for an upcoming launch where you can find your dream team and begin your first pet project! </p>
          <h3 style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0);font-weight: 400;">⚡️ Just as six visionary students with a diverse range of skills initiated the incredible journey of <strong>Team8s</strong>, we invite <span style="font-size:14px;font-weight:600;color:#46A11B">you</span> to embark on a similar path of discovery.</h3>
          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin-left:0px;margin-right:0px;margin-top:26px;margin-bottom:26px;border-width:1px;border-style:solid;border-color:rgb(234,234,234)" />
          <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(102,102,102)">This invitation was intended for <span style="color:rgb(0,0,0)">${email}</span>. If you were not expecting this invitation, you can ignore this email. If you are concerned about your safety, please reply to this email to get in touch with us.</p>
          <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(102,102,102)">Teameights Support Team 🎉 </p>
        </td>
      </tr>
    </table>
  </body>

</html>
`;
