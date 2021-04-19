import React from "react";
import {
  Grid,
  IconButton,
  FormControl,
  InputAdornment,
  Input,
  Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PhotoCamera, ArrowForward } from "@material-ui/icons";
import { useState } from "react";
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'


const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

export default function InputArea(props) {

  

  const [post,setPost] = useState('');

  const classes = useStyles();
  

  function onSubmit() {
    props.onSubmit(post);
    setPost('');
  }
  function uploadHandler(url) {
    // console.log('setting upload in inputArea.jsx');
    props.uploadHandler(url);
  }


  

  return (
    <FormControl style={{ width: "95%" }} >
      <Input
        autoFocus="true"
        type="reset"
        id="standard-textarea"
        value={post}
        onChange={(evt) => setPost(evt.target.value)}
        label="Comment"
        placeholder="Add Post"
        multiline
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onSubmit}>
              <ArrowForward />
            </IconButton>
          </InputAdornment>
        }
      />
      <Grid container>
        <Grid item>
        <WidgetLoader />
          <Widget
            sources={['local', 'url', 'camera', 'facebook', 'instagram', 'google_drive', 'image_search']} // set the sources available for uploading -> by default
            // all sources are available. More information on their use can be found at 
            // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
            // add source keys 
            // and ID's as an object. More information on their use can be found at 
            // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
            resourceType={'auto'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
            cloudName={'djayst2jw'} // your cloudinary account cloud name. 
            // Located on https://cloudinary.com/console/
            uploadPreset={'l1xxccjh'} // check that an upload preset exists and check mode is signed or unisgned
            buttonText={
            <Badge badgeContent={ props.upload ? "✓" : "x" } color="secondary">
              <PhotoCamera color="primary"/>
            </Badge>
          } // default 'Upload Files'
            style={{
                  color: '#3f51b5',
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  height: '25px',
                  marginTop: '40%',
                  marginLeft: '0',
                  cursor:'pointer',
                  outline: '0'
                }} // inline styling only or style id='cloudinary_upload_button'
            folder={'my_folder'} // set cloudinary folder name to send file
            cropping={false} // set ability to crop images -> default = true
            onSuccess={(res)=>uploadHandler(res.info.url)
            } // add success callback -> returns result
            onFailure={(res) => console.log(res)} // add failure callback -> returns 'response.error' + 'response.result'
            logging={false} // logs will be provided for success and failure messages, 
            // set to false for production -> default = true
            customPublicId={'sample'} // set a specific custom public_id. 
            // To use the file name as the public_id use 'use_filename={true}' parameter
            eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
            use_filename={false} // tell Cloudinary to use the original name of the uploaded 
            // file as its public ID -> default = true,

            // 👇 FOR SIGNED UPLOADS ONLY 👇
          />
        {/* <CloudinaryContext cloudName="demo">
          <Image publicId="sample">
            <Transformation width="200" crop="scale" angle="10"/>
          </Image>
        </CloudinaryContext> */}
          {/* <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label> */}
        </Grid>
        {/* <Grid item>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload video"
              component="span"
            >
              <Movie />
            </IconButton>
          </label>
        </Grid> */}
      </Grid>
    </FormControl>
  );
}
