// Use at least Nodemailer v4.1.0
import nodemailer = require("nodemailer");

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ze7fym7yn6th42g2@ethereal.email",
      pass: "8XRyggHfGtC1xfsPJv"
    }
  });

  // Message object
  const message = {
    from: "Sender Name <sender@example.com>",
    to: `Recipient <${recipient}>`,
    subect: "Nodemailer is unicode friendly ✔",
    text: "Hello to myself!",
    html: `<html>
        <body>
        <div
                  width="100%"
                  style={{ background: '#eceff4', padding: '50px 20px', color: '#514d6a' }}
                >
                  <div style={{ maxWidth: '700px', margin: '0px auto', fontSize: '14px' }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: '100%', marginBottom: '20px', border: '0px' }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'top' }}>
                            <img
                              src="resources/images/logo.png"
                              alt="RufrontGen"
                              style={{ height: '40px' }}
                            />
                          </td>
                          <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                            <span style={{ color: '#a09bb9' }}>Some Description</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ padding: '40px 40px 20px 40px', background: '#fff' }}>
                      <table
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ width: '100%', border: '0px' }}
                      >
                        <tbody>
                          <tr>
                            <td>
                              <h5
                                style={{
                                  marginBottom: '20px',
                                  color: '#24222f',
                                  fontWeight: '600',
                                }}
                              >
                                Password Reset
                              </h5>
                              <p>
                                Seems like you forgot your password for RufrontGen. If this is true,
                                click below to reset your password.
                              </p>
                              <div style={{ textAlign: 'center' }}>
                                <a
                                  href="${url}"
                                  style={{
                                    display: 'inline-block',
                                    padding: '11px 30px 6px',
                                    margin: '20px 0px 30px',
                                    fontSize: '15px',
                                    color: '#fff',
                                    background: '#01a8fe',
                                    borderRadius: '5px',
                                  }}
                                >
                                  ${linkText}
                                </a>
                              </div>
                              <p>
                                If you did not forgot your password you can safely ignore his email.
                              </p>
                              <p>
                                Regards,<br />Mediatec Software
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#a09bb9',
                        marginTop: '20px',
                      }}
                    >
                      <p>
                        RufrontGen, Ruben Costa, A Coruna SP 15009
                        <br />
                        Don't like these emails?{' '}
                        <a
                          href="javascript: void(0);"
                          style={{ color: '#a09bb9', textDecoration: 'underline' }}
                        >
                          Unsubscribe
                        </a>
                        <br />
                        Powered by RufrontGen
                      </p>
                    </div>
                  </div>
                </div>
        </body>
        </html>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
