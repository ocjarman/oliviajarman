import React, { useState } from "react";
// import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

const ContactForm = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("submitted!");
    //     if (!Object.values(validity).includes(true)) {
    //       try {
    //         event.preventDefault();
    //         const { data: created } = await axios.post("/api/user", userToCreate);
    //         dispatch(setUser(created));
    //         navigate("/");
    //       } catch (error) {
    //         console.error(error);
    //       }
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", placeSelf: "center" }}
    >
      <form
        action="https://gmail.us9.list-manage.com/subscribe/post?u=60b6c2ee8b150eb6bb23c7e53&amp;id=444898526b&amp;f_id=00780ee1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">
              Email Address <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              required
            />
            <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name </label>
            <input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
            <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME">Last Name </label>
            <input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
            <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
          </div>
          <div class="mc-field-group">
            <label for="mce-MMERGE6">Message </label>
            <input
              type="text"
              value=""
              name="MMERGE6"
              class=""
              id="mce-MMERGE6"
            />
            <span id="mce-MMERGE6-HELPERTEXT" class="helper_text"></span>
          </div>
          <div id="mce-responses" class="clear foot">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px;" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_60b6c2ee8b150eb6bb23c7e53_444898526b"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="optionalParent">
            <div class="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
              <p class="brandingLogo">
                <a
                  href="http://eepurl.com/ih1S9P"
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
