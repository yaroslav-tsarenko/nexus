import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent12 from "../components/FrameComponent12";
import Background6 from "../components/Background6";
import FrameComponent11 from "../components/FrameComponent11";
import { useNavigate } from "react-router-dom";
import Footer1 from "../components/Footer1";
import "./Faqdesktop.css";

const Faqdesktop = () => {
  const navigate = useNavigate();

  const onLinkHeading35Click = useCallback(() => {
    navigate("/helpcenterdesktop");
  }, [navigate]);

  return (
    <div className="faqdesktop">
      <div className="horizontal-divider1" />
      <main className="frame-main">
        <FrameComponent12 />
        <Background6 />
        <section className="background2">
          <div className="frame-div">
            <div className="getting-started-with-nexusconn-parent">
              <div className="getting-started-with">
                Getting started with NexusConnectNet eSIM
              </div>
              <div className="link-heading-3">
                <p className="i-am-about-container">
                  <span>
                    <span className="i-am-about">
                      I am about to travel. How do I manage my NexusConnectNet
                      eSIM profile on my
                    </span>
                    <span className="device">device ?</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="frame-parent2">
                <div className="link-heading-3-parent">
                  <div className="link-heading-31">
                    <p className="how-to-get">
                      How to get and install a NexusConnectNet eSIM profile on
                      iPhone?
                    </p>
                  </div>
                  <div className="link-heading-32">
                    <p className="how-to-get1">
                      How to get and install a NexusConnectNet eSIM profile on
                      an Android device?
                    </p>
                  </div>
                </div>
                <div className="link-heading-33">
                  <p className="how-to-get2">
                    How to get and install a NexusConnectNet eSIM profile on
                    iPad?
                  </p>
                </div>
                <div className="link-heading-3-group">
                  <div className="link-heading-34">
                    <p className="how-to-get-container">
                      <span className="how-to-get-container1">
                        <span className="how-to-get3">
                          How to get and install a new NexusConnectNet eSIM
                          profile on my Windows 10 or
                        </span>
                        <span className="windows-11-laptop">
                          Windows 11 laptop or tablet?
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-35">
                    <p className="how-do-i-container">
                      <span className="how-do-i-container1">
                        <span className="how-do-i">
                          How do I activate my NexusConnectNet services with my
                          Windows 10 or Windows
                        </span>
                        <span className="device-equipped-with">
                          11 device equipped with a NexusConnectNet physical SIM
                          card?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-3-container">
                  <div className="link-heading-36">
                    <p className="how-do-i-container2">
                      <span className="how-do-i-container3">
                        <span className="how-do-i1">
                          How do I activate my NexusConnectNet services with my
                          Windows 10 or Windows
                        </span>
                        <span className="laptop-or-tablet">
                          11 laptop or tablet equipped with a NexusConnectNet
                          eSIM?
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-37">
                    <p className="i-do-not-container">
                      <span className="i-do-not-container1">
                        <span className="i-do-not">
                          I do not get the “eSIM – Mobile Data in my device”
                          button on my iPad
                        </span>
                        <span className="to-install-my">
                          to install my NexusConnectNet profile. Why and what
                          should I do?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-3-parent1">
                  <div className="link-heading-38">
                    <p className="i-do-not-container2">
                      <span>
                        <span className="i-do-not1">
                          I do not get the “eSIM – Mobile Data in my device”
                          button on my
                        </span>
                        <span className="iphone-to-install">
                          iPhone to install my NexusConnectNet profile. Why and
                          what should I do?
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-39">
                    <p className="how-to-reinstall-container">
                      <span className="how-to-reinstall-container1">
                        <span className="how-to-reinstall">
                          How to reinstall the NexusConnectNet eSIM profile I
                          deleted on my Windows 10 or
                        </span>
                        <span className="windows-11-device">
                          Windows 11 device?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-3-parent2">
                  <div className="link-heading-310">
                    <p className="i-have-a-container">
                      <span className="i-have-a-container1">
                        <span className="i-have-a">
                          I have a new Android device. How can I reinstall my
                          NexusConnectNet eSIM profile
                        </span>
                        <span className="on-it">on it?</span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-311">
                    <p className="i-have-a-container2">
                      <span>
                        <span className="i-have-a1">
                          I have a new Windows10 device. How can I reinstall my
                          NexusConnectNet eSIM
                        </span>
                        <span className="profile-on-it">profile on it?</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-3-parent3">
                  <textarea
                    className="link-heading-312"
                    placeholder={`Does my NexusConnectNet eSIM profile have a validity period and will expire one
day?`}
                    rows={4}
                    cols={34}
                  />
                  <div className="link-heading-313">
                    <p className="how-can-i-container">
                      <span>
                        <span className="how-can-i">
                          How can I enable my NexusConnectNet eSIM on my iPhone
                          when I want to use it
                        </span>
                        <span className="again">again?</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-314">
                  <div className="i-lost-my">
                    I lost my device. How can I block my NexusConnectNet eSIM
                    account?
                  </div>
                </div>
                <div className="link-heading-3-parent4">
                  <div className="link-heading-315">
                    <p className="how-can-i-container1">
                      <span className="how-can-i-container2">
                        <span className="how-can-i1">
                          How can I disable my NexusConnectNet eSIM on my iPhone
                          when I travel or when
                        </span>
                        <span className="i-do-not2">I do not use it?</span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-316">
                    <p className="i-have-several-container">
                      <span className="i-have-several-container1">
                        <span className="i-have-several">
                          I have several NexusConnectNet eSIM profiles installed
                          in my device. Is it possible
                        </span>
                        <span className="to-have-a">
                          to have a unique NexusConnectNet account to manage
                          them all?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-317">
                  <p className="how-can-i-container3">
                    <span>
                      <span className="how-can-i2">
                        How can I enable my NexusConnectNet eSIM profile on my
                        iPad when I want to
                      </span>
                      <span className="use-it-again">use it again?</span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-318">
                  <p className="how-can-i-container4">
                    <span>
                      <span className="how-can-i3">
                        How can I disable my NexusConnectNet eSIM profile on my
                        iPad when I travel or
                      </span>
                      <span className="when-i-do">when I do not use it?</span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-3-parent5">
                  <div className="link-heading-319">
                    <p className="how-can-i-container5">
                      <span>
                        <span className="how-can-i4">
                          How can I enable my NexusConnectNet eSIM on my Android
                          device when I want
                        </span>
                        <span className="to-use-it">to use it again?</span>
                      </span>
                    </p>
                  </div>
                  <div className="link-heading-320">
                    <p className="how-can-i-container6">
                      <span>
                        <span className="how-can-i5">
                          How can I disable my NexusConnectNet eSIM on my
                          Android device when I travel
                        </span>
                        <span className="or-when-i">
                          or when I do not use it?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-321">
                  <div className="how-to-delete">
                    How to delete a NexusConnectNet eSIM profile on iPhone/iPad?
                  </div>
                </div>
                <div className="link-heading-322">
                  <p className="how-to-delete1">
                    How to delete a NexusConnectNet eSIM profile on an Android
                    device?
                  </p>
                </div>
                <textarea
                  className="link-heading-323"
                  placeholder={`How to delete a NexusConnectNet eSIM profile on a Windows 10 or Windows 11
device ?`}
                  rows={4}
                  cols={34}
                />
              </div>
              <div className="border-wrapper">
                <div className="border">
                  <img className="image-icon4" alt="" src="/image-12@2x.png" />
                  <div className="heading-2-contact-wrapper">
                    <b className="heading-22">Contact</b>
                  </div>
                  <div className="you-havent-found-the-answers-wrapper">
                    <p className="you-havent-found-container">
                      <span>
                        <span className="you-havent-found-the-answers">
                          <span>You haven’t found the answers</span>
                        </span>
                        <span className="to-your-questions-in-assistanc">
                          <span>to your questions in Assistance or </span>
                          <span className="faq">FAQ</span>
                          <span className="span">?</span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="link-button-wrapper">
                    <button className="link-button">
                      <div className="contact-us">Contact us</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="managing-your-nexusconnectnet-parent">
            <div className="managing-your-nexusconnectnet">
              Managing your NexusConnectNet eSIM account
            </div>
            <div className="frame-parent3">
              <div className="link-heading-3-parent6">
                <div className="link-heading-324">
                  <div className="how-to-reset">
                    How to reset my password for my NexusConnectNet eSIM
                    account?
                  </div>
                </div>
                <div className="link-heading-325">
                  <div className="how-can-i6">
                    How can I create my NexusConnectNet account on iPad?
                  </div>
                </div>
              </div>
              <div className="link-heading-326">
                <div className="how-can-i7">
                  How can I create my NexusConnectNet account on iPhone?
                </div>
              </div>
              <div className="link-heading-327">
                <div className="how-can-i8">
                  How can I create my NexusConnectNet account on an Android
                  device?
                </div>
              </div>
              <textarea
                className="link-heading-328"
                placeholder={`How can I create my NexusConnectNet account on a Windows 10 or Windows 11
device?`}
                rows={4}
                cols={34}
              />
              <div className="link-heading-329">
                <div className="how-can-i9">
                  How can I change my NexusConnectNet password?
                </div>
              </div>
              <div className="link-heading-330">
                <div className="how-can-i10">
                  How can I check the remaining balance of my NexusConnectNet
                  eSIM?
                </div>
              </div>
              <div className="link-heading-331">
                <div className="how-to-delete2">
                  How to delete my NexusConnectNet account?
                </div>
              </div>
            </div>
          </div>
          <div className="buying-nexusconnectnet-esim-da-parent">
            <div className="buying-nexusconnectnet-esim">
              Buying NexusConnectNet eSIM data plans
            </div>
            <div className="link-heading-3-parent7">
              <textarea
                className="link-heading-332"
                placeholder={`How can I buy a data plan from the NexusConnectNet application on iPhone or
iPad?`}
                rows={4}
                cols={34}
              />
              <textarea
                className="link-heading-333"
                placeholder={`How can I buy a data plan from the NexusConnectNet application on an Android
device?`}
                rows={4}
                cols={34}
              />
              <div className="link-heading-334">
                <p className="how-can-i-container7">
                  <span className="how-can-i-container8">
                    <span className="how-can-i11">
                      How can I buy a data plan from the NexusConnectNet
                      application by using a
                    </span>
                    <span className="windows-10-or">
                      Windows 10 or Windows 11 device?
                    </span>
                  </span>
                </p>
              </div>
              <div className="link-heading-335">
                <div className="do-i-need">
                  Do I need Wi-Fi to purchase a NexusConnectNet data plan?
                </div>
              </div>
              <div className="link-heading-3-parent8">
                <div className="link-heading-336">
                  <p className="i-purchased-the-container">
                    <span className="i-purchased-the-container1">
                      <span className="i-purchased-the">
                        I purchased the wrong data plan and did not use it, how
                        can I change
                      </span>
                      <span className="it">it?</span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-337">
                  <p className="i-paid-for-container">
                    <span>
                      <span className="i-paid-for">
                        I paid for a NexusConnectNet data plan but it does not
                        appear in my account,
                      </span>
                      <span className="what-should-i">what should I do?</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="link-heading-338">
                <div className="how-to-get4">
                  How to get an invoice for my NexusConnectNet data plan
                  purchase?
                </div>
              </div>
            </div>
          </div>
          <div className="heading-2-facing-connection-parent">
            <div className="heading-23">Facing connection issues</div>
            <div className="link-heading-3-parent9">
              <div className="link-heading-339">
                <div className="i-restored-my-container">
                  <span className="i-restored-my-container1">
                    <p className="i-restored-my">
                      I restored my data on my (new) iPhone, but my eSIM profile
                      does not
                    </p>
                    <p className="work-what-to">work. What to do?</p>
                  </span>
                </div>
              </div>
              <div className="link-heading-3-parent10">
                <div className="link-heading-340">
                  <p className="resolve-an-issue">
                    Resolve an issue with NexusConnectNet eSIM profile on
                    Android device
                  </p>
                </div>
                <TextField
                  className="link-heading-341"
                  placeholder="Resolve an issue with NexusConnectNet eSIM profile on iPhone"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "56.2px",
                      fontSize: "21px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
              <div className="link-heading-342">
                <div className="imessage-does-not">
                  iMessage does not work with my NexusConnectNet eSIM profile.
                  What to do ?
                </div>
              </div>
              <textarea
                className="frame-child"
                placeholder={`How do I know if my NexusConnectNet eSIM profile is activated on my
iPhone/iPad?`}
                rows={7}
                cols={34}
              />
              <div className="link-heading-343">
                <div className="how-can-i12">
                  How can I check if my NexusConnectNet eSIM profile is
                  installed on my iPhone?
                </div>
              </div>
              <FrameComponent11
                howDoIKnowIfMyNexusConnec="How do I know if my NexusConnectNet eSIM profile is activated and ready to use"
                onMyAndroidDevice="on my Android device?"
                myESIMNexusConnectNetProf="My eSIM NexusConnectNet profile is installed and active on my iPhone/iPad, the"
                networkIsDisplayedButIDon="network is displayed but I don't have access to the Internet, what"
              />
              <div className="link-heading-344">
                <p className="my-nexusconnectnet-esim-container">
                  <span>
                    <span className="my-nexusconnectnet-esim">
                      My NexusConnectNet eSIM profile is installed and active on
                      my iPhone/iPad but I
                    </span>
                    <span className="dont-have-any">
                      don't have any network displayed, what can I do?
                    </span>
                  </span>
                </p>
              </div>
              <div className="link-heading-345">
                <div className="mobile-data-is-container">
                  <span>
                    <p className="mobile-data-is">
                      Mobile data is applied to the NexusConnectNet eSIM profile
                      on my iPhone/iPad
                    </p>
                    <p className="but-i-cant">
                      but I can't access the internet, what can I do?
                    </p>
                  </span>
                </div>
              </div>
              <div className="link-heading-3-parent11">
                <div className="link-heading-346">
                  <p className="how-do-i2">
                    How do I know if my NexusConnectNet profile is installed on
                    my Android device?
                  </p>
                </div>
                <div className="link-heading-347">
                  <p className="my-nexusconnectnet-esim-container1">
                    <span className="my-nexusconnectnet-esim-container2">
                      <span className="my-nexusconnectnet-esim1">
                        My NexusConnectNet eSIM profile is installed and active
                        on my Android device but
                      </span>
                      <span className="i-dont-have">
                        I don’t have any network displayed, what can I do?
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="link-heading-348">
                <p className="my-nexusconnectnet-esim-container3">
                  <span className="my-nexusconnectnet-esim-container4">
                    <span className="my-nexusconnectnet-esim2">
                      My NexusConnectNet eSIM profile is installed and active on
                      my Android device,
                    </span>
                    <span className="the-network-is">
                      the network is displayed but I don’t have access to the
                      Internet, what
                    </span>
                    <span className="should-i-do">should I do?</span>
                  </span>
                </p>
              </div>
              <TextField
                className="link-heading-349"
                placeholder="I can not connect with my NexusConnectNet eSIM"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "56.2px",
                    fontSize: "21px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="link-heading-3-parent12">
                <div className="link-heading-350">
                  <p className="mobile-data-is-container1">
                    <span className="mobile-data-is-container2">
                      <span className="mobile-data-is1">
                        Mobile data is applied to the NexusConnectNet eSIM
                        profile on my Android
                      </span>
                      <span className="device-but-impossible">
                        device, but impossible to access the internet, what can
                        I do?
                      </span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-351">
                  <div className="how-do-i-container4">
                    <span>
                      <p className="how-do-i3">
                        How do I check the APN configuration of my
                        NexusConnectNet eSIM on Windows
                      </p>
                      <p className="or-windows-11">10 or Windows 11?</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="link-heading-3-parent13">
                <div className="link-heading-352">
                  <p className="how-do-i-container5">
                    <span>
                      <span className="how-do-i4">
                        How do I know if my NexusConnectNet eSIM profile is
                        activated on my Windows
                      </span>
                      <span className="or-windows-111">
                        10 or Windows 11 device?
                      </span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-353">
                  <p className="my-nexusconnectnet-esim-container5">
                    <span>
                      <span className="my-nexusconnectnet-esim3">
                        My NexusConnectNet eSIM profile is activated on my
                        Windows 10 or Windows 11
                      </span>
                      <span className="device-but-i">
                        device but I do not have a network, what should I do?
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <textarea
                className="link-heading-354"
                placeholder={`NexusConnectNet connection is not working. Should I disable any active DNS or
VPN on my device?`}
                rows={4}
                cols={34}
              />
            </div>
          </div>
          <div className="asking-other-questions-about-n-parent">
            <div className="asking-other-questions-container">
              <span className="asking-other-questions-container1">
                <p className="asking-other-questions">
                  Asking other questions about NexusConnectNet eSIM
                </p>
                <p className="service">service</p>
              </span>
            </div>
            <div className="link-heading-3-parent14">
              <div className="link-heading-355">
                <p className="can-i-make">
                  Can I make phone calls with NexusConnectNet eSIM data plans?
                </p>
              </div>
              <TextField
                className="link-heading-356"
                placeholder="Which mobile devices support NexusConnectNet eSIM?"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "56.2px",
                    fontSize: "21px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="link-heading-357">
                <div className="how-to-use">
                  How to use NexusConnectNet with a dual SIM device?
                </div>
              </div>
              <div className="link-heading-358">
                <p className="what-is-a">
                  What is a one-off and a recurring NexusConnectNet data plans?
                </p>
              </div>
              <div className="link-heading-3-parent15">
                <div className="link-heading-359">
                  <p className="how-to-use-container">
                    <span className="how-to-use-container1">
                      <span className="how-to-use1">
                        How to use tethering with an iPhone/iPad to share the
                        NexusConnectNet
                      </span>
                      <span className="connectivity">connectivity?</span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-360">
                  <p className="how-to-use-container2">
                    <span className="how-to-use-container3">
                      <span className="how-to-use2">
                        How to use tethering with an Android device to share the
                        NexusConnectNet
                      </span>
                      <span className="connectivity1">connectivity?</span>
                    </span>
                  </p>
                </div>
                <div className="link-heading-361">
                  <p className="how-to-use-container4">
                    <span className="how-to-use3">
                      How to use tethering with a Windows 10 or Windows 11
                      device to
                    </span>
                    <span className="share-the-nexusconnectnet">
                      share the NexusConnectNet connectivity?
                    </span>
                  </p>
                </div>
              </div>
              <div className="link-heading-362">
                <p className="i-did-not">
                  I did not use my NexusConnectNet data plan, can I get a
                  refund?
                </p>
              </div>
              <div className="link-heading-363">
                <p className="my-device-does">
                  My device does not show "NexusConnectNet" as carrier name, is
                  it normal?
                </p>
              </div>
              <div className="link-heading-364" onClick={onLinkHeading35Click}>
                <p className="how-can-i13">
                  How can I find the ICCID of my NexusConnectNet eSIM?
                </p>
              </div>
              <div className="link-heading-3-parent16">
                <div className="link-heading-365">
                  <div className="how-to-set">
                    How to set the APN for NexusConnectNet eSIM?
                  </div>
                </div>
                <div className="link-heading-366">
                  <p className="the-nexusconnectnet-antenna">
                    The NexusConnectNet antenna pictogram is not displayed in
                    Japan, why?
                  </p>
                </div>
              </div>
              <div className="link-heading-367">
                <div className="how-can-i14">
                  How can I find PIN, PIN2 or PUK codes for my NexusConnectNet
                  eSIM?
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Faqdesktop;
