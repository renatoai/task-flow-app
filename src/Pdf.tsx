import './pdf.css';
export default function ViewPdf() {
    return (
        


  <div className="tm_container">
    <div className="tm_invoice_wrap">
      <div className="tm_invoice tm_style1 tm_type1" id="tm_download_section">
        <div className="tm_invoice_in">
          <div className="tm_invoice_head tm_top_head tm_mb15 tm_align_center">
            <div className="tm_invoice_left">
              <div className="tm_logo"><img src="/vite.svg" alt="Logo" /></div>
            </div>
            <div className="tm_invoice_right tm_text_right tm_mobile_hide">
              <div className="tm_f50 tm_text_uppercase tm_white_color">Invoice</div>
            </div>
            <div className="tm_shape_bg tm_accent_bg tm_mobile_hide"></div>
          </div>
          <div className="tm_invoice_info tm_mb25">
            <div className="tm_card_note tm_mobile_hide"><b className="tm_primary_color">Payment Method: </b>Paypal, Western Union</div>
            <div className="tm_invoice_info_list tm_white_color">
              <p className="tm_invoice_number tm_m0">Invoice No: <b>#LL93784</b></p>
              <p className="tm_invoice_date tm_m0">Date: <b>01.07.2022</b></p>
            </div>
            <div className="tm_invoice_seperator tm_accent_bg"></div>
          </div>
          <div className="tm_invoice_head tm_mb10">
            <div className="tm_invoice_left">
              <p className="tm_mb2"><b className="tm_primary_color">Invoice To:</b></p>
              <p>
                Lowell H. Dominguez <br />
                84 Spilman Street, London <br />United Kingdom <br/>
                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c6aaa9b1a3aaaa86a1aba7afaae8a5a9ab">[email&#160;protected]</a>
              </p>
            </div>
            <div className="tm_invoice_right tm_text_right">
              <p className="tm_mb2"><b className="tm_primary_color">Pay To:</b></p>
              <p>
                Laralink Ltd <br/>
                86-90 Paul Street, London<br/>
                England EC2A 4NE <br/>
                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="85e1e0e8eac5e2e8e4ece9abe6eae8">[email&#160;protected]</a>
              </p>
            </div>
          </div>
          <div className="tm_table tm_style1">
            <div className="">
              <div className="tm_table_responsive">
                <table>
                  <thead>
                    <tr className="tm_accent_bg">
                      <th className="tm_width_3 tm_semi_bold tm_white_color">Item</th>
                      <th className="tm_width_4 tm_semi_bold tm_white_color">Description</th>
                      <th className="tm_width_2 tm_semi_bold tm_white_color">Price</th>
                      <th className="tm_width_1 tm_semi_bold tm_white_color">Qty</th>
                      <th className="tm_width_2 tm_semi_bold tm_white_color tm_text_right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tm_width_3">1. Website Design</td>
                      <td className="tm_width_4">Six web page designs and three times revision</td>
                      <td className="tm_width_2">$350</td>
                      <td className="tm_width_1">1</td>
                      <td className="tm_width_2 tm_text_right">$350</td>
                    </tr>
                    <tr>
                      <td className="tm_width_3">2. Web Development</td>
                      <td className="tm_width_4">Convert pixel-perfect frontend and make it dynamic</td>
                      <td className="tm_width_2">$600</td>
                      <td className="tm_width_1">1</td>
                      <td className="tm_width_2 tm_text_right">$600</td>
                    </tr>
                    <tr>
                      <td className="tm_width_3">3. App Development</td>
                      <td className="tm_width_4">Android & Ios Application Development</td>
                      <td className="tm_width_2">$200</td>
                      <td className="tm_width_1">2</td>
                      <td className="tm_width_2 tm_text_right">$400</td>
                    </tr>
                    <tr>
                      <td className="tm_width_3">4. Digital Marketing</td>
                      <td className="tm_width_4">Facebook, Youtube and Google Marketing</td>
                      <td className="tm_width_2">$100</td>
                      <td className="tm_width_1">3</td>
                      <td className="tm_width_2 tm_text_right">$300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tm_invoice_footer tm_border_top tm_mb15 tm_m0_md">
              <div className="tm_left_footer">
                <p className="tm_mb2"><b className="tm_primary_color">Payment info:</b></p>
                <p className="tm_m0">Credit Card - 236***********928 <br/>Amount: $1732</p>
              </div>
              <div className="tm_right_footer">
                <table className="tm_mb15">
                  <tbody>
                    <tr className="tm_gray_bg ">
                      <td className="tm_width_3 tm_primary_color tm_bold">Subtoal</td>
                      <td className="tm_width_3 tm_primary_color tm_bold tm_text_right">$1650</td>
                    </tr>
                    <tr className="tm_gray_bg">
                      <td className="tm_width_3 tm_primary_color">Tax <span className="tm_ternary_color">(5%)</span></td>
                      <td className="tm_width_3 tm_primary_color tm_text_right">+$82</td>
                    </tr>
                    <tr className="tm_accent_bg">
                      <td className="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_white_color">Grand Total	</td>
                      <td className="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_white_color tm_text_right">$1732</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tm_invoice_footer tm_type1">
              <div className="tm_left_footer"></div>
              <div className="tm_right_footer">
                <div className="tm_sign tm_text_center">
                  <img src="/vite.svg" alt="Sign" />
                  <p className="tm_m0 tm_ternary_color">Jhon Donate</p>
                  <p className="tm_m0 tm_f16 tm_primary_color">Accounts Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tm_note tm_text_center tm_font_style_normal">
            <hr className="tm_mb15" />
            <p className="tm_mb2"><b className="tm_primary_color">Terms & Conditions:</b></p>
            <p className="tm_m0">All claims relating to quantity or shipping errors shall be waived by Buyer unless made in writing to <br/>Seller within thirty (30) days after delivery of goods to the address stated.</p>
          </div>{/* <!-- .tm_note -->*/}
        </div>
      </div>
      <div className="tm_invoice_btns tm_hide_print">
        <a href="javascript:window.print()" className="tm_invoice_btn tm_color1">
          <span className="tm_btn_icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><circle cx="392" cy="184" r="24" fill='currentColor'/></svg>
          </span>
          <span className="tm_btn_text">Print</span>
        </a>
        <button id="tm_download_btn" className="tm_invoice_btn tm_color2">
          <span className="tm_btn_icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
          </span>
          <span className="tm_btn_text">Download</span>
        </button>
      </div>
    </div>
  </div>
    );
}